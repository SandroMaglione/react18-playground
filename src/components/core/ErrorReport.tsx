import { ReactElement } from "react";

interface ErrorReportProps {
  error: string;
}

export default function ErrorReport({ error }: ErrorReportProps): ReactElement {
  return (
    <div className="flex flex-col items-start justify-center gap-y-2 text-center text-sm font-black text-rose-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
      <span>{error}</span>
    </div>
  );
}
