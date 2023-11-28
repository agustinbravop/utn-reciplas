package com.grupo2.demo.model;

import com.grupo2.demo.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class Catalogo {

    private final ProductoRepository productoRepository;

    @Autowired
    public Catalogo(ProductoRepository productoRepository) {
        this.productoRepository = productoRepository;
    }

    public Producto agregar(Producto producto) {
        return this.productoRepository.save(producto);
    }


    public Producto modificar(Producto producto) {
        Producto prodViejo = buscarPorCodigo(producto.getCodigo()).orElseThrow(() -> new RuntimeException("Producto no encontrado"));
        if (producto.getUrlImagen() == null) {
            producto.setUrlImagen(prodViejo.getUrlImagen());
        }
        return this.productoRepository.save(producto);
    }

    public List<Producto> listar() {
        return this.productoRepository.findAll();
    }

    public Optional<Producto> buscarPorCodigo(Long codigo) {
        return this.productoRepository.findById(codigo);
    }

    public void eliminarPorCodigo(Long codigo) {
        this.productoRepository.deleteById(codigo);
    }
}