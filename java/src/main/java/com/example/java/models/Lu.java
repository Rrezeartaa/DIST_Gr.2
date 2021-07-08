package com.example.java.models;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Entity
@Table(name = "lu")
public class Lu {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    
    @Column(name = "l_id")
    public Long l_id;

    @Column(name = "s_id")
    public Long s_id;

    @Column(name = "nota")
    public Long nota;

    // public void setUser(User user) {
    //     this.user = user;
    // }

    // public void setLenda(Lendet lenda) {
    //     this.lenda = lenda;
    // }
}
