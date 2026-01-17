package com.krakedev.Hospital.service;
import com.krakedev.Hospital.entity.Historial;
import com.krakedev.Hospital.repository.HistorialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HistorialService {

    @Autowired
    private HistorialRepository historialRepository;

    public List<Historial> obtenerTodos() {
        return historialRepository.findAll();
    }

    public Optional<Historial> obtenerPorId(Long id) {
        return historialRepository.findById(id);
    }

    public List<Historial> obtenerPorPaciente(Long idPaciente) {
        return historialRepository.findByPacienteIdPaciente(idPaciente);
    }

    public Historial guardar(Historial historial) {
        return historialRepository.save(historial);
    }

    public Historial actualizar(Long id, Historial historialActualizado) {
        return historialRepository.findById(id)
                .map(historial -> {
                    historial.setFechaRegistro(historialActualizado.getFechaRegistro());
                    historial.setTipoEvento(historialActualizado.getTipoEvento());
                    historial.setDescripcion(historialActualizado.getDescripcion());
                    historial.setTratamiento(historialActualizado.getTratamiento());
                    historial.setResultado(historialActualizado.getResultado());
                    historial.setPaciente(historialActualizado.getPaciente());
                    return historialRepository.save(historial);
                })
                .orElseThrow(() -> new RuntimeException("Historial no encontrado con id: " + id));
    }

    public void eliminar(Long id) {
        historialRepository.deleteById(id);
    }
}
