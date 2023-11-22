package com.grupo2.demo;

import com.grupo2.demo.model.Producto;
import com.grupo2.demo.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class Sistema {
    private ProductoRepository productoRepository;

    @Autowired
    public Sistema(ProductoRepository productoRepository) {
        this.productoRepository = productoRepository;
    }

    public List<Producto> getProductos() {
        return this.productoRepository.findAll();
    }

    public Producto agregarProducto(Producto producto) {
        return this.productoRepository.save(producto);
    }
}
