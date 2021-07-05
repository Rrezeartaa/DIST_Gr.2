package com.example.java.controllers;
import com.example.java.exception.ResourceNotFoundException;
import com.example.java.models.Lendet;
import com.example.java.repository.LendetRepository;
import com.example.java.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import javax.validation.Valid;

@RestController
public class LendetController {

    @Autowired
    private LendetRepository lendetRepository;
    
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/lendet")
    public List<Lendet> getLendet() {
        return lendetRepository.findAll();
    }

    @PostMapping("/lendet")
    public Lendet createLendet(@Valid @RequestBody Lendet lenda) {
        return lendetRepository.save(lenda);
    }


    @PostMapping("/lendet/{user_id}")
    public Lendet createLenda(@PathVariable Long user_id, @Valid @RequestBody Lendet lenda) {
        
        return userRepository.findById(user_id)
                .map(user -> {
                    lenda.setUser(user);
                    return lendetRepository.save(lenda);
                }).orElseThrow(() -> new ResourceNotFoundException("User me id " + user_id + " nuk u gjet!"));
    }

    @PutMapping("/lendet/{lendaId}")
    public Lendet updateLendet(@PathVariable Long lendaId,
                                   @Valid @RequestBody Lendet lendetRequest) {
        return lendetRepository.findById(lendaId)
                .map(lenda -> {
                    return lendetRepository.save(lenda);
                }).orElseThrow(() -> new ResourceNotFoundException("Lenda me ID " + lendaId + " nuk u gjet!"));
    }

    @DeleteMapping("/lendet/{lendaId}")
    public ResponseEntity<?> deleteLendet(@PathVariable Long lendaId) {
        return lendetRepository.findById(lendaId)
                .map(lenda -> {
                    lendetRepository.delete(lenda);
                    return ResponseEntity.ok().build();
                }).orElseThrow(() -> new ResourceNotFoundException("Lenda me ID " + lendaId + " nuk u gjet!"));
    }
}