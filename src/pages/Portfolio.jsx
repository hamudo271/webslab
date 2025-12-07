import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import TextReveal from '../components/common/TextReveal';

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  
  const projects = [
    { title: "Samsung Electronics", category: "Corporate", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop" },
    { title: "LG Energy Solution", category: "Corporate", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" },
    { title: "Hyundai Motor", category: "Branded", image: "https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=2070&auto=format&fit=crop" },
    { title: "SK Telecom", category: "Short Form", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop" },
    { title: "Naver Webtoon", category: "Branded", image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1974&auto=format&fit=crop" },
    { title: "Kakao Mobility", category: "Short Form", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" },
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="bg-bg-primary min-h-screen transition-colors duration-500">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden border-b border-black/10 dark:border-white/10">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden" animate="visible" variants={fadeInUp}
            className="max-w-4xl"
          >
            <span className="text-accent-primary font-bold tracking-widest uppercase block mb-6">Portfolio</span>
            <h1 className="text-5xl md:text-8xl font-black text-text-primary mb-8 leading-tight">
              백문이<br />
              불여일견
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed font-medium max-w-3xl">
              직접 확인 해보세요! 유니버랩 미디어의 제작 사례입니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-16">
            {['All', 'Corporate', 'Branded', 'Short Form'].map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${
                  filter === item 
                    ? 'bg-accent-primary text-white' 
                    : 'bg-bg-secondary text-text-secondary hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={index}
                  className="group relative aspect-video overflow-hidden rounded-2xl cursor-pointer"
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <span className="text-accent-primary text-sm font-bold uppercase tracking-widest mb-2">{project.category}</span>
                    <h3 className="text-white text-2xl font-bold flex items-center gap-2">
                      {project.title}
                      <ArrowUpRight size={20} />
                    </h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
