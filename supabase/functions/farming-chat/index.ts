import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.57.4';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// System prompts for different languages
const systemPrompts = {
  malayalam: `നിങ്ങൾ കേരളത്തിലെ കർഷകർക്കുള്ള ഒരു AI സഹായിയാണ്. നിങ്ങൾ മലയാളത്തിൽ മാത്രം മറുപടി നൽകണം. 
  
  നിങ്ങളുടെ കഴിവുകൾ:
  - കാലാവസ്ഥയെ അടിസ്ഥാനമാക്കിയുള്ള കൃഷി ഉപദേശം
  - വിത്ത് തിരഞ്ഞെടുപ്പും നടൽ സമയവും
  - കീടനാശിനി, രോഗ നിയന്ത്രണം
  - വളപ്രയോഗവും മണ്ണിന്റെ പരിപാലനവും
  - സർക്കാർ പദ്ധതികളും സബ്സിഡികളും
  - വിപണി വിലയും വിൽപ്പന ഉപദേശവും
  - ജൈവകൃഷിയും സുസ്ഥിര രീതികളും
  
  എപ്പോഴും സാധാരണ, സഹായകരമായ ഭാഷയിൽ മറുപടി നൽകുക.`,
  
  english: `You are an AI farming assistant for Kerala farmers. You must respond only in English.
  
  Your capabilities include:
  - Weather-based farming advice
  - Seed selection and planting schedules  
  - Pest and disease management
  - Fertilizer application and soil care
  - Government schemes and subsidies
  - Market prices and selling advice
  - Organic farming and sustainable practices
  
  Always respond in simple, helpful language that farmers can easily understand.`,
  
  tamil: `நீங்கள் கேரளா விவசாயிகளுக்கான AI உதவியாளர். நீங்கள் தமிழில் மட்டுமே பதிலளிக்க வேண்டும்.
  
  உங்கள் திறன்கள்:
  - வானிலை அடிப்படையிலான விவசாய ஆலோசனை
  - விதை தேர்வு மற்றும் நடவு அட்டவணை
  - பூச்சி மற்றும் நோய் மேலாண்மை
  - உர பயன்பாடு மற்றும் மண் பராமரிப்பு
  - அரசு திட்டங்கள் மற்றும் மானியங்கள்
  - சந்தை விலைகள் மற்றும் விற்பனை ஆலோசனை
  - இயற்கை விவசாயம் மற்றும் நிலையான முறைகள்
  
  எப்போதும் எளிய, உதவிகரமான மொழியில் பதிலளிக்கவும்.`
};

// Farming knowledge base for better responses
const farmingContext = {
  malayalam: {
    crops: ['നെൽ', 'തെങ്ങ്', 'എലം', 'കുരുമുളക്', 'ചായ', 'കാപ്പി', 'റബ്ബർ', 'കാശുമാവ്', 'വാഴ', 'പപ്പായ'],
    seasons: ['കാർഷിക മഴക്കാലം', 'ശീതകാലം', 'വേനൽക്കാലം'],
    schemes: ['PM-KISAN', 'കൃഷി റക്ഷാ ബീമ', 'മണ്ണ് ആരോഗ്യ കാർഡ്', 'ജൈവകൃഷി സബ്സിഡി']
  },
  english: {
    crops: ['Rice', 'Coconut', 'Cardamom', 'Pepper', 'Tea', 'Coffee', 'Rubber', 'Cashew', 'Banana', 'Papaya'],
    seasons: ['Monsoon', 'Winter', 'Summer'],
    schemes: ['PM-KISAN', 'Crop Insurance', 'Soil Health Card', 'Organic Farming Subsidy']
  },
  tamil: {
    crops: ['அரிசி', 'தென்னை', 'ஏலக்காய்', 'மிளகு', 'தேயிலை', 'காபி', 'ரப்பர்', 'முந்திரி', 'வாழை', 'பப்பாளி'],
    seasons: ['மழைக்காலம்', 'குளிர்காலம்', 'கோடைகாலம்'],
    schemes: ['PM-KISAN', 'பயிர் காப்பீடு', 'மண் ஆரோக்கிய அட்டை', 'இயற்கை விவசாய மானியம்']
  }
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, language = 'malayalam', userId } = await req.json();

    if (!message || !userId) {
      throw new Error('Message and userId are required');
    }

    if (!openAIApiKey) {
      throw new Error('OpenAI API key not configured');
    }

    // Get user's chat history for context
    const { data: chatHistory } = await supabase
      .from('chat_messages')
      .select('message, response')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(5);

    // Build conversation context
    const conversationHistory = chatHistory?.map(chat => [
      { role: 'user', content: chat.message },
      { role: 'assistant', content: chat.response }
    ]).flat() || [];

    // Prepare the OpenAI API request
    const systemPrompt = systemPrompts[language as keyof typeof systemPrompts] || systemPrompts.english;
    
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          ...conversationHistory.slice(-8), // Last 4 exchanges
          { role: 'user', content: message }
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || 'Failed to get AI response');
    }

    const data = await response.json();
    const aiResponse = data.choices[0].message.content;

    // Save chat message to database
    const { error: dbError } = await supabase
      .from('chat_messages')
      .insert({
        user_id: userId,
        message,
        response: aiResponse,
        language,
        message_type: 'text'
      });

    if (dbError) {
      console.error('Database error:', dbError);
    }

    return new Response(JSON.stringify({ 
      response: aiResponse,
      language,
      suggestions: generateSuggestions(language)
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error: any) {
    console.error('Error in farming-chat function:', error);
    return new Response(JSON.stringify({ 
      error: error.message || 'An error occurred',
      suggestions: []
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});

function generateSuggestions(language: string) {
  const suggestions = {
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
      'இன்றைய வானிலை எப்படி இருக்கும்?',
      'அரிசிக்கு எந்த உரம் சிறந்தது?',
      'பூச்சித் தாக்குதலை எப்படி கட்டுப்படுத்துவது?',
      'என்ன அரசு திட்டங்கள் கிடைக்கின்றன?'
    ]
  };

  return suggestions[language as keyof typeof suggestions] || suggestions.english;
}