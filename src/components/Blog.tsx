import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { blogPosts } from '../data/blog';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface BlogProps {
  language: 'en' | 'fr';
  theme: 'light' | 'dark';
}

export default function Blog({ language, theme }: BlogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const content = {
    en: {
      title: 'Fashion Journal',
      subtitle: 'Stories, trends, and insights from the world of African fashion',
      readMore: 'Read More',
      all: 'All',
      categories: ['Heritage', 'Sustainability', 'Trends', 'Behind the Scenes', 'Style Tips', 'Events']
    },
    fr: {
      title: 'Journal de Mode',
      subtitle: 'Histoires, tendances et perspectives du monde de la mode africaine',
      readMore: 'Lire Plus',
      all: 'Tout',
      categories: ['Patrimoine', 'Durabilité', 'Tendances', 'Coulisses', 'Conseils Style', 'Événements']
    }
  };

  const t = content[language];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'en' ? 'en-US' : 'fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className={`min-h-screen pt-32 pb-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl mb-4">{t.title}</h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">{t.subtitle}</p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          <Button
            variant={selectedCategory === 'all' ? 'default' : 'outline'}
            onClick={() => setSelectedCategory('all')}
          >
            {t.all}
          </Button>
          {t.categories.map((category, index) => {
            const englishCategories = ['Heritage', 'Sustainability', 'Trends', 'Behind the Scenes', 'Style Tips', 'Events'];
            return (
              <Button
                key={index}
                variant={selectedCategory === englishCategories[index] ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(englishCategories[index])}
              >
                {category}
              </Button>
            );
          })}
        </motion.div>

        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-lg overflow-hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'} shadow-xl`}>
              <div className="relative h-[400px]">
                <ImageWithFallback
                  src={filteredPosts[0].image}
                  alt={language === 'en' ? filteredPosts[0].titleEn : filteredPosts[0].titleFr}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-amber-600 text-white">
                  {filteredPosts[0].category}
                </Badge>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h2 className="text-3xl mb-4">
                  {language === 'en' ? filteredPosts[0].titleEn : filteredPosts[0].titleFr}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  {language === 'en' ? filteredPosts[0].excerptEn : filteredPosts[0].excerptFr}
                </p>
                <div className="flex items-center gap-6 mb-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    {formatDate(filteredPosts[0].date)}
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    {filteredPosts[0].author}
                  </div>
                </div>
                <Button className="w-fit">
                  {t.readMore}
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(1).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className={`group cursor-pointer rounded-lg overflow-hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-2xl transition-all duration-300`}
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={post.image}
                  alt={language === 'en' ? post.titleEn : post.titleFr}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-4 right-4 bg-amber-600 text-white">
                  {post.category}
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-3 group-hover:text-amber-600 transition-colors">
                  {language === 'en' ? post.titleEn : post.titleFr}
                </h3>
                <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {language === 'en' ? post.excerptEn : post.excerptFr}
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {formatDate(post.date)}
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    {post.author}
                  </div>
                </div>
                <Button variant="outline" size="sm" className="group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-600 transition-all">
                  {t.readMore}
                  <ArrowRight className="ml-2" size={14} />
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
