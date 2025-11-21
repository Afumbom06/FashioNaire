import { motion } from 'motion/react';
import { ArrowRight, Star, Quote, Instagram, Play } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import Hero from './Hero';
import { products, collections } from '../data/products';

interface HomeProps {
  onNavigate: (page: string) => void;
  onProductClick: (product: any) => void;
  language: 'en' | 'fr';
  theme: 'light' | 'dark';
}

export default function Home({ onNavigate, onProductClick, language, theme }: HomeProps) {
  const content = {
    en: {
      featuredCollections: 'Featured Collections',
      exploreCollection: 'Explore Collection',
      bestsellers: 'Bestsellers',
      shopNow: 'Shop Now',
      viewAll: 'View All Products',
      ourStory: 'Our Story',
      storyTitle: 'Crafting Excellence Since 2009',
      storyText: 'From the vibrant markets of Yaoundé to international runways, Afrique Couture represents the pinnacle of Cameroonian fashion. Our designs celebrate heritage while embracing contemporary elegance, each piece telling a story of craftsmanship and cultural pride.',
      learnMore: 'Learn More',
      testimonials: 'What Our Clients Say',
      pressTitle: 'As Featured In',
      instagramTitle: 'Follow Our Journey',
      instagramHandle: '@afriquecouture',
      newsletterTitle: 'Join Our Fashion Community',
      newsletterText: 'Subscribe for exclusive access to new collections, styling tips, and special offers',
      subscribe: 'Subscribe',
      stats: [
        { value: '15+', label: 'Years of Excellence' },
        { value: '500+', label: 'Unique Designs' },
        { value: '1000+', label: 'Happy Clients' },
        { value: '3', label: 'Countries' }
      ],
      testimonialsList: [
        {
          text: 'Afrique Couture created my dream wedding dress. The attention to detail and incorporation of traditional Cameroonian elements was breathtaking.',
          author: 'Marie Fotso',
          role: 'Bride, 2024'
        },
        {
          text: 'As a fashion blogger, I\'ve worked with many designers. Afrique Couture\'s blend of heritage and modernity is unmatched. True artistry.',
          author: 'David Kamdem',
          role: 'Fashion Influencer'
        },
        {
          text: 'The quality of fabrics and craftsmanship is exceptional. I receive compliments every time I wear their pieces. Worth every franc.',
          author: 'Grace Nkomo',
          role: 'Regular Client'
        }
      ]
    },
    fr: {
      featuredCollections: 'Collections Vedettes',
      exploreCollection: 'Explorer la Collection',
      bestsellers: 'Meilleures Ventes',
      shopNow: 'Acheter Maintenant',
      viewAll: 'Voir Tous les Produits',
      ourStory: 'Notre Histoire',
      storyTitle: 'Excellence Artisanale Depuis 2009',
      storyText: 'Des marchés vibrants de Yaoundé aux podiums internationaux, Afrique Couture représente le summum de la mode camerounaise. Nos créations célèbrent le patrimoine tout en embrassant l\'élégance contemporaine, chaque pièce racontant une histoire d\'artisanat et de fierté culturelle.',
      learnMore: 'En Savoir Plus',
      testimonials: 'Ce Que Disent Nos Clients',
      pressTitle: 'Vu Dans',
      instagramTitle: 'Suivez Notre Parcours',
      instagramHandle: '@afriquecouture',
      newsletterTitle: 'Rejoignez Notre Communauté Mode',
      newsletterText: 'Abonnez-vous pour un accès exclusif aux nouvelles collections, conseils de style et offres spéciales',
      subscribe: 'S\'abonner',
      stats: [
        { value: '15+', label: 'Années d\'Excellence' },
        { value: '500+', label: 'Créations Uniques' },
        { value: '1000+', label: 'Clients Satisfaits' },
        { value: '3', label: 'Pays' }
      ],
      testimonialsList: [
        {
          text: 'Afrique Couture a créé la robe de mariée de mes rêves. L\'attention aux détails et l\'incorporation d\'éléments traditionnels camerounais étaient époustouflants.',
          author: 'Marie Fotso',
          role: 'Mariée, 2024'
        },
        {
          text: 'En tant que blogueuse mode, j\'ai travaillé avec de nombreux designers. Le mélange patrimoine et modernité d\'Afrique Couture est inégalé. Un véritable art.',
          author: 'David Kamdem',
          role: 'Influenceur Mode'
        },
        {
          text: 'La qualité des tissus et de l\'artisanat est exceptionnelle. Je reçois des compliments chaque fois que je porte leurs pièces. Ça vaut chaque franc.',
          author: 'Grace Nkomo',
          role: 'Cliente Régulière'
        }
      ]
    }
  };

  const t = content[language];
  const featuredProducts = products.slice(0, 4);
  const featuredCollections = collections.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <Hero onNavigate={onNavigate} language={language} theme={theme} />

      {/* Stats Section */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl text-amber-600 mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-gray-950' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl mb-4">{t.featuredCollections}</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCollections.map((collection, index) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group cursor-pointer relative overflow-hidden rounded-lg h-[500px]"
                onClick={() => onNavigate('collections')}
              >
                <ImageWithFallback
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl mb-2">{language === 'en' ? collection.nameEn : collection.nameFr}</h3>
                  <p className="text-sm text-gray-200 mb-4">
                    {language === 'en' ? collection.descriptionEn : collection.descriptionFr}
                  </p>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                    {t.exploreCollection}
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl mb-4">{t.bestsellers}</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group cursor-pointer rounded-lg overflow-hidden ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                } shadow-lg hover:shadow-2xl transition-all duration-300`}
                onClick={() => onProductClick(product)}
              >
                <div className="relative overflow-hidden aspect-[3/4]">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 right-4 bg-amber-600 text-white">
                    {product.badge}
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-lg mb-2">{product.name}</h3>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="#f59e0b" stroke="#f59e0b" />
                    ))}
                  </div>
                  <p className="text-xl text-amber-600">{product.price.toLocaleString()} FCFA</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button size="lg" onClick={() => onNavigate('shop')}>
              {t.viewAll}
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-gray-950' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[600px] rounded-lg overflow-hidden"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1614999612412-3b1dbcd68e40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwZGVzaWduZXJ8ZW58MXx8fHwxNzYyMjY4MDM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Our Story"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-xl"
              >
                <Play size={32} className="text-amber-600 ml-1" />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-amber-600 mb-4 tracking-widest uppercase">{t.ourStory}</p>
              <h2 className="text-4xl md:text-5xl mb-6">{t.storyTitle}</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                {t.storyText}
              </p>
              <Button size="lg" onClick={() => onNavigate('about')}>
                {t.learnMore}
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl mb-4">{t.testimonials}</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.testimonialsList.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`h-full ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : ''}`}>
                  <CardContent className="pt-6">
                    <Quote className="text-amber-600 mb-4" size={40} />
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="#f59e0b" stroke="#f59e0b" />
                      ))}
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Features */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-gray-950' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl mb-8 text-gray-600 dark:text-gray-400">{t.pressTitle}</h3>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
              <div className="text-3xl">VOGUE</div>
              <div className="text-3xl">ELLE</div>
              <div className="text-3xl">CANAL 2</div>
              <div className="text-3xl">CRTV</div>
              <div className="text-3xl">FASHION AFRICA</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Instagram className="text-amber-600" size={32} />
              <h2 className="text-4xl">{t.instagramTitle}</h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-400">{t.instagramHandle}</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[...Array(6)].map((_, index) => (
              <motion.a
                key={index}
                href="#"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="relative aspect-square group overflow-hidden rounded-lg"
              >
                <ImageWithFallback
                  src={products[index % products.length].image}
                  alt={`Instagram ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <Instagram className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={32} />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-800" />
        <div className="absolute inset-0 opacity-10">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1760907949889-eb62b7fd9f75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwdGV4dGlsZSUyMHBhdHRlcm58ZW58MXx8fHwxNzYyMjU1NzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Pattern"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-4">{t.newsletterTitle}</h2>
            <p className="text-xl mb-8 opacity-90">{t.newsletterText}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder={language === 'en' ? 'Your email address' : 'Votre adresse email'}
                className="flex-1 px-6 py-4 rounded-lg text-gray-900"
              />
              <Button size="lg" className="bg-white text-amber-900 hover:bg-gray-100">
                {t.subscribe}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
