import { Routes, Route, Navigate } from 'react-router-dom';
import { PaginaCrear } from './consulta/pages/PaginaCrear';
import { PaginaListado } from './consulta/pages/PaginaListado';
import './App.css';

function App() {
  return (
    <>
      <div className="contenido-pagina">
        <Routes>
          {/* Redireccion por defecto al listado de consultas */}
          <Route path="/" element={<Navigate to="/consulta/listado" replace />} />

          {/* Rutas especificas para CONSULTAS */}
          <Route path="/consulta/listado" element={<PaginaListado />} />
          <Route path="/consulta/crear" element={<PaginaCrear />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
