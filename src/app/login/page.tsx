import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen w-screen items-center justify-between bg-white">
      <Image
        width={730}
        height={1024}
        src={"/group 69.svg"}
        alt="imageLogin"
        className="h-screen w-1/2 object-cover"
      />
      <div>
        <p>Entrar</p>
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" />
          </div>
          <div>
            <div>
              <label htmlFor="password">Senha</label>
              <input id="password" type="password" />
            </div>
            <Link href={""} />
          </div>

          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}
