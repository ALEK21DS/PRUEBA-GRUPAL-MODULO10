package com.krakedev.Hospital.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.krakedev.Hospital.entity.Historial;

import java.util.List;

@Repository
public interface HistorialRepository extends JpaRepository<Historial, Long> {
    
    List<Historial> findByPacienteIdPaciente(Long idPaciente);
    
    List<Historial> findByTipoEventoContainingIgnoreCase(String tipoEvento);
}
