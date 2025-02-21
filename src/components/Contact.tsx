import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl font-bold sm:text-4xl">
              <span className="gradient-text">Let's Connect</span>
            </h2>
            <p className="mt-4 text-gray-400">
              Ready to transform your business with cutting-edge technology?
              Get in touch with our team of experts today.
            </p>
            <div className="mt-6">
              <a
                href="mailto:support@razurtech.com"
                className="flex items-center space-x-2 text-[#FF8330] transition-colors hover:text-[#FFAB8B]"
              >
                <Mail className="h-5 w-5" />
                <span>support@razurtech.com</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="rounded-lg bg-[#1A1A1A] p-8"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-lg border-gray-600 bg-[#0C0C0C] p-3 text-white focus:border-[#FF8330] focus:ring-[#FF8330]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-lg border-gray-600 bg-[#0C0C0C] p-3 text-white focus:border-[#FF8330] focus:ring-[#FF8330]"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-lg border-gray-600 bg-[#0C0C0C] p-3 text-white focus:border-[#FF8330] focus:ring-[#FF8330]"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button type="submit" className="button-primary w-full">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;