import type { Doctor } from "../inferfaces/doctor.interface";
import api from "./axios";

/* =====================
   LISTAR DOCTORES
===================== */
export const getDoctores = async (): Promise<Doctor[]> => {
  const { data } = await api.get<Doctor[]>("/doctores");
  return data;
};

/* =====================
   CREAR DOCTOR
===================== */
export const createDoctor = async (
  doctor: Doctor
): Promise<Doctor> => {
  const { data } = await api.post<Doctor>("/doctores", doctor);
  return data;
};

/* =====================
   ACTUALIZAR DOCTOR
===================== */
export const updateDoctor = async (
  id: number,
  doctor: Doctor
): Promise<Doctor> => {
  const { data } = await api.put<Doctor>(`/doctores/${id}`, doctor);
  return data;
};

/* =====================
   ELIMINAR DOCTOR
===================== */
export const deleteDoctor = async (id: number): Promise<void> => {
  await api.delete(`/doctores/${id}`);
};
