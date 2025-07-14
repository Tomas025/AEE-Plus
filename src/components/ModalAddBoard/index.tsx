"use client";
import { FiX } from "react-icons/fi";

// import { useModalSchedule } from "../ModalSchedule/hooks/useModalSchedule";

type ModalProps = {
  open: boolean | undefined;
  onClose: () => void;
};

export function ModalAddBoard({ open, onClose }: ModalProps) {
  // const { handleSubmit, register, reset, submitForm } = useModalSchedule();
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-colors ${open ? "visible bg-black/30" : "invisible"}`}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={`rounded-xl bg-white px-6 pt-6 pb-3 shadow transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}
      >
        <form>
          <div
            onClick={onClose}
            className="absolute top-2 right-2 rounded-lg bg-white p-1 text-gray-400 hover:bg-gray-50 hover:text-gray-600"
          >
            <FiX />
          </div>
          <header className="text-2xl font-semibold">
            <h1>Adicionar Nova Prancha</h1>
          </header>
          <main className="my-8 w-full items-center gap-x-10 py-4">
            <div className="flex flex-col">
              <label htmlFor="nome" className="font-medium">
                Nome
              </label>
              <input
                id="nome"
                type="text"
                className="rounded-md border border-gray-600 p-1"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="imagem" className="font-medium">
                Imagem
              </label>
              <label
                htmlFor="imagem"
                className="rounded-md border border-gray-600 p-1 text-gray-500"
              >
                Escolha uma imagem
              </label>
              <input id="imagem" type="file" className="hidden" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="audio" className="font-medium">
                Audio
              </label>
              <label
                htmlFor="audio"
                className="rounded-md border border-gray-600 p-1 text-gray-500"
              >
                Escolha um audio
              </label>
              <input id="audio" type="file" className="hidden" />
            </div>
          </main>
          <div className="flex justify-end gap-x-3">
            <button
              onClick={() => {
                onClose();
                // reset();
              }}
              className="flex w-fit items-center justify-center rounded bg-[#007bff] px-3 py-[6px] font-bold text-white hover:bg-[#0059ff]"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex w-fit items-center justify-center rounded bg-green-500 px-3 py-[6px] font-bold text-white hover:bg-green-700"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
