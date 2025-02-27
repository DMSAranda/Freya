package com.backend.etralux.freya.models.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDto{

    private Long id;

    private String username;

    private String password;

    private String department;

    private boolean admin;

    public UserDto() {
    }

    public UserDto(Long id, String username, String password, String department, boolean admin) {
        this.id = id;
        this.username = username;
        this.department = department;
        this.admin = admin;
        this.password = password;
    }

}