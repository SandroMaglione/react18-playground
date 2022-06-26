import { Route, Routes } from "react-router-dom";
import AppNav from "./components/nav/AppNav";
import DashboardNav from "./components/nav/dashboard/DashboardNav";
import LoginNav from "./components/nav/login/LoginNav";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PokemonPage from "./pages/PokemonPage";

function App() {
  return (
    <>
      {/* Navigation menu */}
      <Routes>
        <Route path="/" element={<AppNav />}>
          <Route index element={<DashboardNav />} />
          <Route path="login" element={<LoginNav />} />
        </Route>
      </Routes>

      {/* Route pages */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<PokemonPage />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
