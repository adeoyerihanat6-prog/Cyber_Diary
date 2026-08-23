import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Heart,
  Moon,
  Coffee,
  Music,
  Camera,
  Flower2,
  Cloud,
  Star,
  Terminal,
  Flower,
} from "lucide-react";

export default function About() {
  return (
    <div className="min-h-[calc(100vh-80px)] px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyber-mauve/10 border border-cyber-mauve/20 mb-5">
            <Sparkles className="w-3.5 h-3.5 text-cyber-rose animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-cyber-plum">
              little_about_me.exe
            </span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <h1 className="font-cursive text-5xl md:text-6xl text-cyber-plum">
              A little bit about me
            </h1>
            <Flower className="w-8 h-8 text-cyber-rose animate-spin-slow" />
          </div>

          <p className="font-sans text-cyber-plum/55 mt-3 max-w-xl mx-auto">
            No serious biography here. Just a tiny collection of things,
            moods, thoughts and random pieces of me.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white/50 backdrop-blur-2xl border border-white/60 shadow-glass rounded-[2rem] p-6 md:p-10 relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute -top-32 -right-32 w-72 h-72 bg-cyber-pink/15 rounded-full blur-3xl pointer-events-none" />

          <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-cyber-lilac/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            {/* Intro */}
            <div className="grid md:grid-cols-[1.3fr_0.7fr] gap-8 items-start">
              <div>
                <p className="font-mono text-xs text-cyber-plum/40 mb-3 flex items-center gap-1">
                  <span>// hello, internet</span>
                </p>

                <div className="flex items-center gap-2 mb-5">
                  <h2 className="font-cursive text-4xl text-cyber-plum">
                    Hi, I'm Rihannah.
                  </h2>
                  <Flower2 className="w-6 h-6 text-cyber-rose" />
                </div>

                <div className="space-y-4 text-cyber-plum/70 leading-relaxed">
                  <p>
                    I'm just a girl with a lot of random thoughts, too many
                    ideas and a habit of turning those ideas into little
                    things on the internet.
                  </p>

                  <p>
                    Sometimes I'm creating something. Sometimes I'm learning
                    something. Sometimes I'm just listening to music and
                    staring at my screen like I have somewhere important to
                    be. 
                  </p>

                  <p>
                    I made this website because I wanted a little corner of
                    the internet that felt like mine.
                  </p>
                </div>
              </div>

              {/* Mini terminal */}
              <div className="bg-cyber-plum/[0.04] border border-cyber-lilac/30 rounded-3xl p-6 font-mono text-xs shadow-inner">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-cyber-mauve" />
                    <span className="text-cyber-plum/45">
                      tiny_profile.txt
                    </span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-cyber-rose animate-ping" />
                </div>

                <div className="space-y-3 text-cyber-plum/65">
                  <p>
                    <span className="text-cyber-mauve">name:</span>{" "}
                    Rihannah
                  </p>

                  <p className="flex items-center gap-1.5">
                    <span className="text-cyber-mauve">vibe:</span>{" "}
                    complicated <Sparkles className="w-3 h-3 text-cyber-rose" />
                  </p>

                  <p>
                    <span className="text-cyber-mauve">currently:</span>{" "}
                    existing
                  </p>

                  <p>
                    <span className="text-cyber-mauve">energy:</span>{" "}
                    unpredictable
                  </p>

                  <p>
                    <span className="text-cyber-mauve">ideas:</span>{" "}
                    too_many
                  </p>

                  <p className="flex items-center gap-1">
                    <span className="text-cyber-mauve">status:</span>{" "}
                    loading<span className="animate-pulse">...</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="my-10 border-t border-cyber-lilac/30" />

            {/* Things about me */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Star className="w-4 h-4 text-cyber-rose" />

                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-cyber-plum/40">
                    random_facts.exe
                  </p>

                  <h3 className="font-cursive text-3xl text-cyber-plum">
                    Things you might find here
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <AboutCard
                  icon={Heart}
                  title="Pretty things"
                  text="I appreciate things that are unnecessarily pretty."
                  color="rose"
                />

                <AboutCard
                  icon={Moon}
                  title="Late night thoughts"
                  text="Somehow everything feels more interesting at night."
                  color="mauve"
                />

                <AboutCard
                  icon={Music}
                  title="Music"
                  text="A good song can completely change the mood."
                  color="rose"
                />

                <AboutCard
                  icon={Camera}
                  title="Little moments"
                  text="Tiny things that would probably be forgotten otherwise."
                  color="mauve"
                />

                <AboutCard
                  icon={Flower2}
                  title="Soft aesthetics"
                  text="Flowers, dreamy visuals and pretty little details."
                  color="rose"
                />

                <AboutCard
                  icon={Cloud}
                  title="Random thoughts"
                  text="The kind that appear out of nowhere and refuse to leave."
                  color="mauve"
                />
              </div>
            </div>

            {/* Quote */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="mt-10 rounded-3xl bg-cyber-plum p-7 md:p-9 text-center relative overflow-hidden shadow-lg"
            >
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-cyber-mauve/20 rounded-full blur-3xl" />

              <div className="relative z-10">
                <Sparkles className="w-5 h-5 text-cyber-pink mx-auto mb-4 animate-pulse" />

                <p className="font-cursive text-2xl md:text-3xl text-white leading-relaxed">
                  "Maybe I don't have everything figured out.
                  <br />
                  Maybe I don't need to."
                </p>

                <p className="font-mono text-[9px] uppercase tracking-widest text-white/40 mt-5">
                  rihannah.exe
                </p>
              </div>
            </motion.div>

            {/* Tiny footer */}
            <div className="mt-8 flex items-center justify-center gap-2 text-[10px] font-mono text-cyber-plum/35">
              <Coffee className="w-3 h-3 text-cyber-rose" />
              <span>just a tiny corner of the internet</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ================= ABOUT CARD ================= */

function AboutCard({ icon: Icon, title, text, color }) {
  const iconColor =
    color === "rose" ? "text-cyber-rose" : "text-cyber-mauve";

  const bgColor =
    color === "rose" ? "bg-cyber-rose/10" : "bg-cyber-mauve/10";

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="bg-white/40 border border-white/60 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
    >
      <div
        className={`w-10 h-10 rounded-xl ${bgColor} flex items-center justify-center mb-4`}
      >
        <Icon className={`w-4 h-4 ${iconColor}`} />
      </div>

      <h4 className="font-cursive text-xl text-cyber-plum">
        {title}
      </h4>

      <p className="text-xs text-cyber-plum/55 leading-relaxed mt-2">
        {text}
      </p>
    </motion.div>
  );
}