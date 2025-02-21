import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Placeholder blog posts (would be fetched from WordPress API in production)
const posts = [
  {
    id: 1,
    title: 'The Future of AI in Business',
    excerpt: 'Exploring how artificial intelligence is transforming modern business operations...',
    category: 'Trends',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Cybersecurity Best Practices',
    excerpt: 'Essential security measures every business should implement...',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Ethics in Technology',
    excerpt: 'Navigating ethical considerations in modern tech development...',
    category: 'Ethics',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80'
  }
];

const Blog: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="blog" className="bg-[#0F0F0F] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            <span className="gradient-text">Latest Insights</span>
          </h2>
          <p className="mt-4 text-gray-400">
            Stay updated with the latest technology trends and insights
          </p>
        </div>

        <div className="mt-12 flex justify-center space-x-4">
          {['All', 'Business', 'Trends', 'Ethics'].map((category) => (
            <button
              key={category}
              className="rounded-full border border-[#FF8330] px-4 py-2 text-sm transition-colors hover:bg-[#FF8330] hover:text-white"
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="overflow-hidden rounded-lg bg-[#1A1A1A] shadow-lg transition-transform hover:scale-[1.02]"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-48 w-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block rounded-full bg-[#FF8330]/10 px-3 py-1 text-sm text-[#FF8330]">
                  {post.category}
                </span>
                <h3 className="mt-4 text-xl font-semibold">{post.title}</h3>
                <p className="mt-2 text-gray-400">{post.excerpt}</p>
                <a
                  href="#"
                  className="mt-4 inline-block text-[#FF8330] hover:underline"
                >
                  Read more →
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;