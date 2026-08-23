import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Tag, Smile, Sparkles } from 'lucide-react';
import { diaryEntries } from '../data/diaryEntries';

export default function Diary() {
  const [filter, setFilter] = useState('All');

  // Filter entries based on the selected tag
  const filteredEntries = filter === 'All' 
    ? diaryEntries 
    : diaryEntries.filter(e => e.tag === filter);

  return (
    <div className="min-h-[calc(100vh-80px)] px-4 py-12">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-cyber-mauve/20 text-cyber-plum font-sans text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-3 border border-cyber-mauve/30">
            <Sparkles className="w-3.5 h-3.5 text-cyber-rose" />
            <span>Rihannah's Personal Logs</span>
          </div>
          <h1 className="font-cursive text-5xl md:text-6xl text-cyber-plum">
            The Diary Archive
          </h1>
          <p className="font-sans text-cyber-plum/70 mt-2">
            Thoughts, code logs, and reflections stored securely in glass cards.
          </p>
        </motion.div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {['All', 'Development', 'Routine', 'Personal'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full font-sans text-xs font-semibold transition-all ${
                filter === cat 
                  ? 'bg-cyber-plum text-white shadow-md' 
                  : 'bg-white/50 text-cyber-plum hover:bg-white border border-cyber-lilac/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Entries List mapped from diaryEntries.js */}
        <div className="space-y-6">
          {filteredEntries.map((entry, index) => (
            <motion.article 
              key={entry.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white/60 backdrop-blur-xl shadow-glass border border-white/80 rounded-3xl p-6 md:p-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4 text-xs font-sans text-cyber-plum/60 border-b border-cyber-lilac/20 pb-3">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 bg-cyber-lilac/30 px-3 py-1 rounded-full text-cyber-plum font-medium">
                    <Calendar className="w-3.5 h-3.5 text-cyber-rose" />
                    {entry.date}
                  </span>
                  <span className="flex items-center gap-1 bg-cyber-pink/40 px-3 py-1 rounded-full text-cyber-plum font-medium">
                    <Tag className="w-3.5 h-3.5 text-cyber-mauve" />
                    {entry.tag}
                  </span>
                </div>
                <span className="flex items-center gap-1 font-medium text-cyber-plum bg-white/50 px-3 py-1 rounded-full">
                  <Smile className="w-3.5 h-3.5 text-amber-500" />
                  {entry.mood}
                </span>
              </div>

              <h2 className="font-cursive text-3xl text-cyber-plum mb-3">
                {entry.title}
              </h2>
              <p className="font-sans text-cyber-plum/80 leading-relaxed text-sm md:text-base">
                {entry.content}
              </p>
            </motion.article>
          ))}
        </div>

      </div>
    </div>
  );
}