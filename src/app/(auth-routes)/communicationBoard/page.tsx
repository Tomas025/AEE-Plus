import Image from "next/image";
import { FiPlay } from "react-icons/fi";

export default function CommunicationBoardPage() {
  return (
    <div className="space-y-2 p-10">
      <div className="flex items-center justify-between">
        <p className="text-2xl font-bold">Pranchas de Comunicação</p>
        <button className="cursor-pointer rounded-lg bg-blue-500 px-5 py-2.5 font-semibold text-white hover:bg-blue-600 active:bg-blue-700">
          Criar nova prancha
        </button>
      </div>
      <div>
        <div className="flex h-60 w-48 flex-col items-center rounded-lg bg-white p-4">
          <p className="font-medium">Maçã</p>
          <Image width={154} height={121} src={"/image 7.png"} alt="maçã" />
          <button className="cursor-pointer rounded-full bg-blue-500 py-4 pr-3.5 pl-4.5 text-2xl text-white drop-shadow-2xl hover:bg-blue-600 active:bg-blue-700">
            <FiPlay />
          </button>
        </div>
      </div>
    </div>
  );
}
