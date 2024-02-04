"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export const Buttons = () => {
  const [size, setSize] = useState(8);
  const [isNao, setNao] = useState(false);
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

  return (
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
        <p className="text-red-600 text-center backdrop-blur-sm font-bold shadow-sm text-2xl">
          ⚠️ Erro... Escolhe novamente princesa ⚠️
        </p>
      )}

      <div className="grid grid-cols-2">
        <div className="flex justify-center items-center">
          <Link href={"/yes"}>
            <button
              disabled={loading}
              className={`flex ring-1 ring-purple-400 bg-purple-600 ${
                isNao && "animate-bounce"
              }`}
              style={{ padding: `${size}px`, fontSize: `${size + 10}px` }}
            >
              SIM 💕
            </button>
          </Link>
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
  );
};
