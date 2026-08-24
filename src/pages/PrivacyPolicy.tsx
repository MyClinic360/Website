import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Política de Privacidade — MyClinic360</title>
        <meta name="description" content="Política de Privacidade da MyClinic360. Saiba como coletamos, utilizamos, armazenamos e protegemos seus dados pessoais em conformidade com a LGPD." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.myclinic360.com.br/politica-de-privacidade" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Política de Privacidade — MyClinic360" />
        <meta property="og:description" content="Política de Privacidade da MyClinic360 em conformidade com a LGPD." />
        <meta property="og:image" content="https://www.myclinic360.com.br/og-myclinic360.jpg?v=3" />
        <meta property="og:url" content="https://www.myclinic360.com.br/politica-de-privacidade" />
        <meta property="og:site_name" content="MyClinic360" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Política de Privacidade — MyClinic360" />
        <meta name="twitter:description" content="Política de Privacidade da MyClinic360." />
        <meta name="twitter:image" content="https://www.myclinic360.com.br/og-myclinic360.jpg?v=3" />
      </Helmet>
      
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        
        <main className="flex-1 pt-24 pb-16">
          <div className="container max-w-4xl mx-auto px-4">
            <article className="prose prose-lg max-w-none">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Política de Privacidade — MyClinic360
              </h1>
              
              <p className="text-muted-foreground mb-8">
                Última atualização: 25 de dezembro de 2025
              </p>
              
              <p className="text-foreground/80 leading-relaxed">
                A MyClinic360 valoriza a privacidade e a proteção dos dados pessoais de seus usuários. Esta Política de Privacidade descreve como coletamos, utilizamos, armazenamos e protegemos as informações pessoais fornecidas por meio do site{" "}
                <a href="https://www.myclinic360.com.br" className="text-primary hover:underline">
                  https://www.myclinic360.com.br
                </a>{" "}
                e da plataforma MyClinic360, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
              </p>

              <section className="mt-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Sobre a MyClinic360</h2>
                <p className="text-foreground/80 leading-relaxed">
                  A MyClinic360 é uma plataforma digital voltada para fisioterapeutas, com foco em gestão clínica, captação de pacientes, formulários clínicos e organização profissional. A plataforma não realiza diagnósticos médicos nem substitui prontuários oficiais.
                </p>
              </section>

              <section className="mt-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Dados coletados</h2>
                
                <h3 className="text-xl font-medium text-foreground mb-3">2.1 Dados fornecidos pelo usuário</h3>
                <ul className="list-disc pl-6 text-foreground/80 space-y-1 mb-6">
                  <li>Nome completo</li>
                  <li>E-mail</li>
                  <li>Telefone</li>
                  <li>Informações profissionais</li>
                  <li>Dados enviados por meio de formulários de contato ou cadastro</li>
                </ul>

                <h3 className="text-xl font-medium text-foreground mb-3">2.2 Dados de pacientes</h3>
                <p className="text-foreground/80 leading-relaxed mb-3">
                  Os dados de pacientes são inseridos exclusivamente pelo fisioterapeuta, podendo incluir:
                </p>
                <ul className="list-disc pl-6 text-foreground/80 space-y-1 mb-4">
                  <li>Nome ou identificador</li>
                  <li>Informações clínicas</li>
                  <li>Respostas a formulários clínicos</li>
                </ul>
                <p className="text-foreground/80 leading-relaxed bg-muted/50 p-4 rounded-lg mb-6">
                  <strong>Importante:</strong> a MyClinic360 atua como operadora de dados, sendo o fisioterapeuta o controlador, responsável pela base legal e pelo consentimento do paciente.
                </p>

                <h3 className="text-xl font-medium text-foreground mb-3">2.3 Dados coletados automaticamente</h3>
                <ul className="list-disc pl-6 text-foreground/80 space-y-1">
                  <li>Endereço IP</li>
                  <li>Tipo de navegador e dispositivo</li>
                  <li>Dados de navegação</li>
                  <li>Cookies e tecnologias similares</li>
                </ul>
              </section>

              <section className="mt-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Finalidade do tratamento de dados</h2>
                <p className="text-foreground/80 leading-relaxed mb-3">Os dados pessoais são utilizados para:</p>
                <ul className="list-disc pl-6 text-foreground/80 space-y-1">
                  <li>Operar e manter a plataforma</li>
                  <li>Criar e gerenciar contas</li>
                  <li>Permitir funcionalidades clínicas e administrativas</li>
                  <li>Melhorar a experiência do usuário</li>
                  <li>Cumprir obrigações legais e regulatórias</li>
                </ul>
              </section>

              <section className="mt-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Compartilhamento de dados</h2>
                <p className="text-foreground/80 leading-relaxed mb-3">
                  A MyClinic360 não comercializa dados pessoais. O compartilhamento ocorre apenas:
                </p>
                <ul className="list-disc pl-6 text-foreground/80 space-y-1">
                  <li>Com fornecedores de tecnologia essenciais (hospedagem, banco de dados, e-mail)</li>
                  <li>Para cumprimento de obrigações legais ou ordens judiciais</li>
                </ul>
              </section>

              <section className="mt-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Armazenamento e segurança</h2>
                <p className="text-foreground/80 leading-relaxed">
                  Adotamos medidas técnicas e organizacionais adequadas para proteger os dados contra acesso não autorizado, perda, alteração ou divulgação indevida.
                </p>
              </section>

              <section className="mt-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Direitos do titular</h2>
                <p className="text-foreground/80 leading-relaxed mb-3">O titular dos dados pode solicitar, a qualquer momento:</p>
                <ul className="list-disc pl-6 text-foreground/80 space-y-1 mb-4">
                  <li>Confirmação do tratamento</li>
                  <li>Acesso aos dados</li>
                  <li>Correção ou atualização</li>
                  <li>Exclusão ou anonimização</li>
                  <li>Revogação do consentimento</li>
                </ul>
                <p className="text-foreground/80 leading-relaxed">
                  Solicitações devem ser enviadas para:{" "}
                  <a href="mailto:contato@myclinic360.com.br" className="text-primary hover:underline">
                    contato@myclinic360.com.br
                  </a>
                </p>
              </section>

              <section className="mt-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Cookies</h2>
                <p className="text-foreground/80 leading-relaxed">
                  Utilizamos cookies para fins estatísticos, funcionais e de melhoria da experiência do usuário. O usuário pode gerenciar cookies diretamente no navegador.
                </p>
              </section>

              <section className="mt-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Alterações</h2>
                <p className="text-foreground/80 leading-relaxed">
                  Esta Política poderá ser atualizada periodicamente. Recomendamos a consulta regular desta página.
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

export default PrivacyPolicy;
