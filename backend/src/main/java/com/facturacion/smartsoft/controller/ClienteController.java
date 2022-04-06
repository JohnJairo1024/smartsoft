package com.facturacion.smartsoft.controller;


import com.facturacion.smartsoft.model.Cliente;
import com.facturacion.smartsoft.service.impl.ClienteServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 * @author john ochoa
 */
@RestController
@RequestMapping("${config.baseURL}/clientes")
@CrossOrigin(origins = "http://localhost:4200")
public class ClienteController {

    @Autowired
    private ClienteServiceImpl clienteService;

    @GetMapping
    public ResponseEntity<List<Cliente>> obtenerClientes() throws Exception {
        try {
            List<Cliente> clientes = clienteService.findAll();

            if (clientes.size() > 0) {
                return ResponseEntity.ok(clientes);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Cliente>> obtenerCliente(@PathVariable Long id) throws Exception {
        try {
            Optional<Cliente> cliente = this.clienteService.findById(id);

            if (cliente == null) {
                return ResponseEntity.notFound().build();
            }

            return ResponseEntity.ok().body(cliente);
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }

    }
}
