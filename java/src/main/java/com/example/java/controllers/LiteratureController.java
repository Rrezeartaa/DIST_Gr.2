package com.example.java.controllers;
import com.example.java.exception.ResourceNotFoundException;
import com.example.java.models.Literatura;
import com.example.java.models.User;
import com.example.java.repository.LiteratureRepository;
import com.example.java.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import javax.validation.Valid;

@RestController
public class LiteratureController {

    @Autowired
    private LiteratureRepository literatureRepository;

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/literature/{user_id}")
    public List<Literatura> getLiteratura(@PathVariable Long user_id) {
        return literatureRepository.findByUserId(user_id);
    }

    @PostMapping("/literature/{user_id}")
    public Literatura createLiterature(@PathVariable Long user_id, @Valid @RequestBody Literatura literatura) {
        
        return userRepository.findById(user_id)
                .map(user -> {
                    literatura.setUser(user);
                    return literatureRepository.save(literatura);
                }).orElseThrow(() -> new ResourceNotFoundException("User me id " + user_id + " nuk u gjet!"));
    }

}