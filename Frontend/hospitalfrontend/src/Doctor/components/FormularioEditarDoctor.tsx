import React, { useState, useEffect } from "react";
import type { Doctor, Especialidad } from "../types/tipos";

interface Props {
  doctorInicial: Doctor;
  alActualizar: (doctor: Doctor) => Promise<boolean>;
}

export const FormularioEditarDoctor = ({
  doctorInicial,
  alActualizar,
}: Props) => {
  // Estados del formulario
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [numeroLicencia, setNumeroLicencia] = useState("");
  const [idEspecialidadSeleccionada, setIdEspecialidadSeleccionada] =
    useState<number>(0);
  const [especialidades, setEspecialidades] = useState<Especialidad[]>([]);
  const [cargandoEsp, setCargandoEsp] = useState(false);

  // Cargar datos del doctor cuando se recibe
  useEffect(() => {
    if (doctorInicial) {
      setNombre(doctorInicial.nombre || "");
      setApellido(doctorInicial.apellido || "");
      setTelefono(doctorInicial.telefono || "");
      setEmail(doctorInicial.email || "");
      setNumeroLicencia(doctorInicial.numeroLicencia || "");
      setIdEspecialidadSeleccionada(
        doctorInicial.especialidad?.idEspecialidad || 0,
      );
    }
  }, [doctorInicial]);

  // Cargar especialidades reales desde la API para respetar FK
  useEffect(() => {
    const cargarEspecialidades = async () => {
      try {
        setCargandoEsp(true);
        const resp = await fetch("http://localhost:8080/api/especialidades");
        if (!resp.ok) throw new Error("No se pudieron cargar especialidades");
        const data = await resp.json();
        setEspecialidades(data);
      } catch (err) {
        console.error(err);
        alert("No se pudieron cargar las especialidades. Verifica la API.");
      } finally {
        setCargandoEsp(false);
      }
    };

    cargarEspecialidades();
  }, []);

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
    const especialidad = especialidades.find(
      (e) => e.idEspecialidad === Number(idEspecialidadSeleccionada),
    );

    if (especialidad) {
      const doctorActualizado: Doctor = {
        idDoctor: doctorInicial.idDoctor,
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        email: email,
        numeroLicencia: numeroLicencia,
        especialidad: especialidad,
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
            onChange={(e) =>
              setIdEspecialidadSeleccionada(Number(e.target.value))
            }
            id="select-especialidad"
            disabled={cargandoEsp || especialidades.length === 0}
          >
            <option value={0}>
              {cargandoEsp
                ? "Cargando..."
                : "-- Seleccione una Especialidad --"}
            </option>
            {especialidades.map((esp) => (
              <option key={esp.idEspecialidad} value={esp.idEspecialidad}>
                {esp.nombreEspecialidad}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" id="btn-actualizar">
          Actualizar Doctor
        </button>
      </form>
    </div>
  );
};
