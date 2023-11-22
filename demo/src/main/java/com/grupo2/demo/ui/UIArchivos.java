package com.grupo2.demo.ui;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.Date;

@Component
public class UIArchivos {
    public static String UPLOAD_DIRECTORY = System.getProperty("user.dir") + "\\uploads";

    @Autowired
    public UIArchivos() {
        try {
        Files.createDirectory(Path.of(UPLOAD_DIRECTORY));
        } catch (IOException ignored) {
            // Lanza un error si la carpeta `/uploads` ya existía.
        }
    }

    public String cargarImagen(MultipartFile file) {
        Path fileNameAndPath = Paths.get(UPLOAD_DIRECTORY, file.getOriginalFilename()).normalize();
        System.out.println(fileNameAndPath);
        try {
            Files.write(fileNameAndPath, file.getBytes());
        } catch (IOException ignored) {
            // Lanza un error si el archivo ya existía o la carpeta no existe.
        }
        return fileNameAndPath.toString();
    }
}
