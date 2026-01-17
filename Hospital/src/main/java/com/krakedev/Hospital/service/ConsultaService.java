package com.krakedev.Hospital.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.krakedev.Hospital.entity.Consulta;
import com.krakedev.Hospital.repository.ConsultaRepository;

@Service
public class ConsultaService {
    @Autowired
    private ConsultaRepository consultaRepository;

    public List<Consulta> obtenerTodas() {
        return consultaRepository.findAll();
    }

    public Optional<Consulta> obtenerPorId(Long id) {
        return consultaRepository.findById(id);
    }

    public List<Consulta> obtenerPorDoctor(Long idDoctor) {
        return consultaRepository.findByDoctorIdDoctor(idDoctor);
    }

    public List<Consulta> obtenerPorPaciente(Long idPaciente) {
        return consultaRepository.findByPacienteIdPaciente(idPaciente);
    }

    public Consulta guardar(Consulta consulta) {
        return consultaRepository.save(consulta);
    }

    public Consulta actualizar(Long id, Consulta consultaActualizada) {
        return consultaRepository.findById(id)
                .map(consulta -> {
                    consulta.setFechaConsulta(consultaActualizada.getFechaConsulta());
                    consulta.setMotivoConsulta(consultaActualizada.getMotivoConsulta());
                    consulta.setDiagnostico(consultaActualizada.getDiagnostico());
                    consulta.setObservaciones(consultaActualizada.getObservaciones());
                    consulta.setCosto(consultaActualizada.getCosto());
                    consulta.setDoctor(consultaActualizada.getDoctor());
                    consulta.setPaciente(consultaActualizada.getPaciente());
                    return consultaRepository.save(consulta);
                })
                .orElseThrow(() -> new RuntimeException("Consulta no encontrada con id: " + id));
    }

    public void eliminar(Long id) {
        consultaRepository.deleteById(id);
    } 
}
