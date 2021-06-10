package com.example.java.controllers;
import com.example.java.exception.ResourceNotFoundException;
import com.example.java.models.Lendet;
import com.example.java.repository.LendetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;

@RestController
public class LendetController {

    @Autowired
    private LendetRepository lendetRepository;

    @GetMapping("/lendet")
    public Page<Lendet> getLendet(Pageable pageable) {
        return lendetRepository.findAll(pageable);
    }

    @PostMapping("/lendet")
    public Lendet createLendet(@Valid @RequestBody Lendet lenda) {
        return lendetRepository.save(lenda);
    }

    @PutMapping("/lendet/{lendaId}")
    public Lendet updateLendet(@PathVariable Long lendaId,
                                   @Valid @RequestBody Lendet lendetRequest) {
        return lendetRepository.findById(lendaId)
                .map(lenda -> {
                    // lenda.setEmri('k');
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