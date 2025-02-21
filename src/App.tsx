import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cloud, Menu, X, MessageCircle, Sun, Moon } from 'lucide-react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Solutions from './components/Solutions';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2">
            <Cloud className="h-8 w-8 text-[#FF8330]" />
            <span className="text-xl font-bold">RazurTech</span>
          </div>

          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <Navigation />
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full w-full bg-background p-4 md:hidden"
          >
            <Navigation mobile onClose={() => setIsMenuOpen(false)} />
          </motion.div>
        )}
      </header>

      <main className="pt-16">
        <Hero />
        <About />
        <Solutions />
        <Blog />
        <Contact />
      </main>

      <Footer />

      {/* Chat Widget */}
      <AnimatePresence>
        {isChatOpen && (
          <ChatWidget onClose={() => setIsChatOpen(false)} />
        )}
      </AnimatePresence>

      {/* Floating Chat Button */}
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-8 right-8 rounded-full bg-[#FF8330] p-4 shadow-lg transition-transform hover:scale-110"
        aria-label="Open chat"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </button>
    </div>
  );
}

export default App;