package com.example.java.models;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

//me bo edhe created, updated edhe id diqka si autoincrement

@Entity
@Table(name = "literature")
public class Literatura {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    @Column(name = "id")
    public Long id;

    @Column(name = "emri")
    public String emri;

    @Column(name = "description")
    public String description;

    @Column(name = "author")
    public String author;

    @Column(name = "file")
    public String file;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private User user;

    public void setUser(User user) {
        this.user = user;
    }

}

