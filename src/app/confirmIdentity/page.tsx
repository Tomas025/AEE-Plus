export default function ConfirmIdentityPage() {
  return (
    <div className="flex h-screen items-center justify-center bg-blue-500">
      <div className="flex h-[468px] w-[530px] flex-col items-center justify-between rounded-lg bg-white px-11 py-10">
        <p className="text-3xl font-bold">Digite seu Código</p>
        <p className="w-5/6 text-center text-2xl">
          Por favor, digite abaixo o código enviado para o e-mail cadastrado
        </p>
        <div className="flex items-center justify-center gap-x-5">
          <div className="h-14 w-10 rounded-lg bg-[#D9D9D9]" />
          <div className="h-14 w-10 rounded-lg bg-[#D9D9D9]" />
          <div className="h-14 w-10 rounded-lg bg-[#D9D9D9]" />
          <div className="h-14 w-10 rounded-lg bg-[#D9D9D9]" />
          <div className="h-14 w-10 rounded-lg bg-[#D9D9D9]" />
          <div className="h-14 w-10 rounded-lg bg-[#D9D9D9]" />
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-y-2">
          <button className="w-1/2 cursor-pointer rounded-lg bg-blue-500 px-5 py-2.5 text-2xl font-semibold text-white hover:bg-blue-600 active:bg-blue-700">
            Verificar
          </button>
          <span className="cursor-pointer text-blue-600">
            Reenviar o código
          </span>
        </div>
      </div>
    </div>
  );
}
