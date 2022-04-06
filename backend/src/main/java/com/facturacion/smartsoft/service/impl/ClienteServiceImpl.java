package com.facturacion.smartsoft.service.impl;


import com.facturacion.smartsoft.model.Cliente;

import com.facturacion.smartsoft.repository.IClienteRepo;
import com.facturacion.smartsoft.service.IClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * @author John Ochoa
 */
@Service
public class ClienteServiceImpl implements IClienteService {

    @Autowired
    private IClienteRepo iClienteRepo;

    @Override
    @Transactional(readOnly = true)
    public List<Cliente> findAll() {
        return this.iClienteRepo.findAll();
    }

    @Override
    public Optional<Cliente> findById(Long id) {
        return this.iClienteRepo.findById(id);
    }

}
