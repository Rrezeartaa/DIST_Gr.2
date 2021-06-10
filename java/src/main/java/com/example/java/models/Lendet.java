package com.example.java.models;
import javax.persistence.*;

@Entity
@Table(name = "lendet")
public class Lendet {
    @Id
    @GeneratedValue(generator = "lendet_generator")
    @SequenceGenerator(
            name = "lendet_generator",
            sequenceName = "lendet_sequence",
            initialValue = 1000
    )
    private Long id;

    @Column(columnDefinition = "emri")
    private String emri;

}





