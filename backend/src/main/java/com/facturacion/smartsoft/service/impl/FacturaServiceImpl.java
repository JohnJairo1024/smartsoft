package com.facturacion.smartsoft.service.impl;

import com.facturacion.smartsoft.model.Factura;
import com.facturacion.smartsoft.repository.IFacturaRepo;
import com.facturacion.smartsoft.service.IFacturaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FacturaServiceImpl implements IFacturaService {

    @Autowired
    private IFacturaRepo iFacturaRepo;

    @Override
    public Factura save(Factura factura) {
        return this.iFacturaRepo.save(factura);
    }

    @Override
    public List<Factura> findAll() {
        return this.iFacturaRepo.findAll();
    }

    @Override
    public Factura findById(Long id) {
        return this.iFacturaRepo.findById(id).get();
    }
}
