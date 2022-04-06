package com.facturacion.smartsoft.repository;

import com.facturacion.smartsoft.model.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IClienteRepo extends JpaRepository<Cliente, Long> {
}
