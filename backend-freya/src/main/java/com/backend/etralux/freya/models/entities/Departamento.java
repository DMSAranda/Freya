package com.backend.etralux.freya.models.entities;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "departamentos")
public class Departamento {

   public Departamento(String name) {
      this.name = name;
   } 

   public Departamento() {
   }

   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY) 
   private Long id;

   @Column(unique = true)
   private String name;

   @OneToMany(fetch = FetchType.LAZY, mappedBy = "department", cascade = CascadeType.ALL)
   private List<Usuario> userList;

}
