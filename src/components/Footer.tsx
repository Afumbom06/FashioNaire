import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface FooterProps {
  language: 'en' | 'fr';
  theme: 'light' | 'dark';
  onNavigate: (page: string) => void;
}

export default function Footer({ language, theme, onNavigate }: FooterProps) {
  const content = {
    en: {
      about: 'About Afrique Couture',
      aboutText: 'Cameroonian excellence meets global fashion. Creating timeless pieces that celebrate heritage and craftsmanship since 2009.',
      quickLinks: 'Quick Links',
      shop: 'Shop',
      collections: 'Collections',
      services: 'Services',
      about: 'About',
      blog: 'Blog',
      gallery: 'Gallery',
      contact: 'Contact',
      newsletter: 'Newsletter',
      newsletterText: 'Subscribe to receive exclusive offers and updates',
      subscribe: 'Subscribe',
      emailPlaceholder: 'Enter your email',
      followUs: 'Follow Us',
      madeWith: 'Made with',
      in: 'in Cameroon',
      allRights: '2025 Afrique Couture. All rights reserved.'
    },
    fr: {
      about: 'À Propos d\'Afrique Couture',
      aboutText: 'L\'excellence camerounaise rencontre la mode mondiale. Créer des pièces intemporelles qui célèbrent le patrimoine et l\'artisanat depuis 2009.',
      quickLinks: 'Liens Rapides',
      shop: 'Boutique',
      collections: 'Collections',
      services: 'Services',
      about: 'À Propos',
      blog: 'Blog',
      gallery: 'Galerie',
      contact: 'Contact',
      newsletter: 'Newsletter',
      newsletterText: 'Abonnez-vous pour recevoir des offres exclusives et des mises à jour',
      subscribe: 'S\'abonner',
      emailPlaceholder: 'Votre email',
      followUs: 'Suivez-Nous',
      madeWith: 'Fait avec',
      in: 'au Cameroun',
      allRights: '2025 Afrique Couture. Tous droits réservés.'
    }
  };

  const t = content[language];

  return (
    <footer className={`${theme === 'dark' ? 'bg-gray-950 border-t border-gray-800' : 'bg-gray-900 text-white'} pt-16 pb-8`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl mb-4">AFRIQUE COUTURE</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {t.aboutText}
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-amber-600" />
                <span>Bastos Quarter, Avenue Kennedy, Yaoundé, Cameroon</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="flex-shrink-0 text-amber-600" />
                <span>+237 6 99 12 34 56</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="flex-shrink-0 text-amber-600" />
                <span>contact@afriquecouture.cm</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg mb-4">{t.quickLinks}</h4>
            <ul className="space-y-3 text-sm">
              {['shop', 'collections', 'services', 'about', 'blog', 'gallery', 'contact'].map(link => (
                <li key={link}>
                  <button
                    onClick={() => onNavigate(link)}
                    className="text-gray-400 hover:text-amber-600 transition-colors"
                  >
                    {t[link as keyof typeof t] as string}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Customer Service */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg mb-4">
              {language === 'en' ? 'Customer Service' : 'Service Client'}
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-amber-600 transition-colors">
                  {language === 'en' ? 'Shipping Info' : 'Info Livraison'}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-600 transition-colors">
                  {language === 'en' ? 'Returns & Exchanges' : 'Retours & Échanges'}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-600 transition-colors">
                  {language === 'en' ? 'Size Guide' : 'Guide des Tailles'}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-600 transition-colors">
                  {language === 'en' ? 'Care Instructions' : 'Instructions d\'Entretien'}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-600 transition-colors">
                  {language === 'en' ? 'Privacy Policy' : 'Politique de Confidentialité'}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-600 transition-colors">
                  {language === 'en' ? 'Terms & Conditions' : 'Conditions Générales'}
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg mb-4">{t.newsletter}</h4>
            <p className="text-gray-400 text-sm mb-4">
              {t.newsletterText}
            </p>
            <div className="flex gap-2 mb-6">
              <Input
                type="email"
                placeholder={t.emailPlaceholder}
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
              />
              <Button className="bg-amber-600 hover:bg-amber-700 whitespace-nowrap">
                {t.subscribe}
              </Button>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-sm mb-3">{t.followUs}</h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400"
        >
          <p>
            {t.allRights}
          </p>
          <p className="flex items-center gap-2">
            {t.madeWith} <span className="text-red-500">❤️</span> {t.in}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
