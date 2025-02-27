package com.backend.etralux.freya.repositories;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.backend.etralux.freya.models.entities.Usuario;
import java.util.Optional;


public interface UserRepository extends CrudRepository<Usuario, Long>{

    Optional<Usuario> findByUsername(String username);

    @Query("select u from Usuario u where u.username=?1")
    Optional<Usuario> getUserByUsername(String username);

    Page<Usuario> findAll(Pageable pageable); 

}
