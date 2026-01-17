import { useNavigate } from "react-router-dom";
import type { Doctor } from "../types/tipos";

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
    <div
      id="contenedor-lista"
      style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}
    >
      {doctores.length === 0 ? (
        <p style={{ textAlign: "center", color: "#64748b" }}>
          No hay doctores registrados.
        </p>
      ) : (
        <table
          id="tabla-doctores"
          style={{
            width: "100%",
            borderCollapse: "collapse",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            backgroundColor: "#f8fafc",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <thead style={{ backgroundColor: "#3b82f6", color: "white" }}>
            <tr>
              <th style={{ padding: "12px" }}>ID</th>
              <th style={{ padding: "12px" }}>Nombre</th>
              <th style={{ padding: "12px" }}>Apellido</th>
              <th style={{ padding: "12px" }}>Teléfono</th>
              <th style={{ padding: "12px" }}>Email</th>
              <th style={{ padding: "12px" }}>Licencia</th>
              <th style={{ padding: "12px" }}>Especialidad</th>
              <th style={{ padding: "12px" }}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {doctores.map((doctor) => (
              <tr
                key={doctor.idDoctor}
                style={{
                  borderBottom: "1px solid #e2e8f0",
                  transition: "background-color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#f1f5f9")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
              >
                <td style={{ padding: "10px" }}>{doctor.idDoctor}</td>
                <td style={{ padding: "10px" }}>{doctor.nombre}</td>
                <td style={{ padding: "10px" }}>{doctor.apellido}</td>
                <td style={{ padding: "10px" }}>{doctor.telefono || "-"}</td>
                <td style={{ padding: "10px" }}>{doctor.email || "-"}</td>
                <td style={{ padding: "10px" }}>
                  {doctor.numeroLicencia || "-"}
                </td>
                <td style={{ padding: "10px" }}>
                  {doctor.especialidad?.nombreEspecialidad || "Sin asignar"}
                </td>
                <td style={{ padding: "10px", display: "flex", gap: "5px" }}>
                  <button
                    onClick={() => manejarEditar(doctor.idDoctor)}
                    style={{
                      backgroundColor: "#3b82f6",
                      color: "white",
                      cursor: "pointer",
                      padding: "6px 12px",
                      border: "none",
                      borderRadius: "5px",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                      transition: "background-color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "#2563eb")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "#3b82f6")
                    }
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => manejarEliminar(doctor.idDoctor)}
                    style={{
                      backgroundColor: "#ef4444",
                      color: "white",
                      cursor: "pointer",
                      padding: "6px 12px",
                      border: "none",
                      borderRadius: "5px",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                      transition: "background-color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "#dc2626")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "#ef4444")
                    }
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
