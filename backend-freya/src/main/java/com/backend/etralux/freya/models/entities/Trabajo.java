package com.backend.etralux.freya.models.entities;

import java.util.List;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name="trabajos")
public class Trabajo{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String descripcion;

    @ManyToOne
    @JoinColumn(name = "dia_id")
    private Dia dia;

    @ManyToMany
    @JoinTable(
        name = "trabajo_obra", 
        joinColumns = @JoinColumn(name = "trabajo_id"), 
        inverseJoinColumns = @JoinColumn(name = "obra_id")
    )
    private List<Obra> obras;

    @ManyToMany
    @JoinTable(
        name = "trabajo_vehiculo", 
        joinColumns = @JoinColumn(name = "trabajo_id"), 
        inverseJoinColumns = @JoinColumn(name = "vehiculo_id")
    )
    private List<Vehiculo> vehiculos;

    // Getters y Setters
}
