package com.projekti;

import java.util.Date;

public class Event {

    private int id;
    private String title;
    private Date event_date;
    private String theme;   

    public Event(int id, String title, Date event_date, String theme) {
        this.id = id;
        this.title = title;
        this.event_date = event_date;
        this.theme = theme;
    }

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Date getEventDate() {
        return this.event_date;
    }

    public void setDcity(Date event_date) {
        this.event_date = event_date;
    }

    public String theme() {
        return this.theme;
    }

    public void setTheme(String theme) {
        this.theme = theme;
    }

}