import { ReactElement } from "react";
import { Outlet } from "react-router-dom";

export default function AppNav(): ReactElement {
  return (
    <div className="flex items-center justify-center bg-slate-50 py-2 shadow">
      <nav className="flex max-w-xl items-center justify-between">
        <Outlet />
      </nav>
    </div>
  );
}
