package com.facturacion.smartsoft.repository;

import com.facturacion.smartsoft.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IProductoRepo extends JpaRepository<Producto, Long> {
}
