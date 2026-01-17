import { useNavigate } from "react-router-dom";
import { useConsultas } from "../hooks/useConsultas";
import { FormularioConsulta } from "../components/FormularioConsulta";
import type { Consulta } from "../types/tipos";

export const PaginaCrear = () => {
  const { crearConsulta } = useConsultas();
  const navigate = useNavigate();

  const alCrearWrapper = async (consulta: Consulta) => {
    const exito = await crearConsulta(consulta);
    if (exito) {
      // Redirigir al listado despues de crear
      navigate("/consulta/listado");
    }
    return exito;
  };

  return (
    <div id="pagina-crear">
      <FormularioConsulta alCrear={alCrearWrapper} />
    </div>
  );
};
