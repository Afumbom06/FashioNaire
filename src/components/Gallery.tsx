import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';

interface GalleryProps {
  language: 'en' | 'fr';
  theme: 'light' | 'dark';
}

const galleryImages = [
  { id: 1, url: 'https://images.unsplash.com/photo-1639572495229-cd8e9a32b570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZmFzaGlvbiUyMG1vZGVsfGVufDF8fHx8MTc2MjE4MzA5Nnww&ixlib=rb-4.1.0&q=80&w=1080', category: '2025', aspectRatio: 'tall' },
  { id: 2, url: 'https://images.unsplash.com/photo-1697648312017-2f1e97feab98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcGhvdG9ncmFwaHklMjBtb2RlbHxlbnwxfHx8fDE3NjIyNzc3ODh8MA&ixlib=rb-4.1.0&q=80&w=1080', category: '2024', aspectRatio: 'wide' },
  { id: 3, url: 'https://images.unsplash.com/photo-1656413089283-f4fe0eb2147a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd2VkZGluZyUyMGRyZXNzfGVufDF8fHx8MTc2MjI3NzU0MHww&ixlib=rb-4.1.0&q=80&w=1080', category: '2025', aspectRatio: 'tall' },
  { id: 4, url: 'https://images.unsplash.com/photo-1581357421952-cbe61a77b7a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZHJlc3MlMjBkZXNpZ258ZW58MXx8fHwxNzYyMTkyODIzfDA&ixlib=rb-4.1.0&q=80&w=1080', category: '2024', aspectRatio: 'square' },
  { id: 5, url: 'https://images.unsplash.com/photo-1620868695220-d4bf69f08938?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcnVud2F5JTIwc2hvd3xlbnwxfHx8fDE3NjIyNzc1Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080', category: '2025', aspectRatio: 'wide' },
  { id: 6, url: 'https://images.unsplash.com/photo-1760907949889-eb62b7fd9f75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwdGV4dGlsZSUyMHBhdHRlcm58ZW58MXx8fHwxNzYyMjU1NzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080', category: '2024', aspectRatio: 'square' },
  { id: 7, url: 'https://images.unsplash.com/photo-1614999612412-3b1dbcd68e40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwZGVzaWduZXJ8ZW58MXx8fHwxNzYyMjY4MDM1fDA&ixlib=rb-4.1.0&q=80&w=1080', category: '2025', aspectRatio: 'tall' },
  { id: 8, url: 'https://images.unsplash.com/photo-1683290845409-280ec0dc39df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwYm91dGlxdWV8ZW58MXx8fHwxNzYyMjYyMzUwfDA&ixlib=rb-4.1.0&q=80&w=1080', category: '2024', aspectRatio: 'wide' },
  { id: 9, url: 'https://images.unsplash.com/photo-1684259498917-b0cde0133e14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXdpbmclMjB0YWlsb3JpbmclMjBzdHVkaW98ZW58MXx8fHwxNzYyMjc3NjM1fDA&ixlib=rb-4.1.0&q=80&w=1080', category: 'BTS', aspectRatio: 'square' },
  { id: 10, url: 'https://images.unsplash.com/photo-1753162657110-9181a3bd206b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYXRlbGllciUyMHN0dWRpb3xlbnwxfHx8fDE3NjIyNjM1NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080', category: 'BTS', aspectRatio: 'wide' },
  { id: 11, url: 'https://images.unsplash.com/photo-1757140448695-826a34fb67d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY3VsdHVyZSUyMGhlcml0YWdlfGVufDF8fHx8MTc2MjI3NzYzNnww&ixlib=rb-4.1.0&q=80&w=1080', category: '2025', aspectRatio: 'tall' },
  { id: 12, url: 'https://images.unsplash.com/photo-1612029146987-d49d3ca19cfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYmxvZyUyMG1hZ2F6aW5lfGVufDF8fHx8MTc2MjI3NzYzNXww&ixlib=rb-4.1.0&q=80&w=1080', category: '2024', aspectRatio: 'square' }
];

export default function Gallery({ language, theme }: GalleryProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);

  const content = {
    en: {
      title: 'Gallery & Lookbook',
      subtitle: 'A visual journey through our collections',
      all: 'All',
      bts: 'Behind the Scenes'
    },
    fr: {
      title: 'Galerie & Lookbook',
      subtitle: 'Un voyage visuel à travers nos collections',
      all: 'Tout',
      bts: 'Coulisses'
    }
  };

  const t = content[language];

  const filteredImages = selectedFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedFilter);

  const openLightbox = (index: number) => {
    setLightboxImage(index);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const nextImage = () => {
    if (lightboxImage !== null) {
      setLightboxImage((lightboxImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (lightboxImage !== null) {
      setLightboxImage((lightboxImage - 1 + filteredImages.length) % filteredImages.length);
    }
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
          <p className="text-xl text-gray-500">{t.subtitle}</p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          <Button
            variant={selectedFilter === 'all' ? 'default' : 'outline'}
            onClick={() => setSelectedFilter('all')}
          >
            {t.all}
          </Button>
          <Button
            variant={selectedFilter === '2025' ? 'default' : 'outline'}
            onClick={() => setSelectedFilter('2025')}
          >
            2025
          </Button>
          <Button
            variant={selectedFilter === '2024' ? 'default' : 'outline'}
            onClick={() => setSelectedFilter('2024')}
          >
            2024
          </Button>
          <Button
            variant={selectedFilter === 'BTS' ? 'default' : 'outline'}
            onClick={() => setSelectedFilter('BTS')}
          >
            {t.bts}
          </Button>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-lg"
              onClick={() => openLightbox(index)}
            >
              <ImageWithFallback
                src={image.url}
                alt={`Gallery ${image.id}`}
                className={`w-full ${
                  image.aspectRatio === 'tall' ? 'h-[400px]' : 
                  image.aspectRatio === 'wide' ? 'h-[250px]' : 
                  'h-[300px]'
                } object-cover group-hover:scale-110 transition-transform duration-500`}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white hover:text-amber-400 transition-colors z-50"
            >
              <X size={32} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-6 text-white hover:text-amber-400 transition-colors z-50"
            >
              <ChevronLeft size={48} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-6 text-white hover:text-amber-400 transition-colors z-50"
            >
              <ChevronRight size={48} />
            </button>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-6xl max-h-[90vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <ImageWithFallback
                src={filteredImages[lightboxImage].url}
                alt={`Gallery ${filteredImages[lightboxImage].id}`}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
            </motion.div>

            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white">
              {lightboxImage + 1} / {filteredImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
