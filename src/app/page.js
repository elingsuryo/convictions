"use client";

import { useState, useEffect } from "react";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function TypingEffect({ text, speed = 100 }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(interval); // stop ketika selesai
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <span>{displayedText}</span>;
}
export default function LandingPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white antialiased">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/30 backdrop-blur-md border-b border-slate-800/30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/xpoke-logo.png"
              alt="XPOKE Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <h1 className="font-bold text-lg">Convictions</h1>
          </div>

          <div className="flex items-center gap-4">
            {/* Twitter/X */}
            <a
              href="https://x.com/i/communities/2001916018453807606"
              aria-label="Twitter"
              className="p-2 rounded-lg hover:bg-slate-800/40"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.25l-5.214-6.82-5.97 6.82H1.757l7.73-8.84L1.25 2.25h7.058l4.713 6.231 5.223-6.231zm-1.162 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* Telegram */}
            <a
              href=""
              aria-label="Telegram"
              className="p-2 rounded-lg hover:bg-slate-800/40"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.04c-5.51 0-9.96 4.45-9.96 9.96s4.45 9.96 9.96 9.96 9.96-4.45 9.96-9.96S17.51 2.04 12 2.04zm4.69 6.74l-1.65 7.79c-.12.53-.44.66-.89.41l-2.46-1.82-1.19 1.15c-.13.13-.25.25-.5.25l.18-2.53 4.61-4.16c.2-.18-.04-.28-.31-.1l-5.7 3.59-2.46-.77c-.53-.17-.54-.53.11-.78l9.6-3.7c.44-.16.82.1.68.76z" />
              </svg>
            </a>
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-pink-500 text-sm font-semibold">
              Buy
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center text-center">
        {/* Background image */}
        <Image
          src="/skasda.png"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90"></div>

        {/* Text content */}
        <div className="relative z-10 max-w-3xl px-6">
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Buy + <span className="text-yellow-500">Hodl</span> +{" "}
            <span className="text-pink-500">Believe</span>
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Convictions is built for those who buy with purpose, hodl with
            patience, and believe in the long-term future of digital assets.
          </p>

          <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-pink-600 to-indigo-600 text-lg font-semibold shadow-lg">
            BUY
          </button>
        </div>
      </section>

      {/* GALLERY */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <h3 className="text-3xl font-bold mb-8">Latest Drops</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="aspect-square bg-slate-800/50 rounded-2xl shadow-lg hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }} // animasi muncul saat scroll
              viewport={{ once: true, amount: 0.2 }} // sekali muncul ketika 20% terlihat
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Image
                src={`/pokemon${i + 1}.png`}
                alt={`pokemon${i + 1}`}
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROMO / SINGLE IMAGE SECTION */}
      <section className="relative w-full py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <video
              src="/promo.mp4" // simpan di folder public/
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 py-12 mt-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-sm">
            © 2025 Convictions. All rights reserved.
          </p>
          <div className="flex gap-6 text-slate-400 text-sm">
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
            <a href="#" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
