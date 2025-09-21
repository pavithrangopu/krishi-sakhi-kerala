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
    'app.subtitle': 'കേരളത്തിന്റെ AI കൃഷി സഹായി',
    'app.description': 'ശബ്ദത്തിലൂടെ കൃഷിയിൽ മാർഗ്ഗദർശനം നേടുക',
    'header.dashboard': 'ഡാഷ്‌ബോർഡ്',
    'header.voiceChat': 'സംസാരിക്കുക',
    'header.startVoiceChat': 'സംസാരിക്കുക',
    'header.getStarted': 'ആരംഭിക്കുക',
    
    // Features
    'feature.voiceInMalayalam': 'മലയാളത്തിൽ സംസാരിക്കുക',
    'feature.voiceDescription': 'എല്ലാ കർഷകർക്കുമുള്ള മലയാളം സഹായി',
    'feature.farmingGuidance': 'കൃഷി മാർഗ്ഗദർശനം',
    'feature.guidanceDescription': 'AI സാങ്കേതികവിദ്യയുടെ കൃഷി വഴികാട്ടൽ',
    'feature.farmerCommunity': 'കർഷക സമൂഹം',
    'feature.communityDescription': 'കേരള കർഷക സമൂഹവുമായി ബന്ധപ്പെടുക',
    
    // Dashboard
    'dashboard.title': 'കർഷക ഡാഷ്‌ബോർഡ്',
    'dashboard.subtitle': 'സമ്പൂർണ കൃഷി മാനേജ്മെന്റ് സിസ്റ്റം',
    'dashboard.weather': 'കാലാവസ്ഥ',
    'dashboard.alerts': 'മുന്നറിയിപ്പുകൾ',
    'dashboard.aiGuidance': 'AI മാർഗ്ഗദർശനം',
    'dashboard.voiceAssistant': 'വോയ്സ് അസിസ്റ്റന്റ്',
    'dashboard.temperature': 'താപനില',
    'dashboard.humidity': 'ഈർപ്പം',
    'dashboard.goodForIrrigation': 'ജലസേചനത്തിന് അനുകൂലം',
    
    // Profile Section
    'profile.title': 'കർഷക പ്രൊഫൈൽ',
    'profile.subtitle': 'വ്യക്തിഗത കൃഷി മാർഗ്ഗദർശനത്തിനുള്ള സ്മാർട്ട് പ്രൊഫൈലിംഗ്',
    'profile.personalInfo': 'വ്യക്തിഗത വിവരങ്ങൾ',
    'profile.landCrops': 'ഭൂമി & വിള വിശദാംശങ്ങൾ',
    'profile.digitalRecords': 'ഡിജിറ്റൽ രേഖകൾ',
    'profile.editProfile': 'എഡിറ്റ് ചെയ്യുക',
    'profile.acres': 'ഏക്കർ',
    'profile.crops': 'വിളകൾ',
    'profile.rice': 'നെൽ',
    'profile.coconut': 'തേങ്ങ',
    'profile.spices': 'സുഗന്ധവ്യഞ്ജനങ്ങൾ',
    'profile.irrigation': 'ജലസേചനം',
    'profile.certification': 'സർട്ടിഫിക്കേഷൻ',
    
    // Activity Log
    'activity.title': 'പ്രവർത്തന രേഖ',
    'activity.subtitle': 'നിങ്ങളുടെ എല്ലാ കൃഷി പ്രവർത്തനങ്ങളും നിരീക്ഷിക്കുക',
    'activity.weatherAlerts': 'കാലാവസ്ഥാ മുന്നറിയിപ്പുകൾ',
    'activity.rainExpected': 'മഴ പ്രതീക്ഷിക്കുന്നു',
    'activity.noWateringNeeded': 'ജലസേചനം ആവശ്യമില്ല',
    'activity.temperatureAlert': 'താപനില മുന്നറിയിപ്പ്',
    'activity.highTemp': 'ഉയർന്ന താപനില - വിളകൾ നിരീക്ഷിക്കുക',
    'activity.soilMoisture': 'മണ്ണിലെ ഈർപ്പം',
    'activity.optimal': 'അനുകൂലം',
    'activity.thisMonth': 'ഈ മാസം',
    'activity.activitiesLogged': 'പ്രവർത്തനങ്ങൾ രേഖപ്പെടുത്തി',
    'activity.lastActivity': 'അവസാന പ്രവർത്തനം',
    'activity.cropsMonitored': 'നിരീക്ഷിച്ച വിളകൾ',
    'activity.completionRate': 'പൂർത്തീകരണ നിരക്ക്',
    'activity.recentActivities': 'സമീപകാല പ്രവർത്തനങ്ങൾ',
    'activity.upcomingActivities': 'വരാനിരിക്കുന്ന പ്രവർത്തനങ്ങൾ',
    'activity.irrigation': 'ജലസേചനം',
    'activity.pestControl': 'കീടനാശിനി',
    'activity.fertilizer': 'വളം പ്രയോഗിക്കൽ',
    'activity.sowing': 'വിത്ത് വിതയ്ക്കൽ',
    'activity.monitoring': 'വിള നിരീക്ഷണം',
    
    // Edit Profile
    'editProfile.title': 'പ്രൊഫൈൽ എഡിറ്റ് ചെയ്യുക',
    'editProfile.subtitle': 'നിങ്ങളുടെ വ്യക്തിഗത കൃഷി വിവരങ്ങൾ അപ്ഡേറ്റ് ചെയ്യുക',
    'editProfile.personalInfo': 'വ്യക്തിഗത വിവരങ്ങൾ',
    'editProfile.malayalamName': 'മലയാളം പേര്',
    'editProfile.englishName': 'ഇംഗ്ലീഷ് പേര്',
    'editProfile.phoneNumber': 'ഫോൺ നമ്പർ',
    'editProfile.email': 'ഇമെയിൽ',
    'editProfile.address': 'വിലാസം',
    'editProfile.experience': 'അനുഭവം (വർഷങ്ങൾ)',
    'editProfile.farmerId': 'കർഷക ഐഡി',
    'editProfile.landCropDetails': 'ഭൂമി & വിള വിശദാംശങ്ങൾ',
    'editProfile.totalLand': 'മൊത്തം ഭൂമി (ഏക്കർ)',
    'editProfile.irrigatedLand': 'ജലസേചിത ഭൂമി (ഏക്കർ)',
    'editProfile.soilType': 'മണ്ണിന്റെ തരം',
    'editProfile.mainCrops': 'പ്രധാന വിളകൾ',
    'editProfile.cropName': 'വിളയുടെ പേര്',
    'editProfile.area': 'വിസ്തീർണ്ണം (ഏക്കർ)',
    'editProfile.season': 'സീസൺ',
    'editProfile.addCrop': 'മറ്റൊരു വിള ചേർക്കുക',
    'editProfile.cancel': 'റദ്ദാക്കുക',
    'editProfile.saveChanges': 'മാറ്റങ്ങൾ സേവ് ചെയ്യുക',
    
    // AI Suggestions
    'ai.cropSuggestions': 'വിള നിർദ്ദേശങ്ങൾ',
    'ai.schemeBasedSuggestion': 'സ്കീം അടിസ്ഥാനത്തിൽ നിർദ്ദേശിക്കുന്നു',
    'ai.groundnutSubsidy': 'കപ്പലണ്ടി കൃഷി ചെയ്യുക - 40% സബ്സിഡി ലഭിക്കും',
    'ai.soilQuality': 'മണ്ണിന്റെ ഗുണമേന്മയുടെ വിശകലനം',
    'ai.soilHealth': 'മണ്ണിന്റെ ആരോഗ്യം',
    'ai.excellent': 'മികച്ചത്',
    'ai.good': 'നല്ലത്',
    'ai.needsImprovement': 'മെച്ചപ്പെടുത്തേണ്ടതുണ്ട്',
    
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
    
    // Voice Chat
    'voice.title': 'AI വോയ്സ് അസിസ്റ്റന്റ്',
    'voice.tapToSpeak': 'സംസാരിക്കാൻ ടച്ച് ചെയ്ത് പിടിക്കുക',
    'voice.touchAndHold': 'Touch and hold to speak',
    'voice.sampleQuestions': 'സാമ്പിൾ ചോദ്യങ്ങൾ',
    
    // Common
    'common.back': 'തിരികെ',
    'common.comingSoon': 'ഉടൻ വരുന്നു',
    'common.placeholder': 'ഈ പേജ് ഉടൻ ലഭ്യമാകും',
    'common.completed': 'പൂർത്തീകരിച്ചു',
    'common.pending': 'പെൻഡിംഗ്',
    'common.save': 'സേവ് ചെയ്യുക',
    'common.cancel': 'റദ്ദാക്കുക',
    'common.edit': 'എഡിറ്റ് ചെയ്യുക',
    'common.delete': 'ഇല്ലാതാക്കുക',
    'common.add': 'ചേർക്കുക'
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
    'dashboard.title': 'Farmer Dashboard',
    'dashboard.subtitle': 'Complete farming management system',
    'dashboard.weather': 'Weather Today',
    'dashboard.alerts': 'Active Alerts',
    'dashboard.aiGuidance': 'AI Guidance',
    'dashboard.voiceAssistant': 'Voice Assistant',
    'dashboard.temperature': 'Temperature',
    'dashboard.humidity': 'Humidity',
    'dashboard.goodForIrrigation': 'Good for irrigation',
    
    // Profile Section
    'profile.title': 'Farmer Profile',
    'profile.subtitle': 'Smart profiling for personalized farming guidance',
    'profile.personalInfo': 'Personal Info',
    'profile.landCrops': 'Land & Crops',
    'profile.digitalRecords': 'Digital Records',
    'profile.editProfile': 'Edit Profile',
    'profile.acres': 'Acres',
    'profile.crops': 'Crops',
    'profile.rice': 'Rice',
    'profile.coconut': 'Coconut',
    'profile.spices': 'Spices',
    'profile.irrigation': 'Irrigation',
    'profile.certification': 'Certificates',
    
    // Activity Log
    'activity.title': 'Activity Log',
    'activity.subtitle': 'Track all your farming activities and operations',
    'activity.weatherAlerts': 'Weather Alerts',
    'activity.rainExpected': 'Rain Expected',
    'activity.noWateringNeeded': 'No watering needed',
    'activity.temperatureAlert': 'Temperature Alert',
    'activity.highTemp': 'High temperature - monitor crops',
    'activity.soilMoisture': 'Soil Moisture',
    'activity.optimal': 'Optimal',
    'activity.thisMonth': 'This Month',
    'activity.activitiesLogged': 'Activities logged',
    'activity.lastActivity': 'Last Activity',
    'activity.cropsMonitored': 'Crops Monitored',
    'activity.completionRate': 'Completion Rate',
    'activity.recentActivities': 'Recent Activities',
    'activity.upcomingActivities': 'Upcoming Activities',
    'activity.irrigation': 'Irrigation',
    'activity.pestControl': 'Pest Control',
    'activity.fertilizer': 'Fertilizer Application',
    'activity.sowing': 'Sowing',
    'activity.monitoring': 'Crop Monitoring',
    
    // Edit Profile
    'editProfile.title': 'Edit Profile',
    'editProfile.subtitle': 'Update your personal and farming information',
    'editProfile.personalInfo': 'Personal Information',
    'editProfile.malayalamName': 'Malayalam Name',
    'editProfile.englishName': 'English Name',
    'editProfile.phoneNumber': 'Phone Number',
    'editProfile.email': 'Email (Optional)',
    'editProfile.address': 'Address',
    'editProfile.experience': 'Experience (Years)',
    'editProfile.farmerId': 'Farmer ID',
    'editProfile.landCropDetails': 'Land & Crop Details',
    'editProfile.totalLand': 'Total Land (Acres)',
    'editProfile.irrigatedLand': 'Irrigated Land (Acres)',
    'editProfile.soilType': 'Soil Type',
    'editProfile.mainCrops': 'Main Crops',
    'editProfile.cropName': 'Crop name',
    'editProfile.area': 'Area (acres)',
    'editProfile.season': 'Season',
    'editProfile.addCrop': 'Add Another Crop',
    'editProfile.cancel': 'Cancel',
    'editProfile.saveChanges': 'Save Changes',
    
    // AI Suggestions
    'ai.cropSuggestions': 'Crop Suggestions',
    'ai.schemeBasedSuggestion': 'Based on available schemes',
    'ai.groundnutSubsidy': 'Plant Groundnut - Get 40% subsidy',
    'ai.soilQuality': 'Soil Quality Analysis',
    'ai.soilHealth': 'Soil Health',
    'ai.excellent': 'Excellent',
    'ai.good': 'Good',
    'ai.needsImprovement': 'Needs Improvement',
    
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
    
    // Voice Chat
    'voice.title': 'AI Voice Assistant',
    'voice.tapToSpeak': 'Touch and hold to speak',
    'voice.touchAndHold': 'Touch and hold to speak',
    'voice.sampleQuestions': 'Sample Questions',
    
    // Common
    'common.back': 'Back',
    'common.comingSoon': 'Coming Soon',
    'common.placeholder': 'This page will be available soon',
    'common.completed': 'Completed',
    'common.pending': 'Pending',
    'common.save': 'Save',
    'common.cancel': 'Cancel',
    'common.edit': 'Edit',
    'common.delete': 'Delete',
    'common.add': 'Add'
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
    'dashboard.title': 'விவசாயி டாஷ்போர்டு',
    'dashboard.subtitle': 'முழுமையான வேளாண் மேலாண்மை அமைப்பு',
    'dashboard.weather': 'இன்றைய வானிலை',
    'dashboard.alerts': 'செயலில் உள்ள எச்சரிக்கைகள்',
    'dashboard.aiGuidance': 'AI வழிகாட்டுதல்',
    'dashboard.voiceAssistant': 'குரல் உதவியாளர்',
    'dashboard.temperature': 'வெப்பநிலை',
    'dashboard.humidity': 'ஈரப்பதம்',
    'dashboard.goodForIrrigation': 'பாசனத்திற்கு நல்லது',
    
    // Profile Section
    'profile.title': 'விவசாயி சுயவிவரம்',
    'profile.subtitle': 'தனிப்பயனாக்கப்பட்ட வேளாண் வழிகாட்டுதலுக்கான ஸ்மார்ட் சுயவிவரம்',
    'profile.personalInfo': 'தனிப்பட்ட தகவல்',
    'profile.landCrops': 'நிலம் & பயிர்கள்',
    'profile.digitalRecords': 'டிஜிட்டல் பதிவுகள்',
    'profile.editProfile': 'சுயவிவரத்தை திருத்து',
    'profile.acres': 'ஏக்கர்',
    'profile.crops': 'பயிர்கள்',
    'profile.rice': 'அரிசி',
    'profile.coconut': 'தேங்காய்',
    'profile.spices': 'மசாலா',
    'profile.irrigation': 'பாசனம்',
    'profile.certification': 'சான்றிதழ்கள்',
    
    // Activity Log
    'activity.title': 'செயல்பாடு பதிவு',
    'activity.subtitle': 'உங்கள் அனைத்து வேளாண் செயல்பாடுகளையும் கண்காணிக்கவும்',
    'activity.weatherAlerts': 'வானிலை எச்சரிக்கைகள்',
    'activity.rainExpected': 'மழை எதிர்பார்க்கப்படுகிறது',
    'activity.noWateringNeeded': 'தண்ணீர் தேவையில்லை',
    'activity.temperatureAlert': 'வெப்பநிலை எச்சரிக்கை',
    'activity.highTemp': 'அதிக வெப்பநிலை - பயிர்களை கண்காணிக்கவும்',
    'activity.soilMoisture': 'மண் ஈரப்பதம்',
    'activity.optimal': 'சிறந்த',
    'activity.thisMonth': 'இந்த மாதம்',
    'activity.activitiesLogged': 'செயல்பாடுகள் பதிவு செய்யப்பட்டுள்ளன',
    'activity.lastActivity': 'கடைசி செயல்பாடு',
    'activity.cropsMonitored': 'கண்காணிக்கப்பட்ட பயிர்கள்',
    'activity.completionRate': 'நிறைவு விகிதம்',
    'activity.recentActivities': 'சமீபத்திய செயல்பாடுகள்',
    'activity.upcomingActivities': 'வரவிருக்கும் செயல்பாடுகள்',
    'activity.irrigation': 'பாசனம்',
    'activity.pestControl': 'பூச்சி கட்டுப்பாடு',
    'activity.fertilizer': 'உர பயன்பாடு',
    'activity.sowing': 'விதைப்பு',
    'activity.monitoring': 'பயிர் கண்காணிப்பு',
    
    // Edit Profile
    'editProfile.title': 'சுயவிவரத்தை திருத்து',
    'editProfile.subtitle': 'உங்கள் தனிப்பட்ட மற்றும் வேளாண் தகவல்களை புதுப்பிக்கவும்',
    'editProfile.personalInfo': 'தனிப்பட்ட தகவல்',
    'editProfile.malayalamName': 'மலையாள பெயர்',
    'editProfile.englishName': 'ஆங்கில பெயர்',
    'editProfile.phoneNumber': 'தொலைபேசி எண்',
    'editProfile.email': 'மின்னஞ்சல் (விருப்பம்)',
    'editProfile.address': 'முகவரி',
    'editProfile.experience': 'அனுபவம் (ஆண்டுகள்)',
    'editProfile.farmerId': 'விவசாயி ஐடி',
    'editProfile.landCropDetails': 'நிலம் & பயிர் விவரங்கள்',
    'editProfile.totalLand': 'மொத்த நிலம் (ஏக்கர்)',
    'editProfile.irrigatedLand': 'பாசன நிலம் (ஏக்கர்)',
    'editProfile.soilType': 'மண் வகை',
    'editProfile.mainCrops': 'முக்கிய பயிர்கள்',
    'editProfile.cropName': 'பயிர் பெயர்',
    'editProfile.area': 'பரப்பளவு (ஏக்கர்)',
    'editProfile.season': 'பருவம்',
    'editProfile.addCrop': 'மற்றொரு பயிர் சேர்க்கவும்',
    'editProfile.cancel': 'ரத்து',
    'editProfile.saveChanges': 'மாற்றங்களை சேமிக்கவும்',
    
    // AI Suggestions
    'ai.cropSuggestions': 'பயிர் பரிந்துரைகள்',
    'ai.schemeBasedSuggestion': 'கிடைக்கும் திட்டங்களின் அடிப்படையில்',
    'ai.groundnutSubsidy': 'நிலக்கடலை வளர்க்கவும் - 40% மானியம் பெறுங்கள்',
    'ai.soilQuality': 'மண் தர பகுப்பாய்வு',
    'ai.soilHealth': 'மண் ஆரோக்கியம்',
    'ai.excellent': 'சிறந்த',
    'ai.good': 'நல்ல',
    'ai.needsImprovement': 'மேம்பாடு தேவை',
    
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
    
    // Voice Chat
    'voice.title': 'AI குரல் உதவியாளர்',
    'voice.tapToSpeak': 'பேச தொட்டு பிடிக்கவும்',
    'voice.touchAndHold': 'Touch and hold to speak',
    'voice.sampleQuestions': 'எடுத்துக்காட்டு கேள்விகள்',
    
    // Common
    'common.back': 'பின்',
    'common.comingSoon': 'விரைவில் வருகிறது',
    'common.placeholder': 'இந்த பக்கம் விரைவில் கிடைக்கும்',
    'common.completed': 'நிறைவு',
    'common.pending': 'நிலுவையில்',
    'common.save': 'சேமிக்கவும்',
    'common.cancel': 'ரத்து',
    'common.edit': 'திருத்து',
    'common.delete': 'நீக்கு',
    'common.add': 'சேர்க்கவும்'
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