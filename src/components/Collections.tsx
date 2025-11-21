import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { collections } from '../data/products';
import { Button } from './ui/button';

interface CollectionsProps {
  onNavigate: (page: string) => void;
  language: 'en' | 'fr';
  theme: 'light' | 'dark';
}

export default function Collections({ onNavigate, language, theme }: CollectionsProps) {
  const content = {
    en: {
      title: 'Collections',
      subtitle: 'Curated fashion lines celebrating Cameroonian heritage',
      shopCollection: 'Shop Collection',
      items: 'items'
    },
    fr: {
      title: 'Collections',
      subtitle: 'Lignes de mode célébrant l\'héritage camerounais',
      shopCollection: 'Voir la Collection',
      items: 'articles'
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

        {/* Collections Mosaic */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              style={{ height: index === 0 || index === 3 ? '600px' : '400px' }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <ImageWithFallback
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-8 text-white">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                >
                  <h2 className="text-4xl mb-3">{language === 'en' ? collection.nameEn : collection.nameFr}</h2>
                  <p className="text-lg mb-2 text-gray-200">
                    {language === 'en' ? collection.descriptionEn : collection.descriptionFr}
                  </p>
                  <p className="text-sm text-amber-400 mb-6">
                    {collection.productCount} {t.items}
                  </p>
                  <Button
                    onClick={() => onNavigate('shop')}
                    className="bg-white text-gray-900 hover:bg-amber-600 hover:text-white transition-all group-hover:translate-x-2"
                  >
                    {t.shopCollection}
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </motion.div>
              </div>

              {/* Decorative Border Animation */}
              <div className="absolute inset-0 border-4 border-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className={`mt-20 p-12 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl mb-6">
              {language === 'en' 
                ? 'Every Collection Tells a Story'
                : 'Chaque Collection Raconte une Histoire'}
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              {language === 'en'
                ? 'Our collections are inspired by the rich cultural tapestry of Cameroon - from the indigo-dyed Ndop cloth of the grasslands to the vibrant patterns of our coastal cities. Each piece is a celebration of heritage, crafted with contemporary elegance for the global stage.'
                : 'Nos collections sont inspirées par la riche tapisserie culturelle du Cameroun - du tissu Ndop teint à l\'indigo des hautes terres aux motifs vibrants de nos villes côtières. Chaque pièce est une célébration du patrimoine, conçue avec une élégance contemporaine pour la scène mondiale.'}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
