package com.backend.etralux.freya.repositories;

import org.springframework.data.repository.CrudRepository;

import com.backend.etralux.freya.models.entities.Departamento;
import java.util.Optional;


public interface DepartmentRepository extends CrudRepository<Departamento, Long>{

    Optional<Departamento> findByName(String name);
}
