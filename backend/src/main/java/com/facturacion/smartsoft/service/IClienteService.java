package com.facturacion.smartsoft.service;


import com.facturacion.smartsoft.model.Cliente;

import java.util.List;
import java.util.Optional;

/**
 * @author john ochoa
 */
public interface IClienteService {
    List<Cliente> findAll();

    Optional<Cliente> findById(Long id);
}
