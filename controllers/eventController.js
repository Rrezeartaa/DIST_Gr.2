// var moment = require('moment');
// const { pool } = require('../databaza/konektimi')

'use strict'

const createError = require('http-errors')
const HttpStatus = require('http-status-codes')
const Event = require('../models/Event')

class EventController {
  constructor() {
    /** @type {Array<Event>} */
    this.list = []
  }

  listAll (req, res) {
    
    return res.status(HttpStatus.OK).json(this.list)
  }

  find (req, res, next) {
    try {
      const id = parseInt(req.params.id, 10)
      const event = this.list.find(x => x.id === id)
      if (!event) throw new createError.NotFound()

      return res.status(HttpStatus.OK).json(event)
    } catch (err) {
      next(err)
    }
  }

  createEvent (req, res, next) {
    try {
      const { title, event_date, theme } = req.body
      const id = this.list.length > 0 ? this.list[this.list.length - 1].id + 1 : 1
      const event = new Event({ id, title, event_date, theme })
      this.list.push(event)

      return res.status(HttpStatus.CREATED).json(id)
    } catch (err) {
      next(err)
    }
  }

  updateEvent (req, res, next) {
    try {
      const id = parseInt(req.params.id, 10)
      const { title, event_date, theme } = req.body
      const event = this.list.find(x => x.id === id)
      if (!event) throw new createError.NotFound()
      event.title = title
      event.event_date = event_date
      event.theme = theme

      return res.status(HttpStatus.OK).end()
    } catch (err) {
      next(err)
    }
  }

  deleteEvent (req, res, next) {
    try {
      const id = parseInt(req.params.id, 10)
      const event = this.list.find(x => x.id === id)
      if (!event) throw new createError.NotFound()
      this.list = this.list.filter(x => x.id !== id)

      return res.status(HttpStatus.OK).end()
    } catch (err) {
      next(err)
    }
  }
}

module.exports = EventController