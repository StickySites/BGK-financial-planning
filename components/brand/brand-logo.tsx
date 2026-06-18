import Image from "next/image";
import { bgkBrandImage } from "@/lib/service-media";
import { cn } from "@/lib/utils";

const circleSizes = {
  sm: "h-9 w-9 p-0.5",
  md: "h-[56px] w-[56px] overflow-hidden p-1",
  lg: "h-16 w-16 p-1"
} as const;

const imageScales = {
  sm: "",
  md: "scale-110",
  lg: ""
} as const;

type BrandLogoProps = {
  size?: keyof typeof circleSizes;
  className?: string;
  imageClassName?: string;
};

export function BrandLogo({ size = "md", className, imageClassName }: BrandLogoProps) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full bg-white",
        circleSizes[size],
        className
      )}
    >
      <Image
        src={bgkBrandImage}
        alt=""
        aria-hidden
        width={1134}
        height={803}
        className={cn("h-full w-full object-contain", imageScales[size], imageClassName)}
      />
    </span>
  );
}
