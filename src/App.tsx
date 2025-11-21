import { useState, useEffect } from 'react';
import { ShoppingCart, User, Search, Menu, X, Globe, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Toaster } from 'sonner@2.0.3';
import Home from './components/Home';
import Shop from './components/Shop';
import Collections from './components/Collections';
import Services from './components/Services';
import About from './components/About';
import Blog from './components/Blog';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cart from './components/Cart';
import ProductDetail from './components/ProductDetail';
import { CartProvider, useCart } from './components/CartContext';

function AppContent() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState<'en' | 'fr'>('en');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const { cartItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const translations = {
    en: {
      home: 'Home',
      shop: 'Shop',
      collections: 'Collections',
      services: 'Services',
      about: 'About',
      blog: 'Blog',
      gallery: 'Gallery',
      contact: 'Contact'
    },
    fr: {
      home: 'Accueil',
      shop: 'Boutique',
      collections: 'Collections',
      services: 'Services',
      about: 'À Propos',
      blog: 'Blog',
      gallery: 'Galerie',
      contact: 'Contact'
    }
  };

  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? theme === 'dark' ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        } ${!isScrolled && currentPage === 'home' ? 'text-white' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="cursor-pointer"
              onClick={() => setCurrentPage('home')}
            >
              <h1 className={`text-2xl tracking-wider transition-colors ${
                !isScrolled && currentPage === 'home' ? 'text-white' : ''
              }`}>AFRIQUE COUTURE</h1>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {Object.entries(t).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => setCurrentPage(key)}
                  className={`transition-colors hover:text-amber-600 ${
                    currentPage === key ? 'text-amber-600' : ''
                  } ${!isScrolled && currentPage === 'home' ? 'text-white' : ''}`}
                >
                  {value}
                </button>
              ))}
            </div>

            {/* Right Icons */}
            <div className={`flex items-center space-x-4 ${!isScrolled && currentPage === 'home' ? 'text-white' : ''}`}>
              <button className="p-2 hover:text-amber-600 transition-colors">
                <Search size={20} />
              </button>
              <button
                onClick={toggleLanguage}
                className="p-2 hover:text-amber-600 transition-colors flex items-center space-x-1"
              >
                <Globe size={20} />
                <span className="text-sm">{language.toUpperCase()}</span>
              </button>
              <button
                onClick={toggleTheme}
                className="p-2 hover:text-amber-600 transition-colors"
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </button>
              <button className="p-2 hover:text-amber-600 transition-colors">
                <User size={20} />
              </button>
              <button
                onClick={() => setIsCartOpen(true)}
                className="p-2 hover:text-amber-600 transition-colors relative"
              >
                <ShoppingCart size={20} />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 hover:text-amber-600 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`lg:hidden ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}
            >
              <div className="px-4 py-4 space-y-4">
                {Object.entries(t).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => {
                      setCurrentPage(key);
                      setIsMenuOpen(false);
                    }}
                    className={`block w-full text-left py-2 transition-colors hover:text-amber-600 ${
                      currentPage === key ? 'text-amber-600' : ''
                    }`}
                  >
                    {value}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Main Content */}
      <main>
        {currentPage === 'home' && <Home onNavigate={setCurrentPage} onProductClick={handleProductClick} language={language} theme={theme} />}
        {currentPage === 'shop' && <Shop onProductClick={handleProductClick} language={language} theme={theme} />}
        {currentPage === 'collections' && <Collections onNavigate={setCurrentPage} language={language} theme={theme} />}
        {currentPage === 'services' && <Services language={language} theme={theme} />}
        {currentPage === 'about' && <About language={language} theme={theme} />}
        {currentPage === 'blog' && <Blog language={language} theme={theme} />}
        {currentPage === 'gallery' && <Gallery language={language} theme={theme} />}
        {currentPage === 'contact' && <Contact language={language} theme={theme} />}
      </main>

      {/* Footer */}
      <Footer language={language} theme={theme} onNavigate={setCurrentPage} />

      {/* Cart Drawer */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} theme={theme} language={language} />

      {/* Product Detail Modal */}
      <ProductDetail
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        theme={theme}
        language={language}
      />

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/237123456789"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg z-40"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </motion.a>

      {/* Toast Notifications */}
      <Toaster richColors position="top-right" />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
