import Image from "next/image";
import Link from "next/link";

export default function GamesPage() {
  return (
    <div className="space-y-10 p-10">
      <p className="text-2xl font-bold">Pranchas de Comunicação</p>
      <div className="grid grid-cols-3 gap-10 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
        <div>
          <div className="flex h-60 w-48 flex-col items-center rounded-lg bg-white p-4">
            <Image width={154} height={121} src={"/image 6.png"} alt="maçã" />
            <p className="mt-4 mb-2 self-start font-bold">Torre de Hanói</p>
            <p className="mb-5 text-xs">
              Descrição do jogo Descrição do jogo Descrição do jogo
            </p>
            <Link
              href={"/playGame"}
              className="cursor-pointer rounded-lg border border-blue-500 px-5 py-2.5 font-medium text-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-700"
            >
              Entrar no jogo
            </Link>
          </div>
        </div>
        <div>
          <div className="flex h-60 w-48 flex-col items-center rounded-lg bg-white p-4">
            <Image width={154} height={121} src={"/image 6.png"} alt="maçã" />
            <p className="mt-4 mb-2 self-start font-bold">Torre de Hanói</p>
            <p className="mb-5 text-xs">
              Descrição do jogo Descrição do jogo Descrição do jogo
            </p>
            <button className="cursor-pointer rounded-lg border border-blue-500 px-5 py-2.5 font-medium text-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-700">
              Entrar no jogo
            </button>
          </div>
        </div>
        <div>
          <div className="flex h-60 w-48 flex-col items-center rounded-lg bg-white p-4">
            <Image width={154} height={121} src={"/image 6.png"} alt="maçã" />
            <p className="mt-4 mb-2 self-start font-bold">Torre de Hanói</p>
            <p className="mb-5 text-xs">
              Descrição do jogo Descrição do jogo Descrição do jogo
            </p>
            <button className="cursor-pointer rounded-lg border border-blue-500 px-5 py-2.5 font-medium text-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-700">
              Entrar no jogo
            </button>
          </div>
        </div>
        <div>
          <div className="flex h-60 w-48 flex-col items-center rounded-lg bg-white p-4">
            <Image width={154} height={121} src={"/image 6.png"} alt="maçã" />
            <p className="mt-4 mb-2 self-start font-bold">Torre de Hanói</p>
            <p className="mb-5 text-xs">
              Descrição do jogo Descrição do jogo Descrição do jogo
            </p>
            <button className="cursor-pointer rounded-lg border border-blue-500 px-5 py-2.5 font-medium text-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-700">
              Entrar no jogo
            </button>
          </div>
        </div>
        <div>
          <div className="flex h-60 w-48 flex-col items-center rounded-lg bg-white p-4">
            <Image width={154} height={121} src={"/image 6.png"} alt="maçã" />
            <p className="mt-4 mb-2 self-start font-bold">Torre de Hanói</p>
            <p className="mb-5 text-xs">
              Descrição do jogo Descrição do jogo Descrição do jogo
            </p>
            <button className="cursor-pointer rounded-lg border border-blue-500 px-5 py-2.5 font-medium text-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-700">
              Entrar no jogo
            </button>
          </div>
        </div>
        <div>
          <div className="flex h-60 w-48 flex-col items-center rounded-lg bg-white p-4">
            <Image width={154} height={121} src={"/image 6.png"} alt="maçã" />
            <p className="mt-4 mb-2 self-start font-bold">Torre de Hanói</p>
            <p className="mb-5 text-xs">
              Descrição do jogo Descrição do jogo Descrição do jogo
            </p>
            <button className="cursor-pointer rounded-lg border border-blue-500 px-5 py-2.5 font-medium text-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-700">
              Entrar no jogo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
