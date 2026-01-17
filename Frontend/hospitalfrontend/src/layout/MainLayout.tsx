import type { FC } from "react";
import { useState } from "react";
import Sidebar from "../app/components/SideBar/Sidebar";

const MainLayout: FC = () => {
  const [currentPage, setCurrentPage] = useState<string>("consultas");

  const renderContent = () => {
    switch (currentPage) {
      case "consultas":
        return <div style={{ fontSize: "1.5rem" }}>Consultas</div>;
      case "gestionar-doctores":
        return <div style={{ fontSize: "1.5rem" }}>Gestionar Doctores</div>;
      default:
        return <div>Página no encontrada</div>;
    }
  };

  return (
    <div className="app-container">
      <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
      <main className="content">{renderContent()}</main>
    </div>
  );
};

export default MainLayout;
