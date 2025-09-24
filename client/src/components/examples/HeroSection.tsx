import HeroSection from '../HeroSection';

export default function HeroSectionExample() {
  const handleStartVoiceShopping = () => {
    console.log('Voice shopping started!');
  };

  return (
    <HeroSection onStartVoiceShopping={handleStartVoiceShopping} />
  );
}