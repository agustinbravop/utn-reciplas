package com.grupo2.demo;

import com.grupo2.demo.model.Catalogo;
import com.grupo2.demo.model.Producto;
import com.grupo2.demo.model.Secretario;
import com.grupo2.demo.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class Sistema {
    private final UsuarioRepository usuarioRepository;
    private final Catalogo catalogo;

    @Autowired
    public Sistema(UsuarioRepository usuarioRepository, Catalogo catalogo) {
        this.usuarioRepository = usuarioRepository;
        this.catalogo = catalogo;
    }

    public List<Producto> getProductos() {
        return this.catalogo.listar();
    }

    public Producto agregarProducto(Producto producto) {
        return catalogo.agregar(producto);
    }

    public Producto modificarProducto(Producto producto) {
        return catalogo.modificar(producto);
    }

    public void eliminarProducto(Long idProducto) {
        this.catalogo.eliminarPorCodigo(idProducto);
    }

    public Producto buscarProducto(Long idProducto) {
        return this.catalogo.buscarPorCodigo(idProducto).orElseThrow(() -> new RuntimeException("Producto no encontrado"));
    }

    public Secretario guardarSecretario(Secretario secretario) {
        return this.usuarioRepository.save(secretario);
    }

    public Secretario buscarSecretario(String correo) {
        return this.usuarioRepository.findByCorreo(correo).orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
    }
}
