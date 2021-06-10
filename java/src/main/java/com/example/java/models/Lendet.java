package com.example.java.models;
import javax.persistence.*;

//me bo edhe created, updated edhe id diqka si autoincrement

@Entity
@Table(name = "lendet")
public class Lendet {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    @Column(name = "id")
    public Long id;

    @Column(name = "emri")
    public String emri;

}





