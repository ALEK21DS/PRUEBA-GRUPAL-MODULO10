import type { FC } from "react";
import "./sytles.css";
import { LayoutDashboard, Stethoscope, Hospital } from "lucide-react";

type MenuItem = {
  id: string;
  label: string;
  icon: FC<{ size?: number }>;
};

interface SidebarProps {
  currentPage: string;
  onPageChange: (pageId: string) => void;
}

const menuItems: MenuItem[] = [
  { id: "consultas", label: "Consultas", icon: LayoutDashboard },
  { id: "gestionar-doctores", label: "Gestionar Doctores", icon: Stethoscope },
];

const Sidebar: FC<SidebarProps> = ({ currentPage, onPageChange }) => {
  return (
    <aside className="sidebar">
      {/* Header con logo */}
      <div className="sidebar-header">
        <div className="logo">
          <div className="logo-icon">
            <Hospital size={24} />
          </div>
          <span className="logo-text">HOSPITAL</span>
        </div>
      </div>

      {/* Navegación */}
      <nav className="sidebar-nav">
        <div className="nav-section">
          <span className="nav-section-title">Menú Principal</span>
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                className={`nav-item ${currentPage === item.id ? "active" : ""}`}
                onClick={() => onPageChange(item.id)}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
