package com.backend.etralux.freya.models.request;

import com.backend.etralux.freya.models.IUser;

//import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
//import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserRequest implements IUser{

    @NotBlank
    @Size(min = 3, max = 50)
    private String username;
    
    private String department; 

    private String password;

    private boolean admin;
}
