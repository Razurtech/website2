import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const sphereRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = sphereRef.current;
    if (!container) return;

    // Create spheres
    const sphereCount = 50;
    const spheres: HTMLDivElement[] = [];

    for (let i = 0; i < sphereCount; i++) {
      const sphere = document.createElement('div');
      sphere.className = 'sphere';
      container.appendChild(sphere);
      spheres.push(sphere);

      // Random initial position
      const angle = (Math.PI * 2 * i) / sphereCount;
      const radius = 150 + Math.random() * 100;
      sphere.style.transform = `translate(${Math.cos(angle) * radius}px, ${
        Math.sin(angle) * radius
      }px)`;
    }

    // Animate spheres
    let frame = 0;
    const animate = () => {
      frame += 0.002;
      spheres.forEach((sphere, i) => {
        const angle = frame + (Math.PI * 2 * i) / sphereCount;
        const radius = 150 + Math.sin(frame * 2 + i) * 50;
        sphere.style.transform = `translate(${Math.cos(angle) * radius}px, ${
          Math.sin(angle) * radius
        }px)`;
      });
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,131,48,0.1),transparent_50%)]" />
      </div>

      {/* 3D Sphere Cluster */}
      <div ref={sphereRef} className="sphere-container" />

      <div className="mx-auto max-w-7xl px-4 pt-32 sm:px-6 lg:px-8">
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="gradient-text">Innovating the Future</span>
            <br />
            One Tech at a Time
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-gray-400"
          >
            Empowering businesses with cutting-edge technology solutions
            that drive growth and innovation in the digital age.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10"
          >
            <button className="button-primary">
              Get Started
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;