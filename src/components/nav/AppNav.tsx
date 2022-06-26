import { ReactElement } from "react";
import { Outlet } from "react-router-dom";

export default function AppNav(): ReactElement {
  return (
    <nav>
      <Outlet />
    </nav>
  );
}
