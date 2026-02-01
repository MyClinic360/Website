import { lazy, Suspense } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SchemaOrg } from "@/components/SchemaOrg";
import { Footer } from "@/components/Footer";

// Lazy load components below the fold for better FCP/LCP
const Modules = lazy(() => import("@/components/Modules").then(m => ({ default: m.Modules })));
const Differentials = lazy(() => import("@/components/Differentials").then(m => ({ default: m.Differentials })));
const WhyDifferent = lazy(() => import("@/components/WhyDifferent").then(m => ({ default: m.WhyDifferent })));
const HowItWorks = lazy(() => import("@/components/HowItWorks").then(m => ({ default: m.HowItWorks })));
const QuestionnairesSection = lazy(() => import("@/components/QuestionnairesSection").then(m => ({ default: m.QuestionnairesSection })));
const LeadCaptureSection = lazy(() => import("@/components/LeadCaptureSection").then(m => ({ default: m.LeadCaptureSection })));
const ProfileSection = lazy(() => import("@/components/ProfileSection").then(m => ({ default: m.ProfileSection })));
const Audience = lazy(() => import("@/components/Audience").then(m => ({ default: m.Audience })));
const Pricing = lazy(() => import("@/components/Pricing").then(m => ({ default: m.Pricing })));
const FAQ = lazy(() => import("@/components/FAQ").then(m => ({ default: m.FAQ })));
const CTA = lazy(() => import("@/components/CTA").then(m => ({ default: m.CTA })));

// Minimal loading placeholder
const SectionLoader = () => (
  <div className="py-16 sm:py-24 md:py-32 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SchemaOrg />
      <Header />
      <main role="main">
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <section aria-label="Módulos da plataforma">
            <Modules />
          </section>
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <section aria-label="Diferenciais">
            <Differentials />
          </section>
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <section aria-label="Por que somos diferentes">
            <WhyDifferent />
          </section>
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <section aria-label="Como funciona">
            <HowItWorks />
          </section>
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <section aria-label="Questionários">
            <QuestionnairesSection />
          </section>
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <section aria-label="Captação de leads">
            <LeadCaptureSection />
          </section>
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <section aria-label="Perfil profissional">
            <ProfileSection />
          </section>
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <section aria-label="Para quem é">
            <Audience />
          </section>
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <section aria-label="Planos e preços">
            <Pricing />
          </section>
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <section aria-label="Perguntas frequentes">
            <FAQ />
          </section>
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <section aria-label="Chamada para ação">
            <CTA />
          </section>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
