import type { FC } from "react";
import { useLocation, useNavigate, Outlet } from "react-router-dom";
import Sidebar from "../app/components/SideBar/Sidebar";

const MainLayout: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Determinar qué botón está activo según la ruta
  let currentPage = "";
  if (location.pathname.includes("/consulta/listado")) {
    currentPage = "listado";
  } else if (location.pathname.includes("/consulta/crear")) {
    currentPage = "crear";
  }

  const handlePageChange = (pageId: string) => {
    switch (pageId) {
      case "listado":
        navigate("/consulta/listado");
        break;
      case "crear":
        navigate("/consulta/crear");
        break;
      default:
        break;
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar currentPage={currentPage} onPageChange={handlePageChange} />
      <main style={{ flex: 1, padding: "2rem", overflowY: "auto" }}>
        <Outlet /> {/* Aquí se renderizan las rutas hijas */}
      </main>
    </div>
  );
};

export default MainLayout;
