import { ReactElement, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Spinner from "../components/core/Spinner";

export default function HomePage(): ReactElement {
  return (
    <div>
      <ErrorBoundary fallback={<span>Error</span>}>
        <Suspense fallback={<Spinner />}>{/* <SinglePokemon /> */}</Suspense>
      </ErrorBoundary>
    </div>
  );
}
