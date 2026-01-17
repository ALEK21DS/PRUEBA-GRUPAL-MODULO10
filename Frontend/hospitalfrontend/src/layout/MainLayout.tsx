import type { FC } from "react";
import { useLocation, useNavigate, Outlet } from "react-router-dom";
import Sidebar from "../app/components/SideBar/Sidebar";

const MainLayout: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Determinar qué botón está activo según la ruta
  let currentPage = "";
  if (location.pathname.includes("/consulta/listado")) {
    currentPage = "consulta-listado";
  } else if (location.pathname.includes("/consulta/crear")) {
    currentPage = "consulta-crear";
  } else if (location.pathname.includes("/doctor/listado")) {
    currentPage = "doctor-listado";
  } else if (location.pathname.includes("/doctor/crear")) {
    currentPage = "doctor-crear";
  } else if (location.pathname.includes("/doctor/editar")) {
    currentPage = "doctor-listado";
  }

  const handlePageChange = (pageId: string) => {
    switch (pageId) {
      case "consulta-listado":
        navigate("/consulta/listado");
        break;
      case "consulta-crear":
        navigate("/consulta/crear");
        break;
      case "doctor-listado":
        navigate("/doctor/listado");
        break;
      case "doctor-crear":
        navigate("/doctor/crear");
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
