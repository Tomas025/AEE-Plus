import { getPranchasComunicacao } from "@/services/PranchasComunicacaoService";
import { useQuery } from "@tanstack/react-query";

export function useCommunicationBoard() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["getCommunicationBoardCards"],
    queryFn: getPranchasComunicacao,
    refetchOnWindowFocus: false,
  });

  return {
    data,
    error,
    isLoading,
  };
}
