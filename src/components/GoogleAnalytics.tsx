import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

export const GoogleAnalytics = () => {
  useEffect(() => {
    // Verifica se o script já foi carregado pelo HTML
    const existingScript = document.querySelector(
      `script[src*="googletagmanager.com/gtag/js"]`
    );
    
    // Se o script já existe (foi carregado pelo HTML), apenas garante que gtag está disponível
    if (existingScript && window.gtag) {
      // Google Analytics já está carregado, nada a fazer
      return;
    }

    // Se não houver script no HTML, mas tiver a variável de ambiente, carrega dinamicamente
    if (GA_MEASUREMENT_ID) {
      // Adiciona o script do gtag.js
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script);

      // Inicializa o dataLayer e gtag se ainda não existir
      window.dataLayer = window.dataLayer || [];
      if (!window.gtag) {
        window.gtag = function gtag(...args: unknown[]) {
          window.dataLayer.push(args);
        };
        window.gtag("js", new Date());
        window.gtag("config", GA_MEASUREMENT_ID);
      }
    }
  }, []);

  return null;
};

// Função helper para rastrear eventos personalizados
export const trackEvent = (
  eventName: string,
  parameters?: Record<string, unknown>
) => {
  if (window.gtag) {
    window.gtag("event", eventName, parameters);
  }
};

// Função helper para rastrear conversões
export const trackConversion = (
  conversionLabel: string,
  value?: number,
  currency = "BRL"
) => {
  if (window.gtag) {
    window.gtag("event", "conversion", {
      send_to: `${GA_MEASUREMENT_ID}/${conversionLabel}`,
      value,
      currency,
    });
  }
};

export default GoogleAnalytics;
