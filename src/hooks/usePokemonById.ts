import { apiRequest } from "../lib/api/request";
import { POKEMON_API_URL } from "../lib/constants/api.constants";
import { pokemonSchema } from "../lib/validation/schemas/pokemon.schema";
import { useSWRSuspense } from "./core/useSWRSuspense";

export const usePokemonById = (pokemonId: number) => {
  return useSWRSuspense(
    `pokemon/${pokemonId}`,
    apiRequest(`${POKEMON_API_URL}pokemon/${pokemonId}`, pokemonSchema)
  );
};
