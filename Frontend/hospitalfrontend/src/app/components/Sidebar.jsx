import { 
  LayoutDashboard, 
  Stethoscope, 
  UserRound, 
  Users, 
  CalendarCheck, 
  FileText, 
  ClipboardList,
  Hospital
} from 'lucide-react';

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'especialidades', label: 'Especialidades', icon: Stethoscope },
  { id: 'doctores', label: 'Doctores', icon: UserRound },
  { id: 'pacientes', label: 'Pacientes', icon: Users },
  { id: 'consultas', label: 'Consultas', icon: CalendarCheck },
  { id: 'recetas', label: 'Recetas', icon: FileText },
  { id: 'historiales', label: 'Historiales', icon: ClipboardList },
];

function Sidebar({ currentPage, onPageChange }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <div className="logo-icon">
            <Hospital size={24} />
          </div>
          <span className="logo-text">MedCare</span>
        </div>
      </div>
      
      <nav className="sidebar-nav">
        <div className="nav-section">
          <span className="nav-section-title">Menú Principal</span>
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                className={`nav-item ${currentPage === item.id ? 'active' : ''}`}
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
}

export default Sidebar;
