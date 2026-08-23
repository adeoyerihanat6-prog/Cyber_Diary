import React from "react";
import { motion } from "framer-motion";

const flowers = [
  { left: "7%", top: "18%", size: 34, delay: 0, duration: 8, rotate: -15 },
  { left: "88%", top: "15%", size: 28, delay: 1.5, duration: 10, rotate: 20 },
  { left: "15%", top: "72%", size: 25, delay: 2, duration: 9, rotate: 12 },
  { left: "82%", top: "68%", size: 38, delay: 0.8, duration: 11, rotate: -20 },
  { left: "48%", top: "8%", size: 22, delay: 3, duration: 8, rotate: 10 },
  { left: "92%", top: "45%", size: 20, delay: 2.5, duration: 9, rotate: -10 },
  { left: "4%", top: "45%", size: 20, delay: 1, duration: 10, rotate: 15 },
];

const petals = [
  { left: "12%", top: "30%" },
  { left: "25%", top: "12%" },
  { left: "38%", top: "80%" },
  { left: "58%", top: "18%" },
  { left: "70%", top: "75%" },
  { left: "92%", top: "30%" },
  { left: "75%", top: "48%" },
  { left: "18%", top: "55%" },
  { left: "52%", top: "90%" },
  { left: "35%", top: "42%" },
];

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">

      {/* Dreamy base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fffaff] via-[#f7efff] to-[#fff1f7]" />

      {/* Soft dreamy light */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.5, 0.35],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 left-1/4 w-[500px] h-[500px] rounded-full bg-cyber-lilac/25 blur-[120px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-200px] right-1/4 w-[550px] h-[550px] rounded-full bg-cyber-pink/25 blur-[130px]"
      />

      {/* Floating flowers */}
      {flowers.map((flower, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: flower.left,
            top: flower.top,
          }}
          animate={{
            y: [-12, 12, -12],
            rotate: [
              flower.rotate - 5,
              flower.rotate + 5,
              flower.rotate - 5,
            ],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: flower.duration,
            delay: flower.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div
            className="relative"
            style={{
              width: flower.size,
              height: flower.size,
            }}
          >
            {/* Petals */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="absolute w-[45%] h-[70%] bg-cyber-pink/55 rounded-full -translate-y-[38%]" />
              <span className="absolute w-[45%] h-[70%] bg-cyber-lilac/55 rounded-full translate-y-[38%]" />
              <span className="absolute w-[70%] h-[45%] bg-cyber-mauve/35 rounded-full -translate-x-[38%]" />
              <span className="absolute w-[70%] h-[45%] bg-cyber-rose/30 rounded-full translate-x-[38%]" />

              {/* Flower center */}
              <span className="relative w-[22%] h-[22%] rounded-full bg-[#f8d982] shadow-sm" />
            </div>
          </div>
        </motion.div>
      ))}

      {/* Floating petals */}
      {petals.map((petal, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: petal.left,
            top: petal.top,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-8, 8, -8],
            rotate: [0, 180, 360],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 7 + (index % 4),
            delay: index * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="block w-2 h-3 rounded-full bg-cyber-rose/35 rotate-45" />
        </motion.div>
      ))}

      {/* Tiny glowing particles / fireflies */}
      {[...Array(25)].map((_, index) => (
        <motion.span
          key={`glow-${index}`}
          className="absolute w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_rgba(179,136,235,0.8)]"
          style={{
            left: `${(index * 41) % 100}%`,
            top: `${(index * 67) % 100}%`,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0.5, 1.3, 0.5],
            y: [-8, 8, -8],
          }}
          transition={{
            duration: 3 + (index % 5),
            delay: index * 0.25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Soft vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(45,35,53,0.04)_100%)]" />
    </div>
  );
}