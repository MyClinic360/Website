import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-branco.svg";
const links = {
  produto: [{
    label: "Benefícios",
    href: "/beneficios"
  }, {
    label: "Para Quem",
    href: "/#publico"
  }, {
    label: "Diferenciais",
    href: "/diferenciais"
  }, {
    label: "FAQ",
    href: "/#faq"
  }],
  legal: [{
    label: "Termos de Uso",
    href: "/termos-de-uso"
  }, {
    label: "Política de Privacidade",
    href: "/politica-de-privacidade"
  }, {
    label: "Suporte",
    href: "/suporte"
  }]
};
const socials = [{
  icon: Instagram,
  href: "https://instagram.com/myclinic.360",
  label: "Instagram"
}, {
  icon: Linkedin,
  href: "https://www.linkedin.com/company/my-clinic-360/",
  label: "LinkedIn"
}];
export function Footer() {
  return <footer className="py-10 sm:py-16 bg-[#008582] text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          <div className="sm:col-span-2 lg:col-span-2 text-center sm:text-left">
            <Link to="/" className="inline-flex items-center mb-4">
              <img src={logo} alt="MyClinic360" className="h-10 sm:h-12 md:h-14" />
            </Link>
            <p className="text-white/80 mb-4 sm:mb-6 max-w-sm mx-auto sm:mx-0 text-sm sm:text-base leading-relaxed">
              Plataforma completa para organização clínica, crescimento profissional e
              presença digital do fisioterapeuta pélvico.
            </p>
            
          </div>

          <div className="text-center sm:text-left">
            <h4 className="font-heading font-bold text-base sm:text-lg mb-3 sm:mb-4 text-white">Plataforma</h4>
            <ul className="space-y-2 sm:space-y-3">
              {links.produto.map(link => <li key={link.label}>
                  <Link to={link.href} className="text-white/80 hover:text-white transition-colors text-sm sm:text-base">
                    {link.label}
                  </Link>
                </li>)}
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="font-heading font-bold text-base sm:text-lg mb-3 sm:mb-4 text-white">Legal</h4>
            <ul className="space-y-2 sm:space-y-3">
              {links.legal.map(link => <li key={link.label}>
                  <Link to={link.href} className="text-white/80 hover:text-white transition-colors text-sm sm:text-base">
                    {link.label}
                  </Link>
                </li>)}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 sm:pt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-white/70 text-xs sm:text-sm text-center sm:text-left order-2 sm:order-1">
            © {new Date().getFullYear()} MyClinic360. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2 sm:gap-3 order-1 sm:order-2">
            {socials.map(social => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:bg-white/20 hover:text-white transition-all" aria-label={social.label}>
                <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>)}
          </div>
        </div>
      </div>
    </footer>;
}