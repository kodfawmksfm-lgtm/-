import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = ({ items, lang }: { items: FAQItem[], lang: 'ar' | 'en' }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {items.map((item, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
        >
          <button
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-6 text-start focus:outline-none group hover:bg-gray-50 transition-colors"
          >
            <span className={`text-lg font-bold text-primary-900 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
              {item.question}
            </span>
            <span className={`p-2 rounded-full bg-primary-50 text-primary-600 transition-transform duration-300 ${activeIndex === index ? 'rotate-180 bg-primary-100' : ''}`}>
              {activeIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
            </span>
          </button>
          
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default FAQ;