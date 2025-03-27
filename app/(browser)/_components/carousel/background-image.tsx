import Image from "next/image";
import React from "react";

interface BackgroundImageProps {
  images: {
    jpg: {
      large_image_url: string;
    };
    webp: {
      large_image_url: string;
    };
  };
}

const BackgroundImage = ({ images }: BackgroundImageProps) => {
  const displayImage =
    images?.webp?.large_image_url?.trim() ||
    images?.jpg?.large_image_url?.trim() ||
    "";

  return (
    <div className="absolute top-[1rem] md:top-[2.5rem] xl:top-[3rem] left-[5rem] md:left-[15rem] xl:left-[32rem] -z-50">
      <Image
        alt="background"
        src={displayImage}
        width={450}
        height={450}
        className="opacity-30 shadow-[0_0_50px_50px_#1f1f1f]"
        style={{
          WebkitMaskImage:
            "radial-gradient(circle, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 80%)",
          maskImage:
            "radial-gradient(circle, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 80%)",
        }}
      />
    </div>
  );
};

export default BackgroundImage;
