package com.grupo2.demo;

import com.grupo2.demo.model.Producto;
import com.grupo2.demo.model.Usuario;
import com.grupo2.demo.repository.ProductoRepository;
import com.grupo2.demo.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class Sistema {
    private final ProductoRepository productoRepository;
    private final UsuarioRepository usuarioRepository;

    @Autowired
    public Sistema(ProductoRepository productoRepository, UsuarioRepository usuarioRepository) {
        this.productoRepository = productoRepository;
        this.usuarioRepository = usuarioRepository;
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

    public Usuario guardarUsuario(Usuario usuario) {
        return this.usuarioRepository.save(usuario);
    }

    public Usuario buscarUsuario(String correo) {
        return this.usuarioRepository.findByCorreo(correo).orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
    }
}
