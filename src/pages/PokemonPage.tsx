import { ReactElement, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useParams } from "react-router-dom";
import Spinner from "../components/core/Spinner";
import SinglePokemon from "../components/pokemon/SinglePokemon";

export default function PokemonPage(): ReactElement {
  const { id } = useParams();
  return (
    <div>
      <h1>{`Pokemon with id: ${id}`}</h1>
      <ErrorBoundary fallback={<span>Error while loading pokemon</span>}>
        <Suspense fallback={<Spinner />}>
          <SinglePokemon id={Number(id)} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
