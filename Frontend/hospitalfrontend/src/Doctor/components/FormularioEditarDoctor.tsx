import React, { useState, useEffect } from 'react';
import type { Doctor, Especialidad } from '../types/tipos';

// Datos quemados para el dropdown de especialidades
const listaEspecialidades: Especialidad[] = [
    { idEspecialidad: 1, nombreEspecialidad: "Cardiología", descripcionEspecialidad: "Especialidad del corazón" },
    { idEspecialidad: 2, nombreEspecialidad: "Pediatría", descripcionEspecialidad: "Atención a niños" },
    { idEspecialidad: 3, nombreEspecialidad: "Neurología", descripcionEspecialidad: "Sistema nervioso" },
    { idEspecialidad: 4, nombreEspecialidad: "Dermatología", descripcionEspecialidad: "Enfermedades de la piel" },
    { idEspecialidad: 5, nombreEspecialidad: "Traumatología", descripcionEspecialidad: "Lesiones y fracturas" }
];

interface Props {
    doctorInicial: Doctor;
    alActualizar: (doctor: Doctor) => Promise<boolean>;
}

export const FormularioEditarDoctor = ({ doctorInicial, alActualizar }: Props) => {
    // Estados del formulario
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [numeroLicencia, setNumeroLicencia] = useState("");
    const [idEspecialidadSeleccionada, setIdEspecialidadSeleccionada] = useState<number>(0);

    // Cargar datos del doctor cuando se recibe
    useEffect(() => {
        if (doctorInicial) {
            setNombre(doctorInicial.nombre || "");
            setApellido(doctorInicial.apellido || "");
            setTelefono(doctorInicial.telefono || "");
            setEmail(doctorInicial.email || "");
            setNumeroLicencia(doctorInicial.numeroLicencia || "");
            setIdEspecialidadSeleccionada(doctorInicial.especialidad?.idEspecialidad || 0);
        }
    }, [doctorInicial]);

    const manejarEnvio = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validar selección de especialidad
        if (!idEspecialidadSeleccionada) {
            alert("Seleccione una especialidad");
            return;
        }

        // Validar campos obligatorios
        if (!nombre.trim() || !apellido.trim()) {
            alert("Nombre y apellido son obligatorios");
            return;
        }

        // Buscar objeto de especialidad completo
        const especialidad = listaEspecialidades.find(e => e.idEspecialidad === Number(idEspecialidadSeleccionada));

        if (especialidad) {
            const doctorActualizado: Doctor = {
                idDoctor: doctorInicial.idDoctor,
                nombre: nombre,
                apellido: apellido,
                telefono: telefono,
                email: email,
                numeroLicencia: numeroLicencia,
                especialidad: especialidad
            };

            const exito = await alActualizar(doctorActualizado);
            if (exito) {
                alert("Doctor actualizado correctamente");
            } else {
                alert("Error al actualizar doctor");
            }
        }
    };

    return (
        <div id="contenedor-formulario-editar">
            <h2>Editar Doctor</h2>
            <form onSubmit={manejarEnvio} id="form-editar-doctor">
                <div id="campo-nombre">
                    <label>Nombre:</label>
                    <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                        placeholder="Ej: Juan"
                        id="input-nombre"
                    />
                </div>

                <div id="campo-apellido">
                    <label>Apellido:</label>
                    <input
                        type="text"
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                        required
                        placeholder="Ej: Pérez"
                        id="input-apellido"
                    />
                </div>

                <div id="campo-telefono">
                    <label>Teléfono:</label>
                    <input
                        type="tel"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                        placeholder="Ej: 0999123456"
                        id="input-telefono"
                    />
                </div>

                <div id="campo-email">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Ej: doctor@hospital.com"
                        id="input-email"
                    />
                </div>

                <div id="campo-licencia">
                    <label>Número de Licencia:</label>
                    <input
                        type="text"
                        value={numeroLicencia}
                        onChange={(e) => setNumeroLicencia(e.target.value)}
                        placeholder="Ej: MED-2024-001"
                        id="input-licencia"
                    />
                </div>

                <div id="campo-especialidad">
                    <label>Especialidad:</label>
                    <select
                        value={idEspecialidadSeleccionada}
                        onChange={(e) => setIdEspecialidadSeleccionada(Number(e.target.value))}
                        id="select-especialidad"
                    >
                        <option value={0}>-- Seleccione una Especialidad --</option>
                        {listaEspecialidades.map(esp => (
                            <option key={esp.idEspecialidad} value={esp.idEspecialidad}>
                                {esp.nombreEspecialidad}
                            </option>
                        ))}
                    </select>
                </div>

                <button type="submit" id="btn-actualizar">Actualizar Doctor</button>
            </form>
        </div>
    );
};
