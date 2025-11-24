
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Lock } from 'lucide-react';
import { Translation } from '../types';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (username: string) => void;
  t: Translation['login'];
  dir: 'rtl' | 'ltr';
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onLogin, t, dir }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (isOpen) {
      const savedUser = localStorage.getItem('jasmine_username');
      const savedPass = localStorage.getItem('jasmine_password');
      if (savedUser) setUsername(savedUser);
      if (savedPass) setPassword(savedPass);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password) {
      localStorage.setItem('jasmine_username', username);
      localStorage.setItem('jasmine_password', password);
      onLogin(username);
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md border border-gray-100 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            dir={dir}
          >
            <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-gray-50/50">
              <h2 className="text-xl font-bold text-primary-800">{t.title}</h2>
              <button onClick={onClose} className="p-2 hover:bg-red-50 hover:text-red-500 rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.username}</label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-gray-400">
                    <User className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full ps-10 pe-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.password}</label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-gray-400">
                    <Lock className="w-5 h-5" />
                  </div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full ps-10 pe-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 rounded-lg shadow-lg transition-all transform hover:-translate-y-0.5 active:scale-95 mt-4"
              >
                {t.submit}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;