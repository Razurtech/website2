import React, { useState } from 'react';
import { Cloud, Instagram, Send, MessageSquare, Mail, XIcon } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for future Mailchimp/Brevo integration
    setSubscribeStatus('success');
    setTimeout(() => setSubscribeStatus('idle'), 3000);
    setEmail('');
  };

  return (
    <footer className="bg-[#0F0F0F] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2">
              <Cloud className="h-8 w-8 text-[#FF8330]" />
              <span className="text-xl font-bold">RazurTech</span>
            </div>
            <p className="mt-4 max-w-md text-gray-400">
              Empowering businesses with innovative technology solutions.
              Building the future of digital transformation.
            </p>
            <div className="mt-4">
              <a
                href="mailto:support@razurtech.com"
                className="flex items-center space-x-2 text-gray-400 transition-colors hover:text-[#FF8330]"
              >
                <Mail className="h-5 w-5" />
                <span>support@razurtech.com</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {['About', 'Solutions', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 transition-colors hover:text-[#FF8330]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="mt-4 flex space-x-4">
              {[
                { Icon: MessageSquare, href: 'https://wa.me/your-number', label: 'WhatsApp' },
                { Icon: Send, href: 'https://t.me/your-username', label: 'Telegram' },
                { Icon: Instagram, href: 'https://instagram.com/razurtech', label: 'Instagram' },
                { Icon: XIcon, href: 'https://x.com/razurtech', label: 'X (formerly Twitter)' }
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#1A1A1A] p-2 text-gray-400 transition-all hover:scale-110 hover:bg-[#FF8330] hover:text-white"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Newsletter Subscription */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold">Newsletter</h3>
              <form onSubmit={handleSubscribe} className="mt-4">
                <div className="flex max-w-md items-center gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 rounded-lg border-none bg-[#1A1A1A] px-4 py-2 text-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-[#FF8330]"
                    required
                  />
                  <button
                    type="submit"
                    className="rounded-lg bg-[#FF8330] px-4 py-2 text-sm font-medium text-white transition-all hover:scale-105 hover:bg-[#FF8330]/90"
                  >
                    Subscribe
                  </button>
                </div>
                {subscribeStatus === 'success' && (
                  <p className="mt-2 text-sm text-green-500">
                    Thanks for subscribing!
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2025 RazurTech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;