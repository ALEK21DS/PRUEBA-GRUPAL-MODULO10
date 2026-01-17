import { useConsultas } from '../hooks/useConsultas';
import { ListaConsultas } from '../components/ListaConsultas';

export const PaginaListado = () => {
    const { consultas } = useConsultas();

    return (
        <div id="pagina-listado">
            <h1>Listado de Consultas</h1>
            <ListaConsultas consultas={consultas} />
        </div>
    );
};
