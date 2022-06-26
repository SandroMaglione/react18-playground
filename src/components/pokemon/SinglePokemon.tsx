import { ReactElement } from "react";
import { usePokemonById } from "../../hooks/usePokemonById";

export default function SinglePokemon(): ReactElement {
  const { data } = usePokemonById(1);
  return (
    <div>
      <span>{data.name}</span>
      <img
        className="h-48 w-48"
        src={data.sprites.front_default}
        alt={`Pokemon ${data.name} sprite`}
      />
    </div>
  );
}
