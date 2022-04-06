package com.facturacion.smartsoft.service;

import com.facturacion.smartsoft.model.Factura;

import java.util.List;

public interface IFacturaService {
    Factura save(Factura factura);

    Factura findById(Long id);

    List<Factura> findAll();
}
