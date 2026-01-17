import type { Especialidad } from "./especialidad.interface";

export interface Doctor {
  idDoctor: number;
  name: string;
  apellido: string;
  telefono: string;
  email: string;
  numeroLicencia: string;
  Especialidad: Especialidad;
}