import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { embedPath, useEmbedMode } from "@/hooks/use-embed-mode";
import { cn } from "@/lib/utils";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const TermsOfUse = () => {
  const isEmbed = useEmbedMode();

  return (
    <>
      <Helmet>
        <title>Termos de Uso — MyClinic360</title>
        <meta name="description" content="Termos de Uso da plataforma MyClinic360. Conheça as condições de uso, responsabilidades, integração com o Google Agenda e o tratamento de dados em conformidade com a LGPD." />
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
        {!isEmbed && <Header />}

        <main className={cn("flex-1 pb-16", isEmbed ? "pt-6" : "pt-24")}>
          <div className="container max-w-4xl mx-auto px-4">
            <article className="prose prose-lg max-w-none">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Termos de Uso do MyClinic360
              </h1>

              <p className="text-muted-foreground mb-8">
                Última atualização: 22 de agosto de 2026 · Versão 1.0
              </p>

              <section className="mt-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Quem somos e o que este documento faz</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  O MyClinic360 é uma plataforma de gestão para fisioterapeutas, com foco em fisioterapia pélvica, operada por MYCLINIC 360 TECNOLOGIA E SOLUÇÕES DIGITAIS LTDA, inscrita no CNPJ sob o nº 62.143.608/0001-22, com sede na Rua Nogueira Acioli, 996, Sala 01, Centro, Fortaleza, Ceará, CEP 60110-140, Brasil, daqui em diante chamada simplesmente de MyClinic360.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Estes Termos de Uso regulam o acesso e a utilização do site{" "}
                  <a href="https://www.myclinic360.com.br" className="text-primary hover:underline">
                    www.myclinic360.com.br
                  </a>{" "}
                  e do sistema disponibilizado nele, incluindo prontuário eletrônico, agenda, captação de contatos e as integrações opcionais com serviços de terceiros.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Ao criar uma conta, acessar ou usar a plataforma, você declara que leu, entendeu e concorda com estes Termos e com a Política de Privacidade, que é parte integrante deste documento. Se você não concorda com alguma cláusula, não utilize a plataforma.
                </p>
              </section>

              <section className="mt-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Definições</h2>
                <dl className="text-foreground/80 leading-relaxed space-y-3">
                  <div>
                    <dt className="inline font-semibold text-foreground">Plataforma: </dt>
                    <dd className="inline">o site, o sistema web e quaisquer aplicativos oficiais do MyClinic360.</dd>
                  </div>
                  <div>
                    <dt className="inline font-semibold text-foreground">Usuário: </dt>
                    <dd className="inline">o profissional de fisioterapia ou a clínica que contrata e utiliza a Plataforma.</dd>
                  </div>
                  <div>
                    <dt className="inline font-semibold text-foreground">Paciente: </dt>
                    <dd className="inline">a pessoa atendida pelo Usuário, cujos dados são registrados na Plataforma pelo próprio Usuário.</dd>
                  </div>
                  <div>
                    <dt className="inline font-semibold text-foreground">Dados do Paciente: </dt>
                    <dd className="inline">todo conteúdo inserido pelo Usuário sobre seus pacientes, incluindo prontuário, evoluções, anamnese, agendamentos e arquivos anexos.</dd>
                  </div>
                  <div>
                    <dt className="inline font-semibold text-foreground">Conta Google: </dt>
                    <dd className="inline">a conta de titularidade do Usuário junto à Google LLC, utilizada apenas se o Usuário optar por ativar a integração descrita na cláusula 8.</dd>
                  </div>
                  <div>
                    <dt className="inline font-semibold text-foreground">Dados de Usuário do Google: </dt>
                    <dd className="inline">as informações obtidas das APIs do Google mediante autorização expressa do Usuário, conforme detalhado na cláusula 8.</dd>
                  </div>
                </dl>
              </section>

              <section className="mt-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Quem pode usar a Plataforma</h2>
                <p className="text-foreground/80 leading-relaxed mb-3">
                  A Plataforma é destinada a fisioterapeutas e clínicas de fisioterapia. Para criar uma conta, você declara que:
                </p>
                <ol className="list-decimal pl-6 text-foreground/80 space-y-1 mb-4">
                  <li>tem no mínimo 18 anos e capacidade civil plena;</li>
                  <li>é fisioterapeuta com registro ativo no CREFITO da sua região, ou representa legalmente uma pessoa jurídica que presta serviços de fisioterapia;</li>
                  <li>as informações de cadastro que você forneceu são verdadeiras, completas e atualizadas.</li>
                </ol>
                <p className="text-foreground/80 leading-relaxed">
                  O MyClinic360 pode solicitar comprovação do registro profissional a qualquer momento e suspender contas que não atendam a esse requisito.
                </p>
              </section>

              <section className="mt-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Conta, credenciais e segurança</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  A conta é pessoal e intransferível. Você é responsável por manter a confidencialidade da sua senha e por toda atividade realizada com as suas credenciais.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Comunique imediatamente qualquer uso não autorizado da sua conta pelo canal indicado na cláusula 18. Recomendamos fortemente a ativação da verificação em duas etapas quando disponível.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Contas compartilhadas entre profissionais distintos não são permitidas. Cada fisioterapeuta que acessa prontuários deve ter o próprio login, para que os registros de auditoria identifiquem corretamente quem fez cada lançamento, como exige a Resolução COFFITO nº 414/2012.
                </p>
              </section>

              <section className="mt-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Planos, pagamento e cancelamento</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Os planos, preços e ciclos de cobrança vigentes são apresentados no site do MyClinic360 e na tela de contratação, antes da confirmação da assinatura. A contratação é feita por assinatura recorrente, com renovação automática ao fim de cada ciclo, salvo cancelamento prévio.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Você pode cancelar a assinatura a qualquer momento pelo painel da Plataforma ou pelo canal de atendimento. O cancelamento produz efeitos ao final do período já pago, sem devolução proporcional, exceto nas hipóteses previstas no Código de Defesa do Consumidor.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Reajustes de preço serão comunicados com antecedência mínima de 30 dias e só valem a partir do ciclo seguinte à comunicação.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Se houver período de teste gratuito, as condições dele estarão descritas na página de planos. Ao fim do teste, a cobrança só ocorre mediante confirmação do Usuário.
                </p>
              </section>

              <section className="mt-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Prontuário eletrônico e responsabilidade clínica</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  O MyClinic360 é uma ferramenta de registro e organização. Não realiza diagnóstico, não indica conduta terapêutica e não substitui o julgamento clínico do profissional.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Toda decisão sobre avaliação, tratamento e alta é de responsabilidade exclusiva do Usuário, que responde perante o paciente, o CREFITO e as autoridades competentes pelo conteúdo dos registros que insere na Plataforma.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-3">O Usuário é responsável por:</p>
                <ol className="list-decimal pl-6 text-foreground/80 space-y-1 mb-4">
                  <li>obter do paciente o consentimento necessário para o tratamento dos dados de saúde, quando aplicável;</li>
                  <li>manter os registros completos e legíveis, com os elementos mínimos exigidos pela Resolução COFFITO nº 414/2012;</li>
                  <li>observar o dever de sigilo profissional;</li>
                  <li>respeitar o prazo mínimo de guarda do prontuário, que é de cinco anos contados do último registro, podendo ser ampliado por determinação legal ou judicial.</li>
                </ol>
                <p className="text-foreground/80 leading-relaxed">
                  O MyClinic360 mantém os Dados do Paciente disponíveis enquanto a conta estiver ativa e por 60 dias após o encerramento, período em que o Usuário pode exportar seus dados. Depois disso, os dados são eliminados de forma segura, ressalvadas as hipóteses de retenção obrigatória previstas em lei.
                </p>
              </section>

              <section className="mt-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Proteção de dados e papéis das partes</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Em relação aos Dados do Paciente, o Usuário atua como <strong>controlador</strong> e o MyClinic360 atua como <strong>operador</strong>, nos termos dos artigos 5º, VI e VII, da Lei nº 13.709/2018 (LGPD). Isso significa que o MyClinic360 trata esses dados apenas conforme as instruções do Usuário e para prestar o serviço contratado.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Em relação aos dados cadastrais do próprio Usuário, aos dados de faturamento e aos registros de acesso à Plataforma, o MyClinic360 atua como <strong>controlador</strong>.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Dados de saúde são dados pessoais sensíveis. A Plataforma aplica controles técnicos e administrativos compatíveis, incluindo criptografia em trânsito e em repouso, controle de acesso por perfil, registro de auditoria e segregação lógica entre contas.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  O detalhamento completo sobre coleta, finalidade, base legal, compartilhamento, retenção e exercício de direitos do titular está na{" "}
                  <Link to={embedPath("/politica-de-privacidade", isEmbed)} className="text-primary hover:underline">
                    Política de Privacidade
                  </Link>.
                </p>
              </section>

              <section className="mt-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Integração opcional com o Google Agenda</h2>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Esta cláusula descreve como a Plataforma acessa, usa, armazena e compartilha dados obtidos das APIs do Google. Ela complementa a Política de Privacidade e prevalece sobre disposições genéricas deste documento em caso de conflito.
                </p>

                <h3 className="text-xl font-medium text-foreground mb-3">8.1 A integração é opcional</h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  A sincronização com o Google Agenda é um recurso adicional e facultativo. A Plataforma funciona integralmente sem ela: agenda, prontuário, cadastro de pacientes e todos os demais recursos permanecem disponíveis para quem nunca conectar uma Conta Google.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Nenhuma conexão é feita automaticamente. A integração só é ativada quando o Usuário clica deliberadamente no botão de conexão dentro do painel e conclui o fluxo de consentimento OAuth 2.0 exibido pelo próprio Google.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  O MyClinic360 não exige Conta Google para cadastro, login ou uso da Plataforma.
                </p>

                <h3 className="text-xl font-medium text-foreground mb-3">8.2 Escopos solicitados e o que cada um permite</h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Ao conectar, o Google exibirá a tela de consentimento com as permissões solicitadas. O MyClinic360 pede apenas o conjunto mínimo necessário para o funcionamento do recurso:
                </p>
                <div className="overflow-x-auto mb-4 rounded-lg border border-border">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="p-3 font-semibold text-foreground align-top">Escopo</th>
                        <th className="p-3 font-semibold text-foreground align-top">Para que serve na Plataforma</th>
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
                          Identificar qual Conta Google foi conectada e exibir o e-mail vinculado na tela de configurações, para que o Usuário saiba qual conta está ativa
                        </td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="p-3 align-top">
                          <code className="text-xs break-all">https://www.googleapis.com/auth/calendar.events</code>
                        </td>
                        <td className="p-3 align-top">
                          Criar, atualizar e remover no Google Agenda os eventos correspondentes aos atendimentos agendados no MyClinic360, e ler eventos para detectar conflitos de horário
                        </td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="p-3 align-top">
                          <code className="text-xs break-all">https://www.googleapis.com/auth/calendar.readonly</code>
                        </td>
                        <td className="p-3 align-top">
                          Ler a disponibilidade da agenda do Usuário para evitar agendamentos sobrepostos
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  O MyClinic360 não solicita escopos de Gmail, Google Drive, Contatos, Fotos ou qualquer outro serviço do Google. A lista exibida na tela de consentimento do Google é sempre a fonte definitiva do que está sendo autorizado.
                </p>

                <h3 className="text-xl font-medium text-foreground mb-3">8.3 Quais dados são acessados</h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Do Google Agenda do Usuário, a Plataforma acessa: identificador do evento, título, descrição, data e hora de início e término, fuso horário, status de disponibilidade e o identificador do calendário. Da Conta Google, acessa nome, endereço de e-mail e foto de perfil.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  A Plataforma não acessa dados de pacientes armazenados no Google, não lê conteúdo de e-mails e não acessa arquivos.
                </p>

                <h3 className="text-xl font-medium text-foreground mb-3">8.4 Como esses dados são usados</h3>
                <p className="text-foreground/80 leading-relaxed mb-3">
                  Os Dados de Usuário do Google são utilizados exclusivamente para:
                </p>
                <ol className="list-decimal pl-6 text-foreground/80 space-y-1 mb-4">
                  <li>criar eventos no Google Agenda quando um atendimento é marcado no MyClinic360;</li>
                  <li>atualizar ou cancelar esses eventos quando o atendimento é remarcado ou cancelado;</li>
                  <li>ler a agenda para sinalizar conflitos de horário antes de confirmar um novo agendamento;</li>
                  <li>exibir na Plataforma qual Conta Google está conectada.</li>
                </ol>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  O Usuário controla o nível de detalhe enviado ao Google. Por padrão, o título do evento não contém nome completo nem qualquer informação clínica do paciente, e o MyClinic360 oferece a opção de sincronizar apenas o bloco de horário ocupado, sem identificação. Recomendamos manter essa configuração, já que o Google Agenda pode estar compartilhado com terceiros ou visível em dispositivos fora do controle do Usuário.
                </p>

                <h3 className="text-xl font-medium text-foreground mb-3">8.5 Uso Limitado (Limited Use)</h3>
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
                  Versão em inglês, para fins de verificação junto ao Google:
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
                  Na prática, isso significa que o MyClinic360 <strong>não</strong>:
                </p>
                <ol className="list-decimal pl-6 text-foreground/80 space-y-1 mb-6">
                  <li>vende, aluga ou cede Dados de Usuário do Google a terceiros;</li>
                  <li>usa esses dados para publicidade, remarketing, segmentação ou perfilamento de qualquer natureza;</li>
                  <li>usa esses dados para treinar modelos de inteligência artificial generalizados;</li>
                  <li>permite que pessoas leiam esses dados, salvo quando o Usuário der consentimento expresso para uma finalidade específica, quando for necessário para fins de segurança como investigação de abuso, quando exigido por lei, ou quando os dados estiverem agregados e anonimizados para relatórios internos de uso;</li>
                  <li>transfere esses dados para finalidades diferentes das descritas na cláusula 8.4.</li>
                </ol>

                <h3 className="text-xl font-medium text-foreground mb-3">8.6 Armazenamento e segurança dos tokens</h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Para manter a sincronização funcionando sem pedir autorização a cada uso, o MyClinic360 armazena os tokens de acesso e de atualização (refresh token) emitidos pelo Google. Esses tokens ficam criptografados em repouso, com chaves gerenciadas em serviço dedicado, e são acessíveis apenas pelo processo responsável pela sincronização.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Os dados de eventos lidos do Google Agenda são mantidos apenas pelo tempo necessário para exibir a agenda e detectar conflitos. O MyClinic360 não constrói um histórico permanente da agenda pessoal do Usuário.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Os tokens são armazenados em infraestrutura de nuvem contratada pelo MyClinic360, com controles de acesso restrito. Havendo transferência internacional de dados, ela observa os artigos 33 e seguintes da LGPD.
                </p>

                <h3 className="text-xl font-medium text-foreground mb-3">8.7 Como desconectar e revogar o acesso</h3>
                <p className="text-foreground/80 leading-relaxed mb-3">
                  O Usuário pode encerrar a integração a qualquer momento, por dois caminhos independentes:
                </p>
                <ol className="list-decimal pl-6 text-foreground/80 space-y-2 mb-4">
                  <li>
                    <strong className="text-foreground">Pela Plataforma:</strong> em Configurações, na seção de integrações, clicando em &quot;Desconectar Google Agenda&quot;. Isso revoga o token junto ao Google e elimina as credenciais armazenadas.
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
                  Após a desconexão, os tokens são excluídos dos nossos sistemas em até 30 dias, incluindo as cópias em backup, conforme o ciclo de rotação de backups. Os eventos já criados no Google Agenda permanecem na conta do Usuário, que pode removê-los diretamente pelo Google. Os agendamentos registrados dentro do MyClinic360 não são afetados.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  O encerramento da conta na Plataforma revoga automaticamente a integração.
                </p>

                <h3 className="text-xl font-medium text-foreground mb-3">8.8 Limites do recurso</h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  A sincronização depende da disponibilidade das APIs do Google, de limites de requisição impostos por ele e da conectividade do Usuário. Atrasos, falhas parciais ou indisponibilidade temporária podem ocorrer.
                </p>
                <p className="text-foreground/80 leading-relaxed bg-muted/50 p-4 rounded-lg mb-4">
                  <strong>Importante:</strong> o Google Agenda não é a fonte oficial da agenda clínica. O registro válido para fins profissionais e legais é o que consta no MyClinic360. Confira sempre a agenda na Plataforma antes de confirmar um atendimento.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  O MyClinic360 não responde por alterações que o Usuário ou terceiros com acesso à Conta Google façam diretamente nos eventos sincronizados.
                </p>
              </section>

              <section className="mt-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Outras integrações e serviços de terceiros</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  A Plataforma pode oferecer integrações adicionais com serviços de terceiros, sempre de ativação opcional. Cada integração está sujeita aos termos e à política de privacidade do respectivo fornecedor, e o MyClinic360 não responde pelo funcionamento ou pelas práticas de privacidade desses serviços.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  O MyClinic360 contrata provedores de infraestrutura, hospedagem, envio de mensagens e processamento de pagamentos que podem tratar dados em seu nome, sempre limitados às finalidades deste documento e sujeitos a obrigações contratuais de confidencialidade e segurança. O Usuário pode solicitar a relação atualizada desses fornecedores pelo canal indicado na cláusula 18.
                </p>
              </section>

              <section className="mt-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">10. Propriedade intelectual</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  O software, a marca MyClinic360, a identidade visual, os textos, a interface e a documentação são de titularidade do MyClinic360 e estão protegidos pela Lei nº 9.610/1998 e pela Lei nº 9.609/1998.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  A contratação concede ao Usuário uma licença de uso pessoal, limitada, revogável, não exclusiva e intransferível, restrita à finalidade destes Termos. Não há transferência de titularidade sobre o software.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  É vedado copiar, descompilar, aplicar engenharia reversa, sublicenciar, revender ou criar obras derivadas da Plataforma sem autorização expressa e por escrito.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Os Dados do Paciente e o conteúdo inserido pelo Usuário permanecem de titularidade dele. O MyClinic360 recebe apenas a licença necessária para hospedar, processar e exibir esse conteúdo na prestação do serviço.
                </p>
              </section>

              <section className="mt-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">11. Condutas vedadas</h2>
                <p className="text-foreground/80 leading-relaxed mb-3">O Usuário se compromete a não:</p>
                <ol className="list-decimal pl-6 text-foreground/80 space-y-1">
                  <li>usar a Plataforma para finalidade ilícita ou que viole a legislação sanitária, a LGPD ou as normas do COFFITO;</li>
                  <li>inserir dados de pacientes sem base legal adequada;</li>
                  <li>tentar acessar contas, dados ou áreas do sistema para os quais não tenha autorização;</li>
                  <li>realizar testes de intrusão, varreduras ou ataques de negação de serviço sem autorização prévia e por escrito;</li>
                  <li>usar robôs, scrapers ou automações não autorizadas para extrair dados da Plataforma;</li>
                  <li>sobrecarregar deliberadamente a infraestrutura;</li>
                  <li>revender, sublicenciar ou disponibilizar o acesso a terceiros não autorizados.</li>
                </ol>
              </section>

              <section className="mt-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">12. Disponibilidade e suporte</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  O MyClinic360 empenha esforços razoáveis para manter a Plataforma disponível de forma contínua, mas não garante operação ininterrupta ou livre de erros.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Podem ocorrer interrupções para manutenção programada, que serão comunicadas com antecedência sempre que possível, e interrupções emergenciais por falhas de infraestrutura, ataques ou eventos fora do controle do MyClinic360.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  O suporte é prestado pelo canal indicado na cláusula 18, em dias úteis, com prazo de primeira resposta de até dois dias úteis.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  O Usuário deve manter cópias de segurança próprias dos dados críticos, usando as funções de exportação disponíveis na Plataforma.
                </p>
              </section>

              <section className="mt-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">13. Limitação de responsabilidade</h2>
                <p className="text-foreground/80 leading-relaxed mb-3">
                  Dentro dos limites permitidos pela legislação brasileira, o MyClinic360 não responde por:
                </p>
                <ol className="list-decimal pl-6 text-foreground/80 space-y-1 mb-4">
                  <li>decisões clínicas tomadas pelo Usuário;</li>
                  <li>conteúdo inserido pelo Usuário na Plataforma;</li>
                  <li>lucros cessantes, perda de oportunidade ou danos indiretos;</li>
                  <li>indisponibilidade de serviços de terceiros, inclusive das APIs do Google;</li>
                  <li>acessos indevidos decorrentes de negligência do Usuário na guarda das próprias credenciais.</li>
                </ol>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  A responsabilidade total do MyClinic360, em qualquer hipótese, fica limitada ao valor pago pelo Usuário nos 12 meses anteriores ao evento que originou a demanda.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Nada nesta cláusula afasta direitos indisponíveis do consumidor previstos na Lei nº 8.078/1990.
                </p>
              </section>

              <section className="mt-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">14. Incidentes de segurança</h2>
                <p className="text-foreground/80 leading-relaxed">
                  Havendo incidente de segurança que possa acarretar risco ou dano relevante aos titulares, o MyClinic360 comunicará o Usuário em prazo razoável, com as informações previstas no artigo 48 da LGPD, e prestará o apoio necessário para que o Usuário cumpra suas obrigações como controlador perante a ANPD e os titulares.
                </p>
              </section>

              <section className="mt-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">15. Suspensão e rescisão</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  O MyClinic360 pode suspender ou encerrar o acesso em caso de inadimplência, violação destes Termos, uso que comprometa a segurança da Plataforma ou determinação legal.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Sempre que possível, a suspensão será precedida de notificação com prazo para regularização. Em situações de risco iminente à segurança ou aos dados de terceiros, a suspensão pode ser imediata.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  O Usuário pode encerrar a conta a qualquer momento e terá acesso à exportação dos seus dados pelo prazo indicado na cláusula 6.
                </p>
              </section>

              <section className="mt-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">16. Alterações destes Termos</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Estes Termos podem ser atualizados para refletir mudanças legais, técnicas ou de produto. A versão vigente estará sempre publicada nesta página, com a data de atualização no topo.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Alterações relevantes serão comunicadas com antecedência mínima de 30 dias, por e-mail e por aviso dentro da Plataforma.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Se a mudança alterar a forma como os Dados de Usuário do Google são utilizados, o MyClinic360 solicitará novo consentimento antes de aplicar a nova finalidade, conforme exigido pela Política de Dados do Usuário dos Serviços de API do Google.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  O uso continuado da Plataforma após a entrada em vigor da nova versão indica concordância. Quem não concordar pode encerrar a conta sem ônus antes da data de vigência.
                </p>
              </section>

              <section className="mt-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">17. Lei aplicável e foro</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Estes Termos são regidos pelas leis da República Federativa do Brasil.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Fica eleito o foro da comarca de Fortaleza, Ceará, para dirimir controvérsias, ressalvado o direito do consumidor de propor ação no foro do seu domicílio, nos termos do artigo 101, I, do Código de Defesa do Consumidor.
                </p>
              </section>

              <section className="mt-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">18. Contato</h2>
                <div className="text-foreground/80 leading-relaxed bg-muted/50 p-4 rounded-lg mb-4 space-y-2">
                  <p>
                    <strong className="text-foreground">Atendimento e suporte:</strong>{" "}
                    <a href="mailto:contato@myclinic360.com.br" className="text-primary hover:underline">
                      contato@myclinic360.com.br
                    </a>
                  </p>
                  <p>
                    <strong className="text-foreground">Encarregado pelo Tratamento de Dados Pessoais (DPO):</strong> Diego Carvalho,{" "}
                    <a href="mailto:contato@myclinic360.com.br" className="text-primary hover:underline">
                      contato@myclinic360.com.br
                    </a>
                  </p>
                  <p>
                    <strong className="text-foreground">Endereço:</strong> Rua Nogueira Acioli, 996, Sala 01, Centro, Fortaleza, Ceará, CEP 60110-140
                  </p>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  Para exercer direitos previstos no artigo 18 da LGPD, escreva para o Encarregado. Responderemos em até 15 dias.
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

export default TermsOfUse;
