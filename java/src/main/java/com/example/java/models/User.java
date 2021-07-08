package com.example.java.models;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.ObjectMapper;

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

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
      @JoinTable(name = "lu", 
      joinColumns = @JoinColumn(name = "s_id", referencedColumnName = "id"), 
      inverseJoinColumns = @JoinColumn(name = "l_id", 
      referencedColumnName = "id"))
      private Set<Lendet> lendet = new HashSet<>();

    // @ManyToMany(fetch = FetchType.EAGER, mappedBy = "users")
    // private Set<Lendet> lendet = new HashSet<>();
    
}

