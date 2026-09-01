import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEmbedMode } from "@/hooks/use-embed-mode";
import { cn } from "@/lib/utils";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  const isEmbed = useEmbedMode();

  return (
    <>
      <Helmet>
        <title>Política de Privacidade — MyClinic360</title>
        <meta name="description" content="Política de Privacidade da MyClinic360. Saiba como coletamos, utilizamos, armazenamos e protegemos dados pessoais e de saúde, em conformidade com a LGPD." />
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
        {!isEmbed && <Header />}

        <main className={cn("flex-1 pb-16", isEmbed ? "pt-6" : "pt-24")}>
          <div className="container max-w-4xl mx-auto px-4">
            <article className="prose prose-lg max-w-none">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Política de Privacidade do MyClinic360
              </h1>

              <p className="text-muted-foreground mb-8">
                Última atualização: 23 de agosto de 2026 · Versão 1.0
              </p>

              <section className="mt-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Quem somos</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  O MyClinic360 é uma plataforma de gestão para fisioterapeutas, com foco em fisioterapia pélvica, operada por MYCLINIC 360 TECNOLOGIA E SOLUÇÕES DIGITAIS LTDA, inscrita no CNPJ sob o nº 62.143.608/0001-22, com sede na Rua Nogueira Acioli, 996, Sala 01, Centro, Fortaleza, Ceará, CEP 60110-140, Brasil.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Esta Política explica como tratamos dados pessoais no site{" "}
                  <a href="https://www.myclinic360.com.br" className="text-primary hover:underline">
                    www.myclinic360.com.br
                  </a>{" "}
                  e no sistema disponibilizado nele. Ela complementa os{" "}
                  <Link to="/termos-de-uso" className="text-primary hover:underline">
                    Termos de Uso
                  </Link>{" "}
                  e usa as mesmas definições adotadas lá.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Levamos essa responsabilidade a sério porque a plataforma lida com prontuário de fisioterapia pélvica, que é informação íntima por natureza.
                </p>
              </section>

              <section className="mt-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Quem é responsável por quais dados</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  A Lei nº 13.709/2018 (LGPD) distingue quem decide sobre o tratamento, o controlador, de quem executa o tratamento em nome dele, o operador. Na plataforma, essa divisão funciona assim:
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  <strong className="text-foreground">Dados dos pacientes.</strong> O fisioterapeuta é o controlador e o MyClinic360 é o operador. Quem decide o que registrar, por quanto tempo manter e com quem compartilhar é o profissional. Nós apenas armazenamos e processamos esses dados conforme as instruções dele e conforme esta Política.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  <strong className="text-foreground">Dados do fisioterapeuta usuário.</strong> Aqui o MyClinic360 é o controlador. Isso inclui cadastro, dados de faturamento, registros de acesso e a conexão com o Google, quando ativada.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  <strong className="text-foreground">Dados de visitantes do site.</strong> O MyClinic360 é o controlador.
                </p>
                <p className="text-foreground/80 leading-relaxed bg-muted/50 p-4 rounded-lg">
                  Se você é paciente e quer exercer direitos sobre seus dados clínicos, procure o fisioterapeuta que o atende. Ele é quem tem o poder de decisão sobre esse prontuário. Podemos apoiá-lo tecnicamente, mas não podemos alterar ou excluir registros por conta própria.
                </p>
              </section>

              <section className="mt-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Dados que coletamos</h2>

                <h3 className="text-xl font-medium text-foreground mb-3">3.1 Do fisioterapeuta usuário</h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Nome completo, e-mail, telefone, CPF ou CNPJ, número de registro no CREFITO, endereço profissional e dados de cobrança. Coletamos no cadastro e na contratação.
                </p>

                <h3 className="text-xl font-medium text-foreground mb-3">3.2 Dos pacientes, inseridos pelo fisioterapeuta</h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Identificação, contato, histórico clínico, anamnese, avaliações, evoluções, diagnóstico e prognóstico fisioterapêuticos, agendamentos e arquivos anexados pelo profissional.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Esses dados chegam até nós porque o fisioterapeuta os registra. Não os coletamos diretamente do paciente.
                </p>

                <h3 className="text-xl font-medium text-foreground mb-3">3.3 Automaticamente, no uso da plataforma</h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Endereço IP, tipo e versão do navegador, sistema operacional, data e hora dos acessos, páginas visitadas e ações realizadas no sistema. Os registros de acesso a aplicações são mantidos por seis meses, como exige o artigo 15 da Lei nº 12.965/2014 (Marco Civil da Internet).
                </p>

                <h3 className="text-xl font-medium text-foreground mb-3">3.4 Da Conta Google, se a integração for ativada</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Detalhado na seção 6.
                </p>
              </section>

              <section className="mt-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Para que usamos e com que base legal</h2>
                <div className="overflow-x-auto mb-4 rounded-lg border border-border">
                  <table className="w-full min-w-[38rem] text-left text-sm">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="p-3 font-semibold text-foreground align-top">Finalidade</th>
                        <th className="p-3 font-semibold text-foreground align-top">Dados envolvidos</th>
                        <th className="p-3 font-semibold text-foreground align-top">Base legal</th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground/80">
                      <tr className="border-t border-border">
                        <td className="p-3 align-top">Criar e manter a conta, prestar o serviço contratado</td>
                        <td className="p-3 align-top">Cadastro do usuário</td>
                        <td className="p-3 align-top">Execução de contrato, art. 7º, V</td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="p-3 align-top">Cobrar a assinatura e emitir documentos fiscais</td>
                        <td className="p-3 align-top">Faturamento</td>
                        <td className="p-3 align-top">Execução de contrato e obrigação legal, art. 7º, V e II</td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="p-3 align-top">Hospedar e processar prontuários em nome do fisioterapeuta</td>
                        <td className="p-3 align-top">Dados dos pacientes</td>
                        <td className="p-3 align-top">Tutela da saúde por profissional de saúde, art. 11, II, &quot;f&quot;</td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="p-3 align-top">Sincronizar agendamentos com o Google Agenda</td>
                        <td className="p-3 align-top">Dados da Conta Google</td>
                        <td className="p-3 align-top">Consentimento específico, art. 7º, I</td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="p-3 align-top">Garantir segurança, prevenir fraude e investigar abuso</td>
                        <td className="p-3 align-top">Registros de acesso</td>
                        <td className="p-3 align-top">Legítimo interesse, art. 7º, IX</td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="p-3 align-top">Cumprir determinação legal, judicial ou de autoridade</td>
                        <td className="p-3 align-top">Conforme o caso</td>
                        <td className="p-3 align-top">Obrigação legal, art. 7º, II</td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="p-3 align-top">Enviar comunicados sobre o serviço, faturas e mudanças</td>
                        <td className="p-3 align-top">Contato do usuário</td>
                        <td className="p-3 align-top">Execução de contrato, art. 7º, V</td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="p-3 align-top">Enviar conteúdo comercial e novidades</td>
                        <td className="p-3 align-top">Contato do usuário</td>
                        <td className="p-3 align-top">Consentimento, art. 7º, I, revogável a qualquer momento</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Dados de saúde são dados pessoais sensíveis. Por isso o tratamento deles se apoia no artigo 11 da LGPD, que exige fundamento mais estrito, e não nas hipóteses gerais do artigo 7º.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Não usamos dados de pacientes para publicidade, para venda a terceiros ou para treinar modelos de inteligência artificial.
                </p>
              </section>

              <section className="mt-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Dados de saúde e sigilo profissional</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  O conteúdo dos prontuários fica segregado logicamente por conta. Nossa equipe não navega em prontuários de pacientes.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  O acesso técnico ao banco de dados é restrito a um número reduzido de pessoas, apenas quando necessário para manutenção, correção de falha ou atendimento a um chamado de suporte aberto pelo próprio usuário. Todo acesso desse tipo fica registrado em log de auditoria. As pessoas envolvidas assinam termo de confidencialidade.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  O fisioterapeuta é responsável por obter do paciente o consentimento necessário quando aplicável, por manter os registros conforme a Resolução COFFITO nº 414/2012 e por observar o dever de sigilo profissional.
                </p>
              </section>

              <section className="mt-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Integração com o Google Agenda</h2>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Esta seção descreve especificamente como o MyClinic360 acessa, usa, armazena e compartilha dados obtidos das APIs do Google.
                </p>

                <h3 className="text-xl font-medium text-foreground mb-3">6.1 A integração é opcional</h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  A sincronização com o Google Agenda é um recurso facultativo. A plataforma funciona por inteiro sem ela. Agenda, prontuário, cadastro de pacientes e todos os demais recursos permanecem disponíveis para quem nunca conectar uma Conta Google.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Não exigimos Conta Google para cadastro, login ou uso da plataforma. Nenhuma conexão acontece automaticamente. A integração só é ativada quando o usuário clica deliberadamente no botão de conexão dentro do painel e conclui o fluxo de consentimento OAuth 2.0 exibido pelo próprio Google.
                </p>

                <h3 className="text-xl font-medium text-foreground mb-3">6.2 Permissões solicitadas</h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Pedimos apenas o conjunto mínimo necessário para o recurso funcionar:
                </p>
                <div className="overflow-x-auto mb-4 rounded-lg border border-border">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="p-3 font-semibold text-foreground align-top">Escopo</th>
                        <th className="p-3 font-semibold text-foreground align-top">Para que serve</th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground/80">
                      <tr className="border-t border-border">
                        <td className="p-3 align-top">
                          <code className="text-xs break-all">openid</code>,{" "}
                          <code className="text-xs break-all">.../auth/userinfo.email</code>,{" "}
                          <code className="text-xs break-all">.../auth/userinfo.profile</code>
                        </td>
                        <td className="p-3 align-top">
                          Identificar qual Conta Google foi conectada e exibir o e-mail vinculado na tela de configurações, para que o usuário saiba qual conta está ativa
                        </td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="p-3 align-top">
                          <code className="text-xs break-all">https://www.googleapis.com/auth/calendar.events</code>
                        </td>
                        <td className="p-3 align-top">
                          Criar, atualizar e remover no Google Agenda os eventos correspondentes aos atendimentos marcados no MyClinic360
                        </td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="p-3 align-top">
                          <code className="text-xs break-all">https://www.googleapis.com/auth/calendar.readonly</code>
                        </td>
                        <td className="p-3 align-top">
                          Ler a disponibilidade da agenda para sinalizar conflitos de horário antes de confirmar um novo agendamento
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Não solicitamos acesso a Gmail, Google Drive, Contatos, Google Fotos ou qualquer outro serviço do Google. A tela de consentimento exibida pelo Google no momento da conexão é sempre a fonte definitiva do que está sendo autorizado.
                </p>

                <h3 className="text-xl font-medium text-foreground mb-3">6.3 Quais dados acessamos</h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Do Google Agenda: identificador do evento, título, descrição, data e hora de início e término, fuso horário, status de disponibilidade e identificador do calendário.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Da Conta Google: nome, endereço de e-mail e foto de perfil.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Não acessamos conteúdo de e-mails, arquivos, contatos ou qualquer dado de paciente armazenado no Google.
                </p>

                <h3 className="text-xl font-medium text-foreground mb-3">6.4 Como usamos esses dados</h3>
                <p className="text-foreground/80 leading-relaxed mb-3">Exclusivamente para:</p>
                <ol className="list-decimal pl-6 text-foreground/80 space-y-1 mb-6">
                  <li>criar eventos no Google Agenda quando um atendimento é marcado no MyClinic360;</li>
                  <li>atualizar ou cancelar esses eventos quando o atendimento é remarcado ou cancelado;</li>
                  <li>ler a agenda para sinalizar conflitos de horário antes de confirmar um novo agendamento;</li>
                  <li>exibir na plataforma qual Conta Google está conectada.</li>
                </ol>

                <h3 className="text-xl font-medium text-foreground mb-3">6.5 O que enviamos ao Google</h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  O usuário controla o nível de detalhe. Por padrão, o título do evento não contém nome completo nem qualquer informação clínica do paciente, e oferecemos a opção de sincronizar apenas o bloco de horário ocupado, sem identificação.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Recomendamos manter essa configuração. O Google Agenda pode estar compartilhado com familiares, colegas ou secretárias, e pode aparecer em telas de dispositivos fora do controle do profissional.
                </p>

                <h3 className="text-xl font-medium text-foreground mb-3">6.6 Uso Limitado</h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  O uso e a transferência, pelo MyClinic360, de informações recebidas das APIs do Google para qualquer outro aplicativo obedecem à{" "}
                  <a
                    href="https://developers.google.com/terms/api-services-user-data-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Política de Dados do Usuário dos Serviços de API do Google
                  </a>
                  , incluindo os requisitos de Uso Limitado.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-3">
                  Versão em inglês, para fins de verificação:
                </p>
                <blockquote
                  lang="en"
                  className="text-foreground/80 leading-relaxed bg-muted/50 p-4 rounded-lg border-l-4 border-primary mb-4"
                >
                  MyClinic360&apos;s use and transfer to any other app of information received from Google APIs will adhere to the{" "}
                  <a
                    href="https://developers.google.com/terms/api-services-user-data-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Google API Services User Data Policy
                  </a>
                  , including the Limited Use requirements.
                </blockquote>
                <p className="text-foreground/80 leading-relaxed mb-3">
                  Na prática, o MyClinic360 <strong>não</strong>:
                </p>
                <ol className="list-decimal pl-6 text-foreground/80 space-y-1 mb-6">
                  <li>vende, aluga ou cede dados obtidos das APIs do Google a terceiros;</li>
                  <li>usa esses dados para publicidade, remarketing, segmentação ou perfilamento;</li>
                  <li>usa esses dados para treinar modelos de inteligência artificial generalizados;</li>
                  <li>permite que pessoas leiam esses dados, salvo com consentimento expresso do usuário para finalidade específica, quando necessário para fins de segurança como investigação de abuso, quando exigido por lei, ou quando os dados estiverem agregados e anonimizados;</li>
                  <li>transfere esses dados para finalidades diferentes das descritas na seção 6.4.</li>
                </ol>

                <h3 className="text-xl font-medium text-foreground mb-3">6.7 Armazenamento dos tokens</h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Para manter a sincronização funcionando sem pedir autorização a cada uso, armazenamos os tokens de acesso e de atualização emitidos pelo Google. Eles ficam criptografados em repouso, com chaves gerenciadas em serviço dedicado, e são acessíveis apenas pelo processo responsável pela sincronização.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Os dados de eventos lidos do Google Agenda são mantidos apenas pelo tempo necessário para exibir a agenda e detectar conflitos. Não construímos histórico permanente da agenda pessoal do usuário.
                </p>

                <h3 className="text-xl font-medium text-foreground mb-3">6.8 Como desconectar</h3>
                <p className="text-foreground/80 leading-relaxed mb-3">
                  Você pode encerrar a integração a qualquer momento, por dois caminhos independentes:
                </p>
                <ol className="list-decimal pl-6 text-foreground/80 space-y-2 mb-4">
                  <li>
                    <strong className="text-foreground">Pela plataforma:</strong> em Configurações, na seção de integrações, clicando em &quot;Desconectar Google Agenda&quot;. Isso revoga o token junto ao Google e elimina as credenciais armazenadas.
                  </li>
                  <li>
                    <strong className="text-foreground">Pelo Google:</strong> em{" "}
                    <a
                      href="https://myaccount.google.com/permissions"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      myaccount.google.com/permissions
                    </a>
                    , removendo o acesso do MyClinic360.
                  </li>
                </ol>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Após a desconexão, os tokens são excluídos dos nossos sistemas em até 30 dias, incluindo as cópias em backup, conforme o ciclo de rotação de backups. Os eventos já criados no Google Agenda permanecem na sua conta e podem ser removidos diretamente por lá. Os agendamentos registrados dentro do MyClinic360 não são afetados.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  O encerramento da conta na plataforma revoga automaticamente a integração.
                </p>
              </section>

              <section className="mt-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Cookies</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Usamos cookies estritamente necessários para autenticação e segurança da sessão. Sem eles o login não funciona, e por isso não dependem de consentimento.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Podemos usar também cookies de análise de uso, para entender quais recursos são mais utilizados e onde a interface trava. Esses dependem do seu consentimento, coletado no primeiro acesso, e você pode alterar a escolha a qualquer momento pelo mesmo painel.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Você pode bloquear cookies nas configurações do navegador, mas isso pode impedir o funcionamento de partes da plataforma.
                </p>
              </section>

              <section className="mt-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Com quem compartilhamos</h2>
                <p className="text-foreground/80 leading-relaxed mb-3">
                  Contratamos fornecedores que tratam dados em nosso nome, sempre limitados às finalidades desta Política e sujeitos a obrigações contratuais de confidencialidade e segurança. As categorias são:
                </p>
                <ol className="list-decimal pl-6 text-foreground/80 space-y-1 mb-4">
                  <li>hospedagem e infraestrutura de nuvem;</li>
                  <li>banco de dados gerenciado;</li>
                  <li>envio de e-mails transacionais, como confirmações e recuperação de senha;</li>
                  <li>processamento de pagamentos da assinatura;</li>
                  <li>Google LLC, apenas para quem ativou a integração da seção 6.</li>
                </ol>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Também podemos compartilhar dados para cumprir determinação legal ou judicial, para exercer direitos em processo, ou em caso de reorganização societária, hipótese em que os adquirentes ficam vinculados a esta Política.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Não vendemos dados pessoais. Não cedemos dados a corretores de dados nem a redes de publicidade.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Você pode solicitar a relação atualizada dos nossos fornecedores pelo canal da seção 15.
                </p>
              </section>

              <section className="mt-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Transferência internacional</h2>
                <p className="text-foreground/80 leading-relaxed">
                  Alguns fornecedores processam dados fora do Brasil. Quando isso acontece, a transferência observa os artigos 33 e seguintes da LGPD, com cláusulas contratuais que garantem nível de proteção compatível com a lei brasileira.
                </p>
              </section>

              <section className="mt-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">10. Segurança</h2>
                <p className="text-foreground/80 leading-relaxed mb-3">
                  Aplicamos medidas técnicas e administrativas compatíveis com a sensibilidade dos dados que a plataforma armazena:
                </p>
                <ol className="list-decimal pl-6 text-foreground/80 space-y-1 mb-4">
                  <li>criptografia em trânsito, por HTTPS com TLS, e em repouso;</li>
                  <li>controle de acesso por perfil, com segregação lógica entre contas;</li>
                  <li>registro de auditoria das ações realizadas no sistema;</li>
                  <li>gestão de credenciais e chaves em serviço dedicado;</li>
                  <li>backups periódicos com restauração testada;</li>
                  <li>termo de confidencialidade assinado por quem tem acesso técnico.</li>
                </ol>
                <p className="text-foreground/80 leading-relaxed">
                  Nenhum sistema é imune a incidentes. Se ocorrer um que possa acarretar risco ou dano relevante, comunicaremos os titulares e a Autoridade Nacional de Proteção de Dados em prazo razoável, com as informações previstas no artigo 48 da LGPD, e daremos ao fisioterapeuta o apoio necessário para cumprir suas obrigações como controlador.
                </p>
              </section>

              <section className="mt-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">11. Por quanto tempo guardamos</h2>
                <div className="overflow-x-auto mb-4 rounded-lg border border-border">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="p-3 font-semibold text-foreground align-top">Dado</th>
                        <th className="p-3 font-semibold text-foreground align-top">Prazo</th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground/80">
                      <tr className="border-t border-border">
                        <td className="p-3 align-top">Cadastro e prontuários, conta ativa</td>
                        <td className="p-3 align-top">Enquanto durar a relação contratual</td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="p-3 align-top">Prontuários, após encerramento da conta</td>
                        <td className="p-3 align-top">60 dias para exportação, depois eliminação segura</td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="p-3 align-top">Registros de acesso a aplicações</td>
                        <td className="p-3 align-top">6 meses, art. 15 do Marco Civil</td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="p-3 align-top">Documentos fiscais e de cobrança</td>
                        <td className="p-3 align-top">5 anos, legislação tributária</td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="p-3 align-top">Tokens do Google</td>
                        <td className="p-3 align-top">Até a desconexão, com exclusão em até 30 dias</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  O fisioterapeuta deve observar o prazo mínimo de guarda do prontuário, que é de cinco anos contados do último registro segundo a Resolução COFFITO nº 414/2012, e exportar seus dados antes do fim do período de 60 dias.
                </p>
              </section>

              <section className="mt-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">12. Seus direitos</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  O artigo 18 da LGPD garante a você o direito de confirmar a existência de tratamento, acessar seus dados, corrigir dados incompletos ou desatualizados, solicitar anonimização, bloqueio ou eliminação de dados tratados em desconformidade com a lei, pedir a portabilidade, obter informação sobre com quem compartilhamos seus dados, saber o que acontece se você não consentir, e revogar consentimento.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Para exercer qualquer desses direitos, escreva para o Encarregado, na seção 15. Respondemos em até 15 dias.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Podemos precisar confirmar sua identidade antes de atender ao pedido, para não entregar dados à pessoa errada.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Alguns direitos têm limites. Não podemos eliminar dados que a lei nos obriga a guardar, por exemplo documentos fiscais dentro do prazo legal.
                </p>
              </section>

              <section className="mt-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">13. Menores de idade</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  A plataforma é destinada a profissionais de fisioterapia maiores de 18 anos. Não criamos contas para menores.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Prontuários de pacientes menores de idade podem ser registrados pelo fisioterapeuta no exercício da profissão. Nesse caso, cabe ao profissional obter o consentimento de pelo menos um dos pais ou do responsável legal, conforme o artigo 14 da LGPD, e observar o melhor interesse da criança e do adolescente.
                </p>
              </section>

              <section className="mt-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">14. Mudanças nesta Política</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Esta Política pode ser atualizada. A versão vigente estará sempre publicada nesta página, com a data no topo.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Mudanças relevantes serão comunicadas com antecedência mínima de 30 dias, por e-mail e por aviso dentro da plataforma.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Se a mudança alterar a forma como usamos dados obtidos das APIs do Google, solicitaremos novo consentimento antes de aplicar a nova finalidade, como exige a Política de Dados do Usuário dos Serviços de API do Google.
                </p>
              </section>

              <section className="mt-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">15. Contato</h2>
                <div className="text-foreground/80 leading-relaxed bg-muted/50 p-4 rounded-lg mb-4 space-y-2">
                  <p>
                    <strong className="text-foreground">Encarregado pelo Tratamento de Dados Pessoais (DPO):</strong> Diego Carvalho
                  </p>
                  <p>
                    <strong className="text-foreground">E-mail:</strong>{" "}
                    <a href="mailto:contato@myclinic360.com.br" className="text-primary hover:underline">
                      contato@myclinic360.com.br
                    </a>
                  </p>
                  <p>
                    <strong className="text-foreground">Endereço:</strong> Rua Nogueira Acioli, 996, Sala 01, Centro, Fortaleza, Ceará, CEP 60110-140
                  </p>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  Se você não ficar satisfeito com nossa resposta, pode apresentar reclamação à Autoridade Nacional de Proteção de Dados, em{" "}
                  <a
                    href="https://www.gov.br/anpd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    gov.br/anpd
                  </a>
                  .
                </p>
              </section>
            </article>
          </div>
        </main>

        {!isEmbed && <Footer />}
      </div>
    </>
  );
};

export default PrivacyPolicy;
