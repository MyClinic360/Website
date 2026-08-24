import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const TermsOfUse = () => {
  return (
    <>
      <Helmet>
        <title>Termos de Uso — MyClinic360</title>
        <meta name="description" content="Termos de Uso da plataforma MyClinic360. Conheça as condições de uso, responsabilidades e direitos ao utilizar nossos serviços." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.myclinic360.com.br/termos-de-uso" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Termos de Uso — MyClinic360" />
        <meta property="og:description" content="Termos de Uso da plataforma MyClinic360." />
        <meta property="og:image" content="https://www.myclinic360.com.br/og-myclinic360.jpg?v=3" />
        <meta property="og:url" content="https://www.myclinic360.com.br/termos-de-uso" />
        <meta property="og:site_name" content="MyClinic360" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Termos de Uso — MyClinic360" />
        <meta name="twitter:description" content="Termos de Uso da plataforma MyClinic360." />
        <meta name="twitter:image" content="https://www.myclinic360.com.br/og-myclinic360.jpg?v=3" />
      </Helmet>
      
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        
        <main className="flex-1 pt-24 pb-16">
          <div className="container max-w-4xl mx-auto px-4">
            <article className="prose prose-lg max-w-none">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Termos de Uso — MyClinic360
              </h1>
              
              <p className="text-muted-foreground mb-8">
                Última atualização: 25 de dezembro de 2025
              </p>
              
              <p className="text-foreground/80 leading-relaxed">
                Ao acessar ou utilizar o site{" "}
                <a href="https://www.myclinic360.com.br" className="text-primary hover:underline">
                  https://www.myclinic360.com.br
                </a>{" "}
                e a plataforma MyClinic360, você concorda integralmente com estes Termos de Uso.
              </p>

              <section className="mt-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Objeto</h2>
                <p className="text-foreground/80 leading-relaxed">
                  A MyClinic360 oferece uma plataforma digital de apoio à gestão clínica de fisioterapeutas, incluindo cadastro de pacientes, formulários clínicos, agenda e organização profissional.
                </p>
              </section>

              <section className="mt-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Elegibilidade</h2>
                <p className="text-foreground/80 leading-relaxed mb-3">O uso da plataforma é permitido apenas para:</p>
                <ul className="list-disc pl-6 text-foreground/80 space-y-1">
                  <li>Profissionais de saúde legalmente habilitados</li>
                  <li>Usuários maiores de 18 anos</li>
                </ul>
              </section>

              <section className="mt-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Cadastro e responsabilidades</h2>
                <p className="text-foreground/80 leading-relaxed mb-3">O usuário se compromete a:</p>
                <ul className="list-disc pl-6 text-foreground/80 space-y-1">
                  <li>Fornecer informações verdadeiras e atualizadas</li>
                  <li>Manter a confidencialidade de suas credenciais</li>
                  <li>Responsabilizar-se por todas as atividades realizadas em sua conta</li>
                </ul>
              </section>

              <section className="mt-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Uso adequado</h2>
                <p className="text-foreground/80 leading-relaxed mb-3">É vedado:</p>
                <ul className="list-disc pl-6 text-foreground/80 space-y-1">
                  <li>Utilizar a plataforma para fins ilegais</li>
                  <li>Inserir dados sem autorização do titular</li>
                  <li>Violar direitos de privacidade ou propriedade intelectual</li>
                  <li>Tentar acessar áreas restritas sem permissão</li>
                </ul>
              </section>

              <section className="mt-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Dados de pacientes</h2>
                <p className="text-foreground/80 leading-relaxed mb-3">O usuário profissional declara que:</p>
                <ul className="list-disc pl-6 text-foreground/80 space-y-1">
                  <li>Possui base legal para tratamento dos dados</li>
                  <li>Obteve o consentimento do paciente, quando aplicável</li>
                  <li>Utiliza a plataforma em conformidade com a LGPD e normas éticas da profissão</li>
                </ul>
              </section>

              <section className="mt-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Propriedade intelectual</h2>
                <p className="text-foreground/80 leading-relaxed">
                  Todos os direitos sobre a marca, plataforma, layout, textos e funcionalidades pertencem à MyClinic360, sendo proibida a reprodução sem autorização prévia.
                </p>
              </section>

              <section className="mt-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Limitação de responsabilidade</h2>
                <p className="text-foreground/80 leading-relaxed mb-3">A MyClinic360:</p>
                <ul className="list-disc pl-6 text-foreground/80 space-y-1">
                  <li>Não realiza diagnóstico médico</li>
                  <li>Não substitui prontuários oficiais</li>
                  <li>Não se responsabiliza por decisões clínicas tomadas com base nos dados inseridos pelo usuário</li>
                </ul>
              </section>

              <section className="mt-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Suspensão e encerramento</h2>
                <p className="text-foreground/80 leading-relaxed">
                  A MyClinic360 pode suspender ou encerrar contas que violem estes Termos, a seu critério, sem aviso prévio.
                </p>
              </section>

              <section className="mt-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Alterações dos termos</h2>
                <p className="text-foreground/80 leading-relaxed">
                  Os Termos de Uso podem ser modificados a qualquer momento. O uso contínuo da plataforma implica aceitação das alterações.
                </p>
              </section>

              <section className="mt-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">10. Foro</h2>
                <p className="text-foreground/80 leading-relaxed">
                  Fica eleito o foro da República Federativa do Brasil, com renúncia a qualquer outro, por mais privilegiado que seja.
                </p>
              </section>
            </article>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default TermsOfUse;
