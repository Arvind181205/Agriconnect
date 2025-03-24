"use client"

export default function WeatherMap() {
  return (
    <div className="space-y-4">
      <div className="p-2 rounded-md border bg-muted/40">
        <div className="relative aspect-video rounded overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-muted-foreground">Interactive Weather Map will be displayed here</p>
          </div>
          <img
            src="/placeholder.svg?height=400&width=800"
            alt="Weather Map"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2">
        <button className="py-2 px-3 text-sm rounded border hover:bg-primary/5 text-center">Precipitation</button>
        <button className="py-2 px-3 text-sm rounded border hover:bg-primary/5 text-center">Temperature</button>
        <button className="py-2 px-3 text-sm rounded border hover:bg-primary/5 text-center">Wind</button>
        <button className="py-2 px-3 text-sm rounded border hover:bg-primary/5 text-center">Humidity</button>
      </div>
    </div>
  )
}

