import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface ChatWidgetProps {
  onClose: () => void;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      className="fixed bottom-24 right-8 z-50 w-[350px] overflow-hidden rounded-lg bg-background shadow-xl"
    >
      <div className="flex items-center justify-between border-b border-foreground/10 bg-[#FF8330] p-4 text-white">
        <h3 className="font-semibold">Chat with us</h3>
        <button
          onClick={onClose}
          className="rounded-full p-1 transition-colors hover:bg-white/20"
          aria-label="Close chat"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      
      <div className="h-[400px] p-4">
        <div className="flex h-full flex-col items-center justify-center text-center">
          <p className="text-gray-400">
            Chat functionality coming soon! For now, please reach out to us through our contact form or social media channels.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ChatWidget;