package com.backend.etralux.freya.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.backend.etralux.freya.models.entities.Rol;
import com.backend.etralux.freya.repositories.UserRepository;

@Service
public class JpaUserDetailsService implements UserDetailsService{

    @Autowired
    private UserRepository repository;

    @Override
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    /*    
        if(!username.equals("admin")){
            throw new UsernameNotFoundException(String.format("Username: %s not exist!", username));
        }    
    */ 
        Optional<com.backend.etralux.freya.models.entities.Usuario> u = repository.getUserByUsername(username);

        if(!u.isPresent()){
            throw new UsernameNotFoundException(String.format("Username: %s not exist!", username));
        }
        com.backend.etralux.freya.models.entities.Usuario user = u.orElseThrow();
        
        List<Rol> roleList = new ArrayList<>();

        roleList.add(user.getRole());

        List<GrantedAuthority> authorities =     roleList.stream()
                                                 .map(r -> new SimpleGrantedAuthority(r.getName()))
                                                 .collect(Collectors.toList());
        
        return new User(//username,
                        //"$2a$10$DOMDxjYyfZ/e7RcBfUpzqeaCs8pLgcizuiQWXPkU35nOhZlFcE9MS",
                        user.getUsername(), 
                        user.getPassword(),
                        true, 
                        true, 
                        true, 
                        true, 
                        authorities);
    }
    
}
