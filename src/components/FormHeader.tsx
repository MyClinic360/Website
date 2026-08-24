import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/logo.svg";

interface FormHeaderProps {
  ctaText?: string;
  onCtaClick?: () => void;
}

export const FormHeader = ({ 
  ctaText = "Iniciar avaliação gratuita",
  onCtaClick 
}: FormHeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img src={logo} alt="MyClinic360" className="h-7 sm:h-8" />
          </a>

          {/* CTA Button */}
          <Button
            onClick={onCtaClick}
            variant="default"
            className="group text-sm sm:text-base"
          >
            {ctaText}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </header>
  );
};
