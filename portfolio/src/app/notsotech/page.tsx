"use client"

import React, { useState, useEffect } from 'react'
import NotsotechOverlay from '@/components/notsotech/overlay'
import SpamAlertGallery from '@/components/notsotech/gallery'
import { AuroraText } from "@/components/magicui/aurora-text"
import { Marquee } from "@/components/magicui/marquee"
import { motion, AnimatePresence } from 'framer-motion'

interface NotionResult {
    id: string;
    properties: {
        Name: { title: [{ plain_text: string }] };
        Type: { select: { name: string } };
        Metadata: { rich_text: [{ plain_text: string }] };
        Link: { url: string };
    }
}

const SectionWrapper = ({ title, subtitle, children, priority = false }: { title: string, subtitle: string, children: React.ReactNode, priority?: boolean }) => (
    <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: priority ? 0.2 : 0.5 }}
        className="w-full py-16 px-4 md:px-8 border-b border-gray-100 dark:border-white/5"
    >
        <div className="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row md:items-end justify-between transition-all">
            <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest font-mono text-gray-500 font-bold">{subtitle}</span>
                <h2 className="text-4xl md:text-5xl font-black text-black dark:text-white uppercase italic tracking-tighter">
                   {title}
                </h2>
            </div>
            <div className="h-px flex-1 bg-gray-100 dark:bg-white/10 mx-8 hidden md:block" />
            <div className="text-xs font-mono text-gray-400 mt-4 md:mt-0 uppercase">Updated: hh:mm ago</div>
        </div>
        {children}
    </motion.section>
)

export default function NotSoTech() {
  const [preference, setPreference] = useState<string | null>(null)
  const [data, setData] = useState<NotionResult[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/notion/notsotech')
        const json = await res.json()
        setData(json)
      } catch (e) {
        console.error("🔴 [NotSoTech]: Failed to fetch Notion data", e)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  const filterByType = (type: string) => {
    if (!Array.isArray(data)) return [];
    return data.filter(item => item?.properties?.Type?.select?.name === type);
  }

  // 🔵 [NotSoTech]: User preference detected: ${preference} - reordering sections
  const sections = [
    { type: 'Music', title: 'play a song till you are here 🎵', sub: '# Music', content: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filterByType('Music').map((item) => (
                <div key={item.id} className="rounded-2xl overflow-hidden glass border dark:border-white/10 shadow-2xl transition-transform hover:-rotate-1">
                    <iframe
                        src={item.properties.Link.url.replace("open.spotify.com/", "open.spotify.com/embed/")}
                        width="100%"
                        height="352"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    />
                </div>
            ))}
        </div>
    )},
    { type: 'Food', title: '', sub: '# food', content: (
        <Marquee pauseOnHover className="[--duration:40s]">
            {filterByType('Food').map((item) => (
                <a 
                    key={item.id} 
                    href={item.properties.Link.url} 
                    target="_blank" 
                    className="group relative w-80 h-96 mx-4 rounded-3xl overflow-hidden bg-white/5 border dark:border-white/10 flex flex-col items-center justify-center p-8 transition-colors hover:bg-white/10"
                >
                    <div className="text-gray-500 font-mono text-[10px] uppercase mb-4">{item.properties.Metadata.rich_text[0]?.plain_text}</div>
                    <div className="text-2xl font-black text-center text-black dark:text-white uppercase leading-tight italic px-4">
                        {item.properties.Name.title[0]?.plain_text}
                    </div>
                    <div className="absolute bottom-8 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                        View Menu <span className="w-8 h-px bg-white" />
                    </div>
                </a>
            ))}
        </Marquee>
    )},
    { type: 'Chaos', title: 'Thinking & Watching', sub: 'Non-Fiction / Visuals', content: (
        <div className="space-y-12">
            <Marquee reverse pauseOnHover className="[--duration:50s]">
                {filterByType('Book').map((item) => (
                    <div key={item.id} className="mx-8 flex items-baseline gap-4 group">
                        <span className="text-4xl md:text-6xl font-black text-transparent stroke-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors" style={{WebkitTextStroke: '1px #666'}}>{item.properties.Name.title[0]?.plain_text}</span>
                        <span className="text-xs uppercase font-mono text-orange-500 opacity-60">Book</span>
                    </div>
                ))}
            </Marquee>
             <Marquee reverse pauseOnHover className="[--duration:60s]">
                {filterByType('Show').map((item) => (
                    <div key={item.id} className="mx-8 flex items-baseline gap-4 group">
                        <span className="text-4xl md:text-6xl font-black text-transparent stroke-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors" style={{WebkitTextStroke: '1px #666'}}>{item.properties.Name.title[0]?.plain_text}</span>
                        <span className="text-xs uppercase font-mono text-blue-500 opacity-60">Visuals</span>
                    </div>
                ))}
            </Marquee>
        </div>
    )},
    { type: 'Travel', title: '30 Under 30', sub: 'States of Mind', content: (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {filterByType('Travel').map((item) => (
                <div key={item.id} className={`p-4 font-mono text-[10px] uppercase border transition-colors ${item.properties.Metadata.rich_text[0]?.plain_text === 'Completed' ? 'bg-green-500/10 border-green-500/30 text-green-500 line-through decoration-2' : 'border-gray-100 dark:border-white/5 opacity-40'}`}>
                    {item.properties.Name.title[0]?.plain_text}
                </div>
            ))}
        </div>
    )}
  ]

  // Reorder sections based on preference
  const prioritizedSections = [...sections].sort((a, b) => {
    if (a.type === preference) return -1;
    if (b.type === preference) return 1;
    return 0;
  });

  return (
    <main className="min-h-screen bg-white dark:bg-black overflow-hidden relative">
      <NotsotechOverlay onChoice={setPreference} />
      
      {/* Hero Header */}
      <div className="pt-32 pb-16 px-8 flex flex-col items-center justify-center">
        <AuroraText className="text-7xl md:text-[10vw] font-black uppercase tracking-tighter leading-none italic select-none">
          Not So Tech
        </AuroraText>
        <p className="mt-8 text-black/50 dark:text-white/40 font-mono text-xs max-w-lg text-center uppercase tracking-widest leading-relaxed">
            The architect as a human entity. A collection of physical spaces, digital frequencies, and carbon-based experiences.
        </p>
      </div>

      <SpamAlertGallery />

      <AnimatePresence>
        {!isLoading && prioritizedSections.map((sec, i) => (
             <SectionWrapper key={sec.type} title={sec.title} subtitle={sec.sub} priority={i === 0}>
                {sec.content}
             </SectionWrapper>
        ))}
      </AnimatePresence>

      <div className="py-24 px-8 text-center border-t border-white/5 bg-black">
         <span className="text-[10vw] font-black text-white opacity-5 select-none pointer-events-none uppercase italic tracking-tighter">ADARSH RAZOR</span>
         <p className="mt-8 text-white/20 font-mono text-[10px] uppercase">Designed to keep you here. Forever? No. Just long enough to remember.</p>
      </div>
    </main>
  )
}