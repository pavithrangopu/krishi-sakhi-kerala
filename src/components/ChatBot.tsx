import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { supabase } from "@/integrations/supabase/client";
import { Send, Mic, MicOff, Bot, User, Volume2, Lightbulb, RefreshCw } from "lucide-react";

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
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { language, t } = useLanguage();
  const { toast } = useToast();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    // Load chat history and initialize suggestions
    loadChatHistory();
    initializeSuggestions();
    
    // Set up real-time subscription for new messages
    const setupRealtime = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      
      const channel = supabase
        .channel('chat-messages')
        .on(
          'postgres_changes',
          {
            event: 'INSERT',
            schema: 'public',
            table: 'chat_messages'
          },
          (payload) => {
            // Only add if it's from the current user
            if (user && payload.new.user_id === user.id) {
              const newMessage: Message = {
                id: `${payload.new.id}-bot`,
                content: payload.new.response,
                isBot: true,
                timestamp: new Date(payload.new.created_at),
                language: payload.new.language
              };
              
              // Check if message already exists to avoid duplicates
              setMessages(prev => {
                const exists = prev.some(msg => msg.id === newMessage.id);
                if (!exists) {
                  return [...prev, newMessage];
                }
                return prev;
              });
            }
          }
        )
        .subscribe();

      return () => {
        supabase.removeChannel(channel);
      };
    };

    const cleanup = setupRealtime();
    
    return () => {
      cleanup.then(fn => fn && fn());
    };
  }, [language]);

  const initializeSuggestions = () => {
    const defaultSuggestions = {
      malayalam: [
        'ഇന്നത്തെ കാലാവസ്ഥ എങ്ങനെയാണ്?',
        'നെല്ലിന് എന്ത് വളം നൽകണം?',
        'കീടങ്ങളെ എങ്ങനെ നിയന്ത്രിക്കാം?',
        'സർക്കാർ പദ്ധതികൾ എന്തൊക്കെ?'
      ],
      english: [
        'What is today\'s weather forecast?',
        'Which fertilizer is best for rice?',
        'How to control pest attacks?',
        'What government schemes are available?'
      ],
      tamil: [
        'இன்றைய வானிலை எப்படி இருക்கும்?',
        'அரிசிக்கு எந்த உரம் சிறந்தது?',
        'பூச்சித் தாக்குதலை எப்படி கட்டுப்படுத்துவது?',
        'என்ன அரசு திட்டங்கள் கிடைக்கின்றன?'
      ]
    };
    
    setSuggestions(defaultSuggestions[language as keyof typeof defaultSuggestions] || defaultSuggestions.english);
    setIsInitialized(true);
  };

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
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('User not authenticated');

      const response = await supabase.functions.invoke('farming-chat', {
        body: {
          message,
          language: lang,
          userId: user.id
        }
      });

      if (response.error) {
        throw new Error(response.error.message || 'Failed to get AI response');
      }

      return response.data.response || 'Sorry, I could not process your request.';
    } catch (error) {
      console.error('Error getting AI response:', error);
      // Fallback to basic responses
      const fallbackResponses = {
        malayalam: "ക്ഷമിക്കണം, ഇപ്പോൾ എനിക്ക് മറുപടി നൽകാൻ കഴിയുന്നില്ല. പിന്നീട് വീണ്ടും ശ്രമിക്കുക.",
        english: "Sorry, I'm unable to respond right now. Please try again later.",
        tamil: "மன்னிக்கவும், என்னால் இப்போது பதிலளிக்க முடியவில്லை. பின்னர் மீண்டும் முயற்சிக்கவும்."
      };
      return fallbackResponses[lang as keyof typeof fallbackResponses] || fallbackResponses.english;
    }
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
        {messages.length === 0 && isInitialized && (
              <div className="text-center text-muted-foreground py-6">
                <Bot className="h-12 w-12 mx-auto mb-4 text-emerald-500" />
                <p className="mb-4">{t('chatWelcome')}</p>
                
                {/* Quick suggestion chips */}
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Lightbulb className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm font-medium text-emerald-700">
                      {language === 'malayalam' ? 'നിർദ്ദേശങ്ങൾ' : 
                       language === 'tamil' ? 'பரிந்துரைகள்' : 
                       'Quick Suggestions'}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center max-w-md mx-auto">
                    {suggestions.slice(0, 4).map((suggestion, index) => (
                      <Badge 
                        key={index}
                        variant="secondary" 
                        className="cursor-pointer hover:bg-emerald-100 text-xs px-3 py-1"
                        onClick={() => sendMessage(suggestion)}
                      >
                        {suggestion}
                      </Badge>
                    ))}
                  </div>
                </div>
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
        
        <div className="p-4 border-t space-y-3">
          {/* Smart suggestions when there are messages */}
          {messages.length > 0 && suggestions.length > 0 && (
            <div className="flex gap-2 overflow-x-auto pb-2">
              <Button
                size="sm"
                variant="ghost"
                onClick={initializeSuggestions}
                className="text-emerald-600 hover:text-emerald-700 whitespace-nowrap"
              >
                <RefreshCw className="h-3 w-3 mr-1" />
                {language === 'malayalam' ? 'പുതിയ നിർദ്ദേശങ്ങൾ' : 
                 language === 'tamil' ? 'புதிய பரிந்துரைகள்' : 
                 'New suggestions'}
              </Button>
              {suggestions.slice(0, 2).map((suggestion, index) => (
                <Badge 
                  key={index}
                  variant="outline" 
                  className="cursor-pointer hover:bg-emerald-50 text-xs whitespace-nowrap"
                  onClick={() => sendMessage(suggestion)}
                >
                  {suggestion.length > 30 ? suggestion.substring(0, 30) + '...' : suggestion}
                </Badge>
              ))}
            </div>
          )}
          
          <div className="flex gap-2">
            <Input
              placeholder={t('typeMessage')}
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && sendMessage(inputMessage)}
              disabled={isLoading}
              className="flex-1"
            />
            <Button
              size="icon"
              onClick={isRecording ? stopRecording : startRecording}
              variant={isRecording ? "destructive" : "outline"}
              disabled={isLoading}
              title={isRecording ? 'Stop recording' : 'Start voice message'}
            >
              {isRecording ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
            </Button>
            <Button
              size="icon"
              onClick={() => sendMessage(inputMessage)}
              disabled={isLoading || !inputMessage.trim()}
              className="bg-emerald-600 hover:bg-emerald-700"
              title="Send message"
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