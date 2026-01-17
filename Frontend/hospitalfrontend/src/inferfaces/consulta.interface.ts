import type { Doctor } from "./doctor.interface";
import type { Paciente } from "./paciente.interface";

export interface Consulta {
    idConsulta: number;
    fechaConsulta: string;
    motivoConsulta: string;
    observaciones: string;
    tratamiento: string;
    costo: number;
    Doctor: Doctor;
    Paciente: Paciente;
}