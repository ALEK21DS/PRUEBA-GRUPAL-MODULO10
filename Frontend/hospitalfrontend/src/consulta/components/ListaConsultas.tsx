import type { Consulta } from '../types/tipos';

interface Props {
    consultas: Consulta[];
}

export const ListaConsultas = ({ consultas }: Props) => {
    return (
        <div id="contenedor-lista">
            <h3>Listado de Consultas</h3>
            {consultas.length === 0 ? (
                <p>No hay consultas registradas.</p>
            ) : (
                <table border={1} id="tabla-consultas" style={{ width: '100%', textAlign: 'left' }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Fecha</th>
                            <th>Motivo</th>
                            <th>Doctor</th>
                            <th>Paciente</th>
                        </tr>
                    </thead>
                    <tbody>
                        {consultas.map((consulta) => (
                            <tr key={consulta.idConsulta}>
                                <td>{consulta.idConsulta}</td>
                                <td>{consulta.fechaConsulta}</td>
                                <td>{consulta.motivoConsulta}</td>
                                <td>{consulta.doctor?.nombre} {consulta.doctor?.apellido}</td>
                                <td>{consulta.paciente?.nombre} {consulta.paciente?.apellido}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};
