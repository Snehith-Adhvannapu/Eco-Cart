import { useState } from "react";
import Header from '../Header';

export default function HeaderExample() {
  const [cartCount, setCartCount] = useState(3);
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleCartToggle = () => {
    console.log('Cart toggled');
  };

  const handleVoiceToggle = () => {
    setIsVoiceActive(!isVoiceActive);
    console.log('Voice shopping toggled:', !isVoiceActive);
  };

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    console.log('Theme toggled:', !isDarkMode ? 'dark' : 'light');
  };

  return (
    <Header
      cartCount={cartCount}
      onCartToggle={handleCartToggle}
      onVoiceToggle={handleVoiceToggle}
      isVoiceActive={isVoiceActive}
      isDarkMode={isDarkMode}
      onThemeToggle={handleThemeToggle}
    />
  );
}