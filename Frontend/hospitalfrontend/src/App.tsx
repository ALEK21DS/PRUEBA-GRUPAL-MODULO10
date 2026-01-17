import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { PaginaListado } from "./consulta/pages/PaginaListado";
import { PaginaCrear } from "./consulta/pages/PaginaCrear";
import { PaginaCrearDoctor } from "./Doctor/pages/PaginaCrearDoctor";
import { PaginaListadoDoctores } from "./Doctor/pages/PaginaListadoDoctores";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout como ruta padre */}
        <Route path="/" element={<MainLayout />}>
          {/* Redireccionamiento por defecto */}
          <Route index element={<Navigate to="/consulta/listado" replace />} />

          {/* Rutas hijas */}
          <Route path="consulta/listado" element={<PaginaListado />} />
          <Route path="consulta/crear" element={<PaginaCrear />} />
          <Route path="doctor/crear" element={<PaginaCrearDoctor />} />
          <Route path="doctor/listado" element={<PaginaListadoDoctores />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
