import React, { useState, useEffect } from 'react';
import MobileLayout from '@/components/MobileLayout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import WeatherService, { WeatherData } from '@/services/weatherService';
import { 
  CloudSun, 
  Thermometer, 
  Droplets, 
  Wind, 
  AlertTriangle,
  MapPin,
  Calendar
} from "lucide-react";

const Weather = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    loadWeatherData();
  }, []);

  const loadWeatherData = async () => {
    try {
      const data = await WeatherService.getCurrentWeather();
      setWeather(data);
    } catch (error) {
      console.error('Error loading weather:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <MobileLayout>
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
        </div>
      </MobileLayout>
    );
  }

  if (!weather) {
    return (
      <MobileLayout>
        <div className="text-center py-8">
          <p className="text-muted-foreground">{t('weatherUnavailable')}</p>
        </div>
      </MobileLayout>
    );
  }

  const temperatureAlert = WeatherService.getTemperatureAlert(weather.temperature);
  const rainfallAlert = WeatherService.getRainfallAlert(weather.rainfall);

  return (
    <MobileLayout>
      <div className="space-y-6">
        {/* Current Weather */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-emerald-700">
              <CloudSun className="h-5 w-5" />
              {t('currentWeather')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{weather.location}</span>
                </div>
                <div className="text-3xl font-bold text-emerald-700">
                  {weather.temperature}°C
                </div>
                <p className="text-muted-foreground">{weather.description}</p>
              </div>
              <div className="text-6xl">
                {WeatherService.getWeatherIcon(weather.icon)}
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <Droplets className="h-5 w-5 mx-auto mb-1 text-blue-500" />
                <div className="text-sm font-medium">{weather.humidity}%</div>
                <div className="text-xs text-muted-foreground">{t('humidity')}</div>
              </div>
              <div className="text-center">
                <Wind className="h-5 w-5 mx-auto mb-1 text-gray-500" />
                <div className="text-sm font-medium">{weather.windSpeed} km/h</div>
                <div className="text-xs text-muted-foreground">{t('windSpeed')}</div>
              </div>
              <div className="text-center">
                <Droplets className="h-5 w-5 mx-auto mb-1 text-cyan-500" />
                <div className="text-sm font-medium">{weather.rainfall} mm</div>
                <div className="text-xs text-muted-foreground">{t('rainfall')}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Weather Alerts */}
        {(temperatureAlert || rainfallAlert) && (
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-700">
                <AlertTriangle className="h-5 w-5" />
                {t('weatherAlerts')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {temperatureAlert && (
                <div className="flex items-start gap-2">
                  <Thermometer className="h-4 w-4 text-orange-600 mt-0.5" />
                  <p className="text-sm text-orange-700">{temperatureAlert}</p>
                </div>
              )}
              {rainfallAlert && (
                <div className="flex items-start gap-2">
                  <Droplets className="h-4 w-4 text-blue-600 mt-0.5" />
                  <p className="text-sm text-orange-700">{rainfallAlert}</p>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* 3-Day Forecast */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-emerald-700">
              <Calendar className="h-5 w-5" />
              {t('forecast')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {weather.forecast.map((day, index) => (
                <div key={day.date} className="flex items-center justify-between py-2 border-b last:border-b-0">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">
                      {WeatherService.getWeatherIcon(day.icon)}
                    </div>
                    <div>
                      <div className="font-medium">
                        {index === 0 ? t('today') : new Date(day.date).toLocaleDateString()}
                      </div>
                      <div className="text-sm text-muted-foreground">{day.description}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">
                      {day.temperature.max}° / {day.temperature.min}°
                    </div>
                    {day.rainfall > 0 && (
                      <div className="text-sm text-blue-600">
                        {day.rainfall}mm
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Farming Recommendations */}
        <Card>
          <CardHeader>
            <CardTitle className="text-emerald-700">
              {t('farmingRecommendations')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Badge variant="secondary" className="bg-green-100 text-green-700">
                  {t('irrigation')}
                </Badge>
                <p className="text-sm">
                  {weather.rainfall < 5 
                    ? t('irrigationNeeded')
                    : t('sufficientRainfall')
                  }
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                  {t('planting')}
                </Badge>
                <p className="text-sm">
                  {weather.temperature >= 20 && weather.temperature <= 30
                    ? t('goodPlantingWeather')
                    : t('extremeTemperatureWarning')
                  }
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                  {t('protection')}
                </Badge>
                <p className="text-sm">
                  {weather.windSpeed > 15
                    ? t('windProtectionNeeded')
                    : t('calmWeatherConditions')
                  }
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </MobileLayout>
  );
};

export default Weather;