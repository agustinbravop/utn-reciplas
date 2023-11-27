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

import java.io.IOException;

@Controller
@RequestMapping("/productos/agregar")
public class CTRLAgregarProducto {
    private final Sistema sistema;
    private final CTRLSesion ctrlSesion;
    private final UIArchivos uiArchivos;

    @Autowired
    public CTRLAgregarProducto(Sistema sistema, CTRLSesion ctrlSesion, UIArchivos uiArchivos) {
        this.sistema = sistema;
        this.ctrlSesion = ctrlSesion;
        this.uiArchivos = uiArchivos;
    }

    @GetMapping("")
    public ModelAndView mostrarFormulario() {
        ctrlSesion.validarUsuario();
        return new ModelAndView("agregar-producto");
    }

    @PostMapping(path = "", consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<Producto> agregarProducto(@RequestPart MultipartFile imagen, @RequestPart Producto producto) {
        String urlImagen = uiArchivos.subirImagen(imagen);
        producto.setUrlImagen(urlImagen);

        producto = sistema.agregarProducto(producto);
        return ResponseEntity.ok(producto);
    }
}
