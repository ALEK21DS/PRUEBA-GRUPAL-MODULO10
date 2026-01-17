import { useNavigate } from 'react-router-dom';
import { useDoctores } from '../hooks/useDoctores';
import { FormularioDoctor } from '../components/FormularioDoctor';
import type { Doctor } from '../types/tipos';

export const PaginaCrearDoctor = () => {
    const { crearDoctor } = useDoctores();
    const navigate = useNavigate();

    const alCrearWrapper = async (doctor: Doctor) => {
        const exito = await crearDoctor(doctor);
        if (exito) {
            // Redirigir al listado después de crear
            navigate('/doctor/listado');
        }
        return exito;
    };

    return (
        <div id="pagina-crear-doctor">
            <h1>Crear Nuevo Doctor</h1>
            <FormularioDoctor alCrear={alCrearWrapper} />
        </div>
    );
};
