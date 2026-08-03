"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimate,
  useMotionValue,
  useMotionValueEvent,
  type MotionValue,
} from "motion/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const TIMING = {
  cursorIn: 0.3,
  stemStart: 0.8,
  stemDuration: 1.7,
  leaf1: 1.35,
  leaf2: 1.85,
  bloomStart: 2.6,
  sideLeftStart: 3.55,
  sideRightStart: 3.95,
  cursorExitAt: 4.7,
  counterStart: 5.1,
  counterDuration: 2,
  textStart: 8.1,
  subtitleStart: 9.9,
  replayShow: 10.7,
  confettiStart: 8.1,
} as const;

const BIRTH_DATE = new Date(2002, 7, 3);

function calculateAge(birthDate: Date, now: Date): number {
  let age = now.getFullYear() - birthDate.getFullYear();
  const hasHadBirthdayThisYear =
    now.getMonth() > birthDate.getMonth() ||
    (now.getMonth() === birthDate.getMonth() && now.getDate() >= birthDate.getDate());
  if (!hasHadBirthdayThisYear) age -= 1;
  return age;
}

const STEM_BASE = { x: 200, y: 650 };
const MAIN_BLOOM_CENTER = { x: 200, y: 150 };
const STEM_PATH = "M200,650 C160,560 235,470 190,380 C150,300 232,235 200,150";

const ROSE_COLORS = ["#be123c", "#e11d48", "#f43f5e", "#fb7185", "#fda4af"] as const;

interface BloomProps {
  centerX: number;
  centerY: number;
  scale?: number;
  baseDelay: number;
  petalStagger?: number;
  colors?: readonly string[];
}

function Bloom({
  centerX,
  centerY,
  scale = 1,
  baseDelay,
  petalStagger = 0.09,
  colors = ROSE_COLORS,
}: BloomProps) {
  const innerRing = Array.from({ length: 5 }, (_, i) => i);
  const outerRing = Array.from({ length: 8 }, (_, i) => i);

  return (
    <>
      <motion.circle
        cx={centerX}
        cy={centerY}
        r={10 * scale}
        fill={colors[0]}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: baseDelay, duration: 0.35, ease: "backOut" }}
      />
      {innerRing.map((i) => {
        const angle = (360 / innerRing.length) * i + 10;
        const radius = 20 * scale;
        return (
          <g key={`inner-${i}`} transform={`rotate(${angle} ${centerX} ${centerY})`}>
            <motion.ellipse
              cx={centerX}
              cy={centerY - radius}
              rx={14 * scale}
              ry={20 * scale}
              fill={colors[i % colors.length]}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: baseDelay + 0.15 + i * petalStagger,
                duration: 0.5,
                ease: "backOut",
              }}
            />
          </g>
        );
      })}
      {outerRing.map((i) => {
        const angle = (360 / outerRing.length) * i;
        const radius = 38 * scale;
        return (
          <g key={`outer-${i}`} transform={`rotate(${angle} ${centerX} ${centerY})`}>
            <motion.ellipse
              cx={centerX}
              cy={centerY - radius}
              rx={18 * scale}
              ry={26 * scale}
              fill={colors[(i + 2) % colors.length]}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: baseDelay + 0.15 + innerRing.length * petalStagger + i * petalStagger,
                duration: 0.55,
                ease: "backOut",
              }}
            />
          </g>
        );
      })}
    </>
  );
}

function Leaf({
  x,
  y,
  rotate,
  mirror = false,
  delay,
}: {
  x: number;
  y: number;
  rotate: number;
  mirror?: boolean;
  delay: number;
}) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${mirror ? -1 : 1} 1)`}>
      <motion.path
        d="M0,0 C18,-14 34,-6 30,10 C26,22 8,20 0,0 Z"
        fill="#16a34a"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay, duration: 0.5, ease: "backOut" }}
        style={{ transformOrigin: "0px 0px" }}
      />
    </g>
  );
}

function SideRose({
  x,
  groundY,
  scale,
  delay,
}: {
  x: number;
  groundY: number;
  scale: number;
  delay: number;
}) {
  const bloomY = groundY - 55 * scale;
  return (
    <g>
      <motion.line
        x1={x}
        y1={groundY}
        x2={x}
        y2={bloomY + 12 * scale}
        stroke="#16a34a"
        strokeWidth={5}
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: delay - 0.35, duration: 0.4, ease: "easeOut" }}
      />
      <Bloom centerX={x} centerY={bloomY} scale={scale} baseDelay={delay} petalStagger={0.06} />
    </g>
  );
}

function CursorArrow({
  x,
  y,
  totalDuration,
}: {
  x: MotionValue<number>;
  y: MotionValue<number>;
  totalDuration: number;
}) {
  const inFraction = TIMING.cursorIn / totalDuration;
  return (
    <motion.g
      style={{ x, y }}
      initial={{ opacity: 0, scale: 0.4 }}
      animate={{ opacity: [0, 1, 1, 0], scale: [0.4, 1, 1, 0.6] }}
      transition={{
        duration: totalDuration,
        times: [0, inFraction, 0.88, 1],
        ease: "easeInOut",
      }}
    >
      <g transform="rotate(-15) translate(-2 -2)">
        <polygon
          points="0,0 3,17 7,13 10,20 13,19 10,12 17,12"
          fill="#fff"
          stroke="#1f2937"
          strokeWidth={1.2}
          strokeLinejoin="round"
        />
      </g>
    </motion.g>
  );
}

function FeedText({
  text,
  startDelay,
  charDelay = 0.045,
  className,
}: {
  text: string;
  startDelay: number;
  charDelay?: number;
  className?: string;
}) {
  const letters = Array.from(text);
  return (
    <span className={cn("inline-block", className)} aria-label={text}>
      {letters.map((ch, i) => (
        <motion.span
          key={`${ch}-${i}`}
          className="inline-block"
          aria-hidden="true"
          initial={{ y: 36, opacity: 0, rotate: 6 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          transition={{
            delay: startDelay + i * charDelay,
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {ch === " " ? " " : ch}
        </motion.span>
      ))}
    </span>
  );
}

function YearCounter({
  startDelay,
  duration,
}: {
  startDelay: number;
  duration: number;
}) {
  const [, animate] = useAnimate();
  const yearValue = useMotionValue(2000);
  const yearRef = useRef<HTMLSpanElement>(null);
  const [settled, setSettled] = useState(false);
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
  }, []);

  useMotionValueEvent(yearValue, "change", (latest) => {
    if (yearRef.current) yearRef.current.textContent = String(Math.round(latest));
  });

  useEffect(() => {
    if (!now) return;
    const controls = animate(yearValue, now.getFullYear(), {
      duration,
      delay: startDelay,
      ease: "circOut",
    });
    controls.then(() => setSettled(true));
    return () => controls.stop();
  }, [animate, yearValue, now, startDelay, duration]);

  if (!now) return null;

  const age = calculateAge(BIRTH_DATE, now);

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-baseline gap-2 font-mono">
        <span className="text-lg text-muted-foreground">2000</span>
        <span className="text-muted-foreground">→</span>
        <span
          ref={yearRef}
          className="text-4xl font-extrabold tabular-nums text-rose-500 sm:text-5xl"
        >
          2000
        </span>
      </div>
      {settled && (
        <motion.p
          className="text-base font-semibold sm:text-lg"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          That makes you <span className="text-rose-500">{age}</span> years young today! 🎉
        </motion.p>
      )}
    </div>
  );
}

interface FallingPetal {
  id: number;
  left: number;
  duration: number;
  delay: number;
  rotate: number;
  size: number;
  emoji: string;
}

function usePetalRain(active: boolean) {
  const [petals, setPetals] = useState<FallingPetal[]>([]);
  const counter = useRef(0);

  useEffect(() => {
    if (!active) return;

    const interval = setInterval(() => {
      counter.current += 1;
      const petal: FallingPetal = {
        id: counter.current,
        left: Math.random() * 100,
        duration: 4 + Math.random() * 3,
        delay: Math.random() * 0.4,
        rotate: Math.random() * 360,
        size: 14 + Math.random() * 12,
        emoji: Math.random() > 0.5 ? "🌸" : "🌹",
      };
      setPetals((prev) => [...prev.slice(-23), petal]);
    }, 450);

    return () => clearInterval(interval);
  }, [active]);

  return petals;
}

function PetalRain({ active }: { active: boolean }) {
  const petals = usePetalRain(active);

  return (
    <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden">
      {petals.map((petal) => (
        <motion.span
          key={petal.id}
          className="absolute top-0"
          style={{ left: `${petal.left}%`, fontSize: petal.size }}
          initial={{ y: -40, opacity: 0, rotate: 0 }}
          animate={{ y: "110vh", opacity: [0, 1, 1, 0], rotate: petal.rotate }}
          transition={{ delay: petal.delay, duration: petal.duration, ease: "linear" }}
        >
          {petal.emoji}
        </motion.span>
      ))}
    </div>
  );
}

interface Star {
  id: number;
  left: number;
  top: number;
  size: number;
  delay: number;
}

function useStars(count: number) {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    setStars(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 60,
        size: 1 + Math.random() * 2,
        delay: Math.random() * 3,
      })),
    );
  }, [count]);

  return stars;
}

function BdayScene({ onReplay }: { onReplay: () => void }) {
  const [, animate] = useAnimate();
  const pathRef = useRef<SVGPathElement>(null);
  const progress = useMotionValue(0);
  const cursorX = useMotionValue(STEM_BASE.x);
  const cursorY = useMotionValue(STEM_BASE.y);
  const [textStarted, setTextStarted] = useState(false);
  const stars = useStars(18);

  useMotionValueEvent(progress, "change", (latest) => {
    const path = pathRef.current;
    if (!path) return;
    const length = path.getTotalLength();
    if (!length) return;
    const point = path.getPointAtLength(length * latest);
    cursorX.set(point.x);
    cursorY.set(point.y);
  });

  useEffect(() => {
    const controls = animate(progress, 1, {
      duration: TIMING.stemDuration,
      delay: TIMING.stemStart,
      ease: [0.65, 0, 0.35, 1],
    });
    return () => controls.stop();
  }, [animate, progress]);

  useEffect(() => {
    const timeout = setTimeout(() => setTextStarted(true), TIMING.confettiStart * 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <motion.span
            key={star.id}
            className="absolute rounded-full bg-white/70 dark:bg-white/80"
            style={{ left: `${star.left}%`, top: `${star.top}%`, width: star.size, height: star.size }}
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.2, 0.9, 0.2] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: star.delay, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="relative z-10 flex w-full flex-col items-center gap-6 px-4 py-10">
        <svg
          viewBox="0 0 400 680"
          className="h-auto w-full max-w-[360px] sm:max-w-[420px]"
          role="img"
          aria-label="An animated arrow drawing a rose, growing from the ground"
        >
          <path
            d="M0,660 C80,630 130,675 200,655 C280,632 340,672 400,650 L400,680 L0,680 Z"
            fill="#4ade80"
            opacity={0.35}
          />

          <motion.path
            ref={pathRef}
            d={STEM_PATH}
            fill="none"
            stroke="#16a34a"
            strokeWidth={7}
            strokeLinecap="round"
            style={{ pathLength: progress }}
          />

          <Leaf x={150} y={505} rotate={-35} delay={TIMING.leaf1} />
          <Leaf x={228} y={378} rotate={35} mirror delay={TIMING.leaf2} />

          <Bloom
            centerX={MAIN_BLOOM_CENTER.x}
            centerY={MAIN_BLOOM_CENTER.y}
            scale={1}
            baseDelay={TIMING.bloomStart}
          />

          <SideRose x={75} groundY={650} scale={0.5} delay={TIMING.sideLeftStart} />
          <SideRose x={325} groundY={655} scale={0.45} delay={TIMING.sideRightStart} />

          <CursorArrow x={cursorX} y={cursorY} totalDuration={TIMING.cursorExitAt} />
        </svg>

        <div className="flex flex-col items-center gap-3 text-center">
          <YearCounter startDelay={TIMING.counterStart} duration={TIMING.counterDuration} />

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            <FeedText
              text="Happy Birthday"
              startDelay={TIMING.textStart}
              className="bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent"
            />
          </h1>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            <FeedText
              text="Charu 🎂"
              startDelay={TIMING.textStart + 0.65}
              className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-rose-500 bg-clip-text text-transparent"
            />
          </h2>

          <motion.p
            className="max-w-xs text-sm text-muted-foreground sm:text-base"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: TIMING.subtitleStart, duration: 0.6 }}
          >
            Wishing you a day as beautiful as this rose, and a year full of happiness ahead. 🌹
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: TIMING.replayShow, duration: 0.5 }}
          >
            <Button
              onClick={onReplay}
              className="bg-gradient-to-r from-rose-500 to-fuchsia-500 text-white hover:from-rose-600 hover:to-fuchsia-600"
            >
              Watch it bloom again
            </Button>
          </motion.div>
        </div>
      </div>

      <PetalRain active={textStarted} />
    </>
  );
}

export default function BdayPage() {
  const [replayKey, setReplayKey] = useState(0);

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-rose-50 via-pink-100 to-fuchsia-100 dark:from-[#150a24] dark:via-[#241238] dark:to-[#150a24]">
      <BdayScene key={replayKey} onReplay={() => setReplayKey((k) => k + 1)} />
    </main>
  );
}
