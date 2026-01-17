import { useState, useEffect } from 'react';
import type { Consulta } from '../types/tipos';

export const useConsultas = () => {
    const [consultas, setConsultas] = useState<Consulta[]>([]);

    const obtenerConsultas = async () => {
        try {
            const respuesta = await fetch("http://localhost:8080/api/consultas");
            if (respuesta.ok) {
                const data = await respuesta.json();
                setConsultas(data);
            } else {
                console.error("Error al obtener consultas");
            }
        } catch (error) {
            console.error("Error de conexión:", error);
        }
    };

    const crearConsulta = async (nuevaConsulta: Consulta) => {
        try {
            const respuesta = await fetch("http://localhost:8080/api/consultas", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(nuevaConsulta)
            });

            if (respuesta.ok) {
                // Recargar la lista después de crear
                obtenerConsultas();
                return true;
            } else {
                console.error("Error al crear consulta");
                return false;
            }
        } catch (error) {
            console.error("Error de conexión:", error);
            return false;
        }
    };

    // Cargar consultas al inicio
    useEffect(() => {
        obtenerConsultas();
    }, []);

    return {
        consultas,
        crearConsulta,
        obtenerConsultas
    };
};
