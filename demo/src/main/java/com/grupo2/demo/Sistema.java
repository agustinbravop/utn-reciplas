package com.grupo2.demo;

import com.grupo2.demo.model.Producto;
import com.grupo2.demo.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class Sistema {
    private final ProductoRepository productoRepository;

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

    public Producto modificarProducto(Producto producto) {
        Producto prodViejo = buscarProducto(producto.getId());
        if (producto.getUrlImagen() == null) {
            producto.setUrlImagen(prodViejo.getUrlImagen());
        }
        return this.productoRepository.save(producto);
    }

    public void eliminarProducto(Long idProducto) {
        this.productoRepository.deleteById(idProducto);
    }

    public Producto buscarProducto(Long idProducto) {
        return this.productoRepository.findById(idProducto).orElseThrow(() -> new RuntimeException("Producto no encontrado"));
    }
}
