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

      return res.status(HttpStatus.OK).json(todo)
    } catch (err) {
      next(err)
    }
  }

  