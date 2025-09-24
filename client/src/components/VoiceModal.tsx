import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Mic, MicOff, Volume2, X } from "lucide-react";

interface VoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onVoiceCommand: (command: string) => void;
}

export default function VoiceModal({ isOpen, onClose, onVoiceCommand }: VoiceModalProps) {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [suggestions] = useState([
    "Show bottles",
    "Add eco bag to cart",
    "Find organic shirts",
    "What's my carbon footprint?",
    "Show low impact products"
  ]);

  useEffect(() => {
    if (!isOpen) {
      setIsListening(false);
      setTranscript("");
    }
  }, [isOpen]);

  const handleStartListening = () => {
    setIsListening(true);
    setTranscript("Listening...");
    
    // TODO: remove mock functionality - implement real speech recognition
    setTimeout(() => {
      const mockTranscript = "Show me eco-friendly bottles";
      setTranscript(mockTranscript);
      setIsListening(false);
      onVoiceCommand(mockTranscript);
    }, 2000);
  };

  const handleStopListening = () => {
    setIsListening(false);
    setTranscript("");
  };

  const handleSuggestionClick = (suggestion: string) => {
    setTranscript(suggestion);
    onVoiceCommand(suggestion);
  };

  const handleSpeak = (text: string) => {
    // TODO: remove mock functionality - implement real text-to-speech
    console.log(`Speaking: ${text}`);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardContent className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-primary rounded-full">
                <Mic className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Voice Shopping</h2>
                <p className="text-sm text-muted-foreground">
                  Say "Hey EcoCart" to start
                </p>
              </div>
            </div>
            <Button
              data-testid="button-close-voice-modal"
              size="icon"
              variant="ghost"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Voice Status */}
          <div className="text-center mb-6">
            <div className={`mb-4 ${isListening ? 'animate-pulse' : ''}`}>
              <Button
                data-testid="button-voice-toggle"
                size="lg"
                variant={isListening ? "destructive" : "default"}
                className="w-20 h-20 rounded-full"
                onClick={isListening ? handleStopListening : handleStartListening}
              >
                {isListening ? (
                  <MicOff className="h-8 w-8" />
                ) : (
                  <Mic className="h-8 w-8" />
                )}
              </Button>
            </div>
            
            {isListening && (
              <Badge variant="default" className="mb-2">
                Listening...
              </Badge>
            )}
            
            {transcript && (
              <div className="p-3 bg-muted rounded-lg">
                <p className="text-sm" data-testid="text-voice-transcript">
                  {transcript}
                </p>
                {transcript !== "Listening..." && (
                  <Button
                    data-testid="button-speak-transcript"
                    size="sm"
                    variant="ghost"
                    className="mt-2"
                    onClick={() => handleSpeak(transcript)}
                  >
                    <Volume2 className="h-4 w-4 mr-2" />
                    Speak
                  </Button>
                )}
              </div>
            )}
          </div>

          {/* Voice Suggestions */}
          <div>
            <h3 className="text-sm font-medium mb-3">Try saying:</h3>
            <div className="space-y-2">
              {suggestions.map((suggestion, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="w-full justify-start"
                  onClick={() => handleSuggestionClick(suggestion)}
                  data-testid={`button-suggestion-${index}`}
                >
                  "{suggestion}"
                </Button>
              ))}
            </div>
          </div>

          {/* Voice Features */}
          <div className="mt-6 p-4 bg-muted/50 rounded-lg">
            <h4 className="text-sm font-medium mb-2">Voice Features:</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Product search and filtering</li>
              <li>• Add items to cart</li>
              <li>• Check carbon footprint</li>
              <li>• Navigate checkout</li>
              <li>• Screen reader compatible</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}