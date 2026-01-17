package com.krakedev.Hospital.controller;
import com.krakedev.Hospital.entity.Receta;
import com.krakedev.Hospital.service.RecetaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/recetas")
@CrossOrigin(origins = "*")
public class RecetaController {

    @Autowired
    private RecetaService recetaService;

    @GetMapping
    public List<Receta> obtenerTodas() {
        return recetaService.obtenerTodas();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Receta> obtenerPorId(@PathVariable Long id) {
        return recetaService.obtenerPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/consulta/{idConsulta}")
    public List<Receta> obtenerPorConsulta(@PathVariable Long idConsulta) {
        return recetaService.obtenerPorConsulta(idConsulta);
    }

    @PostMapping
    public ResponseEntity<Receta> crear(@RequestBody Receta receta) {
        Receta nuevaReceta = recetaService.guardar(receta);
        return ResponseEntity.ok(nuevaReceta);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Receta> actualizar(@PathVariable Long id, @RequestBody Receta receta) {
        try {
            Receta actualizada = recetaService.actualizar(id, receta);
            return ResponseEntity.ok(actualizada);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        recetaService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
