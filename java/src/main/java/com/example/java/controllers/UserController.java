package com.example.java.controllers;
import com.example.java.exception.ResourceNotFoundException;
import com.example.java.models.Literatura;
import com.example.java.models.User;
import com.example.java.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import javax.validation.Valid;
@RestController
public class UserController {
    
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/users")
    public List<User> getUser() {
        return userRepository.findByisprofessor(1);
    }
    
}
