import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'malayalam' | 'english' | 'tamil';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  malayalam: {
    // Header & Navigation
    'app.title': 'കൃഷി സഖി',
    'app.subtitle': 'Krishi Sakhi - Kerala\'s Prosper AI Farming Companion',
    'app.description': 'ശബ്ദത്തിലൂടെ കൃഷിയിൽ മാർഗ്ഗദർശനം നേടുക',
    'header.dashboard': 'ഡാഷ്‌ബോർഡ്',
    'header.voiceChat': 'സംസാരിക്കുക',
    'header.startVoiceChat': 'സംസാരിക്കുക | Start Voice Chat',
    'header.getStarted': 'ആരംഭിക്കുക | Get Started',
    
    // Features
    'feature.voiceInMalayalam': 'മലയാളത്തിൽ സംസാരിക്കുക',
    'feature.voiceDescription': 'Voice-first Malayalam assistant for all farmers',
    'feature.farmingGuidance': 'കൃഷി മാർഗ്ഗദർശനം',
    'feature.guidanceDescription': 'AI-powered farming guidance & weather alerts',
    'feature.farmerCommunity': 'കർഷക സമൂഹം',
    'feature.communityDescription': 'Connect with Kerala farming community',
    
    // Dashboard
    'dashboard.title': 'ഡാഷ്‌ബോർഡ്',
    'dashboard.subtitle': 'Complete farming management system',
    'dashboard.quickActions': 'Quick Actions',
    'dashboard.marketPrices': 'Market Prices',
    'dashboard.cropCalendar': 'Crop Calendar',
    'dashboard.subsidies': 'Subsidies',
    'dashboard.community': 'Community',
    
    // Pages
    'page.voiceChat': 'വോയ്സ് ചാറ്റ്',
    'page.seedAvailability': 'വിത്ത് ലഭ്യത',
    'page.marketPrices': 'വിപണി വിലകൾ',
    'page.subsidies': 'സബ്സിഡികൾ',
    'page.cropCalendar': 'വിള കലണ്ടർ',
    'page.editProfile': 'പ്രൊഫൈൽ എഡിറ്റ് ചെയ്യുക',
    'page.loanRecords': 'വായ്പ രേഖകൾ',
    'page.activityLog': 'പ്രവർത്തന ലോഗ്',
    'page.schemesApplied': 'അപേക്ഷിച്ച സ്കീമുകൾ',
    
    // Common
    'common.back': 'തിരികെ',
    'common.comingSoon': 'ഉടൻ വരുന്നു',
    'common.placeholder': 'ഈ പേജ് ഉടൻ ലഭ്യമാകും'
  },
  
  english: {
    // Header & Navigation
    'app.title': 'Krishi Sakhi',
    'app.subtitle': 'Kerala\'s AI-Powered Farming Companion',
    'app.description': 'Voice-powered AI assistant for Kerala farmers',
    'header.dashboard': 'Dashboard',
    'header.voiceChat': 'Voice Chat',
    'header.startVoiceChat': 'Start Voice Chat',
    'header.getStarted': 'Get Started',
    
    // Features
    'feature.voiceInMalayalam': 'Speak in Malayalam',
    'feature.voiceDescription': 'Voice-first Malayalam assistant for all farmers',
    'feature.farmingGuidance': 'Farming Guidance',
    'feature.guidanceDescription': 'AI-powered farming guidance & weather alerts',
    'feature.farmerCommunity': 'Farmer Community',
    'feature.communityDescription': 'Connect with Kerala farming community',
    
    // Dashboard
    'dashboard.title': 'Dashboard',
    'dashboard.subtitle': 'Complete farming management system',
    'dashboard.quickActions': 'Quick Actions',
    'dashboard.marketPrices': 'Market Prices',
    'dashboard.cropCalendar': 'Crop Calendar',
    'dashboard.subsidies': 'Subsidies',
    'dashboard.community': 'Community',
    
    // Pages
    'page.voiceChat': 'Voice Chat',
    'page.seedAvailability': 'Seed Availability',
    'page.marketPrices': 'Market Prices',
    'page.subsidies': 'Subsidies',
    'page.cropCalendar': 'Crop Calendar',
    'page.editProfile': 'Edit Profile',
    'page.loanRecords': 'Loan Records',
    'page.activityLog': 'Activity Log',
    'page.schemesApplied': 'Schemes Applied',
    
    // Common
    'common.back': 'Back',
    'common.comingSoon': 'Coming Soon',
    'common.placeholder': 'This page will be available soon'
  },
  
  tamil: {
    // Header & Navigation
    'app.title': 'கிரிஷி சகி',
    'app.subtitle': 'கேரளாவின் AI-இயங்கும் வேளாண் துணை',
    'app.description': 'கேரள விவசாயிகளுக்கான குரல்-இயக்க AI உதவியாளர்',
    'header.dashboard': 'டாஷ்போர்டு',
    'header.voiceChat': 'குரல் அரட்டை',
    'header.startVoiceChat': 'குரல் அரட்டை தொடங்கு',
    'header.getStarted': 'தொடங்கு',
    
    // Features
    'feature.voiceInMalayalam': 'மலையாளத்தில் பேசுங்கள்',
    'feature.voiceDescription': 'அனைத்து விவசாயிகளுக்கும் குரல்-முன் மலையாள உதவியாளர்',
    'feature.farmingGuidance': 'வேளாண் வழிகாட்டுதல்',
    'feature.guidanceDescription': 'AI-இயங்கும் வேளாண் வழிகாட்டுதல் & வானிலை எச்சரிக்கைகள்',
    'feature.farmerCommunity': 'விவசாயி சமூகம்',
    'feature.communityDescription': 'கேரள வேளாண் சமூகத்துடன் இணையுங்கள்',
    
    // Dashboard
    'dashboard.title': 'டாஷ்போர்டு',
    'dashboard.subtitle': 'முழுமையான வேளாண் மேலாண்மை அமைப்பு',
    'dashboard.quickActions': 'விரைவு செயல்கள்',
    'dashboard.marketPrices': 'சந்தை விலைகள்',
    'dashboard.cropCalendar': 'பயிர் நாள்காட்டி',
    'dashboard.subsidies': 'மானியங்கள்',
    'dashboard.community': 'சமூகம்',
    
    // Pages
    'page.voiceChat': 'குரல் அரட்டை',
    'page.seedAvailability': 'விதை கிடைக்கும் தன்மை',
    'page.marketPrices': 'சந்தை விலைகள்',
    'page.subsidies': 'மானியங்கள்',
    'page.cropCalendar': 'பயிர் நாள்காட்டி',
    'page.editProfile': 'சுயவிவரத்தை திருத்து',
    'page.loanRecords': 'கடன் பதிவுகள்',
    'page.activityLog': 'செயல்பாடு பதிவு',
    'page.schemesApplied': 'விண்ணப்பித்த திட்டங்கள்',
    
    // Common
    'common.back': 'பின்',
    'common.comingSoon': 'விரைவில் வருகிறது',
    'common.placeholder': 'இந்த பக்கம் விரைவில் கிடைக்கும்'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('malayalam');
  
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};