import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export type MaskedImageVariant =
  | "shape1"
  | "shape2"
  | "shape3"
  | "shape4"
  | "shape5"
  | "shape6";

interface MaskedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  variant?: MaskedImageVariant;
  className?: string;
}

const getMaskUrl = (variant: MaskedImageVariant): string => {
  const maskMap: Record<MaskedImageVariant, string> = {
    shape1: "/shape/mask-shape-1.svg",
    shape2: "/shape/mask-shape-2.svg",
    shape3: "/shape/mask-shape-3.svg",
    shape4: "/shape/mask-shape-4.svg",
    shape5: "/shape/mask-shape-5.svg",
    shape6: "/shape/mask-shape-6.svg",
  };

  return maskMap[variant];
};

export const MaskedImage: React.FC<MaskedImageProps> = ({
  src,
  alt,
  width,
  height,
  variant = "shape1",
  className,
}) => {
  const maskUrl = getMaskUrl(variant);

  return (
    <Image
      className={cn(
        "mask-no-repeat object-cover mask-size-[100%_100%] mask-center",
        className
      )}
      style={{ maskImage: `url(${maskUrl})` }}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
};
