import { useState, useEffect, type ImgHTMLAttributes } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";

// React 18 não reconhece a prop camelCase `fetchPriority` (só a partir do React 19),
// então passamos o atributo em minúsculas direto para o DOM.
const highPriority = { fetchpriority: "high" } as ImgHTMLAttributes<HTMLImageElement>;

const navLinks = [
  { label: "Home", href: "/", isPage: true },
  { label: "Funcionalidades", href: "/funcionalidades", isPage: true },
  { label: "Questionários", href: "#questionarios" },
  { label: "Para Quem", href: "#publico" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "/contato", isPage: true },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-md py-3 border-b border-border/50" 
          : "bg-background py-5"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="MyClinic360" 
              className="h-10 md:h-12"
              width="120"
              height="48"
              loading="eager"
              decoding="async"
              {...highPriority}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-accent/50 rounded-full px-2 py-1.5 border border-border/50">
            {navLinks.map((link) =>
              link.isPage ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 text-foreground/80 hover:text-primary hover:bg-primary/10"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 text-foreground/80 hover:text-primary hover:bg-primary/10"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(link.href);
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button size="sm" className="rounded-full group" asChild>
              <a href="https://appmyclinic360.com.br/login" target="_blank" rel="noopener noreferrer">
                Já tenho acesso
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:bg-muted/50 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - CSS animations instead of framer-motion */}
      <div
        className={`lg:hidden overflow-hidden bg-background border-b border-border/50 shadow-lg transition-all duration-200 ease-out ${
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container mx-auto px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) =>
            link.isPage ? (
              <Link
                key={link.href}
                to={link.href}
                className="px-4 py-3 rounded-xl text-base font-semibold transition-all text-foreground/80 hover:text-primary hover:bg-primary/10 border border-transparent hover:border-primary/20"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-3 rounded-xl text-base font-semibold transition-all text-foreground/80 hover:text-primary hover:bg-primary/10 border border-transparent hover:border-primary/20"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  const element = document.querySelector(link.href);
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {link.label}
              </a>
            )
          )}
          <div className="flex flex-col gap-2 pt-4 mt-2 border-t border-border/30">
            <Button className="w-full justify-center rounded-full group" asChild>
              <a href="https://appmyclinic360.com.br/login" target="_blank" rel="noopener noreferrer">
                Já tenho acesso
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
