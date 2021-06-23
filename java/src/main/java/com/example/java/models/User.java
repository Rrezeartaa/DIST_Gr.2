package com.example.java.models;
import javax.persistence.*;

//me bo edhe created, updated edhe id diqka si autoincrement

@Entity
@Table(name = "students")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    @Column(name = "id")
    public Long id;

    @Column(name = "ids")
    public String ids;

    @Column(name = "name")
    public String name;

    @Column(name = "prindi")
    public String prindi;

    @Column(name = "data")
    public String data;

    @Column(name = "vendi")
    public String vendi;

    @Column(name = "adresa")
    public String adresa;

    @Column(name = "numri")
    public String numri;

    @Column(name = "vgjinia")
    public String gjinia;

    @Column(name = "email")
    public String email;

    @Column(name = "password")
    public String password;

    @Column(name = "isprofessor")
    public int isprofessor;

}

