import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, ShoppingBag, CreditCard } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useCart } from './CartContext';
import { Button } from './ui/button';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  theme: 'light' | 'dark';
  language: 'en' | 'fr';
}

export default function Cart({ isOpen, onClose, theme, language }: CartProps) {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  const content = {
    en: {
      title: 'Shopping Cart',
      empty: 'Your cart is empty',
      emptyDescription: 'Add some items to get started',
      continueShopping: 'Continue Shopping',
      remove: 'Remove',
      subtotal: 'Subtotal',
      shipping: 'Shipping',
      shippingCalc: 'Calculated at checkout',
      total: 'Total',
      checkout: 'Proceed to Checkout',
      clear: 'Clear Cart',
      fcfa: 'FCFA'
    },
    fr: {
      title: 'Panier',
      empty: 'Votre panier est vide',
      emptyDescription: 'Ajoutez des articles pour commencer',
      continueShopping: 'Continuer les Achats',
      remove: 'Retirer',
      subtotal: 'Sous-total',
      shipping: 'Livraison',
      shippingCalc: 'Calculé à la caisse',
      total: 'Total',
      checkout: 'Procéder au Paiement',
      clear: 'Vider le Panier',
      fcfa: 'FCFA'
    }
  };

  const t = content[language];

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
            className="fixed inset-0 bg-black/50 z-50"
          />

          {/* Cart Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className={`fixed right-0 top-0 h-full w-full sm:w-[450px] ${
              theme === 'dark' ? 'bg-gray-900' : 'bg-white'
            } shadow-2xl z-50 flex flex-col`}
          >
            {/* Header */}
            <div className={`p-6 border-b ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'}`}>
              <div className="flex items-center justify-between">
                <h2 className="text-2xl flex items-center gap-2">
                  <ShoppingBag size={24} />
                  {t.title}
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              {cartItems.length > 0 && (
                <p className="text-sm text-gray-500 mt-2">
                  {cartItems.length} {language === 'en' ? 'items' : 'articles'}
                </p>
              )}
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag size={64} className="text-gray-300 mb-4" />
                  <h3 className="text-xl mb-2">{t.empty}</h3>
                  <p className="text-gray-500 mb-6">{t.emptyDescription}</p>
                  <Button onClick={onClose}>{t.continueShopping}</Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map(item => (
                    <motion.div
                      key={`${item.id}-${item.size}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      className={`flex gap-4 p-4 rounded-lg ${
                        theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
                      }`}
                    >
                      <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                        <ImageWithFallback
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="mb-1 truncate">{item.name}</h4>
                        {item.size && (
                          <p className="text-sm text-gray-500 mb-2">
                            {language === 'en' ? 'Size' : 'Taille'}: {item.size}
                          </p>
                        )}
                        <p className="text-amber-600 mb-3">
                          {item.price.toLocaleString()} {t.fcfa}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(`${item.id}-${item.size}`, item.quantity - 1)}
                              className={`p-1 rounded ${
                                theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
                              }`}
                            >
                              <Minus size={16} />
                            </button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(`${item.id}-${item.size}`, item.quantity + 1)}
                              className={`p-1 rounded ${
                                theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
                              }`}
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(`${item.id}-${item.size}`)}
                            className="text-sm text-red-500 hover:text-red-600 transition-colors"
                          >
                            {t.remove}
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className={`p-6 border-t ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'}`}>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">{t.subtotal}</span>
                    <span>{getTotalPrice().toLocaleString()} {t.fcfa}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">{t.shipping}</span>
                    <span className="text-sm text-gray-500">{t.shippingCalc}</span>
                  </div>
                  <div className="flex justify-between text-xl pt-3 border-t border-gray-200 dark:border-gray-700">
                    <span>{t.total}</span>
                    <span className="text-amber-600">{getTotalPrice().toLocaleString()} {t.fcfa}</span>
                  </div>
                </div>
                <Button className="w-full mb-3" size="lg">
                  <CreditCard className="mr-2" size={20} />
                  {t.checkout}
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={clearCart}
                >
                  {t.clear}
                </Button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
