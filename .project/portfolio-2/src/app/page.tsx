'use client';

import { useState, useEffect } from 'react';
import ReactCompareImage from 'react-compare-image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
//import ActiveUpdate from "@/components/active-update";
import SkillCarousel from "@/components/skill-carousel";
//import BlogSection from "@/components/blogs-section";
//import Marquee from "react-fast-marquee";
import ContactMe from '@/components/contactME';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export default function Home() {
  const resumeLink = process.env.NEXT_PUBLIC_RESUME_LINK;
  const [alertshow, setAlertShow] = useState(true);
  const [clicks, setClicks] = useState(0);
  const [openRulesDialog, setOpenRulesDialog] = useState(false);
  const [currentAnimal, setCurrentAnimal] = useState('🐹');

  useEffect(() => {
    const animalEmojis = ['🐹', '🐶', '🐱', '🐰', '🦊', '🐼', '🐨', '🦁', '🐯', '🐸'];
    const randomIndex = Math.floor(Math.random() * animalEmojis.length);
    setCurrentAnimal(animalEmojis[randomIndex]);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlertShow(false);
    }, 7500);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setClicks(clicks + 1);
    const target = event.target as HTMLElement;
    if (clicks === 6) {
      target.style.color = 'lightcoral';
    }
  };

  return (
    <Card className="">
      <CardContent className="p-6 space-y-6">

        {/* Alert Component */}
        {alertshow && (
          <div className="fixed top-5 left-0 right-0 z-50">
            <div className="max-w-md mx-auto bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative" role="alert">
              <p className="text-center">I am just trying to follow the tread, 😊!! <br/>- Website is in early beta phase -
              <br/>
              <br/>☸ building chatSystem ..
              <br/>☸ implementing aiBot ..
              <br/>
              <br/>Thanks for Checking and do visit more !! ✨
              </p>
            </div>
          </div>
        )}

            <div className="grid md:grid-cols-2 gap-8 items-center py-7">
              <div className="flex justify-center">
              <div className="relative w-[350px] md:w-[60%] h-[450px] md:h-[600px]">
                <div className="mask-no-repeat mask-size-[100%_100%] mask-center" style={{ maskImage: 'url(/shape/mask-shape-5.svg)' }}>
                  <ReactCompareImage
                    leftImage="/profile/avatar-g.png"
                    rightImage="/profile/avatar.png"
                    sliderLineColor="#FFFFFF"
                    sliderPositionPercentage={0.85}
                  />
                </div>
              </div>
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-7xl font-bold mb-4">Hi, Adarsh here !</h1>
                <p className="text-3xl">
                  I am a <span className="text-[#153448]">full stack developer</span> <span className="text-[#e4d4b4]"></span>
                </p>
                <Button className='m-4' onClick={() => window.open(resumeLink, '_blank')}>Resume 📃</Button>
              </div>
            </div>


        <Card>
          <CardContent>
              <div className="prose max-w-none">
                <p className="text-lg leading-relaxed">
                  <span className="text-3xl font-dancing-script">I</span> am a <a href="https://en.wikipedia.org/wiki/hacker" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">hacker⁽⁺⁾</a> 👋🏻. Deeply curious about technology and social-engineering, I graduated from <a href="https://www.reva.edu.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Reva University⁽⁺⁾</a> as an Engineer with a Bachelor&apos;s in computer science.
                  <br /><br />
                  I started developing websites at an early age for various startups, became a webmaster for various universities, IEEE, and IISc Bangalore events, and also wrote a research paper on <a href="http://www.testmagzine.biz/index.php/testmagzine/article/view/8343/6317" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Virtual Assistants based on User Preferences⁽⁺⁾</a>
                  <br /><br />
                  I started my <i>career</i> as a frontend developer, but the latter of my curiosities learned about <span className="text-purple-700">Cloud technologies.</span> Currently, I&apos;m seeking job opportunities as a <span className="text-green-700">full-stack developer.</span>
                  <br /><br />
                  When I&apos;m not in front of the screen, I focus on personal growth and striving to be the best version of myself. I like cafes, music, exploring and creativity. <br/>PS: NOT TO FORGET THE GOOD SENSE OF HUMOR
                  <br /><br />
                  <span className="text-yellow-600">Stay in touch!</span> ✨
                </p>
              </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <span className="text-7xl font-bold text-[#153448]">8</span>
                <span className="text-xl mt-2">projects completed</span>
                <span>[still counting ...]</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-7xl font-bold text-[#0A6847]">1500+</span>
                <span className="text-xl mt-2 text-[#0A6847]">open source commits</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-7xl font-bold text-[#153448]">5</span>
                <span className="text-[#153448]">yrs</span>
                <span className="text-xl mt-2">total experience</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center text-4xl p-15">
          I perform <span className="italic font-normal">symphonies</span> with my <span className="text-blue-600">keyboard</span>,
          <br/>
          turning the world into my <span className="text-[#41B06E]">stage</span> and its people into my <span className="text-red-600">audience</span>.
        </div>

        <Card>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
              <div className="flex flex-col items-center">
                <span className="text-6xl font-bold text-[#153448]">Experience</span>
                <span className="text-xl mt-2">Journey</span>
                <Button onClick={() => window.location.href = '/experience'}>Experience</Button>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-6xl font-bold text-[#0A6847]">Projects</span>
                <span className="text-xl mt-2 text-[#0A6847]">Still counting ..</span>
                <Button onClick={() => window.location.href = '/projects'}>Projects</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* USP Portfolio Top Working Component */}
        {/* <Card>
          <CardHeader>
            <CardContent>
              <ActiveUpdate />
            </CardContent>
          </CardHeader>
        </Card> */}

        {/* SkillSet Carosel Component */}
        <SkillCarousel/>

        {/* Blogs and News Updates Component */}
        {/* <Card>
          <CardContent>
            <BlogSection/>
          </CardContent>
          <CardFooter className="flex justify-center items-center">
            Subscribe to&nbsp;<span className="hover:underline cursor-pointer">Newsletter</span>&nbsp;📰
          </CardFooter>
          <Marquee>&#8226;<span className='bg-white mx-1'>easterEgg_newZ:</span>&nbsp;Do checkout our <span className='text-purple-700 mx-1'>PLAYGROUND</span> !! &#8226;</Marquee>
        </Card> */}

        {/* Contact ME */}
        <div className='pt-12'>
        <Card>
          <CardContent>
            <hr className='my-4'/>
              <p className="flex justify-center tems-center text-4xl">Still Interested ?? Try that &apos;KNOW ME&apos; button below.</p>
            <hr className='my-4'/>
            <ContactMe/>
          </CardContent>
        </Card>
        </div>

        {/* Easter Egg Component */}
        <Card>
          <CardHeader>
            <CardTitle>
              <h2 className='text-4xl md:text-3xl font-bold text-center'>Playground: <span className='text-yellow-500'>in-development</span></h2>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='flex justify-center items-center'>
              <p className='text-center'>I am trying to make a playground and training my website. Would you like to be a {currentAnimal} &nbsp;
                <Button onClick={() => setOpenRulesDialog(true)}>Yes, why not!</Button>
              &nbsp;Play around for a while !!</p>
            </div>
            <h4 className="text-center mt-5">
              <hr className="my-4"/>
              I may have hidden a few digital easter eggs for the curious clicker. 
              <span className="font-bold cursor-pointer" onClick={handleClick}>Happy hunting!</span> 🎉
              <hr className="my-4"/>
            </h4>
          </CardContent>
        </Card>

        {/* Playground rules Component */}
        <Dialog open={openRulesDialog} onOpenChange={setOpenRulesDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Welcome to the Playground!</DialogTitle>
            </DialogHeader>
            <div className="mt-4 space-y-4">
              <p>Here are some rules and guidelines for you:&nbsp;<span className='text-sm text-muted-foreground'>update.01</span></p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Explore the interactive elements throughout the website</li>
                <li>Click around to discover hidden easter eggs</li>
                <li>Try clicking elements multiple times</li>
                <li>Watch for color changes and animations</li>
                <li>Most importantly, have fun exploring!</li>
                <li>almost everything here is hint or reference to something, keep your creativity alive.</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4">Remember: This is just a dummy modal 🎮✨</p>
              <div className='flex justify-center items-center'>
              <Button onClick={() => setOpenRulesDialog(false)}>Lets Go!</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

      </CardContent>
    </Card>
  );
}
