package com.backend.etralux.freya.services;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.backend.etralux.freya.models.dto.UserDto;
import com.backend.etralux.freya.models.entities.Usuario;
import com.backend.etralux.freya.models.request.UserRequest;

public interface UserService {

    List<UserDto> findAll();

    Optional<UserDto> findByID(Long id);

    UserDto save(Usuario user);

    Optional<UserDto> update(UserRequest userRequest, Long id);

    void remove(Long id);

    Page<UserDto> findAll(Pageable pageable); 
}
