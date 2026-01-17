import { useNavigate } from 'react-router-dom';
import { useDoctores } from '../hooks/useDoctores';
import { ListaDoctores } from '../components/ListaDoctores';

export const PaginaListadoDoctores = () => {
    const { doctores, eliminarDoctor } = useDoctores();
    const navigate = useNavigate();

    return (
        <div id="pagina-listado-doctores">
            <h1>Listado de Doctores</h1>
            <button 
                onClick={() => navigate('/doctor/crear')}
                style={{ 
                    marginBottom: '15px',
                    backgroundColor: '#10b981',
                    color: 'white',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}
            >
                + Crear Nuevo Doctor
            </button>
            <ListaDoctores doctores={doctores} alEliminar={eliminarDoctor} />
        </div>
    );
};
