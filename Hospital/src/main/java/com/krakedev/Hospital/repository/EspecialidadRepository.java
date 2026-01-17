package com.krakedev.Hospital.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.krakedev.Hospital.entity.Especialidad;

import java.util.Optional;

@Repository
public interface EspecialidadRepository extends JpaRepository<Especialidad, Long> {
    
    Optional<Especialidad> findByNombreEspecialidad(String nombreEspecialidad);
}
