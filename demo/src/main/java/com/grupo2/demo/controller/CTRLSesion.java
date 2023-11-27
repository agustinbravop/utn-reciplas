package com.grupo2.demo.controller;

import com.grupo2.demo.Sistema;
import com.grupo2.demo.model.Login;
import com.grupo2.demo.model.Usuario;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping("")
public class CTRLSesion {

    private final Sistema sistema;

    @Autowired
    public CTRLSesion(Sistema sistema) {
        this.sistema = sistema;

        // Cuentas preexistentes para la demo. La contrseña no se encripta.
        Usuario usuario = new Usuario(1L, "Usuario", "Ejemplar", "usuario@example.com", "Administración", "3624000001", "usuario");
        Usuario susana = new Usuario(2L, "Susana", "Álvarez", "susana@example.com", "Administración", "3624000000", "susana");
        sistema.guardarUsuario(usuario);
        sistema.guardarUsuario(susana);
    }

    @PostMapping(path = "login", consumes = {MediaType.APPLICATION_JSON_VALUE})
    public ModelAndView iniciarSesion(@RequestBody Login login, HttpSession session) {
        Usuario usuario = sistema.buscarUsuario(login.getCorreo());
        if (!usuario.getClave().equals(login.getClave())) {
            throw new RuntimeException("Clave incorrecta");
        }
        session.setAttribute("usuario", usuario);
        return new ModelAndView("productos");
    }

    @GetMapping("")
    public ModelAndView mostrarFormularioLogin() {
        return new ModelAndView("login");
    }
}
