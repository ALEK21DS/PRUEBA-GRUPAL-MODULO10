
export interface Doctor {
    idDoctor: number;
    nombre: string;
    apellido: string;
}

export interface Paciente {
    idPaciente: number;
    nombre: string;
    apellido: string;
}

export interface Consulta {
    idConsulta?: number;
    fechaConsulta: string;
    motivoConsulta: string;
    diagnostico?: string;
    observaciones?: string;
    doctor: Doctor;
    paciente: Paciente;
}
