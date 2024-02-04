"use client";

import Image from "next/image";
import { useRef, useEffect, MutableRefObject } from "react";

export default function SheSaidYes() {
  const vidRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (vidRef.current) {
      // Defina o ponto de início para 30 segundos
      vidRef.current.currentTime = 37;

      // Inicie a reprodução
      vidRef.current.play().catch((error) => {
        console.error("Erro ao iniciar a reprodução:", error);
      });
    }
  }, []);

  return (
    <main className="flex flex-col justify-start items-center h-dvh bg-purple-300 overflow-hidden">
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

      <video controls autoPlay={true} ref={vidRef} className="md:w-[700px]">
        <source src="Kazzio - Safira (720p).mp4#t=0:30" type="video/mp4" />
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