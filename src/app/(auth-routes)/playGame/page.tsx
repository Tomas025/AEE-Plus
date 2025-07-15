export default function PlayGamePage() {
  return (
    <div className="p-10">
      <div className="grid grid-cols-3 gap-5 rounded-lg bg-white p-5 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
        <div className="col-span-4 flex h-52 items-center justify-center bg-[#D9D9D9]">
          Jogo
        </div>
        <div className="col-span-2 flex h-52 items-center justify-center bg-[#D9D9D9]">
          Regras
        </div>
        <div className="col-span-6 flex h-52 items-center justify-center bg-[#D9D9D9]">
          Ranking
        </div>
      </div>
    </div>
  );
}
