import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Music2,
  BookOpen,
  Film,
  Heart,
  Coffee,
  Moon,
  Lightbulb,
  Shuffle,
  Star,
  Cloud,
  Smile,
} from "lucide-react";

const obsessions = [
  "Pretty websites",
  "Late-night thoughts",
  "Good music",
  "K-dramas",
  "Fictional worlds",
  "Cute aesthetics",
];

const thoughts = [
  "Why do I suddenly get my best ideas at the most inconvenient times?",
  "I could probably make a website for literally anything.",
  "One more episode. That's what I said three episodes ago.",
  "Sometimes I just want to disappear into a fictional universe.",
  "I really need to stop starting new ideas before finishing the old ones 😭.",
  "A good playlist can fix approximately 73% of my problems.",
  "Why does everything look better when it's slightly aesthetic?",
];

const facts = [
  "I collect ideas faster than I finish them.",
  "I can spend way too long making something look pretty.",
  "Late-night creativity is a real thing.",
  "I love getting completely absorbed in fictional stories.",
];

export default function MyWorld() {
  const [thought, setThought] = useState(thoughts[0]);

  const surpriseMe = () => {
    const available = thoughts.filter((item) => item !== thought);

    const random =
      available[Math.floor(Math.random() * available.length)];

    setThought(random);
  };

  return (
    <div className="min-h-[calc(100vh-80px)] px-4 py-10 md:py-14">
      <div className="max-w-5xl mx-auto space-y-6">

        {/* ================= HEADER ================= */}

        <motion.section
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden bg-white/50 backdrop-blur-2xl border border-white/70 shadow-glass rounded-[2rem] p-7 md:p-12"
        >
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-cyber-pink/20 rounded-full blur-3xl" />

          <div className="absolute -bottom-32 -left-24 w-72 h-72 bg-cyber-lilac/20 rounded-full blur-3xl" />

          <div className="relative z-10">

            <div className="inline-flex items-center gap-2 bg-cyber-mauve/10 border border-cyber-mauve/20 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-3.5 h-3.5 text-cyber-rose" />

              <span className="font-mono text-[10px] uppercase tracking-widest text-cyber-plum">
                welcome to my little world
              </span>
            </div>

            <h1 className="font-cursive text-5xl md:text-7xl text-cyber-plum leading-tight">
              A tiny universe
              <br />
              <span className="text-cyber-mauve">
                of things I love.
              </span>
            </h1>

            <p className="font-sans text-lg text-cyber-plum/65 max-w-2xl mt-6 leading-relaxed">
              This is the part of the internet where I keep all the
              random little things currently living in my head.
              Music, stories, shows, ideas, obsessions and everything
              in between.
            </p>

          </div>
        </motion.section>

        {/* ================= CURRENT VIBE ================= */}

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="bg-cyber-plum rounded-[2rem] p-7 md:p-9 text-white shadow-glass relative overflow-hidden"
        >
          <div className="absolute -right-20 -top-20 w-56 h-56 bg-cyber-mauve/20 rounded-full blur-3xl" />

          <div className="relative z-10">

            <div className="flex items-center gap-2 mb-5">
              <Moon className="w-4 h-4 text-cyber-pink" />

              <span className="font-mono text-[10px] uppercase tracking-widest text-cyber-pink/70">
                current_vibe.exe
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">

              <div>
                <p className="font-cursive text-4xl md:text-5xl">
                  Soft chaos.
                </p>

                <p className="font-sans text-sm text-white/55 mt-2">
                  Somewhere between coding, daydreaming and
                  finding another thing to obsess over.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-white/50">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                currently existing
              </div>

            </div>

          </div>
        </motion.section>

        {/* ================= CURRENT OBSESSIONS ================= */}

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/45 backdrop-blur-xl border border-white/60 rounded-[2rem] p-6 md:p-8 shadow-glass"
        >

          <div className="flex items-center gap-2 mb-6">
            <Heart className="w-4 h-4 text-cyber-rose" />

            <div>
              <h2 className="font-cursive text-3xl text-cyber-plum">
                Currently obsessed with...
              </h2>

              <p className="font-mono text-[10px] text-cyber-plum/40">
                subject to change without warning
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {obsessions.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -3, scale: 1.03 }}
                className="flex items-center gap-2 bg-white/60 border border-cyber-lilac/30 px-4 py-3 rounded-2xl"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyber-mauve" />

                <span className="font-sans text-sm text-cyber-plum">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>

        </motion.section>

        {/* ================= LITTLE CORNERS ================= */}

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <WorldCard
            icon={Music2}
            title="Currently listening"
            subtitle="my headphones know too much"
            value="Afrobeats + K-pop"
          />

          <WorldCard
            icon={Film}
            title="Currently watching"
            subtitle="just one more episode..."
            value="K-dramas & comfort shows"
          />

          <WorldCard
            icon={BookOpen}
            title="Currently reading"
            subtitle="getting lost in another universe"
            value="Fiction & novels"
          />

          <WorldCard
            icon={Coffee}
            title="Current energy"
            subtitle="powered by vibes"
            value="Late-night creativity"
          />

        </section>

        {/* ================= RANDOM THOUGHT ================= */}

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/45 backdrop-blur-xl border border-white/60 rounded-[2rem] p-6 md:p-8 shadow-glass"
        >

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

            <div className="flex gap-4">

              <div className="w-11 h-11 shrink-0 rounded-2xl bg-cyber-pink/20 flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-cyber-rose" />
              </div>

              <div>

                <p className="font-mono text-[10px] uppercase tracking-widest text-cyber-plum/40 mb-2">
                  inside my brain right now
                </p>

                <motion.p
                  key={thought}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-cursive text-2xl text-cyber-plum max-w-2xl"
                >
                  "{thought}"
                </motion.p>

              </div>

            </div>

            <button
              onClick={surpriseMe}
              className="flex items-center justify-center gap-2 shrink-0 bg-cyber-plum text-white px-5 py-3 rounded-full font-mono text-xs hover:bg-cyber-mauve transition-all"
            >
              <Shuffle className="w-3.5 h-3.5" />
              Random thought
            </button>

          </div>

        </motion.section>

        {/* ================= LITTLE FACTS ================= */}

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/45 backdrop-blur-xl border border-white/60 rounded-[2rem] p-6 md:p-8 shadow-glass"
        >

          <div className="flex items-center gap-2 mb-6">
            <Star className="w-4 h-4 text-cyber-mauve" />

            <h2 className="font-cursive text-3xl text-cyber-plum">
              Tiny facts about me
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

            {facts.map((fact, index) => (
              <motion.div
                key={fact}
                whileHover={{ x: 4 }}
                className="flex items-start gap-3 bg-white/40 border border-white/50 p-4 rounded-2xl"
              >
                <Smile className="w-4 h-4 text-cyber-rose mt-0.5 shrink-0" />

                <p className="font-sans text-sm text-cyber-plum/70 leading-relaxed">
                  {fact}
                </p>
              </motion.div>
            ))}

          </div>

        </motion.section>

        {/* ================= LITTLE MESSAGE ================= */}

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center py-8"
        >

          <Cloud className="w-5 h-5 text-cyber-lilac mx-auto mb-3" />

          <p className="font-cursive text-2xl text-cyber-plum/70">
            "A little space for all the things that make me... me."
          </p>

          <p className="font-mono text-[9px] uppercase tracking-widest text-cyber-plum/30 mt-3">
            rihannah's little world ♡
          </p>

        </motion.section>

      </div>
    </div>
  );
}

/* ================= WORLD CARD ================= */

function WorldCard({
  icon: Icon,
  title,
  subtitle,
  value,
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white/45 backdrop-blur-xl border border-white/60 rounded-[1.7rem] p-6 shadow-glass"
    >

      <div className="w-11 h-11 rounded-2xl bg-cyber-lilac/20 flex items-center justify-center mb-5">
        <Icon className="w-5 h-5 text-cyber-mauve" />
      </div>

      <h3 className="font-cursive text-2xl text-cyber-plum">
        {title}
      </h3>

      <p className="font-mono text-[9px] uppercase tracking-wider text-cyber-plum/35 mt-1">
        {subtitle}
      </p>

      <p className="font-sans text-sm font-semibold text-cyber-plum mt-4">
        {value}
      </p>

    </motion.div>
  );
}