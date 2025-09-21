export interface WeatherData {
  location: string;
  temperature: number;
  humidity: number;
  description: string;
  rainfall: number;
  windSpeed: number;
  icon: string;
  forecast: DailyForecast[];
}

export interface DailyForecast {
  date: string;
  temperature: {
    min: number;
    max: number;
  };
  description: string;
  icon: string;
  rainfall: number;
}

// Mock weather service - replace with actual API
export class WeatherService {
  private static readonly MOCK_DATA: WeatherData = {
    location: "Kerala, India",
    temperature: 28,
    humidity: 85,
    description: "Partly Cloudy",
    rainfall: 2.5,
    windSpeed: 12,
    icon: "partly-cloudy",
    forecast: [
      {
        date: new Date().toISOString().split('T')[0],
        temperature: { min: 24, max: 32 },
        description: "Sunny",
        icon: "sunny",
        rainfall: 0
      },
      {
        date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
        temperature: { min: 23, max: 30 },
        description: "Light Rain",
        icon: "rainy",
        rainfall: 5.2
      },
      {
        date: new Date(Date.now() + 2 * 86400000).toISOString().split('T')[0],
        temperature: { min: 25, max: 33 },
        description: "Partly Cloudy",
        icon: "partly-cloudy",
        rainfall: 1.0
      }
    ]
  };

  static async getCurrentWeather(location?: string): Promise<WeatherData> {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In production, replace with actual weather API call
    // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`);
    
    return {
      ...this.MOCK_DATA,
      location: location || this.MOCK_DATA.location
    };
  }

  static async getForecast(location?: string): Promise<DailyForecast[]> {
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // In production, replace with actual forecast API call
    return this.MOCK_DATA.forecast;
  }

  static getWeatherIcon(iconCode: string): string {
    const iconMap: Record<string, string> = {
      'sunny': '☀️',
      'partly-cloudy': '⛅',
      'cloudy': '☁️',
      'rainy': '🌧️',
      'stormy': '⛈️',
      'snowy': '🌨️'
    };
    
    return iconMap[iconCode] || '🌤️';
  }

  static getTemperatureAlert(temperature: number): string | null {
    if (temperature > 35) {
      return "High temperature alert! Consider irrigation and shade for crops.";
    }
    if (temperature < 15) {
      return "Low temperature alert! Protect sensitive crops from cold.";
    }
    return null;
  }

  static getRainfallAlert(rainfall: number): string | null {
    if (rainfall > 10) {
      return "Heavy rainfall expected! Check drainage and protect crops.";
    }
    if (rainfall === 0) {
      return "No rainfall expected. Consider irrigation needs.";
    }
    return null;
  }
}

export default WeatherService;