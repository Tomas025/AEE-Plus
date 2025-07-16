"use client";
import Image from "next/image";
import { useState } from "react";
import { FiPlay } from "react-icons/fi";

import { ModalAddBoard } from "@/components/ModalAddBoard";

import { useCommunicationBoard } from "./hooks/useCommunicationBoard";

export default function CommunicationBoardPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const { isLoading } = useCommunicationBoard();

  return (
    <>
      <div className="space-y-2 p-10">
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold">Pranchas de Comunicação</p>
          <button
            onClick={() => setModalOpen(true)}
            className="cursor-pointer rounded-lg bg-blue-500 px-5 py-2.5 font-semibold text-white hover:bg-blue-600 active:bg-blue-700"
          >
            Criar novo card
          </button>
        </div>
        <div className="mt-4 grid grid-cols-5 gap-4">
          {isLoading && <p>Carregando...</p>}
          <div className="flex h-60 w-48 flex-col items-center rounded-lg bg-white p-4">
            <p className="font-medium">Maçã</p>
            <Image width={154} height={121} src={"/image 7.png"} alt="maçã" />
            <button className="cursor-pointer rounded-full bg-blue-500 py-4 pr-3.5 pl-4.5 text-2xl text-white drop-shadow-2xl hover:bg-blue-600 active:bg-blue-700">
              <FiPlay />
            </button>
          </div>
        </div>
        <ModalAddBoard onClose={() => setModalOpen(false)} open={modalOpen} />
      </div>
    </>
  );
}
