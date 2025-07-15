import Image from "next/image";
import Link from "next/link";

export function NavBar() {
  return (
    <nav className="flex items-center justify-between bg-blue-500 px-10 py-4 text-white">
      <div className="container flex items-center gap-14">
        <Link href={"/"} className="font-jetbrains-mono text-3xl font-bold">
          A|E|E
        </Link>
        <ul className="flex gap-x-6 text-lg font-medium">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Minhas turmas
            </Link>
          </li>
          <li>
            <Link href="/games" className="hover:text-gray-300">
              Jogos
            </Link>
          </li>
          <li>
            <Link href="/communicationBoard" className="hover:text-gray-300">
              Pranchas
            </Link>
          </li>
          {/* <li>
            <Link href="/contact" className="hover:text-gray-300">
              Gerenciar escolas
            </Link>
          </li> */}
        </ul>
      </div>
      <div className="flex items-center gap-3">
        <Image
          width={50}
          height={50}
          src={"/Perfil.png"}
          alt="foto de perfil"
          className="rounded-full"
        />
        <div className="whitespace-nowrap">
          <Link href={"/viewProfile"} className="font-bold">
            Maria Fulana
          </Link>
          <p className="text-sm font-semibold text-gray-300">Professor (a)</p>
        </div>
      </div>
    </nav>
  );
}
