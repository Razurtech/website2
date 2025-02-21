import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Brain,
  Cloud,
  Shield,
  FileEdit,
  CreditCard,
  Code,
  TrendingUp
} from 'lucide-react';

const solutions = [
  {
    icon: Brain,
    title: 'AI Solutions',
    description: 'Cutting-edge artificial intelligence solutions for business automation and optimization.'
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Scalable and secure cloud infrastructure solutions for modern enterprises.'
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Advanced security measures to protect your digital assets and data.'
  },
  {
    icon: FileEdit,
    title: 'Content Creation',
    description: 'Professional content creation and management solutions.'
  },
  {
    icon: CreditCard,
    title: 'Payment Solutions',
    description: 'Secure and efficient payment processing systems.'
  },
  {
    icon: Code,
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs.'
  },
  {
    icon: TrendingUp,
    title: 'Marketing & Advertising',
    description: 'Strategic marketing solutions to boost your revenue.'
  }
];

const Solutions: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="solutions" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            <span className="gradient-text">Our Solutions</span>
          </h2>
          <p className="mt-4 text-gray-400">
            Comprehensive technology solutions for modern businesses
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="service-card"
            >
              <solution.icon className="mb-4 h-8 w-8 text-[#FF8330]" />
              <h3 className="mb-2 text-xl font-semibold">{solution.title}</h3>
              <p className="text-gray-400">{solution.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;