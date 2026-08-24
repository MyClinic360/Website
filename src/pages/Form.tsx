import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ClipboardList } from "lucide-react";
import { Footer } from "@/components/Footer";
import logo from "@/assets/logo.svg";

// Mapeamento de IDs de formulários para títulos (alinhado com QuestionnairesSection)
const FORM_TITLES: Record<string, string> = {
  "iief-5": "Índice Internacional de Disfunção Erétil - IIEF-5",
  "incontinencia": "Avaliação de Incontinência Urinária",
  "dsf": "Escala de Desconforto Sexual Feminino (DSF)",
  "saude-sexual-masculina": "Avaliação rápida da saúde sexual masculina",
};

const Form = () => {
  const { formId } = useParams<{ formId: string }>();
  const title = formId ? FORM_TITLES[formId.toLowerCase()] ?? `Formulário ${formId}` : "Formulário";

  return (
    <>
      <Helmet>
        <title>{title} — MyClinic360</title>
        <meta name="description" content={`Questionário ${title} - MyClinic360`} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://www.myclinic360.com.br/forms/${formId}`} />
        
        {/* Open Graph / Social Media */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${title} — MyClinic360`} />
        <meta property="og:description" content={`Questionário clínico ${title} - MyClinic360`} />
        <meta property="og:image" content="https://www.myclinic360.com.br/og-myclinic360.jpg?v=3" />
        <meta property="og:url" content={`https://www.myclinic360.com.br/forms/${formId}`} />
        <meta property="og:site_name" content="MyClinic360" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${title} — MyClinic360`} />
        <meta name="twitter:description" content={`Questionário clínico ${title}`} />
        <meta name="twitter:image" content="https://www.myclinic360.com.br/og-myclinic360.jpg?v=3" />
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col">
        <header className="border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex h-16 items-center justify-between">
              <Link to="/" className="flex items-center">
                <img src={logo} alt="MyClinic360" className="h-9 md:h-10" />
              </Link>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar ao início
              </Link>
            </div>
          </div>
        </header>

        <main className="flex-1 container mx-auto px-4 sm:px-6 py-12 md:py-20" role="main">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <ClipboardList className="w-4 h-4" />
              Questionário
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              {title}
            </h1>
            <p className="text-muted-foreground mb-8">
              Este questionário faz parte das avaliações digitais da MyClinic360.
              Em breve você poderá preenchê-lo aqui.
            </p>
            <Link
              to="/#questionarios"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              Ver todos os questionários
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Form;
