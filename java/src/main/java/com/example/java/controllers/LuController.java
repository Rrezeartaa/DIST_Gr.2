package com.example.java.controllers;
import com.example.java.exception.ResourceNotFoundException;
import com.example.java.models.Lendet;
import com.example.java.models.Literatura;
import com.example.java.models.Lu;
import com.example.java.models.User;
import com.example.java.repository.LendetRepository;
import com.example.java.repository.LuRepository;
import com.example.java.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import javax.validation.Valid;

public class LuController {

    @Autowired
    private LuRepository luRepository;

    @Autowired
    private UserRepository userRepository;
    
    // @PostMapping("/notat/{lenda_id}/{user_id}")
    // public Lu createNota(@PathVariable Long user_id, @Valid @RequestBody Lu lu) {
        
    //     return userRepository.findById(user_id)
    //             .map(user -> {
    //                 lu.setUser(user);
    //                 return luRepository.save(lu);
    //             }).orElseThrow(() -> new ResourceNotFoundException("User me id " + user_id + " nuk u gjet!"));
    // }

    // @GetMapping("/{user_id}/notat/{lenda_id}")
    // public List<Lendet> saveLenda(@RequestBody List<Lendet> lendet) {
		// List<Lendet> lenda = (List<Lendet>) luRepository.saveLenda(lendet);
		// return lenda;
	// }


}
