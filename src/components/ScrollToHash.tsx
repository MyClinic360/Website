import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// O React Router não rola até a âncora em navegações client-side: ao ir de
// /termos-de-uso para /#faq, a URL muda mas a posição de rolagem permanece.
// Este hook faz a rolagem, aguardando a seção montar após a troca de rota.
export const useScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      return;
    }

    let frame = 0;
    let attempts = 0;

    const scrollToTarget = () => {
      const element = document.querySelector(hash);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return;
      }

      // A seção pode ainda não estar montada logo após a troca de rota.
      if (attempts++ < 20) {
        frame = requestAnimationFrame(scrollToTarget);
      }
    };

    frame = requestAnimationFrame(scrollToTarget);
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);
};

export default useScrollToHash;
