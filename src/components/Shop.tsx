import { useState } from 'react';
import { motion } from 'motion/react';
import { Filter, Grid, List } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { products } from '../data/products';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

interface ShopProps {
  onProductClick: (product: any) => void;
  language: 'en' | 'fr';
  theme: 'light' | 'dark';
}

export default function Shop({ onProductClick, language, theme }: ShopProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedFabric, setSelectedFabric] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const content = {
    en: {
      title: 'Shop',
      subtitle: 'Discover Our Collections',
      filter: 'Filter',
      category: 'Category',
      fabric: 'Fabric Type',
      price: 'Price Range',
      all: 'All',
      women: 'Women',
      men: 'Men',
      unisex: 'Unisex',
      viewDetails: 'View Details',
      fcfa: 'FCFA',
      products: 'products'
    },
    fr: {
      title: 'Boutique',
      subtitle: 'Découvrez Nos Collections',
      filter: 'Filtrer',
      category: 'Catégorie',
      fabric: 'Type de Tissu',
      price: 'Gamme de Prix',
      all: 'Tout',
      women: 'Femmes',
      men: 'Hommes',
      unisex: 'Unisexe',
      viewDetails: 'Voir les Détails',
      fcfa: 'FCFA',
      products: 'produits'
    }
  };

  const t = content[language];

  const filteredProducts = products.filter(product => {
    if (selectedCategory !== 'all' && product.category !== selectedCategory) return false;
    if (selectedFabric !== 'all' && product.fabric !== selectedFabric) return false;
    if (priceRange === 'low' && product.price > 350000) return false;
    if (priceRange === 'high' && product.price <= 350000) return false;
    return true;
  });

  const fabrics = Array.from(new Set(products.map(p => p.fabric)));

  return (
    <div className={`min-h-screen pt-32 pb-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
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
          className={`mb-8 p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
        >
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter size={20} className="text-amber-600" />
              <span>{t.filter}</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder={t.category} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t.all}</SelectItem>
                  <SelectItem value="Women">{t.women}</SelectItem>
                  <SelectItem value="Men">{t.men}</SelectItem>
                  <SelectItem value="Unisex">{t.unisex}</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedFabric} onValueChange={setSelectedFabric}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder={t.fabric} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t.all}</SelectItem>
                  {fabrics.map(fabric => (
                    <SelectItem key={fabric} value={fabric}>{fabric}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder={t.price} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t.all}</SelectItem>
                  <SelectItem value="low">&lt; 350,000 {t.fcfa}</SelectItem>
                  <SelectItem value="high">&gt; 350,000 {t.fcfa}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('grid')}
              >
                <Grid size={20} />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('list')}
              >
                <List size={20} />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Products Count */}
        <div className="mb-6 text-gray-500">
          {filteredProducts.length} {t.products}
        </div>

        {/* Products Grid/List */}
        <div className={viewMode === 'grid' 
          ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'
          : 'flex flex-col gap-6'
        }>
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`group cursor-pointer ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              } rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300`}
              onClick={() => onProductClick(product)}
            >
              <div className="relative overflow-hidden aspect-[3/4]">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-amber-600 text-white">{product.badge}</Badge>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl mb-2">{product.name}</h3>
                <p className={`text-sm mb-3 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {product.fabric}
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-2xl text-amber-600">{product.price.toLocaleString()} {t.fcfa}</p>
                    <p className="text-sm text-gray-500">${product.priceUSD}</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-black hover:text-black"
                  >
                    {t.viewDetails}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
