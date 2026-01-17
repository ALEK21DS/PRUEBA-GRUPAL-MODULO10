package com.krakedev.Hospital.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.krakedev.Hospital.entity.Doctor;
import com.krakedev.Hospital.service.DoctorService;

import java.util.List;

@RestController
@RequestMapping("/api/doctores")
@CrossOrigin(origins = "*")
public class DoctorController {

    @Autowired
    private DoctorService doctorService;

    @GetMapping
    public List<Doctor> obtenerTodos() {
        return doctorService.obtenerTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Doctor> obtenerPorId(@PathVariable Long id) {
        return doctorService.obtenerPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/especialidad/{idEspecialidad}")
    public List<Doctor> obtenerPorEspecialidad(@PathVariable Long idEspecialidad) {
        return doctorService.obtenerPorEspecialidad(idEspecialidad);
    }

    @PostMapping
    public ResponseEntity<Doctor> crear(@RequestBody Doctor doctor) {
        Doctor nuevoDoctor = doctorService.guardar(doctor);
        return ResponseEntity.ok(nuevoDoctor);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Doctor> actualizar(@PathVariable Long id, @RequestBody Doctor doctor) {
        try {
            Doctor actualizado = doctorService.actualizar(id, doctor);
            return ResponseEntity.ok(actualizado);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        doctorService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}