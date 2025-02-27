package com.backend.etralux.freya.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.backend.etralux.freya.models.entities.Parte;
import com.backend.etralux.freya.repositories.ReportRepository;

@Service
public class ReportServiceImpl implements ReportService {

    @Autowired
    private ReportRepository repository;

    @Override
    @Transactional(readOnly = true)
    public List<Parte> findAll() {     
        return (List<Parte>) repository.findAll();
    }
    
}
