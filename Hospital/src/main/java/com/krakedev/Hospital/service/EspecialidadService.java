package com.krakedev.Hospital.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.krakedev.Hospital.entity.Especialidad;
import com.krakedev.Hospital.repository.EspecialidadRepository;

import java.util.List;
import java.util.Optional;

@Service
public class EspecialidadService {

    @Autowired
    private EspecialidadRepository especialidadRepository;

    public List<Especialidad> obtenerTodas() {
        return especialidadRepository.findAll();
    }

    public Optional<Especialidad> obtenerPorId(Long id) {
        return especialidadRepository.findById(id);
    }

    public Especialidad guardar(Especialidad especialidad) {
        return especialidadRepository.save(especialidad);
    }

    public Especialidad actualizar(Long id, Especialidad especialidadActualizada) {
        return especialidadRepository.findById(id)
                .map(especialidad -> {
                    especialidad.setNombreEspecialidad(especialidadActualizada.getNombreEspecialidad());
                    especialidad.setDescripcionEspecialidad(especialidadActualizada.getDescripcionEspecialidad());
                    return especialidadRepository.save(especialidad);
                })
                .orElseThrow(() -> new RuntimeException("Especialidad no encontrada con id: " + id));
    }

    public void eliminar(Long id) {
        especialidadRepository.deleteById(id);
    }
}
