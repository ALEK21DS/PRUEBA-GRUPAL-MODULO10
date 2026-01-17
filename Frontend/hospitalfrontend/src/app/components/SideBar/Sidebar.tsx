import type { FC } from "react";
import { LayoutDashboard, Stethoscope, Hospital } from "lucide-react";
import "./sytles.css";

type MenuItem = {
  id: string;
  label: string;
};

interface SidebarProps {
  currentPage: string;
  onPageChange: (pageId: string) => void;
}

const menuItems = [
  { id: "listado", label: "Listado Consultas" },
  { id: "crear", label: "Crear Consulta" },
];

const Sidebar: FC<SidebarProps> = ({ currentPage, onPageChange }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <div className="logo-icon">
            <Hospital size={24} />
          </div>
          <span className="logo-text">HOSPITAL</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${currentPage === item.id ? "active" : ""}`}
            onClick={() => onPageChange(item.id)}
          >
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
