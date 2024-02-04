"use client";

import Image from "next/image";
import { Buttons } from "./components/btns";
import Link from "next/link";
import { useState, useEffect } from "react";
import SheSaidYes from "./yes/page";

export default function Home() {
  const [size, setSize] = useState(8);
  const [isNao, setNao] = useState(false);
  const [isYes, setYes] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let timeoutId: any;

    if (loading) {
      setNao(false);
      // Mostra o loading spinner
      timeoutId = setTimeout(() => {
        // Após 3 segundos, define isNao como true
        setNao(true);
        setLoading(false); // Desativa o loading spinner
      }, 3000);
    }

    // Limpa o timeout se o componente for desmontado ou se loading for definido como falso
    return () => clearTimeout(timeoutId);
  }, [loading]);

  if (isYes) {
    return <SheSaidYes />;
  }

  return (
    <main className="flex flex-col justify-center items-center h-dvh bg-purple-300 overflow-hidden select-none">
      <div className="absolute select-none">
        <Image src={"/hearts.gif"} width={600} height={600} alt="gif" />
      </div>

      <div className="relative z-20 text-purple-200 flex flex-col gap-7">
        <p className="uppercase bg-black text-center bg-opacity-30 p-2 font-bold font-mono">
          Ola Babyy queres ser a minha valentina ??
        </p>

        <>
          {loading && (
            <p className="font-bold">
              <div
                aria-label="Loading..."
                role="status"
                className="flex items-center space-x-2"
              >
                <svg
                  className="h-10 w-10 animate-spin stroke-white"
                  viewBox="0 0 256 256"
                >
                  <line
                    x1="128"
                    y1="32"
                    x2="128"
                    y2="64"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="24"
                  ></line>
                  <line
                    x1="195.9"
                    y1="60.1"
                    x2="173.3"
                    y2="82.7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="24"
                  ></line>
                  <line
                    x1="224"
                    y1="128"
                    x2="192"
                    y2="128"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="24"
                  ></line>
                  <line
                    x1="195.9"
                    y1="195.9"
                    x2="173.3"
                    y2="173.3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="24"
                  ></line>
                  <line
                    x1="128"
                    y1="224"
                    x2="128"
                    y2="192"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="24"
                  ></line>
                  <line
                    x1="60.1"
                    y1="195.9"
                    x2="82.7"
                    y2="173.3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="24"
                  ></line>
                  <line
                    x1="32"
                    y1="128"
                    x2="64"
                    y2="128"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="24"
                  ></line>
                  <line
                    x1="60.1"
                    y1="60.1"
                    x2="82.7"
                    y2="82.7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="24"
                  ></line>
                </svg>
                <span className="text-2xl text-center font-medium text-white">
                  A processar o pedido...
                </span>
              </div>
            </p>
          )}

          {isNao && (
            <p className="text-red-600 max-sm:text-lg text-center backdrop-blur-sm font-bold shadow-sm text-2xl">
              ⚠️ Erro... Escolhe novamente princesa ⚠️
            </p>
          )}

          <div className="grid grid-cols-2">
            <div className="flex justify-center items-center">
              <button
                disabled={loading}
                className={`flex ring-1 ring-purple-400 bg-purple-600 ${
                  isNao && "animate-bounce"
                }`}
                style={{ padding: `${size}px`, fontSize: `${size + 10}px` }}
                onClick={() => setYes(true)}
              >
                SIM 💕
              </button>
            </div>

            <div className="flex justify-center items-center">
              <button
                disabled={loading}
                className="flex ring-1 ring-purple-400 p-2 bg-purple-600"
                onClick={() => {
                  setLoading(true);
                }}
              >
                NÃO 😭
              </button>
            </div>
          </div>
        </>
      </div>
    </main>
  );
}
