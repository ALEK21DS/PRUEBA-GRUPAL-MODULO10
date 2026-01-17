package com.krakedev.Hospital.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.krakedev.Hospital.entity.Consulta;
import com.krakedev.Hospital.service.ConsultaService;

import java.util.List;

@RestController
@RequestMapping("/api/consultas")
@CrossOrigin(origins = "*")
public class ConsultaController {

    @Autowired
    private ConsultaService consultaService;

    @GetMapping
    public List<Consulta> obtenerTodas() {
        return consultaService.obtenerTodas();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Consulta> obtenerPorId(@PathVariable Long id) {
        return consultaService.obtenerPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/doctor/{idDoctor}")
    public List<Consulta> obtenerPorDoctor(@PathVariable Long idDoctor) {
        return consultaService.obtenerPorDoctor(idDoctor);
    }

    @GetMapping("/paciente/{idPaciente}")
    public List<Consulta> obtenerPorPaciente(@PathVariable Long idPaciente) {
        return consultaService.obtenerPorPaciente(idPaciente);
    }

    @PostMapping
    public ResponseEntity<Consulta> crear(@RequestBody Consulta consulta) {
        Consulta nuevaConsulta = consultaService.guardar(consulta);
        return ResponseEntity.ok(nuevaConsulta);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Consulta> actualizar(@PathVariable Long id, @RequestBody Consulta consulta) {
        try {
            Consulta actualizada = consultaService.actualizar(id, consulta);
            return ResponseEntity.ok(actualizada);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        consultaService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}

