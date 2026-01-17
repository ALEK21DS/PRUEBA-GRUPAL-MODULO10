package com.krakedev.Hospital.service;
import com.krakedev.Hospital.entity.Receta;
import com.krakedev.Hospital.repository.RecetaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RecetaService {

    @Autowired
    private RecetaRepository recetaRepository;

    public List<Receta> obtenerTodas() {
        return recetaRepository.findAll();
    }

    public Optional<Receta> obtenerPorId(Long id) {
        return recetaRepository.findById(id);
    }

    public List<Receta> obtenerPorConsulta(Long idConsulta) {
        return recetaRepository.findByConsultaIdConsulta(idConsulta);
    }

    public Receta guardar(Receta receta) {
        return recetaRepository.save(receta);
    }

    public Receta actualizar(Long id, Receta recetaActualizada) {
        return recetaRepository.findById(id)
                .map(receta -> {
                    receta.setMedicamento(recetaActualizada.getMedicamento());
                    receta.setDosis(recetaActualizada.getDosis());
                    receta.setFrecuencia(recetaActualizada.getFrecuencia());
                    receta.setDuracion(recetaActualizada.getDuracion());
                    receta.setIndicaciones(recetaActualizada.getIndicaciones());
                    receta.setFechaEmision(recetaActualizada.getFechaEmision());
                    receta.setConsulta(recetaActualizada.getConsulta());
                    return recetaRepository.save(receta);
                })
                .orElseThrow(() -> new RuntimeException("Receta no encontrada con id: " + id));
    }

    public void eliminar(Long id) {
        recetaRepository.deleteById(id);
    }
}
