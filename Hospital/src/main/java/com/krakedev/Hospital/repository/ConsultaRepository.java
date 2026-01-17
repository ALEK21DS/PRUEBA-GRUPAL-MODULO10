package com.krakedev.Hospital.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.krakedev.Hospital.entity.Consulta;
import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface ConsultaRepository extends JpaRepository<Consulta, Long> {
     List<Consulta> findByDoctorIdDoctor(Long idDoctor);
    
     List<Consulta> findByPacienteIdPaciente(Long idPaciente);
    
     List<Consulta> findByFechaConsultaBetween(LocalDateTime inicio, LocalDateTime fin);
}
