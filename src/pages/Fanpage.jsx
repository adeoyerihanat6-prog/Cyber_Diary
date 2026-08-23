import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { fanContent } from '../data/fanContent';

export default function FanPage() {
  return (
    <div className="min-h-[calc(100vh-80px)] px-4 py-12">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-cyber-rose/20 text-cyber-plum font-sans text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-3 border border-cyber-rose/30">
            <Heart className="w-3.5 h-3.5 text-cyber-rose" />
            <span>Rihannah's Shrine & Obsessions</span>
          </div>
          <h1 className="font-cursive text-5xl md:text-6xl text-cyber-plum">
            The Fanpage Hub
          </h1>
          <p className="font-sans text-cyber-plum/70 mt-2 max-w-lg mx-auto">
            A curated glass showcase of the music, books, and shows that fuel my creativity everyday.
          </p>
        </motion.div>

        {/* Grid mapped from fanContent.js */}
        <div className="grid gap-6 md:grid-cols-2">
          {fanContent.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <motion.div 
                key={section.id || section.title}
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className="bg-white/60 backdrop-blur-xl shadow-glass border border-white/80 rounded-3xl p-8 flex flex-col justify-between hover:border-cyber-rose/50 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-cyber-lilac/30 flex items-center justify-center text-cyber-plum">
                      <IconComponent className="w-6 h-6 text-cyber-rose" />
                    </div>
                    <span className="text-xs font-semibold text-cyber-mauve uppercase tracking-widest bg-cyber-mauve/10 px-3 py-1 rounded-full border border-cyber-mauve/20">
                      {section.category}
                    </span>
                  </div>

                  <h3 className="font-cursive text-3xl text-cyber-plum mb-3">
                    {section.title}
                  </h3>
                  
                  <p className="font-sans text-cyber-plum/80 text-sm md:text-base leading-relaxed mb-6">
                    {section.desc}
                  </p>
                </div>

                {/* Highlights Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-cyber-lilac/20">
                  {section.highlights.map((tag) => (
                    <span key={tag} className="text-xs font-sans bg-white/70 text-cyber-plum px-3 py-1 rounded-full border border-cyber-lilac/30">
                      #{tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}