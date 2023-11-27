package com.grupo2.demo.controller;

import com.grupo2.demo.Sistema;
import com.grupo2.demo.model.Producto;
import com.grupo2.demo.ui.UIArchivos;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/productos/modificar")
public class CTRLModificarProducto {
    private final Sistema sistema;
    private final CTRLSesion ctrlSesion;
    private final UIArchivos uiArchivos;

    @Autowired
    public CTRLModificarProducto(Sistema sistema, CTRLSesion ctrlSesion, UIArchivos uiArchivos) {
        this.sistema = sistema;
        this.ctrlSesion = ctrlSesion;
        this.uiArchivos = uiArchivos;
    }

    @GetMapping("/{id}")
    public ModelAndView mostrarFormulario(@PathVariable Long id) {
        Producto producto = this.sistema.buscarProducto(id);
        ModelAndView modelAndView = new ModelAndView("modificar-producto");
        modelAndView.addObject("producto", producto);
        return modelAndView;
    }

    @PutMapping(path = "/{id}", consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<Producto> modificarProducto(@RequestPart MultipartFile imagen, @RequestPart Producto producto, @PathVariable Long id) {
        producto.setId(id);

        System.out.println("!!!!!" + imagen.getSize() + imagen.getName() + imagen.getResource());
        if (imagen.getSize() > 0) {
            String urlImagen = uiArchivos.subirImagen(imagen);
            producto.setUrlImagen(urlImagen);
        }

        producto = sistema.modificarProducto(producto);
        return ResponseEntity.ok(producto);
    }
}
