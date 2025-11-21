import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Star, ShoppingCart, Heart, Share2, Ruler, Truck, RotateCcw } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useCart } from './CartContext';
import { toast } from 'sonner@2.0.3';

interface ProductDetailProps {
  product: any;
  isOpen: boolean;
  onClose: () => void;
  theme: 'light' | 'dark';
  language: 'en' | 'fr';
}

export default function ProductDetail({ product, isOpen, onClose, theme, language }: ProductDetailProps) {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  if (!product) return null;

  const content = {
    en: {
      selectSize: 'Select Size',
      quantity: 'Quantity',
      addToCart: 'Add to Cart',
      addedToCart: 'Added to cart!',
      selectSizeFirst: 'Please select a size',
      description: 'Description',
      fabric: 'Fabric',
      colors: 'Colors',
      features: 'Features',
      freeShipping: 'Free shipping on orders over 500,000 FCFA',
      returns: '30-day return policy',
      authentic: '100% Authentic Cameroonian craftsmanship',
      sizeGuide: 'Size Guide',
      addToWishlist: 'Add to Wishlist',
      share: 'Share',
      reviews: 'Customer Reviews',
      fcfa: 'FCFA'
    },
    fr: {
      selectSize: 'Choisir la Taille',
      quantity: 'Quantité',
      addToCart: 'Ajouter au Panier',
      addedToCart: 'Ajouté au panier!',
      selectSizeFirst: 'Veuillez choisir une taille',
      description: 'Description',
      fabric: 'Tissu',
      colors: 'Couleurs',
      features: 'Caractéristiques',
      freeShipping: 'Livraison gratuite pour les commandes supérieures à 500 000 FCFA',
      returns: 'Politique de retour de 30 jours',
      authentic: '100% Artisanat camerounais authentique',
      sizeGuide: 'Guide des Tailles',
      addToWishlist: 'Ajouter aux Favoris',
      share: 'Partager',
      reviews: 'Avis Clients',
      fcfa: 'FCFA'
    }
  };

  const t = content[language];

  const handleAddToCart = () => {
    if (!selectedSize && product.sizes && product.sizes.length > 0) {
      toast.error(t.selectSizeFirst);
      return;
    }

    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        size: selectedSize
      });
    }
    toast.success(t.addedToCart);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-4 sm:inset-8 lg:inset-16 z-50 overflow-hidden"
          >
            <div className={`h-full ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} rounded-lg shadow-2xl overflow-y-auto`}>
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8">
                {/* Product Image */}
                <div className="relative h-[400px] lg:h-full">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-6 left-6 bg-amber-600 text-white">
                    {product.badge}
                  </Badge>
                </div>

                {/* Product Details */}
                <div className="p-8 lg:p-12">
                  <div className="mb-6">
                    <Badge variant="outline" className="mb-4">{product.collection}</Badge>
                    <h1 className="text-4xl mb-4">{product.name}</h1>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={18} fill="#f59e0b" stroke="#f59e0b" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">(24 {t.reviews})</span>
                    </div>
                    <div className="flex items-baseline gap-4">
                      <p className="text-4xl text-amber-600">{product.price.toLocaleString()} {t.fcfa}</p>
                      <p className="text-xl text-gray-500">${product.priceUSD}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <h3 className="text-lg mb-2">{t.description}</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Fabric & Colors */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-sm mb-2 text-gray-500">{t.fabric}</h4>
                      <p>{product.fabric}</p>
                    </div>
                    <div>
                      <h4 className="text-sm mb-2 text-gray-500">{t.colors}</h4>
                      <p>{product.colors.join(', ')}</p>
                    </div>
                  </div>

                  {/* Size Selection */}
                  {product.sizes && product.sizes.length > 0 && (
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-sm">{t.selectSize}</h4>
                        <button className="text-sm text-amber-600 hover:underline flex items-center gap-1">
                          <Ruler size={14} />
                          {t.sizeGuide}
                        </button>
                      </div>
                      <div className="flex gap-2">
                        {product.sizes.map((size: string) => (
                          <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`px-6 py-3 border-2 rounded-lg transition-all ${
                              selectedSize === size
                                ? 'border-amber-600 bg-amber-600 text-white'
                                : theme === 'dark'
                                ? 'border-gray-700 hover:border-amber-600'
                                : 'border-gray-300 hover:border-amber-600'
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Quantity */}
                  <div className="mb-6">
                    <h4 className="text-sm mb-3">{t.quantity}</h4>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center border-2 border-gray-300 dark:border-gray-700 rounded-lg">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                          -
                        </button>
                        <span className="px-6 py-3 border-x-2 border-gray-300 dark:border-gray-700">{quantity}</span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mb-8">
                    <Button
                      size="lg"
                      className="flex-1"
                      onClick={handleAddToCart}
                    >
                      <ShoppingCart className="mr-2" size={20} />
                      {t.addToCart}
                    </Button>
                    <Button size="lg" variant="outline" className="px-6">
                      <Heart size={20} />
                    </Button>
                    <Button size="lg" variant="outline" className="px-6">
                      <Share2 size={20} />
                    </Button>
                  </div>

                  {/* Features */}
                  <div className={`p-6 rounded-lg space-y-3 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
                    <div className="flex items-start gap-3">
                      <Truck size={20} className="text-amber-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm">{t.freeShipping}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <RotateCcw size={20} className="text-amber-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm">{t.returns}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge className="bg-amber-600 text-white flex-shrink-0">✓</Badge>
                      <div>
                        <p className="text-sm">{t.authentic}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
