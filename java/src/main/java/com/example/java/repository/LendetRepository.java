package com.example.java.repository;

import com.example.java.models.Lendet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LendetRepository extends JpaRepository<Lendet, Long> {
}