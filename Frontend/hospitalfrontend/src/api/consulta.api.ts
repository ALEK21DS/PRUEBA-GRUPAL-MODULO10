import type { Consulta } from "../inferfaces/consulta.interface";
import api from "./axios";

/* =====================
   LISTAR CONSULTAS
===================== */
export const getConsultas = async (): Promise<Consulta[]> => {
  const { data } = await api.get<Consulta[]>("/consultas");
  return data;
};

/* =====================
   CREAR CONSULTA
===================== */
export const createConsulta = async (
  consulta: Consulta
): Promise<Consulta> => {
  const { data } = await api.post<Consulta>("/consultas", consulta);
  return data;
};