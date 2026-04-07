"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import { Marquee } from "../magicui/marquee";

const SpamAlertGallery = () => {
  const [isOpen, setIsOpen] = useState(false);

  // 🔴 [SpamAlertGallery]: User clicked into the "Spam" - reveal hidden carousels
  if (!isOpen) {
    return (
      <div className="flex justify-center p-12">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="relative px-12 py-6 overflow-hidden rounded-full border-2 border-red-500 bg-red-500/10 text-red-500 font-bold text-2xl shadow-[0_0_20px_rgba(239,68,68,0.3)] animate-pulse hover:shadow-[0_0_40px_rgba(239,68,68,0.5)] transition-shadow"
        >
          Spam Alert
          {/* <div className="absolute top-0 right-0 p-1 text-[10px] uppercase font-bold opacity-30">
            Disturbing?
          </div> */}
        </motion.button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed inset-0 z-[101] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12 overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-8 right-8 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      >
        <X className="w-8 h-8 text-white" />
      </button>

      <div className="w-full h-full max-w-7xl flex flex-col justify-center gap-12">
        <h2 className="text-4xl md:text-6xl font-black text-white text-center italic tracking-tighter uppercase mb-8">
          You were warned.
        </h2>

        {/* Unfiltered Marquee */}
        <div className="space-y-4">
          <div className="flex justify-between items-end px-4">
            <span className="text-xs uppercase font-mono text-red-500">
              Source: UN_FILTERED
            </span>
            <span className="text-xs text-white/40">Raw & Unrefined</span>
          </div>
          <Marquee pauseOnHover className="[--duration:20s]">
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <div
                key={i}
                className="relative w-64 h-96 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500"
              >
                <Image
                  src={`/images/website/notsotech.png`}
                  alt="placeholder"
                  width={256}
                  height={384}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <span className="text-white font-mono text-sm uppercase">
                    Moment_{i}
                  </span>
                </div>
              </div>
            ))}
          </Marquee>
        </div>

        {/* Social / Illus Marquee (Opposite Direction) */}
        <div className="space-y-4">
          <div className="flex justify-between items-end px-4">
            <span className="text-xs uppercase font-mono text-white/50">
              Source: SOCIAL / ILLUS
            </span>
            <span className="text-xs text-white/40">Creative Chaos</span>
          </div>
          <Marquee reverse pauseOnHover className="[--duration:25s]">
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <div
                key={i}
                className="relative w-80 h-64 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500"
              >
                <Image
                  src={`/images/website/notsotech.png`}
                  alt="placeholder"
                  width={320}
                  height={256}
                  className="w-full h-full object-cover border-4 border-white/5"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-red-900/40">
                  <span className="text-white font-bold rotate-12 text-2xl uppercase">
                    Classified
                  </span>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </motion.div>
  );
};

export default SpamAlertGallery;
