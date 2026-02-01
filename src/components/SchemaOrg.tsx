import { Helmet } from "react-helmet-async";

const faqs = [
  {
    question: "O que é o MyClinic360?",
    answer:
      "O MyClinic360 é uma plataforma digital completa de gestão clínica, criada exclusivamente para fisioterapeutas. Ela centraliza pacientes, formulários clínicos, organização do atendimento e presença digital em um único sistema profissional, seguro e fácil de usar.",
  },
  {
    question: "O MyClinic360 é apenas um site?",
    answer:
      "Não. O site do MyClinic360 é a porta de entrada para apresentar a solução e gerar leads. O produto principal é o sistema (web app), onde o fisioterapeuta acessa sua conta, gerencia pacientes, aplica formulários clínicos, acompanha dados e organiza sua rotina profissional.",
  },
  {
    question: "Para quem o MyClinic360 foi criado?",
    answer:
      "O MyClinic360 foi desenvolvido exclusivamente para fisioterapeutas, com foco especial em fisioterapia pélvica. Toda a estrutura, linguagem e funcionalidades foram pensadas para a realidade clínica desse profissional.",
  },
  {
    question: "O MyClinic360 é gratuito?",
    answer:
      "Não. O MyClinic360 é um sistema pago por assinatura, pois envolve infraestrutura, segurança de dados, evolução contínua e suporte profissional. O investimento garante mais organização, credibilidade e crescimento para a clínica.",
  },
  {
    question: "Quais funcionalidades o sistema oferece?",
    answer:
      "Entre as principais funcionalidades estão: Cadastro completo de pacientes, Histórico clínico organizado e centralizado, Aplicação de formulários clínicos validados, Evolução de atendimentos ao longo do tempo, Organização da rotina clínica em um ambiente profissional e seguro. Tudo em um único lugar, sem planilhas ou ferramentas soltas.",
  },
  {
    question: "Preciso instalar algo para usar o MyClinic360?",
    answer:
      "Não. O MyClinic360 funciona 100% online. Basta acessar pelo navegador, fazer login e começar a usar. Não é necessário instalar aplicativos ou softwares adicionais.",
  },
];

export function SchemaOrg() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "MyClinic360",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "Web",
    "description": "Plataforma digital completa de gestão clínica para fisioterapeutas. Sistema profissional para gerenciar pacientes, prontuários e formulários clínicos.",
    "url": "https://www.myclinic360.com.br",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "BRL",
      "lowPrice": "97",
      "highPrice": "197",
      "offerCount": "2"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "1"
    },
    "publisher": {
      "@type": "Organization",
      "name": "MyClinic360",
      "url": "https://www.myclinic360.com.br",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.myclinic360.com.br/og-myclinic360.png?v=1"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "contato@myclinic360.com",
        "contactType": "customer service",
        "availableLanguage": "Portuguese"
      }
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "MyClinic360",
    "url": "https://www.myclinic360.com.br",
    "description": "Sistema de gestão clínica para fisioterapeutas",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.myclinic360.com.br/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Início",
        "item": "https://www.myclinic360.com.br"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Módulos",
        "item": "https://www.myclinic360.com.br/#modulos"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Planos",
        "item": "https://www.myclinic360.com.br/#planos"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "FAQ",
        "item": "https://www.myclinic360.com.br/#faq"
      }
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>MyClinic360 - Sistema de Gestão Clínica para Fisioterapeutas</title>
      <meta name="title" content="MyClinic360 - Sistema de Gestão Clínica para Fisioterapeutas" />
      <meta name="description" content="Plataforma digital completa para fisioterapeutas. Gerencie pacientes, prontuários eletrônicos, formulários clínicos validados e organize sua rotina profissional em um único sistema seguro." />
      <meta name="keywords" content="gestão clínica, fisioterapia, prontuário eletrônico, sistema para fisioterapeutas, fisioterapia pélvica, formulários clínicos, gestão de pacientes" />
      <meta name="author" content="MyClinic360" />
      <link rel="canonical" href="https://www.myclinic360.com.br" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.myclinic360.com.br" />
      <meta property="og:title" content="MyClinic360 - Sistema de Gestão Clínica para Fisioterapeutas" />
      <meta property="og:description" content="Plataforma digital completa para fisioterapeutas. Gerencie pacientes, prontuários eletrônicos e formulários clínicos validados em um único sistema seguro." />
      <meta property="og:image" content="https://www.myclinic360.com.br/og-myclinic360.png?v=1" />
      <meta property="og:image:width" content="1536" />
      <meta property="og:image:height" content="800" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="MyClinic360" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://www.myclinic360.com.br" />
      <meta name="twitter:title" content="MyClinic360 - Sistema de Gestão Clínica para Fisioterapeutas" />
      <meta name="twitter:description" content="Plataforma digital completa para fisioterapeutas. Gerencie pacientes, prontuários eletrônicos e formulários clínicos validados em um único sistema seguro." />
      <meta name="twitter:image" content="https://www.myclinic360.com.br/og-myclinic360.png?v=1" />
      <meta name="twitter:creator" content="@myclinic360" />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="theme-color" content="#0D9488" />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
}
