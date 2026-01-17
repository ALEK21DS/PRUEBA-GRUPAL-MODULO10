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
                // Recargar la lista después de crear
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

    // Cargar doctores al inicio
    useEffect(() => {
        obtenerDoctores();
    }, []);

    return {
        doctores,
        crearDoctor,
        eliminarDoctor,
        obtenerDoctores
    };
};
