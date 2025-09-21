import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useToast } from "@/components/ui/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { supabase } from "@/integrations/supabase/client";
import { Send, Mic, MicOff, Bot, User, Volume2 } from "lucide-react";

interface Message {
  id: string;
  content: string;
  isBot: boolean;
  timestamp: Date;
  language: string;
}

interface ChatBotProps {
  className?: string;
}

const ChatBot: React.FC<ChatBotProps> = ({ className }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { language, t } = useLanguage();
  const { toast } = useToast();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    // Load chat history
    loadChatHistory();
  }, []);

  const loadChatHistory = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase
        .from('chat_messages')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: true })
        .limit(50);

      if (error) throw error;

      const chatMessages: Message[] = [];
      data?.forEach((msg) => {
        chatMessages.push({
          id: `${msg.id}-user`,
          content: msg.message,
          isBot: false,
          timestamp: new Date(msg.created_at),
          language: msg.language
        });
        if (msg.response) {
          chatMessages.push({
            id: `${msg.id}-bot`,
            content: msg.response,
            isBot: true,
            timestamp: new Date(msg.created_at),
            language: msg.language
          });
        }
      });

      setMessages(chatMessages);
    } catch (error) {
      console.error('Error loading chat history:', error);
    }
  };

  const sendMessage = async (content: string, messageType: 'text' | 'voice' = 'text') => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      isBot: false,
      timestamp: new Date(),
      language
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('User not authenticated');

      // Get AI response (mock for now - you can integrate with OpenAI later)
      const botResponse = await generateBotResponse(content, language);

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: botResponse,
        isBot: true,
        timestamp: new Date(),
        language
      };

      setMessages(prev => [...prev, botMessage]);

      // Save to database
      await supabase.from('chat_messages').insert({
        user_id: user.id,
        message: content,
        response: botResponse,
        language,
        message_type: messageType
      });

      // Text-to-speech for bot response
      if (messageType === 'voice') {
        await speakText(botResponse, language);
      }

    } catch (error: any) {
      toast({
        title: t('error'),
        description: error.message,
        variant: "destructive",
      });
    }
    setIsLoading(false);
  };

  const generateBotResponse = async (message: string, lang: string): Promise<string> => {
    // Mock AI responses based on farming context and language
    const responses = {
      malayalam: [
        "നിങ്ങളുടെ കൃഷിയെക്കുറിച്ച് കൂടുതൽ പറയാമോ? ഞാൻ സഹായിക്കാം.",
        "കൃഷിയിൽ പുതിയ സാങ്കേതികവിദ്യകൾ ഉപയോഗിക്കുന്നത് വളരെ നല്ലതാണ്.",
        "കാലാവസ്ഥയെ അടിസ്ഥാനമാക്കി വിത്ത് നടൽ ആസൂത്രണം ചെയ്യുന്നത് നല്ലതാണ്.",
        "മണ്ണിന്റെ ഗുണനിലവാരം പരിശോധിക്കേണ്ടത് വളരെ പ്രധാനമാണ്."
      ],
      english: [
        "I'm here to help with your farming needs. What would you like to know?",
        "Modern farming techniques can significantly improve your crop yield.",
        "Weather-based planning is crucial for successful farming seasons.",
        "Soil quality testing is essential for optimal crop growth."
      ],
      tamil: [
        "உங்கள் விவசாயத்தைப் பற்றி மேலும் சொல்லுங்கள். நான் உதவுகிறேன்.",
        "நவீன விவசாய நுட்பங்களைப் பயன்படுத்துவது நல்லது.",
        "வானிலையை அடிப்படையாகக் கொண்ட திட்டமிடல் முக்கியம்.",
        "மண்ணின் தரத்தை சரிபார்ப்பது அவசியம்."
      ]
    };

    const langResponses = responses[lang as keyof typeof responses] || responses.english;
    return langResponses[Math.floor(Math.random() * langResponses.length)];
  };

  const speakText = async (text: string, lang: string) => {
    if ('speechSynthesis' in window) {
      setIsSpeaking(true);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang === 'malayalam' ? 'ml-IN' : lang === 'tamil' ? 'ta-IN' : 'en-US';
      utterance.onend = () => setIsSpeaking(false);
      speechSynthesis.speak(utterance);
    }
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorderRef.current.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        await processVoiceInput(audioBlob);
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (error) {
      toast({
        title: t('error'),
        description: 'Could not access microphone',
        variant: "destructive",
      });
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const processVoiceInput = async (audioBlob: Blob) => {
    try {
      // Convert audio to base64
      const reader = new FileReader();
      reader.readAsDataURL(audioBlob);
      reader.onloadend = async () => {
        const base64Audio = (reader.result as string).split(',')[1];
        
        // For now, use a mock transcription
        const transcription = `[${t('voiceMessage')}] ${t('sampleVoiceText')}`;
        await sendMessage(transcription, 'voice');
      };
    } catch (error) {
      toast({
        title: t('error'),
        description: 'Voice processing failed',
        variant: "destructive",
      });
    }
  };

  return (
    <Card className={`h-full flex flex-col ${className}`}>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-emerald-700">
          <Bot className="h-5 w-5" />
          {t('farmingAssistant')}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col p-0">
        <ScrollArea className="flex-1 px-4">
          <div className="space-y-4 pb-4">
            {messages.length === 0 && (
              <div className="text-center text-muted-foreground py-8">
                <Bot className="h-12 w-12 mx-auto mb-4 text-emerald-500" />
                <p>{t('chatWelcome')}</p>
              </div>
            )}
            {messages.map((message, index) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                {message.isBot && (
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-emerald-100">
                      <Bot className="h-4 w-4 text-emerald-600" />
                    </AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.isBot
                      ? 'bg-muted text-foreground'
                      : 'bg-emerald-600 text-white'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs opacity-70">
                      {message.timestamp.toLocaleTimeString()}
                    </span>
                    {message.isBot && (
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-6 w-6 p-0"
                        onClick={() => speakText(message.content, message.language)}
                      >
                        <Volume2 className="h-3 w-3" />
                      </Button>
                    )}
                  </div>
                </div>
                {!message.isBot && (
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-emerald-100">
                      <User className="h-4 w-4 text-emerald-600" />
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3 justify-start">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-emerald-100">
                    <Bot className="h-4 w-4 text-emerald-600" />
                  </AvatarFallback>
                </Avatar>
                <div className="bg-muted rounded-lg p-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>
        
        <div className="p-4 border-t">
          <div className="flex gap-2">
            <Input
              placeholder={t('typeMessage')}
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage(inputMessage)}
              disabled={isLoading}
              className="flex-1"
            />
            <Button
              size="icon"
              onClick={isRecording ? stopRecording : startRecording}
              variant={isRecording ? "destructive" : "outline"}
              disabled={isLoading}
            >
              {isRecording ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
            </Button>
            <Button
              size="icon"
              onClick={() => sendMessage(inputMessage)}
              disabled={isLoading || !inputMessage.trim()}
              className="bg-emerald-600 hover:bg-emerald-700"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatBot;