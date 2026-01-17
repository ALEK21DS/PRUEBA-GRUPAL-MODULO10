package com.krakedev.Hospital.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "doctores")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Doctor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_doctor")
    private Long idDoctor;

    @Column(name = "nombre", nullable = false, length = 100)
    private String nombre;

    @Column(name = "apellido", nullable = false, length = 100)
    private String apellido;

    @Column(name = "telefono", length = 20)
    private String telefono;

    @Column(name = "email", length = 100)
    private String email;

    @Column(name = "numero_licencia", unique = true, length = 50)
    private String numeroLicencia;

    // RELACIÓN: Muchos doctores pertenecen a UNA especialidad
    @ManyToOne
    @JoinColumn(name = "id_especialidad", referencedColumnName = "id_especialidad")
    private Especialidad especialidad;
}
