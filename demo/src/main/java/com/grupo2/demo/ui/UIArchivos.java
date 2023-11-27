package com.grupo2.demo.ui;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Component
public class UIArchivos {
    public static String UPLOAD_DIRECTORY = System.getProperty("user.dir") + "\\uploads";

    public UIArchivos() {
        try {
            Files.createDirectory(Path.of(UPLOAD_DIRECTORY));
        } catch (IOException ignored) {
            // Lanza un error si la carpeta `/uploads` ya existía.
        }
    }

    public String subirImagen(MultipartFile file) {
        Path fileNameAndPath = Paths.get(UPLOAD_DIRECTORY, file.getOriginalFilename()).normalize();
        System.out.println(fileNameAndPath);
        try {
            Files.write(fileNameAndPath, file.getBytes());
        } catch (IOException ignored) {
            // Lanza un error si el archivo ya existía o la carpeta no existe.
        }
        return "http://localhost:8080/uploads/" + fileNameAndPath.getFileName().toString();
    }

    public Resource buscarImagen(String filename) {
        try {
            Path file = Paths.get(UPLOAD_DIRECTORY).resolve(filename).normalize();
            Resource resource = new UrlResource(file.toUri());
            if (resource.exists() || resource.isReadable()) {
                return resource;
            } else {
                throw new RuntimeException("Could not read file: " + filename);

            }
        } catch (Exception e) {
            throw new RuntimeException("Could not read file: " + filename, e);
        }
    }
}
