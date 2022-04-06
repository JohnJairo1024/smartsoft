package com.facturacion.smartsoft.service;

import com.facturacion.smartsoft.model.Producto;

import java.util.List;

public interface IProductoService {
    Producto findById(Long id);

    Producto save(Producto producto);

    List<Producto> findAll();
}
