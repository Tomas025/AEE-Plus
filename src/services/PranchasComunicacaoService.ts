import { api } from "./api";

export async function getPranchasComunicacao() {
  const response = await api.get("/PranchasComunicacao/1");
  return response;
}

// return api.post("/PranchasComunicacao/1/cards");
