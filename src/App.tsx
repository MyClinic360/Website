import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Support from "./pages/Support";
import Form from "./pages/Form";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import NotFound from "./pages/NotFound";
import IIEF5 from "./pages/Forms/IIEF5";
import IncontinenciaUrinaria from "./pages/Forms/IncontinenciaUrinaria";
import SaudeSexualMasculina from "./pages/Forms/SaudeSexualMasculina";
import DesconfortoSexualFeminino from "./pages/Forms/DesconfortoSexualFeminino";
import EjaculacaoPrematura from "./pages/Forms/EjaculacaoPrematura";
import Funcionalidades from "./pages/Funcionalidades";
import ProgramaReabilitacao from "./pages/ProgramaReabilitacao";
import { useRedirects } from "./components/Redirects";
import { useScrollToHash } from "./components/ScrollToHash";
import GoogleAnalytics from "./components/GoogleAnalytics";

const queryClient = new QueryClient();

// Componente para aplicar redirecionamentos e rolagem até âncoras
const RedirectHandler = ({ children }: { children: React.ReactNode }) => {
  useRedirects();
  useScrollToHash();
  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <GoogleAnalytics />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <RedirectHandler>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/suporte" element={<Support />} />
            <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
            <Route path="/termos-de-uso" element={<TermsOfUse />} />
            <Route path="/funcionalidades" element={<Funcionalidades />} />
            <Route path="/programa-reabilitacao-pelvica" element={<ProgramaReabilitacao />} />
            <Route path="/forms/iief-5" element={<IIEF5 />} />
            <Route path="/forms/incontinencia-urinaria" element={<IncontinenciaUrinaria />} />
            <Route path="/forms/saude-sexual-masculina" element={<SaudeSexualMasculina />} />
            <Route path="/forms/desconforto-sexual-feminino" element={<DesconfortoSexualFeminino />} />
            <Route path="/forms/ejaculacao-prematura" element={<EjaculacaoPrematura />} />
            <Route path="/forms/:formId" element={<Form />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </RedirectHandler>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
