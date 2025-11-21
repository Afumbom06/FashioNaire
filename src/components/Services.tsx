import { motion } from 'motion/react';
import { Scissors, Heart, Sparkles, Package, Calendar, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

interface ServicesProps {
  language: 'en' | 'fr';
  theme: 'light' | 'dark';
}

export default function Services({ language, theme }: ServicesProps) {
  const content = {
    en: {
      title: 'Our Services',
      subtitle: 'Beyond ready-to-wear: Bespoke fashion experiences',
      bookNow: 'Book Appointment',
      inquire: 'Inquire Now',
      stats: [
        { value: '500+', label: 'Designs Created' },
        { value: '15+', label: 'Years Experience' },
        { value: '300+', label: 'Happy Clients' },
        { value: '50+', label: 'Wedding Collections' }
      ],
      services: [
        {
          icon: Scissors,
          title: 'Custom Tailoring',
          description: 'Personalized designs crafted to your exact measurements and style preferences. From concept to creation, we bring your vision to life.',
          features: ['Personal consultation', 'Premium fabrics', 'Multiple fittings', 'Perfect fit guarantee']
        },
        {
          icon: Heart,
          title: 'Bridal & Wedding',
          description: 'Make your special day unforgettable with exquisite bridal wear that blends tradition with contemporary elegance.',
          features: ['Bridal gowns', 'Groom attire', 'Bridesmaid dresses', 'Family coordination']
        },
        {
          icon: Sparkles,
          title: 'Fashion Consultation',
          description: 'Expert styling advice to elevate your wardrobe. Learn what works for your body type, lifestyle, and personal brand.',
          features: ['Style assessment', 'Wardrobe planning', 'Color analysis', 'Shopping guidance']
        },
        {
          icon: Package,
          title: 'Fabric Sourcing',
          description: 'Access to premium African and international fabrics. We help you choose the perfect materials for your custom pieces.',
          features: ['Authentic fabrics', 'Quality assurance', 'Direct sourcing', 'Competitive prices']
        }
      ]
    },
    fr: {
      title: 'Nos Services',
      subtitle: 'Au-delà du prêt-à-porter : Expériences de mode sur mesure',
      bookNow: 'Réserver',
      inquire: 'Demander',
      stats: [
        { value: '500+', label: 'Créations Réalisées' },
        { value: '15+', label: 'Ans d\'Expérience' },
        { value: '300+', label: 'Clients Satisfaits' },
        { value: '50+', label: 'Collections Mariages' }
      ],
      services: [
        {
          icon: Scissors,
          title: 'Couture Sur Mesure',
          description: 'Designs personnalisés selon vos mesures exactes et préférences de style. Du concept à la création, nous donnons vie à votre vision.',
          features: ['Consultation personnelle', 'Tissus premium', 'Essayages multiples', 'Garantie d\'ajustement']
        },
        {
          icon: Heart,
          title: 'Mariages & Cérémonies',
          description: 'Rendez votre jour spécial inoubliable avec des tenues de mariée exquises alliant tradition et élégance contemporaine.',
          features: ['Robes de mariée', 'Tenues de marié', 'Robes demoiselles', 'Coordination famille']
        },
        {
          icon: Sparkles,
          title: 'Consultation Mode',
          description: 'Conseils de stylisme experts pour élever votre garde-robe. Découvrez ce qui fonctionne pour vous.',
          features: ['Évaluation style', 'Planification garde-robe', 'Analyse couleurs', 'Guide shopping']
        },
        {
          icon: Package,
          title: 'Sourcing de Tissus',
          description: 'Accès aux tissus africains et internationaux premium. Nous vous aidons à choisir les matériaux parfaits.',
          features: ['Tissus authentiques', 'Garantie qualité', 'Sourcing direct', 'Prix compétitifs']
        }
      ]
    }
  };

  const t = content[language];

  return (
    <div className={`min-h-screen pt-32 pb-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl mb-4">{t.title}</h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">{t.subtitle}</p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {t.stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className={`text-center p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}
            >
              <div className="text-4xl text-amber-600 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {t.services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <Card className={`h-full ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : ''} hover:shadow-xl transition-shadow`}>
                  <CardHeader>
                    <div className="w-16 h-16 bg-amber-600 rounded-lg flex items-center justify-center mb-4">
                      <Icon size={32} className="text-white" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className={theme === 'dark' ? 'text-gray-400' : ''}>
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-3">
                      <Button className="flex-1">
                        <Calendar size={16} className="mr-2" />
                        {t.bookNow}
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <MessageCircle size={16} className="mr-2" />
                        {t.inquire}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-amber-600 to-amber-800 rounded-lg p-12 text-center text-white"
        >
          <h2 className="text-4xl mb-4">
            {language === 'en' ? 'Ready to Create Something Unique?' : 'Prêt à Créer Quelque Chose d\'Unique?'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {language === 'en' 
              ? 'Book a consultation with our design team today'
              : 'Réservez une consultation avec notre équipe de design aujourd\'hui'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-amber-900 hover:bg-gray-100">
              {t.bookNow}
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              {language === 'en' ? 'View Portfolio' : 'Voir Portfolio'}
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
