package com.krakedev.Hospital.service;
import com.krakedev.Hospital.entity.Paciente;
import com.krakedev.Hospital.repository.PacienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PacienteService {

    @Autowired
    private PacienteRepository pacienteRepository;

    public List<Paciente> obtenerTodos() {
        return pacienteRepository.findAll();
    }

    public Optional<Paciente> obtenerPorId(Long id) {
        return pacienteRepository.findById(id);
    }

    public Optional<Paciente> obtenerPorIdentificacion(String numeroIdentificacion) {
        return pacienteRepository.findByNumeroIdentificacion(numeroIdentificacion);
    }

    public Paciente guardar(Paciente paciente) {
        return pacienteRepository.save(paciente);
    }

    public Paciente actualizar(Long id, Paciente pacienteActualizado) {
        return pacienteRepository.findById(id)
                .map(paciente -> {
                    paciente.setNombre(pacienteActualizado.getNombre());
                    paciente.setApellido(pacienteActualizado.getApellido());
                    paciente.setFechaNacimiento(pacienteActualizado.getFechaNacimiento());
                    paciente.setGenero(pacienteActualizado.getGenero());
                    paciente.setTelefono(pacienteActualizado.getTelefono());
                    paciente.setEmail(pacienteActualizado.getEmail());
                    paciente.setDireccion(pacienteActualizado.getDireccion());
                    paciente.setNumeroIdentificacion(pacienteActualizado.getNumeroIdentificacion());
                    return pacienteRepository.save(paciente);
                })
                .orElseThrow(() -> new RuntimeException("Paciente no encontrado con id: " + id));
    }

    public void eliminar(Long id) {
        pacienteRepository.deleteById(id);
    }
}
