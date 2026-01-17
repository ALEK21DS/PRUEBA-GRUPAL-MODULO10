import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDoctores } from '../hooks/useDoctores';
import { FormularioEditarDoctor } from '../components/FormularioEditarDoctor';
import type { Doctor } from '../types/tipos';

export const PaginaEditarDoctor = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { actualizarDoctor, obtenerDoctorPorId } = useDoctores();
    
    const [doctor, setDoctor] = useState<Doctor | null>(null);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const cargarDoctor = async () => {
            if (id) {
                const doctorObtenido = await obtenerDoctorPorId(Number(id));
                setDoctor(doctorObtenido);
                setCargando(false);
            }
        };
        cargarDoctor();
    }, [id]);

    const alActualizarWrapper = async (doctorActualizado: Doctor) => {
        if (id) {
            const exito = await actualizarDoctor(Number(id), doctorActualizado);
            if (exito) {
                navigate('/doctor/listado');
            }
            return exito;
        }
        return false;
    };

    if (cargando) {
        return <div>Cargando...</div>;
    }

    if (!doctor) {
        return <div>Doctor no encontrado</div>;
    }

    return (
        <div id="pagina-editar-doctor">
            <FormularioEditarDoctor 
                doctorInicial={doctor} 
                alActualizar={alActualizarWrapper} 
            />
            <button 
                onClick={() => navigate('/doctor/listado')}
                style={{ marginTop: '10px' }}
            >
                Volver al Listado
            </button>
        </div>
    );
};
