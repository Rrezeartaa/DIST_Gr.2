package com.example.java.repository;

import com.example.java.models.Lendet;
import com.example.java.models.Lu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface LuRepository extends JpaRepository<Lu, Long> {
	// public List<Lendet> saveLenda(List<Lendet> lenda);

}