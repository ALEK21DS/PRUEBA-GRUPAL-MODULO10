import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { PaginaListado } from "./consulta/pages/PaginaListado";
import { PaginaCrear } from "./consulta/pages/PaginaCrear";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
