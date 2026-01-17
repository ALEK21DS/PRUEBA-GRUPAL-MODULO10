import { useState, useEffect } from 'react';
import type { Doctor } from '../types/tipos';

export const useDoctores = () => {
    const [doctores, setDoctores] = useState<Doctor[]>([]);

    const obtenerDoctores = async () => {
        try {
            const respuesta = await fetch("http://localhost:8080/api/doctores");
            if (respuesta.ok) {
                const data = await respuesta.json();
                setDoctores(data);
            } else {
                console.error("Error al obtener doctores");
            }
        } catch (error) {
            console.error("Error de conexión:", error);
        }
    };

    const obtenerDoctorPorId = async (id: number): Promise<Doctor | null> => {
        try {
            const respuesta = await fetch(`http://localhost:8080/api/doctores/${id}`);
            if (respuesta.ok) {
                const data = await respuesta.json();
                return data;
            } else {
                console.error("Error al obtener doctor");
                return null;
            }
        } catch (error) {
            console.error("Error de conexión:", error);
            return null;
        }
    };

    const crearDoctor = async (nuevoDoctor: Doctor) => {
        try {
            const respuesta = await fetch("http://localhost:8080/api/doctores", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(nuevoDoctor)
            });

            if (respuesta.ok) {
                obtenerDoctores();
                return true;
            } else {
                console.error("Error al crear doctor");
                return false;
            }
        } catch (error) {
            console.error("Error de conexión:", error);
            return false;
        }
    };

    const actualizarDoctor = async (id: number, doctorActualizado: Doctor) => {
        try {
            const respuesta = await fetch(`http://localhost:8080/api/doctores/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(doctorActualizado)
            });

            if (respuesta.ok) {
                obtenerDoctores();
                return true;
            } else {
                console.error("Error al actualizar doctor");
                return false;
            }
        } catch (error) {
            console.error("Error de conexión:", error);
            return false;
        }
    };

    const eliminarDoctor = async (id: number) => {
        try {
            const respuesta = await fetch(`http://localhost:8080/api/doctores/${id}`, {
                method: "DELETE"
            });

            if (respuesta.ok) {
                obtenerDoctores();
                return true;
            } else {
                console.error("Error al eliminar doctor");
                return false;
            }
        } catch (error) {
            console.error("Error de conexión:", error);
            return false;
        }
    };

    useEffect(() => {
        obtenerDoctores();
    }, []);

    return {
        doctores,
        crearDoctor,
        actualizarDoctor,
        eliminarDoctor,
        obtenerDoctores,
        obtenerDoctorPorId
    };
};
