package com.grupo2.demo.controller;

import com.grupo2.demo.Sistema;
import com.grupo2.demo.model.Login;
import com.grupo2.demo.model.Secretario;
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
        Secretario secretario = new Secretario(1L, "Usuario", "Ejemplar", "usuario@example.com", "Administración", "3624000001", "usuario");
        Secretario susana = new Secretario(2L, "Susana", "Álvarez", "susana@example.com", "Administración", "3624000000", "susana");
        sistema.guardarSecretario(secretario);
        sistema.guardarSecretario(susana);
    }

    @PostMapping(path = "login", consumes = {MediaType.APPLICATION_JSON_VALUE})
    public ModelAndView iniciarSesion(@RequestBody Login login, HttpSession session) {
        Secretario secretario = sistema.buscarSecretario(login.getCorreo());
        if (!secretario.getClave().equals(login.getClave())) {
            throw new RuntimeException("Clave incorrecta");
        }
        session.setAttribute("usuario", secretario);
        return new ModelAndView("productos");
    }

    @GetMapping("")
    public ModelAndView mostrarFormularioLogin() {
        return new ModelAndView("login");
    }
}
