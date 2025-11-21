import { motion } from 'motion/react';
import { Award, Users, MapPin, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent } from './ui/card';

interface AboutProps {
  language: 'en' | 'fr';
  theme: 'light' | 'dark';
}

export default function About({ language, theme }: AboutProps) {
  const content = {
    en: {
      title: 'About Us',
      subtitle: 'The story behind Afrique Couture',
      designerTitle: 'Meet the Designer',
      designerName: 'Amina Kamga',
      designerBio: 'Born in Yaoundé and trained at the prestigious École de la Chambre Syndicale in Paris, Amina Kamga returned to Cameroon with a vision: to elevate African fashion to the global stage while honoring the rich textile traditions of her homeland. With over 15 years of experience, she has dressed celebrities, designed for runway shows across Africa and Europe, and built a brand that celebrates Cameroonian excellence.',
      visionTitle: 'Our Vision',
      visionText: 'To be the leading voice in contemporary African fashion, showcasing the beauty, craftsmanship, and cultural richness of Cameroon to the world.',
      missionTitle: 'Our Mission',
      missionText: 'Creating timeless pieces that blend traditional African textiles with modern design, empowering local artisans, and dressing confident individuals who embrace their heritage.',
      timeline: [
        { year: '2009', event: 'Founded in Yaoundé' },
        { year: '2012', event: 'First International Runway Show' },
        { year: '2015', event: 'Opened flagship atelier' },
        { year: '2018', event: 'Featured in Vogue Africa' },
        { year: '2020', event: 'Launched e-commerce platform' },
        { year: '2025', event: 'Expansion to global markets' }
      ],
      team: [
        { name: 'Amina Kamga', role: 'Creative Director & Founder', image: 'https://images.unsplash.com/photo-1614999612412-3b1dbcd68e40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwZGVzaWduZXJ8ZW58MXx8fHwxNzYyMjY4MDM1fDA&ixlib=rb-4.1.0&q=80&w=1080' },
        { name: 'Pierre Nkomo', role: 'Head Tailor', image: 'https://images.unsplash.com/photo-1684259498917-b0cde0133e14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXdpbmclMjB0YWlsb3JpbmclMjBzdHVkaW98ZW58MXx8fHwxNzYyMjc3NjM1fDA&ixlib=rb-4.1.0&q=80&w=1080' },
        { name: 'Grace Foncha', role: 'Bridal Specialist', image: 'https://images.unsplash.com/photo-1656413089283-f4fe0eb2147a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd2VkZGluZyUyMGRyZXNzfGVufDF8fHx8MTc2MjI3NzU0MHww&ixlib=rb-4.1.0&q=80&w=1080' },
        { name: 'Emmanuel Tabi', role: 'Fabric Sourcing Director', image: 'https://images.unsplash.com/photo-1753162657110-9181a3bd206b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYXRlbGllciUyMHN0dWRpb3xlbnwxfHx8fDE3NjIyNjM1NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080' }
      ],
      values: [
        { icon: Award, title: 'Excellence', description: 'Uncompromising quality in every stitch' },
        { icon: Users, title: 'Community', description: 'Supporting local artisans and craftspeople' },
        { icon: MapPin, title: 'Heritage', description: 'Celebrating Cameroonian traditions' },
        { icon: Heart, title: 'Passion', description: 'Love for fashion and craftsmanship' }
      ]
    },
    fr: {
      title: 'À Propos',
      subtitle: 'L\'histoire derrière Afrique Couture',
      designerTitle: 'Rencontrez la Créatrice',
      designerName: 'Amina Kamga',
      designerBio: 'Née à Yaoundé et formée à la prestigieuse École de la Chambre Syndicale à Paris, Amina Kamga est retournée au Cameroun avec une vision : élever la mode africaine sur la scène mondiale tout en honorant les riches traditions textiles de son pays. Avec plus de 15 ans d\'expérience, elle a habillé des célébrités, créé pour des défilés en Afrique et en Europe, et construit une marque qui célèbre l\'excellence camerounaise.',
      visionTitle: 'Notre Vision',
      visionText: 'Être la voix leader de la mode africaine contemporaine, mettant en valeur la beauté, l\'artisanat et la richesse culturelle du Cameroun au monde.',
      missionTitle: 'Notre Mission',
      missionText: 'Créer des pièces intemporelles qui mêlent textiles africains traditionnels et design moderne, autonomiser les artisans locaux, et habiller des individus confiants qui embrassent leur patrimoine.',
      timeline: [
        { year: '2009', event: 'Fondée à Yaoundé' },
        { year: '2012', event: 'Premier Défilé International' },
        { year: '2015', event: 'Ouverture atelier principal' },
        { year: '2018', event: 'Publication Vogue Afrique' },
        { year: '2020', event: 'Lancement plateforme e-commerce' },
        { year: '2025', event: 'Expansion marchés mondiaux' }
      ],
      team: [
        { name: 'Amina Kamga', role: 'Directrice Créative & Fondatrice', image: 'https://images.unsplash.com/photo-1614999612412-3b1dbcd68e40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwZGVzaWduZXJ8ZW58MXx8fHwxNzYyMjY4MDM1fDA&ixlib=rb-4.1.0&q=80&w=1080' },
        { name: 'Pierre Nkomo', role: 'Tailleur en Chef', image: 'https://images.unsplash.com/photo-1684259498917-b0cde0133e14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXdpbmclMjB0YWlsb3JpbmclMjBzdHVkaW98ZW58MXx8fHwxNzYyMjc3NjM1fDA&ixlib=rb-4.1.0&q=80&w=1080' },
        { name: 'Grace Foncha', role: 'Spécialiste Mariée', image: 'https://images.unsplash.com/photo-1656413089283-f4fe0eb2147a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd2VkZGluZyUyMGRyZXNzfGVufDF8fHx8MTc2MjI3NzU0MHww&ixlib=rb-4.1.0&q=80&w=1080' },
        { name: 'Emmanuel Tabi', role: 'Directeur Sourcing Tissus', image: 'https://images.unsplash.com/photo-1753162657110-9181a3bd206b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYXRlbGllciUyMHN0dWRpb3xlbnwxfHx8fDE3NjIyNjM1NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080' }
      ],
      values: [
        { icon: Award, title: 'Excellence', description: 'Qualité sans compromis à chaque couture' },
        { icon: Users, title: 'Communauté', description: 'Soutien aux artisans locaux' },
        { icon: MapPin, title: 'Patrimoine', description: 'Célébrer les traditions camerounaises' },
        { icon: Heart, title: 'Passion', description: 'Amour de la mode et de l\'artisanat' }
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
          <p className="text-xl text-gray-500">{t.subtitle}</p>
        </motion.div>

        {/* Designer Profile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
        >
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1614999612412-3b1dbcd68e40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwZGVzaWduZXJ8ZW58MXx8fHwxNzYyMjY4MDM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt={t.designerName}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl mb-4">{t.designerTitle}</h2>
            <h3 className="text-2xl text-amber-600 mb-6">{t.designerName}</h3>
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              {t.designerBio}
            </p>
          </div>
        </motion.div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className={`p-8 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-amber-50'}`}
          >
            <h3 className="text-2xl mb-4 text-amber-600">{t.visionTitle}</h3>
            <p className="text-lg leading-relaxed">{t.visionText}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className={`p-8 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-amber-50'}`}
          >
            <h3 className="text-2xl mb-4 text-amber-600">{t.missionTitle}</h3>
            <p className="text-lg leading-relaxed">{t.missionText}</p>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl text-center mb-12">{language === 'en' ? 'Our Journey' : 'Notre Parcours'}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {t.timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl text-amber-600 mb-2">{item.year}</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.event}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl text-center mb-12">{language === 'en' ? 'Our Values' : 'Nos Valeurs'}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className={`${theme === 'dark' ? 'bg-gray-800' : ''} text-center`}>
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-xl mb-2">{value.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <h2 className="text-3xl text-center mb-12">{language === 'en' ? 'Meet Our Team' : 'Notre Équipe'}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 + index * 0.1 }}
                className="text-center"
              >
                <div className="relative w-full aspect-square mb-4 rounded-lg overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl mb-1">{member.name}</h3>
                <p className="text-sm text-amber-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
