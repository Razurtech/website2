import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Rocket, Target, Heart } from 'lucide-react';

const values = [
  {
    icon: Rocket,
    title: 'Mission',
    description: 'To empower businesses with innovative technology solutions that drive growth and success in the digital age.'
  },
  {
    icon: Target,
    title: 'Vision',
    description: 'To be the leading force in digital transformation, setting new standards for technological excellence and innovation.'
  },
  {
    icon: Heart,
    title: 'Values',
    description: 'Innovation, integrity, excellence, and customer success are at the heart of everything we do.'
  }
];

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold sm:text-4xl"
          >
            <span className="gradient-text">About RazurTech</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-gray-400"
          >
            We're a team of passionate technologists dedicated to transforming businesses
            through innovative solutions and cutting-edge technology.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="service-card"
            >
              <value.icon className="mb-4 h-8 w-8 text-[#FF8330]" />
              <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;