import React from "react";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import { FlipWords } from "../ui/flip-words";
//import { HoverBorderGradient } from '../ui/hover-border-gradient'
import { RainbowButton } from "@/components/magicui/rainbow-button";
//import { ShinyButton } from "@/components/magicui/shiny-button";

function Hero() {
  const resumeLink = process.env.NEXT_PUBLIC_RESUME_LINK;
  const [showSnipchat, setShowSnipchat] = React.useState(true);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setShowSnipchat((prev) => !prev);
    }, 8500); // 7s visible + 1.5s transition
    return () => clearInterval(timer);
  }, []);

  const words = [
    "Hello\u002C ",
    //"नमस्ते\u002C ",
    "Bonjour\u002C ",
    "Hola\u002C ",
    "Ciao\u002C ",
    "Ni hao\u002C ",
  ];

  return (
    <div className="relative">
      <HeroHighlight containerClassName="h-[55rem] flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-4 gap-4 md:gap-10">
          {/* Left Section: Snipchat QR */}
          <motion.div
            className="hidden xl:flex flex-col items-center justify-center px-4"
            animate={{ opacity: showSnipchat ? 1 : 0 }}
            transition={{ duration: 1.5 }}
          >
            <img
              src="/images/website/SnipChat _ playNooK.png"
              alt="SnipChat PlayNooK QR"
              className="w-48 h-48 object-contain rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-800 bg-white"
            />
          </motion.div>

          {/* Center Section: Main Content */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [20, -5, 0] }}
            transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
            className="flex-1 min-w-0"
          >
            <div className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white w-full leading-relaxed lg:leading-snug text-center mx-auto ">
              👋
              <FlipWords words={words} />
              <Highlight className="text-black dark:text-white">
                Adarsh
              </Highlight>{" "}
              here !!
            </div>
            <div className="text-xl px-4 md:text-2xl lg:text-xl text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto my-4">
              I&apos;m a{" "}
              <Highlight className="text-black dark:text-white">
                developer
              </Highlight>{" "}
              and I sell infrastructures and solutions
            </div>
            <div className="flex justify-center items-center my-10">
              {/* <HoverBorderGradient 
                            containerClassName="rounded-full" 
                            as="button" 
                            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 text-sm"
                            gradientColor="#f83232"
                            onClick={() => window.open(resumeLink, '_blank')}
                        >
                            <span>Resume </span>
                        </HoverBorderGradient> */}
              {/* <RainbowButton onClick={() => window.open(resumeLink, '_blank')}>Resume 📜</RainbowButton> */}
            </div>
          </motion.h1>

          {/* Right Section: LinkedIn QR */}
          <motion.div
            className="hidden xl:flex flex-col items-center justify-center px-4"
            animate={{ opacity: !showSnipchat ? 1 : 0 }}
            transition={{ duration: 1.5 }}
          >
            <img
              src="/images/website/linkedin.png"
              alt="LinkedIn QR"
              className="w-48 h-48 object-contain rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-800 bg-white"
            />
          </motion.div>
        </div>
      </HeroHighlight>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
}

export default Hero;
