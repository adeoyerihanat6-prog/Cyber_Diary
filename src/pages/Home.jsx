import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Heart,
  Sparkles,
  Music,
  Terminal,
  Code2,
  Moon,
  ArrowRight,
  Wifi,
  Brain,
  Camera,
  FolderGit2,
  Sprout,
  Shuffle,
  Lightbulb,
  Coffee,
  Laptop,
  Star,
  Play,
  Pause,
  Volume2,
  Smile,
  Zap,
  Radio,
} from "lucide-react";

const thoughts = [
  "I opened VS Code to fix one bug and somehow started another project.",
  "Maybe I don't need another project... but what if I made it really pretty?",
  "Learning JavaScript properly is humbling me every single day 😭.",
  "There are probably 17 unfinished ideas somewhere in my notes.",
  "Sometimes the best way to learn is to just build something ridiculous.",
  "I should probably sleep. Anyway, let me just fix this one thing.",
  "I came here to code and somehow spent 30 minutes choosing a font.",
  "One day I'll stop starting random projects. Today is not that day.",
  "Why build something simple when I can make it unnecessarily pretty?",
  "I have an idea. Unfortunately, now I have to build it.",
];

const exploreItems = [
  {
    title: "My Diary",
    description:
      "Thoughts, moments, stories, tiny wins, random observations and things I don't want to forget.",
    icon: BookOpen,
    path: "/diary",
    label: "read entries",
  },
  {
    title: "Things I Like",
    description:
      "Music, books, shows, aesthetics, random obsessions and whatever currently has my attention.",
    icon: Heart,
    path: "/fanpage",
    label: "explore obsessions",
  },
  {
    title: "My World",
    description:
      "Projects, experiments, coding adventures, things I'm learning and my journey as a developer.",
    icon: FolderGit2,
    path: "/projects",
    label: "enter my world",
  },
  {
    title: "Memories",
    description:
      "Screenshots, little moments, pictures and random pieces of life that deserve a place here.",
    icon: Camera,
    path: "/memories",
    label: "view memories",
  },
];

const moods = [
  { name: "Late Night Coding", icon: Moon, color: "text-cyber-mauve" },
  { name: "Hyper-Focused", icon: Zap, color: "text-cyber-rose" },
  { name: "Lo-Fi Chill", icon: Music, color: "text-emerald-500" },
  { name: "Overthinking", icon: Brain, color: "text-cyber-pink" },
];

export default function Home() {
  const [thought, setThought] = useState(thoughts[0]);
  const [currentMoodIndex, setCurrentMoodIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const surpriseMe = () => {
    const availableThoughts = thoughts.filter((item) => item !== thought);
    const randomThought =
      availableThoughts[Math.floor(Math.random() * availableThoughts.length)];
    setThought(randomThought);
  };

  const cycleMood = () => {
    setCurrentMoodIndex((prev) => (prev + 1) % moods.length);
  };

  const ActiveMoodIcon = moods[currentMoodIndex].icon;

  return (
    <div className="min-h-[calc(100vh-80px)] px-4 py-10 md:py-14">
      <div className="max-w-5xl mx-auto space-y-6">

        {/* ================= HERO ================= */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white/50 backdrop-blur-2xl shadow-glass border border-white/60 rounded-[2rem] p-7 md:p-12 relative overflow-hidden"
        >
          {/* Decorative Glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyber-mauve/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-24 w-72 h-72 bg-cyber-pink/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-10 right-10 text-cyber-rose/20 pointer-events-none">
            <Star className="w-16 h-16" />
          </div>

          {/* System Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 relative z-10">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-cyber-rose" />
                <span className="w-2.5 h-2.5 rounded-full bg-cyber-mauve" />
                <span className="w-2.5 h-2.5 rounded-full bg-cyber-lilac" />
              </div>
              <span className="font-mono text-xs text-cyber-plum/60">
                rihannah@cyber-diary:~$
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* Interactive Mood Pill */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={cycleMood}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/70 border border-cyber-lilac/40 text-xs font-mono text-cyber-plum shadow-xs cursor-pointer"
                title="Click to change current mood"
              >
                <ActiveMoodIcon className={`w-3.5 h-3.5 ${moods[currentMoodIndex].color}`} />
                <span>{moods[currentMoodIndex].name}</span>
              </motion.button>

              <div className="flex items-center gap-2 text-xs font-mono text-cyber-plum/60 bg-white/55 px-3 py-1.5 rounded-full border border-cyber-lilac/30">
                <Wifi className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
                <span>ONLINE</span>
              </div>
            </div>
          </div>

          {/* Intro */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-cyber-mauve/15 text-cyber-plum font-mono text-xs px-4 py-2 rounded-full border border-cyber-mauve/20 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-cyber-rose" />
              <span>WELCOME TO MY LITTLE CORNER OF THE INTERNET</span>
            </div>

            <h1 className="font-cursive text-5xl md:text-7xl text-cyber-plum mb-6 leading-[1.05]">
              Hi, I'm Rihannah.
              <br />
              <span className="text-cyber-mauve">
                This is where my brain lives.
              </span>
            </h1>

            <p className="font-sans text-cyber-plum/75 text-lg md:text-xl mb-8 max-w-2xl leading-relaxed">
              A little digital diary for my thoughts, random ideas,
              coding adventures, things I'm obsessed with, tiny wins,
              unfinished ideas and all the little pieces of life I don't
              want to forget.
            </p>

            {/* Terminal */}
            <div className="bg-cyber-plum/[0.04] border border-cyber-lilac/30 rounded-2xl p-5 mb-8 font-mono text-sm text-cyber-plum/70 overflow-x-auto">
              <p>
                <span className="text-cyber-mauve">const</span>{" "}
                <span className="text-cyber-plum">rihannah</span> = {"{"}
              </p>
              <p className="pl-5">
                currently:{" "}
                <span className="text-cyber-rose">
                  "building random things"
                </span>
                ,
              </p>
              <p className="pl-5">
                learning:{" "}
                <span className="text-cyber-rose">
                  "JavaScript properly"
                </span>
                ,
              </p>
              <p className="pl-5">
                creating:{" "}
                <span className="text-cyber-rose">
                  "things that feel like me"
                </span>
                ,
              </p>
              <p className="pl-5">
                status:{" "}
                <span className="text-emerald-500">
                  "figuring it out"
                </span>
                ,
              </p>
              <p className="pl-5">
                sleep:{" "}
                <span className="text-cyber-rose">
                  "probably not"
                </span>
              </p>
              <p>{"};"}</p>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/diary"
                  className="flex items-center gap-2 bg-cyber-plum text-white font-sans font-semibold px-7 py-3.5 rounded-full shadow-lg hover:bg-cyber-mauve transition-all"
                >
                  <BookOpen className="w-4 h-4" />
                  Read My Diary
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/fanpage"
                  className="flex items-center gap-2 bg-white/70 text-cyber-plum font-sans font-semibold px-7 py-3.5 rounded-full border border-cyber-lilac shadow-sm hover:bg-white transition-all"
                >
                  <Heart className="w-4 h-4 text-cyber-rose" />
                  Things I Like
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* ================= CURRENTLY VIBING (NEW FEATURE) ================= */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid md:grid-cols-3 gap-4"
        >
          <div className="bg-white/45 backdrop-blur-xl border border-white/60 rounded-[2rem] p-6 shadow-glass md:col-span-2 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyber-rose" />
                <h3 className="font-cursive text-2xl text-cyber-plum">Currently...</h3>
              </div>
              <span className="font-mono text-[10px] uppercase text-cyber-plum/40">live_snapshot.exe</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <CurrentItem icon={Code2} label="Building" value="Cyber Diary App" />
              <CurrentItem icon={Brain} label="Learning" value="JavaScript Mastery" />
              <CurrentItem icon={Music} label="Listening" value="Afrobeats & Lo-Fi" />
              <CurrentItem icon={Moon} label="Vibe" value="Midnight Creativity" />
            </div>
          </div>

          {/* Interactive Music Player Widget */}
          <div className="bg-white/45 backdrop-blur-xl border border-white/60 rounded-[2rem] p-6 shadow-glass flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Radio className="w-4 h-4 text-cyber-mauve animate-pulse" />
                <span className="font-mono text-xs uppercase tracking-wider text-cyber-plum/60">Now Playing</span>
              </div>
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-8 h-8 rounded-full bg-cyber-plum text-white flex items-center justify-center shadow-md hover:bg-cyber-mauve transition-colors"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 translate-x-0.5" />}
              </button>
            </div>

            <div className="my-4">
              <p className="font-cursive text-xl text-cyber-plum truncate">Midnight Thoughts</p>
              <p className="font-sans text-xs text-cyber-plum/50">Rihannah's Late Night Rotation</p>
            </div>

            {/* Audio Waves Simulation */}
            <div className="flex items-end gap-1 h-6 pt-2">
              {[40, 80, 60, 100, 50, 70, 30, 90, 60, 40].map((height, i) => (
                <motion.span
                  key={i}
                  animate={isPlaying ? { height: [`${height}%`, `${Math.max(15, height * 0.4)}%`, `${height}%`] } : { height: "20%" }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.1 }}
                  className="flex-1 bg-cyber-mauve/40 rounded-full"
                />
              ))}
            </div>
          </div>
        </motion.section>

        {/* ================= RANDOM THOUGHT ================= */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative overflow-hidden bg-cyber-plum rounded-[2rem] p-7 md:p-9 text-white shadow-glass"
        >
          <div className="absolute -right-16 -top-16 w-48 h-48 bg-cyber-mauve/20 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="w-4 h-4 text-cyber-pink" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-cyber-pink/70">
                  random_thought.exe
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.p
                  key={thought}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="font-cursive text-2xl md:text-3xl max-w-2xl leading-relaxed"
                >
                  "{thought}"
                </motion.p>
              </AnimatePresence>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={surpriseMe}
              className="flex items-center justify-center gap-2 shrink-0 bg-white/10 hover:bg-white/20 border border-white/20 px-5 py-3 rounded-full font-mono text-xs transition-all cursor-pointer"
            >
              <Shuffle className="w-3.5 h-3.5" />
              Surprise me
            </motion.button>
          </div>
        </motion.section>

        {/* ================= EXPLORE ================= */}
        <section>
          <div className="flex items-end justify-between mb-5 px-2">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-cyber-plum/40">
                explore.exe
              </p>
              <h2 className="font-cursive text-4xl text-cyber-plum">
                A little bit of my world
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {exploreItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                >
                  <Link
                    to={item.path}
                    className="group block h-full bg-white/45 backdrop-blur-xl border border-white/60 rounded-[1.7rem] p-6 shadow-glass hover:bg-white/65 transition-all"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="w-11 h-11 rounded-2xl bg-cyber-lilac/20 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-cyber-mauve" />
                      </div>
                      <ArrowRight className="w-4 h-4 text-cyber-plum/30 group-hover:text-cyber-mauve group-hover:translate-x-1 transition-all" />
                    </div>

                    <h3 className="font-cursive text-2xl text-cyber-plum mt-5">
                      {item.title}
                    </h3>

                    <p className="font-sans text-sm text-cyber-plum/60 leading-relaxed mt-2">
                      {item.description}
                    </p>

                    <p className="font-mono text-[10px] uppercase tracking-wider text-cyber-mauve mt-5">
                      {item.label} →
                    </p>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ================= LEARNING ================= */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/45 backdrop-blur-xl border border-white/60 rounded-[2rem] p-6 md:p-8 shadow-glass"
        >
          <div className="flex items-center gap-2 mb-6">
            <Sprout className="w-4 h-4 text-emerald-500" />
            <div>
              <h2 className="font-cursive text-3xl text-cyber-plum">
                Things I'm learning
              </h2>
              <p className="font-mono text-[10px] text-cyber-plum/40">
                slowly but surely...
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <LearningItem
              name="JavaScript"
              progress="learning the fundamentals properly"
              width="72%"
            />
            <LearningItem
              name="React"
              progress="building + understanding what's underneath"
              width="85%"
            />
            <LearningItem
              name="Full-stack development"
              progress="still figuring things out"
              width="68%"
            />
          </div>

          <div className="mt-6 p-4 rounded-2xl bg-cyber-pink/10 border border-cyber-pink/20">
            <p className="font-mono text-xs text-cyber-plum/60">
              <span className="text-cyber-mauve">const</span>{" "}
              <span className="text-cyber-plum">goal</span> ={" "}
              <span className="text-cyber-rose">
                "understand, don't just copy"
              </span>
              ;
            </p>
          </div>
        </motion.section>

        {/* ================= STATS ================= */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          <Stat number="∞" label="Ideas in my head" icon={Brain} />
          <Stat number="24/7" label="Curiosity" icon={Sparkles} />
          <Stat number="100%" label="Vibe-checked" icon={Smile} />
          <Stat number="1" label="Cyber Diary" icon={BookOpen} />
        </motion.section>

        {/* ================= FINAL NOTE ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center py-6"
        >
          <Sparkles className="w-4 h-4 text-cyber-rose mx-auto mb-3" />
          <p className="font-cursive text-2xl text-cyber-plum">
            Just a girl building things on the internet.
          </p>
          <p className="font-mono text-[10px] text-cyber-plum/40 mt-2">
            RIHANNAH_CYBER_DIARY // made with curiosity + too many ideas
          </p>
        </motion.div>

      </div>
    </div>
  );
}

/* ================= SMALL COMPONENTS ================= */

function CurrentItem({ icon: Icon, label, value }) {
  return (
    <div className="bg-white/40 p-4 rounded-2xl border border-white/50">
      <Icon className="w-4 h-4 text-cyber-mauve mb-3" />
      <p className="text-[10px] uppercase tracking-wider text-cyber-plum/40">
        {label}
      </p>
      <p className="text-xs font-medium text-cyber-plum mt-1">
        {value}
      </p>
    </div>
  );
}

function LearningItem({ name, progress, width }) {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
        <span className="font-sans text-sm font-semibold text-cyber-plum">
          {name}
        </span>
        <span className="font-mono text-[10px] text-cyber-plum/40">
          {progress}
        </span>
      </div>

      <div className="h-2 rounded-full bg-cyber-lilac/15 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-cyber-mauve to-cyber-rose"
        />
      </div>
    </div>
  );
}

function Stat({ number, label, icon: Icon }) {
  return (
    <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-2xl p-5 text-center">
      <Icon className="w-4 h-4 text-cyber-mauve mx-auto mb-3" />
      <p className="font-cursive text-3xl text-cyber-plum">
        {number}
      </p>
      <p className="font-mono text-[9px] uppercase tracking-wider text-cyber-plum/40 mt-1">
        {label}
      </p>
    </div>
  );
}