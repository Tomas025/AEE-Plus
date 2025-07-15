import Image from "next/image";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { PiEyeBold, PiPencilRuler, PiStudentBold } from "react-icons/pi";

export default function HomePage() {
  return (
    <div className="flex min-h-full w-screen flex-col items-center gap-y-10 p-10">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-x-2.5">
          <Image
            width={68}
            height={68}
            src={"/Perfil.png"}
            alt="Foto de Perfil"
            className="rounded-full"
          />
          <div className="space-y-1">
            <p className="text-xl font-semibold">Maria Fulana</p>
            <p className="text-sm text-[#717171]">Bem vindo Maria Fulana!</p>
          </div>
        </div>
        <div className="flex items-center gap-x-5">
          <div className="flex w-60 items-center justify-between rounded-lg bg-[#06B6D44D] p-5">
            <div className="space-y-2">
              <p className="text-xl">Alunos</p>
              <p className="text-4xl font-bold">30</p>
            </div>
            <PiStudentBold className="text-5xl text-[#06B6D4]" />
          </div>
          <div className="flex w-60 items-center justify-between rounded-lg bg-[#EC48994D] p-5">
            <div className="space-y-2">
              <p className="text-xl">Alunos</p>
              <p className="text-4xl font-bold">6</p>
            </div>
            <PiPencilRuler className="text-5xl text-[#EC4899]" />
          </div>
          <div className="flex w-60 flex-col items-center rounded-lg bg-white p-5">
            <p className="text-xl font-medium">Performance Geral</p>
            <Image
              src={"/Group 73.svg"}
              alt="Performance"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center gap-y-3 rounded-lg bg-white p-5">
        <div className="flex w-full items-center justify-between">
          <p className="text-lg font-semibold text-gray-950">Minhas Turmas</p>
          <button className="rounded-lg bg-blue-500 px-2 py-2.5 font-semibold text-white">
            Criar nova turma
          </button>
        </div>
        <table className="w-full border border-gray-300">
          <thead>
            <tr className="w-full border border-gray-300 text-sm font-bold text-gray-950">
              <th className="px-4 py-6 text-start">Id</th>
              <th className="px-4 py-6 text-start">Nome da Turma</th>
              <th className="px-4 py-6 text-start">Quantidade de Alunos</th>
              <th className="px-4 py-6 text-start">Ações</th>
            </tr>
          </thead>
          <tbody className="w-full text-sm text-gray-700">
            <tr className="border border-gray-300">
              <td className="px-4 py-6">1</td>
              <td className="px-4 py-6">Turma 1</td>
              <td className="px-4 py-6">5</td>
              <td className="flex gap-x-2 px-4 py-6">
                <button className="rounded-lg bg-blue-500 px-5 py-2.5 text-xl text-white">
                  <PiEyeBold />
                </button>
                <button className="rounded-lg bg-amber-500 px-5 py-2.5 text-xl text-white">
                  <FiEdit2 />
                </button>
                <button className="rounded-lg bg-red-500 px-5 py-2.5 text-xl text-white">
                  <FiTrash2 />
                </button>
              </td>
            </tr>
            <tr className="border border-gray-300">
              <td className="px-4 py-6">1</td>
              <td className="px-4 py-6">Turma 1</td>
              <td className="px-4 py-6">5</td>
              <td className="flex gap-x-2 px-4 py-6">
                <button className="rounded-lg bg-blue-500 px-5 py-2.5 text-xl text-white">
                  <PiEyeBold />
                </button>
                <button className="rounded-lg bg-amber-500 px-5 py-2.5 text-xl text-white">
                  <FiEdit2 />
                </button>
                <button className="rounded-lg bg-red-500 px-5 py-2.5 text-xl text-white">
                  <FiTrash2 />
                </button>
              </td>
            </tr>
            <tr className="border border-gray-300">
              <td className="px-4 py-6">1</td>
              <td className="px-4 py-6">Turma 1</td>
              <td className="px-4 py-6">5</td>
              <td className="flex gap-x-2 px-4 py-6">
                <button className="rounded-lg bg-blue-500 px-5 py-2.5 text-xl text-white">
                  <PiEyeBold />
                </button>
                <button className="rounded-lg bg-amber-500 px-5 py-2.5 text-xl text-white">
                  <FiEdit2 />
                </button>
                <button className="rounded-lg bg-red-500 px-5 py-2.5 text-xl text-white">
                  <FiTrash2 />
                </button>
              </td>
            </tr>
            <tr className="border border-gray-300">
              <td className="px-4 py-6">1</td>
              <td className="px-4 py-6">Turma 1</td>
              <td className="px-4 py-6">5</td>
              <td className="flex gap-x-2 px-4 py-6">
                <button className="rounded-lg bg-blue-500 px-5 py-2.5 text-xl text-white">
                  <PiEyeBold />
                </button>
                <button className="rounded-lg bg-amber-500 px-5 py-2.5 text-xl text-white">
                  <FiEdit2 />
                </button>
                <button className="rounded-lg bg-red-500 px-5 py-2.5 text-xl text-white">
                  <FiTrash2 />
                </button>
              </td>
            </tr>
            <tr className="border border-gray-300">
              <td className="px-4 py-6">1</td>
              <td className="px-4 py-6">Turma 1</td>
              <td className="px-4 py-6">5</td>
              <td className="flex gap-x-2 px-4 py-6">
                <button className="rounded-lg bg-blue-500 px-5 py-2.5 text-xl text-white">
                  <PiEyeBold />
                </button>
                <button className="rounded-lg bg-amber-500 px-5 py-2.5 text-xl text-white">
                  <FiEdit2 />
                </button>
                <button className="rounded-lg bg-red-500 px-5 py-2.5 text-xl text-white">
                  <FiTrash2 />
                </button>
              </td>
            </tr>
            <tr className="border border-gray-300">
              <td className="px-4 py-6">1</td>
              <td className="px-4 py-6">Turma 1</td>
              <td className="px-4 py-6">5</td>
              <td className="flex gap-x-2 px-4 py-6">
                <button className="rounded-lg bg-blue-500 px-5 py-2.5 text-xl text-white">
                  <PiEyeBold />
                </button>
                <button className="rounded-lg bg-amber-500 px-5 py-2.5 text-xl text-white">
                  <FiEdit2 />
                </button>
                <button className="rounded-lg bg-red-500 px-5 py-2.5 text-xl text-white">
                  <FiTrash2 />
                </button>
              </td>
            </tr>
            <tr className="border border-gray-300">
              <td className="px-4 py-6">1</td>
              <td className="px-4 py-6">Turma 1</td>
              <td className="px-4 py-6">5</td>
              <td className="flex gap-x-2 px-4 py-6">
                <button className="rounded-lg bg-blue-500 px-5 py-2.5 text-xl text-white">
                  <PiEyeBold />
                </button>
                <button className="rounded-lg bg-amber-500 px-5 py-2.5 text-xl text-white">
                  <FiEdit2 />
                </button>
                <button className="rounded-lg bg-red-500 px-5 py-2.5 text-xl text-white">
                  <FiTrash2 />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
