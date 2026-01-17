package com.krakedev.Hospital.controller;   

import com.krakedev.Hospital.entity.Historial;
import com.krakedev.Hospital.service.HistorialService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/historiales")
@CrossOrigin(origins = "*")
public class HistorialController {

    @Autowired
    private HistorialService historialService;

    @GetMapping
    public List<Historial> obtenerTodos() {
        return historialService.obtenerTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Historial> obtenerPorId(@PathVariable Long id) {
        return historialService.obtenerPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/paciente/{idPaciente}")
    public List<Historial> obtenerPorPaciente(@PathVariable Long idPaciente) {
        return historialService.obtenerPorPaciente(idPaciente);
    }

    @PostMapping
    public ResponseEntity<Historial> crear(@RequestBody Historial historial) {
        Historial nuevoHistorial = historialService.guardar(historial);
        return ResponseEntity.ok(nuevoHistorial);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Historial> actualizar(@PathVariable Long id, @RequestBody Historial historial) {
        try {
            Historial actualizado = historialService.actualizar(id, historial);
            return ResponseEntity.ok(actualizado);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        historialService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
