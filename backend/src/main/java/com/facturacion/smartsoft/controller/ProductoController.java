package com.facturacion.smartsoft.controller;


import com.facturacion.smartsoft.model.Producto;
import com.facturacion.smartsoft.service.IProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author javie
 */
@RestController
@RequestMapping("${config.baseURL}/productos")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductoController {

    @Autowired
    private IProductoService productoService;

    @GetMapping
    public ResponseEntity<List<Producto>> obtenerProductos() throws Exception {
        try {
            List<Producto> productos = this.productoService.findAll();

            if (productos.size() > 0) {
                return ResponseEntity.ok(productos);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Producto> obtenerFactura(@PathVariable Long id) throws Exception {
        try {
            Producto producto = this.productoService.findById(id);

            if (producto == null) {
                return ResponseEntity.notFound().build();
            }

            return ResponseEntity.ok().body(producto);
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }

    }
}
