import { Routes, Route, Navigate } from 'react-router-dom';
import { PaginaCrear } from './consulta/pages/PaginaCrear';
import { PaginaListado } from './consulta/pages/PaginaListado';
import './App.css';
import { PaginaCrearDoctor } from './Doctor/pages/PaginaCrearDoctor';
import { PaginaListadoDoctores } from './Doctor/pages/PaginaListadoDoctores';

function App() {
  return (
    <>
      <div className="contenido-pagina">
        <Routes>
            <Route path="/doctor/crear" element={<PaginaCrearDoctor />} />
            <Route path="/doctor/listado" element={<PaginaListadoDoctores />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
