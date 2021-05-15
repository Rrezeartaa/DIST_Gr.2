'use strict'

class Event {
  constructor({ id, title, event_date, theme }) {
    this.id = id
    this.title = title
    this.event_date = event_date
    this.theme = theme
  }
} 
module.exports = Event