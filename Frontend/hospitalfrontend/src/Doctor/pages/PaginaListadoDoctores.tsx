import { useDoctores } from '../hooks/useDoctores';
import { ListaDoctores } from '../components/ListaDoctores';

export const PaginaListadoDoctores = () => {
    const { doctores, eliminarDoctor } = useDoctores();

    return (
        <div id="pagina-listado-doctores">
            <h1>Listado de Doctores</h1>
            <ListaDoctores doctores={doctores} alEliminar={eliminarDoctor} />
        </div>
    );
};
