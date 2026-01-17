import type { Consulta } from "../types/tipos";

interface Props {
  consultas: Consulta[];
}

export const ListaConsultas = ({ consultas }: Props) => {
  return (
    <div
      id="contenedor-lista"
      style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}
    >

      {consultas.length === 0 ? (
        <p style={{ textAlign: "center", color: "#64748b" }}>
          No hay consultas registradas.
        </p>
      ) : (
        <table
          id="tabla-consultas"
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
              <th style={{ padding: "12px" }}>Fecha</th>
              <th style={{ padding: "12px" }}>Motivo</th>
              <th style={{ padding: "12px" }}>Doctor</th>
              <th style={{ padding: "12px" }}>Paciente</th>
            </tr>
          </thead>
          <tbody>
            {consultas.map((consulta) => (
              <tr
                key={consulta.idConsulta}
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
                <td style={{ padding: "10px" }}>{consulta.idConsulta}</td>
                <td style={{ padding: "10px" }}>
                  {new Date(consulta.fechaConsulta).toLocaleString("es-EC", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </td>
                <td style={{ padding: "10px" }}>
                  {consulta.motivoConsulta || "-"}
                </td>
                <td style={{ padding: "10px" }}>
                  {consulta.doctor
                    ? `${consulta.doctor.nombre} ${consulta.doctor.apellido}`
                    : "-"}
                </td>
                <td style={{ padding: "10px" }}>
                  {consulta.paciente
                    ? `${consulta.paciente.nombre} ${consulta.paciente.apellido}`
                    : "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
