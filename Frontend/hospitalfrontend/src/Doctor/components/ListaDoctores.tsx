import { useNavigate } from 'react-router-dom';
import type { Doctor } from '../types/tipos';

interface Props {
    doctores: Doctor[];
    alEliminar: (id: number) => Promise<boolean>;
}

export const ListaDoctores = ({ doctores, alEliminar }: Props) => {
    const navigate = useNavigate();

    const manejarEliminar = async (id: number | undefined) => {
        if (id) {
            const confirmar = window.confirm("¿Está seguro de eliminar este doctor?");
            if (confirmar) {
                const exito = await alEliminar(id);
                if (exito) {
                    alert("Doctor eliminado correctamente");
                } else {
                    alert("Error al eliminar doctor");
                }
            }
        }
    };

    const manejarEditar = (id: number | undefined) => {
        if (id) {
            navigate(`/doctor/editar/${id}`);
        }
    };

    return (
        <div id="contenedor-lista">
            <h3>Listado de Doctores</h3>
            {doctores.length === 0 ? (
                <p>No hay doctores registrados.</p>
            ) : (
                <table border={1} id="tabla-doctores" style={{ width: '100%', textAlign: 'left' }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Teléfono</th>
                            <th>Email</th>
                            <th>Licencia</th>
                            <th>Especialidad</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctores.map((doctor) => (
                            <tr key={doctor.idDoctor}>
                                <td>{doctor.idDoctor}</td>
                                <td>{doctor.nombre}</td>
                                <td>{doctor.apellido}</td>
                                <td>{doctor.telefono || '-'}</td>
                                <td>{doctor.email || '-'}</td>
                                <td>{doctor.numeroLicencia || '-'}</td>
                                <td>{doctor.especialidad?.nombreEspecialidad || 'Sin asignar'}</td>
                                <td>
                                    <button 
                                        onClick={() => manejarEditar(doctor.idDoctor)}
                                        id={`btn-editar-${doctor.idDoctor}`}
                                        style={{ 
                                            backgroundColor: '#3b82f6', 
                                            color: 'white', 
                                            cursor: 'pointer',
                                            marginRight: '5px',
                                            padding: '5px 10px',
                                            border: 'none',
                                            borderRadius: '4px'
                                        }}
                                    >
                                        Editar
                                    </button>
                                    <button 
                                        onClick={() => manejarEliminar(doctor.idDoctor)}
                                        id={`btn-eliminar-${doctor.idDoctor}`}
                                        style={{ 
                                            backgroundColor: '#ef4444', 
                                            color: 'white', 
                                            cursor: 'pointer',
                                            padding: '5px 10px',
                                            border: 'none',
                                            borderRadius: '4px'
                                        }}
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};
