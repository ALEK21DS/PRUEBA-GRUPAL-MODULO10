package com.krakedev.Hospital.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.krakedev.Hospital.entity.Paciente;

import java.util.List;
import java.util.Optional;

@Repository
public interface PacienteRepository extends JpaRepository<Paciente, Long> {
    
    Optional<Paciente> findByNumeroIdentificacion(String numeroIdentificacion);
    
    List<Paciente> findByApellidoContainingIgnoreCase(String apellido);
}
