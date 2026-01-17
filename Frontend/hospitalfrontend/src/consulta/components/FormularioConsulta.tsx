import React, { useState } from 'react';
import type { Consulta, Paciente } from '../types/tipos';
import { useDoctores } from '../../Doctor/hooks/useDoctores';

// Datos quemados para los dropdowns (Pacientes se mantiene por ahora)
const listaPacientes: Paciente[] = [
    { idPaciente: 1, nombre: "John", apellido: "Doe" },
    { idPaciente: 2, nombre: "Jane", apellido: "Smith" },
    { idPaciente: 3, nombre: "Pepito", apellido: "Perez" }
];

interface Props {
    alCrear: (consulta: Consulta) => Promise<boolean>;
}

export const FormularioConsulta = ({ alCrear }: Props) => {
    // Estados del formulario
    const [fecha, setFecha] = useState("");
    const [motivo, setMotivo] = useState("");
    const [idDoctorSeleccionado, setIdDoctorSeleccionado] = useState<number>(0);
    const [idPacienteSeleccionado, setIdPacienteSeleccionado] = useState<number>(0);

    // Hook para obtener doctores
    const { doctores } = useDoctores();

    const manejarEnvio = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validar selección
        if (!idDoctorSeleccionado || !idPacienteSeleccionado) {
            alert("Seleccione doctor y paciente");
            return;
        }

        // Buscar objetos completos
        // Usamos 'doctores' que viene del hook en lugar de la lista quemada
        const doc = doctores.find(d => d.idDoctor === Number(idDoctorSeleccionado));
        const pac = listaPacientes.find(p => p.idPaciente === Number(idPacienteSeleccionado));

        if (doc && pac) {
            const nuevaConsulta: Consulta = {
                fechaConsulta: fecha,
                motivoConsulta: motivo,
                doctor: {
                    idDoctor: doc.idDoctor!,
                    nombre: doc.nombre,
                    apellido: doc.apellido
                },
                paciente: pac
            };

            const exito = await alCrear(nuevaConsulta);
            if (exito) {
                alert("Consulta creada correctamente");
                setMotivo("");
                setFecha("");
            }
        }
    };

    return (
        <div id="contenedor-formulario">
            <h2>Crear Nueva Consulta</h2>
            <form onSubmit={manejarEnvio} id="form-consulta">
                <div id="campo-fecha">
                    <label>Fecha de Consulta:</label>
                    <input
                        type="datetime-local"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                        required
                        id="input-fecha"
                    />
                </div>

                <div id="campo-motivo">
                    <label>Motivo:</label>
                    <input
                        type="text"
                        value={motivo}
                        onChange={(e) => setMotivo(e.target.value)}
                        required
                        placeholder="Ej: Dolor de cabeza"
                        id="input-motivo"
                    />
                </div>

                <div id="campo-doctor">
                    <label>Doctor:</label>
                    <select
                        value={idDoctorSeleccionado}
                        onChange={(e) => setIdDoctorSeleccionado(Number(e.target.value))}
                        id="select-doctor"
                    >
                        <option value={0}>-- Seleccione un Doctor --</option>
                        {doctores.map(doc => (
                            <option key={doc.idDoctor} value={doc.idDoctor}>
                                {doc.nombre} {doc.apellido}
                            </option>
                        ))}
                    </select>
                </div>

                <div id="campo-paciente">
                    <label>Paciente:</label>
                    <select
                        value={idPacienteSeleccionado}
                        onChange={(e) => setIdPacienteSeleccionado(Number(e.target.value))}
                        id="select-paciente"
                    >
                        <option value={0}>-- Seleccione un Paciente --</option>
                        {listaPacientes.map(pac => (
                            <option key={pac.idPaciente} value={pac.idPaciente}>
                                {pac.nombre} {pac.apellido}
                            </option>
                        ))}
                    </select>
                </div>

                <button type="submit" id="btn-guardar">Guardar Consulta</button>
            </form>
        </div>
    );
};
