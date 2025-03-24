"use client"

import { Cloud, CloudDrizzle, CloudRain, Sun, Droplets, Wind } from "lucide-react"

// Mock data
const currentWeather = {
  temperature: 28,
  condition: "Sunny",
  humidity: 65,
  windSpeed: 12,
  rainfall: 0,
}

const forecast = [
  { day: "Today", high: 28, low: 21, condition: "Sunny" },
  { day: "Tomorrow", high: 27, low: 20, condition: "Partly Cloudy" },
  { day: "Wed", high: 26, low: 19, condition: "Cloudy" },
  { day: "Thu", high: 25, low: 20, condition: "Light Rain" },
  { day: "Fri", high: 24, low: 19, condition: "Cloudy" },
]

const getWeatherIcon = (condition: string) => {
  switch (condition.toLowerCase()) {
    case "sunny":
      return <Sun className="h-8 w-8 text-amber-500" />
    case "partly cloudy":
      return <Cloud className="h-8 w-8 text-gray-400" />
    case "cloudy":
      return <Cloud className="h-8 w-8 text-gray-500" />
    case "light rain":
      return <CloudDrizzle className="h-8 w-8 text-blue-400" />
    case "rain":
      return <CloudRain className="h-8 w-8 text-blue-500" />
    default:
      return <Sun className="h-8 w-8 text-amber-500" />
  }
}

export default function WeatherForecast() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex items-center p-4 rounded-lg bg-primary/5 border">
          <div className="mr-4">{getWeatherIcon(currentWeather.condition)}</div>
          <div>
            <div className="flex items-baseline">
              <span className="text-4xl font-bold">{currentWeather.temperature}°</span>
              <span className="text-lg ml-2">{currentWeather.condition}</span>
            </div>
            <p className="text-sm text-muted-foreground">Your location</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900">
            <Droplets className="h-5 w-5 text-blue-500 mb-1" />
            <span className="text-sm">Humidity</span>
            <span className="font-medium">{currentWeather.humidity}%</span>
          </div>

          <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-amber-50 dark:bg-amber-950 border border-amber-100 dark:border-amber-900">
            <Wind className="h-5 w-5 text-amber-500 mb-1" />
            <span className="text-sm">Wind</span>
            <span className="font-medium">{currentWeather.windSpeed} km/h</span>
          </div>

          <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900">
            <CloudRain className="h-5 w-5 text-blue-500 mb-1" />
            <span className="text-sm">Rain</span>
            <span className="font-medium">{currentWeather.rainfall} mm</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-3">5-Day Forecast</h3>
        <div className="grid grid-cols-5 gap-2">
          {forecast.map((day) => (
            <div key={day.day} className="flex flex-col items-center p-3 rounded-lg border text-center">
              <span className="text-sm font-medium mb-1">{day.day}</span>
              <div className="my-2">{getWeatherIcon(day.condition)}</div>
              <div className="flex gap-1 items-baseline">
                <span className="text-sm font-medium">{day.high}°</span>
                <span className="text-xs text-muted-foreground">{day.low}°</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

