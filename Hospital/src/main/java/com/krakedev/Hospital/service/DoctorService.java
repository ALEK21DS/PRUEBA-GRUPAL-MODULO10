package com.krakedev.Hospital.service;

import com.krakedev.Hospital.entity.Doctor;
import com.krakedev.Hospital.repository.DoctorRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DoctorService {
     @Autowired
    private DoctorRepository doctorRepository;

    public List<Doctor> obtenerTodos() {
        return doctorRepository.findAll();
    }

    public Optional<Doctor> obtenerPorId(Long id) {
        return doctorRepository.findById(id);
    }

    public List<Doctor> obtenerPorEspecialidad(Long idEspecialidad) {
        return doctorRepository.findByEspecialidadIdEspecialidad(idEspecialidad);
    }

    public Doctor guardar(Doctor doctor) {
        return doctorRepository.save(doctor);
    }

    public Doctor actualizar(Long id, Doctor doctorActualizado) {
        return doctorRepository.findById(id)
                .map(doctor -> {
                    doctor.setNombre(doctorActualizado.getNombre());
                    doctor.setApellido(doctorActualizado.getApellido());
                    doctor.setTelefono(doctorActualizado.getTelefono());
                    doctor.setEmail(doctorActualizado.getEmail());
                    doctor.setNumeroLicencia(doctorActualizado.getNumeroLicencia());
                    doctor.setEspecialidad(doctorActualizado.getEspecialidad());
                    return doctorRepository.save(doctor);
                })
                .orElseThrow(() -> new RuntimeException("Doctor no encontrado con id: " + id));
    }

    public void eliminar(Long id) {
        doctorRepository.deleteById(id);
    }
}
