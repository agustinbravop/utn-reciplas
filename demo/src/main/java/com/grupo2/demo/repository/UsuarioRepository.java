package com.grupo2.demo.repository;

import com.grupo2.demo.model.Secretario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsuarioRepository extends JpaRepository<Secretario, Long> {
    public Optional<Secretario> findByCorreo(String correo);
}
