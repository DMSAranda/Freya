package com.backend.etralux.freya.services;
import java.util.List;
import com.backend.etralux.freya.models.entities.Parte;

public interface ReportService {
    
    List<Parte> findAll();
}
