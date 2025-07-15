import Image from "next/image";
import { FiEdit2 } from "react-icons/fi";

export function CardProfile({ isStudent = false }: { isStudent?: boolean }) {
  return (
    <div className="flex h-full w-1/3 flex-col items-center rounded-lg bg-white p-3">
      <button className="cursor-pointer self-end rounded-lg bg-amber-500 px-4 py-1.5 text-xl text-white hover:bg-amber-600 active:bg-amber-700">
        <FiEdit2 />
      </button>
      <Image
        width={150}
        height={150}
        src={"/Perfil.png"}
        alt="Foto de Perfil"
        className="mb-9 rounded-full"
      />
      <div className="self-start px-7">
        <p>
          <strong>Nome:</strong> Maria Fulana
        </p>
        <p>
          <strong>Contato:</strong> (81) 99999-9999
        </p>
        <p>
          <strong>CPF:</strong> 999.999.999-99
        </p>
        <p>
          <strong>Email:</strong> mariafulana@gmail.com
        </p>
        <p>
          <strong>Data de Nascimento:</strong> 01/01/2000
        </p>
      </div>
      {isStudent && (
        <div className="mt-10 flex w-full items-center justify-between">
          <button className="cursor-pointer rounded-lg bg-blue-500 px-2 py-1.5 text-sm font-semibold text-white hover:bg-blue-600 active:bg-blue-700">
            Visualizar PAA
          </button>
          <button className="cursor-pointer rounded-lg bg-blue-500 px-2 py-1.5 text-sm font-semibold text-white hover:bg-blue-600 active:bg-blue-700">
            Visualizar Plano de Condulta
          </button>
        </div>
      )}
    </div>
  );
}
