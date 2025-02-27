package com.backend.etralux.freya.services;

//import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.backend.etralux.freya.models.IUser;
import com.backend.etralux.freya.models.dto.UserDto;
import com.backend.etralux.freya.models.dto.mapper.DtoMapperUser;
import com.backend.etralux.freya.models.entities.Departamento;
import com.backend.etralux.freya.models.entities.Rol;
import com.backend.etralux.freya.models.entities.Usuario;
import com.backend.etralux.freya.models.request.UserRequest;
import com.backend.etralux.freya.repositories.DepartmentRepository;
import com.backend.etralux.freya.repositories.RoleRepository;
import com.backend.etralux.freya.repositories.UserRepository;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository repository;

    @Autowired
    private RoleRepository repository2;

    @Autowired
    private DepartmentRepository repository3;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    @Transactional(readOnly = true)
    public List<UserDto> findAll() {   

        List<Usuario> userList = (List<Usuario>) repository.findAll();

        List<UserDto> userDtoList = userList.stream()
                                            .map(user -> DtoMapperUser.builder().setUser(user).build())
                                            .collect(Collectors.toList());

        return userDtoList; 
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<UserDto> findByID(Long id) {
        Optional<Usuario> user = repository.findById(id);
        if(user.isPresent()){
            return Optional.of(DtoMapperUser.builder().setUser(user.orElseThrow()).build());
        } 
        return Optional.empty();
    }

    @Override
    @Transactional
    public void remove(Long id) {
        repository.deleteById(id);
    }

    @Override
    @Transactional
    public UserDto save(Usuario user) {
        String passwordBCrypt = passwordEncoder.encode(user.getPassword());
        user.setPassword(passwordBCrypt);
        user.setDepartment(getDepartments(user));
        user.setRole(getRoles(user));   

        return DtoMapperUser.builder().setUser(repository.save(user)).build();
    }

    @Override
    @Transactional
    public Optional<UserDto> update(UserRequest userRequest, Long id) {
        Optional<Usuario> userOptional = repository.findById(id);
        Usuario user = null;
        if (userOptional.isPresent()){

            Usuario userDB = userOptional.orElseThrow();
            userDB.setRole(getRoles(userRequest));
            userDB.setUsername(userRequest.getUsername());
            userDB.setDepartment(getDepartments(userRequest));
            userDB.setPassword(userRequest.getPassword());
            user = repository.save(userDB);
        }
        return Optional.ofNullable(DtoMapperUser.builder().setUser(user).build());            
    }

    private Rol getRoles(IUser user){
        
        Optional<Rol> op = repository2.findByName("ROLE_USER");
        Rol role = new Rol();
        if (op.isPresent()){
           role = op.orElseThrow(); 
        }
        if(user.isAdmin()){
            Optional<Rol> op2 = repository2.findByName("ROLE_ADMIN");
            if(op2.isPresent()){
                role = op2.orElseThrow();
            }
        }
        return role;
    }


    private Departamento getDepartments(IUser user){
        
        Optional<Departamento> ct = repository3.findByName("CENTRO_CONTROL");
        Optional<Departamento> of = repository3.findByName("OFICINAS");
        Optional<Departamento> pr = repository3.findByName("PRODUCCION");
        Departamento department = new Departamento();
        
        if (ct.isPresent()){
            department = ct.orElseThrow(); 
        }
        if (of.isPresent()){
            department = of.orElseThrow(); 
         }
         if (pr.isPresent()){
            department = pr.orElseThrow(); 
         }
       
        return department;
    }


    @Override
    @Transactional(readOnly = true)
    public Page<UserDto> findAll(Pageable pageable){
        
        Page<Usuario> usersPage = repository.findAll(pageable);

        return usersPage.map(user -> DtoMapperUser.builder().setUser(user).build());
    }; 
 
}
