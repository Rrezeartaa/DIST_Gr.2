package com.example.java.repository;

import com.example.java.models.Literatura;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface LiteratureRepository extends JpaRepository<Literatura, Long> {
    List<Literatura> findByUserId(Long user_id);

}