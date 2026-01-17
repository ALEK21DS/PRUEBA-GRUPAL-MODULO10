import { Search, Bell } from 'lucide-react';

const pageTitles = {
  dashboard: 'Dashboard',
  especialidades: 'Gestión de Especialidades',
  doctores: 'Gestión de Doctores',
  pacientes: 'Gestión de Pacientes',
  consultas: 'Gestión de Consultas',
  recetas: 'Gestión de Recetas',
  historiales: 'Gestión de Historiales',
};

function Header({ currentPage }) {
  return (
    <header className="main-header">
      <h1 className="page-title">{pageTitles[currentPage] || 'Dashboard'}</h1>
      <div className="header-actions">
        <div className="search-box">
          <Search size={18} />
          <input type="text" placeholder="Buscar..." />
        </div>
        <button className="btn btn-icon btn-secondary">
          <Bell size={20} />
        </button>
      </div>
    </header>
  );
}

export default Header;
