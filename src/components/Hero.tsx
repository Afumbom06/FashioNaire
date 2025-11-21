import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroProps {
  onNavigate: (page: string) => void;
  language: 'en' | 'fr';
  theme: 'light' | 'dark';
}

export default function Hero({ onNavigate, language, theme }: HeroProps) {
  const content = {
    en: {
      subtitle: 'Cameroonian Excellence',
      title: 'Where Heritage Meets High Fashion',
      description: 'Discover authentic African elegance crafted for the global stage',
      cta1: 'Shop Now',
      cta2: 'Explore Collections',
      scroll: 'Scroll to explore'
    },
    fr: {
      subtitle: 'Excellence Camerounaise',
      title: 'Où le Patrimoine Rencontre la Haute Couture',
      description: 'Découvrez l\'élégance africaine authentique conçue pour la scène mondiale',
      cta1: 'Acheter',
      cta2: 'Explorer les Collections',
      scroll: 'Faites défiler pour explorer'
    }
  };

  const t = content[language];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1639572495229-cd8e9a32b570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZmFzaGlvbiUyMG1vZGVsfGVufDF8fHx8MTc2MjE4MzA5Nnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-black/60' : 'bg-black/40'}`} />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-amber-400 mb-4 tracking-widest uppercase"
          >
            {t.subtitle}
          </motion.p>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight"
          >
            {t.title}
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-200"
          >
            {t.description}
          </motion.p>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => onNavigate('shop')}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-none transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              {t.cta1}
            </button>
            <button
              onClick={() => onNavigate('collections')}
              className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-none transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              {t.cta2}
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-center"
      >
        <p className="text-sm mb-2 tracking-wide">{t.scroll}</p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="mx-auto" size={24} />
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 0.1, x: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute left-0 top-1/4 w-64 h-64 border border-amber-400 rounded-full"
      />
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.1, x: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute right-0 bottom-1/4 w-96 h-96 border border-amber-400 rounded-full"
      />
    </div>
  );
}
