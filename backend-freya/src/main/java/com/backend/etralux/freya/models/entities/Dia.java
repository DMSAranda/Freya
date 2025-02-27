package com.backend.etralux.freya.models.entities;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name="dias")
public class Dia{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String fecha;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "semana_id")
    private Semana semana;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "dia", cascade = CascadeType.ALL)
    private List<Trabajo> trabajos;

    // Getters y Setters
}
