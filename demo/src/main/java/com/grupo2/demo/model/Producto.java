package com.grupo2.demo.model;

import jakarta.persistence.*;

@Entity
@Table
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long codigo;
    private String nombre;
    private String descripcion;
    private String linea;
    private String deposito;
    private Long unidades;
    private Float precio;
    private String urlImagen;

    public Producto() {
    }

    public Producto(Long codigo, String nombre, String descripcion, String linea, String deposito, Long unidades, Float precio, String urlImagen) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.linea = linea;
        this.deposito = deposito;
        this.unidades = unidades;
        this.precio = precio;
        this.urlImagen = urlImagen;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Long getCodigo() {
        return codigo;
    }

    public void setCodigo(Long codigo) {
        this.codigo = codigo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getLinea() {
        return linea;
    }

    public void setLinea(String linea) {
        this.linea = linea;
    }

    public String getDeposito() {
        return deposito;
    }

    public void setDeposito(String deposito) {
        this.deposito = deposito;
    }

    public Long getUnidades() {
        return unidades;
    }

    public void setUnidades(Long unidades) {
        this.unidades = unidades;
    }

    public Float getPrecio() {
        return precio;
    }

    public void setPrecio(Float precio) {
        this.precio = precio;
    }

    public String getUrlImagen() {
        return urlImagen;
    }

    public void setUrlImagen(String urlImagen) {
        this.urlImagen = urlImagen;
    }
}
