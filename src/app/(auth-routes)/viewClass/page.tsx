import Image from "next/image";
import Link from "next/link";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { PiEyeBold, PiPencilRuler, PiStudentBold } from "react-icons/pi";

export default function ViewClassPage() {
  return (
    <div className="flex min-h-full flex-col items-center gap-y-10 p-10">
      <div className="flex w-full items-center justify-between">
        <div className="flex w-2/5 flex-col items-center justify-center gap-3 rounded-lg bg-[#F59E0B4D] p-5">
          <p className="text-xl">Numero de Alunos por Performance</p>
          <Image
            src={"/Chart 5.svg"}
            alt="Performance"
            width={362}
            height={78}
          />
        </div>
        <div className="flex w-80 items-center justify-between rounded-lg bg-[#EC48994D] p-5">
          <div className="space-y-2">
            <p className="text-xl">Quantidade PAA</p>
            <p className="text-4xl font-bold">6</p>
          </div>
          <PiPencilRuler className="text-5xl text-[#EC4899]" />
        </div>
        <div className="flex w-80 items-center justify-between rounded-lg bg-[#06B6D44D] p-5">
          <div className="space-y-2">
            <p className="text-xl">Planos de Condulta</p>
            <p className="text-4xl font-bold">30</p>
          </div>
          <PiStudentBold className="text-5xl text-[#06B6D4]" />
        </div>
      </div>
      <div className="flex w-full flex-col items-center gap-y-3 rounded-lg bg-white p-5">
        <div className="flex w-full items-center justify-between">
          <p className="text-lg font-semibold text-gray-950">
            Alunos da Turma X
          </p>
          <button className="cursor-pointer rounded-lg bg-blue-500 px-2 py-2.5 font-semibold text-white hover:bg-blue-600 active:bg-blue-700">
            Adicionar aluno na turma
          </button>
        </div>
        <table className="w-full border border-gray-300">
          <thead>
            <tr className="w-full border border-gray-300 text-sm font-bold text-gray-950">
              <th className="w-1/4 px-4 py-6 text-start">Id</th>
              <th className="w-1/4 px-4 py-6 text-start">Nome do Aluno</th>
              <th className="w-1/4 px-4 py-6 text-start">
                Performance do Aluno
              </th>
              <th className="w-1/4 px-4 py-6 text-start">Ações</th>
            </tr>
          </thead>
          <tbody className="w-full text-sm text-gray-700">
            <tr className="border border-gray-300">
              <td className="px-4 py-6">1</td>
              <td className="px-4 py-6">
                <Link href={"/viewProfileStudent"}>Almeida</Link>
              </td>
              <td className="px-4 py-6">A</td>
              <td className="flex gap-x-2 px-4 py-6">
                <button className="cursor-pointer rounded-lg bg-blue-500 px-5 py-2.5 text-xl text-white hover:bg-blue-600 active:bg-blue-700">
                  <PiEyeBold />
                </button>
                <button className="cursor-pointer rounded-lg bg-amber-500 px-5 py-2.5 text-xl text-white hover:bg-amber-600 active:bg-amber-700">
                  <FiEdit2 />
                </button>
                <button className="cursor-pointer rounded-lg bg-red-500 px-5 py-2.5 text-xl text-white hover:bg-red-600 active:bg-red-700">
                  <FiTrash2 />
                </button>
              </td>
            </tr>
            <tr className="border border-gray-300">
              <td className="px-4 py-6">1</td>
              <td className="px-4 py-6">
                <Link href={"/viewProfileStudent"}>Gabriel</Link>
              </td>
              <td className="px-4 py-6">A</td>
              <td className="flex gap-x-2 px-4 py-6">
                <button className="cursor-pointer rounded-lg bg-blue-500 px-5 py-2.5 text-xl text-white hover:bg-blue-600 active:bg-blue-700">
                  <PiEyeBold />
                </button>
                <button className="cursor-pointer rounded-lg bg-amber-500 px-5 py-2.5 text-xl text-white hover:bg-amber-600 active:bg-amber-700">
                  <FiEdit2 />
                </button>
                <button className="cursor-pointer rounded-lg bg-red-500 px-5 py-2.5 text-xl text-white hover:bg-red-600 active:bg-red-700">
                  <FiTrash2 />
                </button>
              </td>
            </tr>
            <tr className="border border-gray-300">
              <td className="px-4 py-6">1</td>
              <td className="px-4 py-6">
                <Link href={"/viewProfileStudent"}>Mirosmar</Link>
              </td>
              <td className="px-4 py-6">EP</td>
              <td className="flex gap-x-2 px-4 py-6">
                <button className="cursor-pointer rounded-lg bg-blue-500 px-5 py-2.5 text-xl text-white hover:bg-blue-600 active:bg-blue-700">
                  <PiEyeBold />
                </button>
                <button className="cursor-pointer rounded-lg bg-amber-500 px-5 py-2.5 text-xl text-white hover:bg-amber-600 active:bg-amber-700">
                  <FiEdit2 />
                </button>
                <button className="cursor-pointer rounded-lg bg-red-500 px-5 py-2.5 text-xl text-white hover:bg-red-600 active:bg-red-700">
                  <FiTrash2 />
                </button>
              </td>
            </tr>
            <tr className="border border-gray-300">
              <td className="px-4 py-6">1</td>
              <td className="px-4 py-6">
                <Link href={"/viewProfileStudent"}>Mariana</Link>
              </td>
              <td className="px-4 py-6">NR</td>
              <td className="flex gap-x-2 px-4 py-6">
                <button className="cursor-pointer rounded-lg bg-blue-500 px-5 py-2.5 text-xl text-white hover:bg-blue-600 active:bg-blue-700">
                  <PiEyeBold />
                </button>
                <button className="cursor-pointer rounded-lg bg-amber-500 px-5 py-2.5 text-xl text-white hover:bg-amber-600 active:bg-amber-700">
                  <FiEdit2 />
                </button>
                <button className="cursor-pointer rounded-lg bg-red-500 px-5 py-2.5 text-xl text-white hover:bg-red-600 active:bg-red-700">
                  <FiTrash2 />
                </button>
              </td>
            </tr>
            <tr className="border border-gray-300">
              <td className="px-4 py-6">1</td>
              <td className="px-4 py-6">
                <Link href={"/viewProfileStudent"}>Raquel</Link>
              </td>
              <td className="px-4 py-6">NR</td>
              <td className="flex gap-x-2 px-4 py-6">
                <button className="cursor-pointer rounded-lg bg-blue-500 px-5 py-2.5 text-xl text-white hover:bg-blue-600 active:bg-blue-700">
                  <PiEyeBold />
                </button>
                <button className="cursor-pointer rounded-lg bg-amber-500 px-5 py-2.5 text-xl text-white hover:bg-amber-600 active:bg-amber-700">
                  <FiEdit2 />
                </button>
                <button className="cursor-pointer rounded-lg bg-red-500 px-5 py-2.5 text-xl text-white hover:bg-red-600 active:bg-red-700">
                  <FiTrash2 />
                </button>
              </td>
            </tr>
            <tr className="border border-gray-300">
              <td className="px-4 py-6">1</td>
              <td className="px-4 py-6">
                <Link href={"/viewProfileStudent"}>Thamyres</Link>
              </td>
              <td className="px-4 py-6">NA</td>
              <td className="flex gap-x-2 px-4 py-6">
                <button className="cursor-pointer rounded-lg bg-blue-500 px-5 py-2.5 text-xl text-white hover:bg-blue-600 active:bg-blue-700">
                  <PiEyeBold />
                </button>
                <button className="cursor-pointer rounded-lg bg-amber-500 px-5 py-2.5 text-xl text-white hover:bg-amber-600 active:bg-amber-700">
                  <FiEdit2 />
                </button>
                <button className="cursor-pointer rounded-lg bg-red-500 px-5 py-2.5 text-xl text-white hover:bg-red-600 active:bg-red-700">
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
