"use client";

import Image from "next/image";
import { useRef, useEffect, MutableRefObject } from "react";

export default function SheSaidYes() {
  const vidRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (vidRef.current) {
      // Set the point of start to 30 seconds
      vidRef.current.currentTime = 37;

      // Start playback
      vidRef.current.play().catch((error) => {
        console.error("Error playing video:", error);
      });

      // Event listener to prevent fullscreen
      const handleFullscreenChange = () => {
        if (document.fullscreenElement) {
          exitFullscreen();
        }
      };

      document.addEventListener("fullscreenchange", handleFullscreenChange);

      return () => {
        document.removeEventListener(
          "fullscreenchange",
          handleFullscreenChange
        );
      };
    }
  }, [vidRef]);

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  return (
    <main className="flex flex-col justify-start items-center h-dvh bg-purple-300 overflow-hidden select-none">
      <Image
        className="pb-20"
        src={"/siuuu.gif"}
        width={200}
        height={200}
        alt="siuu"
      />

      <div className="flex flex-row">
        <p className="text-white font-black font-mono">
          COMO O KAZZIO JÁ DIZIA
        </p>
        <Image
          src={"/arrow.png"}
          className="rotate-[130deg]"
          width={100}
          height={100}
          alt="arrow"
        />
      </div>

      <div className="absolute flex justify-center items-center h-dvh">
        <Image src={"/hearts.gif"} width={600} height={600} alt="gif" />
      </div>

      <video autoPlay={true} ref={vidRef} className="md:w-[700px]">
        <source src="Kazzio - Safira (720p).mp4#t=0:40" type="video/mp4" />
      </video>

      <Image
        className="bottom-20 absolute text-center"
        src={"/pedra.gif"}
        width={100}
        height={100}
        alt="pedra"
      />

      <p className="text-white font-mono text-xs font-bold bottom-10 absolute text-center">
        Prepara-te para os melhores 10 segundos da tua vida 😏💕
      </p>
    </main>
  );
}
