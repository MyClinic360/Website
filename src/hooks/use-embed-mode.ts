import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

/** Modo embed para exibição em iframe (ex.: dialog do app). Oculta chrome do site. */
export function useEmbedMode(): boolean {
  const [searchParams] = useSearchParams();

  return useMemo(() => {
    const embed = searchParams.get("embed");
    const explicitEmbed = embed === "1" || embed === "true";
    const inIframe =
      typeof window !== "undefined" && window.self !== window.top;

    return explicitEmbed || inIframe;
  }, [searchParams]);
}
