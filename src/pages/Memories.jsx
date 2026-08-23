import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, X, Heart, Sparkles, ChevronLeft, ChevronRight, Shuffle, Volume2, VolumeX, MessageCircleHeart } from "lucide-react";

// Automatically import all .jpg images from the assets/memories folder using Vite
const imagesModule = import.meta.glob('../assets/memories/*.jpg', { eager: true });
const rawMemories = Object.values(imagesModule).map((mod) => mod.default);

const memories = rawMemories.length > 0 ? rawMemories : [
  "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop",
];

export default function Memories() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("all");
  const [likedIndices, setLikedIndices] = useState(new Set());
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [showSecretNote, setShowSecretNote] = useState(false);
  
  // Reference to the audio element pointing to public/audio/lofi.mp3
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlayingMusic) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => {
        console.log("Audio play error:", err);
      });
    }
    setIsPlayingMusic(!isPlayingMusic);
  };

  const toggleLike = (index, e) => {
    if (e) e.stopPropagation();
    setLikedIndices((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const nextImage = (e) => {
    if (e) e.stopPropagation();
    setSelected((prev) => (prev === memories.length - 1 ? 0 : prev + 1));
  };

  const previousImage = (e) => {
    if (e) e.stopPropagation();
    setSelected((prev) => (prev === 0 ? memories.length - 1 : prev - 1));
  };

  const surpriseMe = () => {
    const randomIndex = Math.floor(Math.random() * memories.length);
    setSelected(randomIndex);
  };

  const filteredMemories = memories.map((img, idx) => ({ img, idx })).filter(({ idx }) => {
    if (filter === "favorites") return likedIndices.has(idx);
    return true;
  });

  return (
    <div className="min-h-screen px-4 py-10 md:py-14 bg-gradient-to-br from-rose-50/70 via-purple-50/40 to-sky-50/40 relative overflow-hidden">
      
      {/* HTML5 Audio Element referencing public folder */}
      <audio 
        ref={audioRef} 
        loop 
        src="/audio/lofi.mp3" 
      />

      {/* TOP CONTROLS BAR (Secret Note & Music Toggle) */}
      <div className="max-w-5xl mx-auto flex justify-between items-center mb-6">
        <button
          onClick={() => setShowSecretNote(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-xl border border-pink-200 shadow-sm hover:bg-white transition-all text-purple-900"
        >
          <MessageCircleHeart className="w-4 h-4 text-rose-500 animate-bounce" />
          <span className="font-mono text-[10px] tracking-wider uppercase">open note 💌</span>
        </button>

        <button
          onClick={toggleMusic}
          className={`flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl border transition-all shadow-sm ${
            isPlayingMusic 
              ? "bg-purple-900 text-white border-purple-900 scale-105" 
              : "bg-white/80 text-purple-900/80 border-pink-200 hover:bg-white"
          }`}
        >
          {isPlayingMusic ? <Volume2 className="w-4 h-4 animate-pulse" /> : <VolumeX className="w-4 h-4" />}
          <span className="font-mono text-[10px] tracking-wider uppercase">
            {isPlayingMusic ? "music playing 🎶" : "play music"}
          </span>
        </button>
      </div>

      <div className="max-w-5xl mx-auto">

        {/* ================= HEADER ================= */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-xl border border-pink-200 shadow-sm">
            <Camera className="w-4 h-4 text-rose-400" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-purple-900/70">
              memory scrapbook vault ✨
            </span>
          </div>

          <h1 className="font-cursive text-5xl md:text-7xl text-purple-900 mt-4">
            Little Moments
          </h1>

          <div className="flex items-center justify-center gap-3 mt-3">
            <span className="w-10 h-px bg-pink-200" />
            <Sparkles className="w-4 h-4 text-pink-400 animate-pulse" />
            <p className="font-mono text-[10px] uppercase tracking-widest text-purple-900/50">
              {memories.length} captured moments
            </p>
            <Sparkles className="w-4 h-4 text-pink-400 animate-pulse" />
            <span className="w-10 h-px bg-pink-200" />
          </div>

          {/* FILTERS */}
          <div className="flex flex-wrap justify-center items-center gap-3 mt-6">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all ${
                filter === "all"
                  ? "bg-purple-900 text-white shadow-md scale-105"
                  : "bg-white/80 text-purple-900/70 hover:bg-white border border-pink-100"
              }`}
            >
              all ({memories.length})
            </button>
            <button
              onClick={() => setFilter("favorites")}
              className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all flex items-center gap-1.5 ${
                filter === "favorites"
                  ? "bg-rose-500 text-white shadow-md scale-105"
                  : "bg-white/80 text-purple-900/70 hover:bg-white border border-pink-100"
              }`}
            >
              <Heart className={`w-3 h-3 ${filter === "favorites" ? "fill-white" : ""}`} />
              favorites ({likedIndices.size})
            </button>
            
            <button
              onClick={surpriseMe}
              className="px-4 py-1.5 rounded-full text-xs font-mono tracking-wider bg-white/80 text-purple-900/70 hover:bg-white border border-pink-100 transition-all flex items-center gap-1.5 shadow-sm hover:scale-105"
            >
              <Shuffle className="w-3 h-3 text-pink-500" />
              surprise me ✨
            </button>
          </div>
        </motion.header>

        {/* ================= PHOTO DUMP GRID ================= */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-5 space-y-5">
          {filteredMemories.map(({ img: image, idx: index }, orderIndex) => {
            const isLiked = likedIndices.has(index);

            return (
              <motion.div
                key={image}
                layout
                initial={{ opacity: 0, y: 20, rotate: index % 3 === 0 ? -2 : index % 3 === 1 ? 1 : -1 }}
                animate={{ opacity: 1, y: 0, rotate: index % 3 === 0 ? -2 : index % 3 === 1 ? 1 : -1 }}
                whileHover={{ y: -6, rotate: 0, scale: 1.02, zIndex: 10 }}
                className="relative break-inside-avoid group cursor-pointer"
                onClick={() => setSelected(index)}
              >
                {/* POLAROID CARD WITH WASHI TAPE ACCENT */}
                <div className="relative bg-white/90 backdrop-blur-xl p-2.5 pb-3 rounded-[1rem] border border-white shadow-md hover:shadow-xl transition-all duration-300">
                  
                  {/* Fake Washi Tape at top */}
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-12 h-4 bg-pink-200/60 backdrop-blur-sm rotate-1 z-10 rounded-sm border border-pink-300/40 pointer-events-none" />

                  <div className="relative overflow-hidden rounded-[0.75rem] bg-gray-100 aspect-square">
                    <img
                      src={image}
                      alt={`Memory ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />

                    <div className="absolute inset-0 bg-purple-950/0 group-hover:bg-purple-950/20 transition-all duration-300 flex items-center justify-center">
                      <div className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 shadow-sm">
                        <Camera className="w-4 h-4 text-purple-900" />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between px-1 pt-2">
                    <span className="font-mono text-[9px] tracking-widest text-purple-900/40">
                      #{String(index + 1).padStart(2, "0")}
                    </span>

                    <button
                      onClick={(e) => toggleLike(index, e)}
                      className="p-1 rounded-full hover:bg-pink-50 transition-colors"
                    >
                      <Heart
                        className={`w-3.5 h-3.5 transition-all duration-300 ${
                          isLiked
                            ? "text-rose-500 fill-rose-500 scale-125"
                            : "text-rose-300 hover:text-rose-500"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Empty state */}
        {filter === "favorites" && filteredMemories.length === 0 && (
          <div className="text-center py-20">
            <Heart className="w-10 h-10 text-rose-300 mx-auto mb-3 animate-bounce" />
            <p className="font-sans text-sm text-purple-900/60">No favorite memories saved yet!</p>
          </div>
        )}
      </div>

      {/* ================= LIGHTBOX MODAL ================= */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-purple-950/85 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelected(null)}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-lg transition-all"
            >
              <X className="w-5 h-5 text-purple-900" />
            </button>

            <button
              onClick={previousImage}
              className="absolute left-3 md:left-8 z-20 w-11 h-11 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-lg transition-all"
            >
              <ChevronLeft className="w-5 h-5 text-purple-900" />
            </button>

            <motion.div
              key={selected}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-3xl max-h-[85vh] flex flex-col items-center bg-white/10 p-4 rounded-3xl border border-white/15 backdrop-blur-md shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={memories[selected]}
                alt={`Memory ${selected + 1}`}
                className="max-w-full max-h-[65vh] object-contain rounded-2xl shadow-lg"
              />

              <div className="flex items-center justify-between w-full px-4 mt-4">
                <span className="font-mono text-xs text-white/80 tracking-widest">
                  Memory #{String(selected + 1).padStart(2, "0")} of {memories.length}
                </span>

                <button
                  onClick={(e) => toggleLike(selected, e)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 hover:bg-white/30 text-xs font-mono text-white transition-colors"
                >
                  <Heart
                    className={`w-4 h-4 ${
                      likedIndices.has(selected)
                        ? "text-rose-400 fill-rose-400"
                        : "text-white/80"
                    }`}
                  />
                  <span>{likedIndices.has(selected) ? "favorited" : "favorite"}</span>
                </button>
              </div>
            </motion.div>

            <button
              onClick={nextImage}
              className="absolute right-3 md:right-8 z-20 w-11 h-11 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-lg transition-all"
            >
              <ChevronRight className="w-5 h-5 text-purple-900" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= SECRET NOTE MODAL ================= */}
      <AnimatePresence>
        {showSecretNote && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-black/50 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setShowSecretNote(false)}
          >
            <motion.div
              initial={{ scale: 0.8, rotate: -2 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.8 }}
              className="bg-yellow-50 text-yellow-950 p-6 sm:p-8 rounded-2xl max-w-md w-full shadow-2xl border border-yellow-200 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowSecretNote(false)}
                className="absolute top-3 right-3 text-yellow-900/40 hover:text-yellow-900"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="font-cursive text-3xl mb-3 text-rose-700">A little note ♡</h3>
              <p className="font-sans text-sm leading-relaxed text-yellow-900/80">
                Thank you for looking through these little snapshots of time. Even the smallest memories become the most valuable treasures when they're kept safe. Hope this made you smile today! ✨
              </p>
              
              <div className="mt-6 text-right font-mono text-[10px] text-yellow-900/40 tracking-widest uppercase">
                - saved forever
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}