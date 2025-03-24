import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Camera, Upload } from "lucide-react"
import DiagnosisHistory from "@/components/diagnosis-history"
import VoiceControl from "@/components/voice-control"

export default function DiagnosePage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">AI Crop Diagnostics</h1>
          <p className="text-muted-foreground">Detect crop diseases instantly with our AI-powered tool</p>
        </div>
        <VoiceControl />
      </div>

      <Card className="w-full">
        <CardHeader>
          <CardTitle>Upload Crop Image</CardTitle>
          <CardDescription>Take a clear photo of the affected plant or upload an existing image</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="border-2 border-dashed rounded-lg p-6 text-center">
            <div className="mx-auto w-32 h-32 mb-4 rounded-full bg-muted flex items-center justify-center">
              <Upload className="h-10 w-10 text-muted-foreground" />
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Drag and drop an image here, or click the buttons below
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Button className="flex gap-2">
                <Camera className="h-4 w-4" />
                Take Photo
              </Button>
              <Button variant="outline">Browse Files</Button>
            </div>
            <Input type="file" accept="image/*" className="hidden" id="image-upload" />
          </div>

          <div>
            <Label htmlFor="crop-type">Crop Type (Optional)</Label>
            <Input id="crop-type" placeholder="e.g., Rice, Wheat, Cotton" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" size="lg" disabled>
            Analyze Image
          </Button>
        </CardFooter>
      </Card>

      <DiagnosisHistory />
    </div>
  )
}

