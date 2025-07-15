"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NewPasswordPage() {
  const { push } = useRouter();

  return (
    <div className="flex min-h-screen w-screen items-center justify-between bg-white">
      <div className="flex min-h-screen w-1/2 flex-col items-center justify-center gap-y-10 bg-[url(/backgroundLogin.svg)] bg-cover bg-center">
        <Image
          src="/coracaoLogin.svg"
          alt="Coração Login"
          width={800}
          height={600}
          className="h-auto w-2/5 object-cover"
        />
        <p className="text-center text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-6xl">
          A inclusão vem do
          <br />
          coração
        </p>
      </div>
      <div className="flex min-h-screen w-1/2 flex-col items-center justify-center p-10">
        <div className="mb-12 flex flex-col items-center justify-center">
          <p className="text-3xl font-bold">Defina uma nova senha</p>
          <div className="w-40 rounded-full border-3 border-blue-500" />
        </div>
        <form
          onSubmit={(e) => {
            push("/login");
            e.preventDefault();
          }}
          className="flex w-3/5 flex-col items-center gap-y-10"
        >
          <div className="flex w-full flex-col gap-y-1 text-xl">
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              className="rounded-md bg-gray-200 px-1 py-2"
            />
          </div>
          <div className="flex w-full flex-col gap-y-1 text-xl">
            <label htmlFor="repeatPassword">Confirme a senha</label>
            <input
              id="repeatPassword"
              type="password"
              className="rounded-md bg-gray-200 px-1 py-2"
            />
          </div>

          <button
            type="submit"
            className="w-1/2 cursor-pointer rounded-lg bg-blue-500 p-2.5 text-white hover:bg-blue-600 active:bg-blue-700"
          >
            Salvar
          </button>
        </form>
      </div>
    </div>
  );
}
