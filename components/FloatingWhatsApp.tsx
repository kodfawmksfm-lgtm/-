import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, ArrowUp } from 'lucide-react';

const FloatingActions = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (!showScroll && window.scrollY > 400) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 400) {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-8 right-6 md:right-8 z-50 flex flex-col gap-3 items-center pointer-events-none">
      {/* All children have pointer-events-auto to be clickable */}
      
      {/* Scroll To Top */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="pointer-events-auto p-3 bg-white text-primary-600 rounded-full shadow-lg hover:bg-primary-50 transition-colors border border-primary-100 mb-2 z-40"
            whileHover={{ y: -3 }}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Phone Call */}
      <motion.a
        href="tel:+96569997026"
        className="pointer-events-auto p-3.5 bg-secondary text-white rounded-full shadow-xl hover:bg-amber-600 transition-colors relative group z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        aria-label="Call Us"
      >
        <div className="absolute inset-0 rounded-full animate-ping bg-secondary opacity-30"></div>
        <Phone className="w-6 h-6 relative z-10" />
      </motion.a>

      {/* WhatsApp */}
      <motion.a
        href="https://wa.me/96569997026"
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full shadow-2xl cursor-pointer hover:bg-[#20b858] transition-colors relative z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-20 animate-ping duration-1000"></span>
        <svg 
          viewBox="0 0 24 24" 
          width="32" 
          height="32" 
          fill="white"
          className="relative z-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </motion.a>
    </div>
  );
};

export default FloatingActions;