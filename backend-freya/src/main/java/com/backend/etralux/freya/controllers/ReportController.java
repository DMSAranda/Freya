package com.backend.etralux.freya.controllers;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.etralux.freya.models.entities.Parte;
import com.backend.etralux.freya.services.ReportService;


@RestController
@CrossOrigin(origins = "http://localhost:5173")
//@RequestMapping("/api")   ---   ruta base primaria
public class ReportController {

    @Autowired
    private ReportService service;

    @GetMapping("/partes")   //ruta secundaria del metodo
    public List<Parte> list() {
        return service.findAll();
    }
}
