package com.krakedev.Hospital.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "consultas")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Consulta {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_consulta")
    private Long idConsulta;

    @Column(name = "fecha_consulta", nullable = false)
    private LocalDateTime fechaConsulta;

    @Column(name = "motivo_consulta", length = 255)
    private String motivoConsulta;

    @Column(name = "diagnostico", columnDefinition = "TEXT")
    private String diagnostico;

    @Column(name = "observaciones", columnDefinition = "TEXT")
    private String observaciones;

    @Column(name = "costo")
    private Double costo;

    // RELACIÓN: Muchas consultas pertenecen a UN doctor
    @ManyToOne
    @JoinColumn(name = "id_doctor", referencedColumnName = "id_doctor")
    private Doctor doctor;

    // RELACIÓN: Muchas consultas pertenecen a UN paciente
    @ManyToOne
    @JoinColumn(name = "id_paciente", referencedColumnName = "id_paciente")
    private Paciente paciente;
}
