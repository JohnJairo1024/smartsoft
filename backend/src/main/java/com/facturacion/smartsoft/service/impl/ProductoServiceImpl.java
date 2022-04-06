package com.facturacion.smartsoft.service.impl;


import com.facturacion.smartsoft.model.Producto;
import com.facturacion.smartsoft.repository.IProductoRepo;
import com.facturacion.smartsoft.service.IProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ProductoServiceImpl implements IProductoService {

    @Autowired
    private IProductoRepo iProductoRepo;

    @Override
    @Transactional(readOnly = true)
    public Producto findById(Long id) {
        return this.iProductoRepo.findById(id).get();
    }

    @Override
    @Transactional
    public Producto save(Producto producto) {
        return this.iProductoRepo.save(producto);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Producto> findAll() {
        return this.iProductoRepo.findAll();
    }

}
