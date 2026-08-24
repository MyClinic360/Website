import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Mapeamento de URLs antigas/incorretas para as corretas
const redirectMap: Record<string, string> = {
  "/termos": "/termos-de-uso",
  "/termos de uso": "/termos-de-uso",
  "/privacidade": "/politica-de-privacidade",
  "/politica de privacidade": "/politica-de-privacidade",
  "/politica-de-privacidade": "/politica-de-privacidade",
  "/lgpd": "/politica-de-privacidade",
  "/beneficios": "/#diferenciais",
  "/diferenciais": "/#diferenciais",
  "/waitlist": "/",
};

export const useRedirects = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const path = decodeURIComponent(location.pathname.toLowerCase());

    // URLs de blog nunca existiram — deixar cair no 404 (noindex) para
    // que o Google remova do índice em vez de tratar como redirecionamento.
    if (path.startsWith("/blog")) {
      return;
    }

    // Verifica redirecionamentos mapeados
    const redirectTo = redirectMap[path];
    if (redirectTo) {
      navigate(redirectTo, { replace: true });
    }
  }, [location.pathname, navigate]);
};

export default useRedirects;
