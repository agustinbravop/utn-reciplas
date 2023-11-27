package com.grupo2.demo.controller;

import com.grupo2.demo.Sistema;
import com.grupo2.demo.model.Producto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@RestController
@RequestMapping("/productos")
public class CTRLProductos {
    private final Sistema sistema;

    @Autowired
    public CTRLProductos(Sistema sistema) {
        this.sistema = sistema;
    }

    @GetMapping("")
    public ModelAndView listarProductos() {
        ModelAndView modelAndView = new ModelAndView("productos");
        List<Producto> productos = sistema.getProductos();
        modelAndView.addObject("productos", productos);
        return modelAndView;
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void eliminarProducto(@PathVariable Long id) {
        sistema.eliminarProducto(id);
    }
}
