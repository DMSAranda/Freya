package com.backend.etralux.freya.models.dto.mapper;

import com.backend.etralux.freya.models.dto.UserDto;
import com.backend.etralux.freya.models.entities.Usuario;

public class DtoMapperUser {
    
    private Usuario user;

    private DtoMapperUser(){    
    }

    public static DtoMapperUser builder(){
        return new DtoMapperUser(); 
    }

    public DtoMapperUser setUser(Usuario user) {
        this.user = user;
        return this;
    }

    public UserDto build(){     
        if(user == null){
            throw new RuntimeException("We need entity user");
        }
        String dep = user.getDepartment().getName();
        boolean isAdmin = user.getRole().getName().equals("ROLE_ADMIN");
        
        UserDto userDto = new UserDto(this.user.getId(), this.user.getUsername(), this.user.getPassword(), dep, isAdmin);
        return userDto;
    }
    
}
