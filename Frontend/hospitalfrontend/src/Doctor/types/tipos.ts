
export interface Especialidad {
    idEspecialidad: number;
    nombreEspecialidad: string;
    descripcionEspecialidad?: string;
}

export interface Doctor {
    idDoctor?: number;
    nombre: string;
    apellido: string;
    telefono?: string;
    email?: string;
    numeroLicencia?: string;
    especialidad: Especialidad;
}
