"use client";

import React from "react";
import { AuroraText } from "@/components/magicui/aurora-text";
import Image from "next/image";

function PlayNooK() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-100 dark:bg-black p-8">
      <div className="mb-8">
        <AuroraText className="text-5xl md:text-7xl font-bold drop-shadow-lg">
          playNooK is Under Development
        </AuroraText>
      </div>
      <div className="mb-8 w-full flex justify-center"></div>

      <div className="mb-8">
        <Image
          src={"https://placehold.co/600x400?text=Image+not+available"}
          alt="AI Image"
          className={`mb-2 rounded-sm`}
          width={100}
          height={100}
        />
      </div>
      <div className="text-lg text-black dark:text-gray-300">
        We&apos;re working on something amazing. Check back soon!
      </div>
    </div>
  );
}

export default PlayNooK;
