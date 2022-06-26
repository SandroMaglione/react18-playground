import { ReactElement } from "react";
import { Link } from "react-router-dom";

export default function DashboardNav(): ReactElement {
  return (
    <>
      <Link to="">Home</Link>
      <Link to="login">Login</Link>
    </>
  );
}
