import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import { useLanguage, Language } from "@/contexts/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className="hover-glow group relative"
      title={`Switch to ${language === 'en' ? 'Français' : 'English'}`}
    >
      <Languages className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
      <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background border border-border rounded px-2 py-1 whitespace-nowrap">
        {language.toUpperCase()}
      </span>
    </Button>
  );
};

export default LanguageSwitcher;