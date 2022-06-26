import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter } from "react-router-dom";
import { SWRConfig } from "swr";

import App from "./App";
import ErrorReport from "./components/core/ErrorReport";
import Spinner from "./components/core/Spinner";
import "./styles/main.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SWRConfig
      value={{
        suspense: true,
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <BrowserRouter>
        <ErrorBoundary
          fallback={
            <div className="flex h-screen w-screen items-center justify-center overflow-hidden">
              <ErrorReport error="General app error" />
            </div>
          }
        >
          <Suspense
            fallback={
              <div className="flex h-screen w-screen items-center justify-center overflow-hidden">
                <Spinner />
              </div>
            }
          >
            <App />
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </SWRConfig>
  </React.StrictMode>
);
