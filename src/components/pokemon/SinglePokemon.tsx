import { ReactElement } from "react";
import { usePokemonById } from "../../hooks/usePokemonById";
import Spinner from "../core/Spinner";

interface SinglePokemonProps {
  id: number;
}

export default function SinglePokemon({
  id,
}: SinglePokemonProps): ReactElement {
  const { data, isValidating } = usePokemonById(id);
  return (
    <div>
      {isValidating && <Spinner />}
      <span>{data.name}</span>
      <img
        className="h-48 w-48"
        src={data.sprites.front_default}
        alt={`Pokemon ${data.name} sprite`}
      />
    </div>
  );
}
