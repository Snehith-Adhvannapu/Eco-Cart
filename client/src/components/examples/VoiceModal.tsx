import { useState } from "react";
import VoiceModal from '../VoiceModal';

export default function VoiceModalExample() {
  const [isOpen, setIsOpen] = useState(true);

  const handleVoiceCommand = (command: string) => {
    console.log(`Voice command received: ${command}`);
  };

  return (
    <div className="h-screen bg-background flex items-center justify-center">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 bg-primary text-white rounded"
      >
        Toggle Voice Modal
      </button>
      <VoiceModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onVoiceCommand={handleVoiceCommand}
      />
    </div>
  );
}