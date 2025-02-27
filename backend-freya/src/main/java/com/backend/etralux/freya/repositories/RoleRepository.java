package com.backend.etralux.freya.repositories;

import org.springframework.data.repository.CrudRepository;

import com.backend.etralux.freya.models.entities.Rol;
import java.util.Optional;


public interface RoleRepository extends CrudRepository<Rol, Long>{

    Optional<Rol> findByName(String name);
}
