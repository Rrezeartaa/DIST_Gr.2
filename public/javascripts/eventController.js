// // var moment = require('moment');
// // const { pool } = require('../databaza/konektimi')
// 'use strict'

// const createError = require('http-errors')
// const HttpStatus = require('http-status-codes')
// const Event = require('../models/Event')
// const fetch = require("node-fetch");

// class EventController {
//   constructor() {

//     this.list = [{"id":1,"title":"Hej there!","event_date":"Wed Jun 02 2021","theme":"blue"}]
//   }

//   listAll (req, res) {
    
//     return res.status(HttpStatus.OK).json(this.list)
//     // fetch('http://localhost:3000/api')
//     // .then(response => response.json())
//   }  //e kshyr edhe niher

//   find (req, res, next) {
//     try {
//       const id = parseInt(req.params.id, 10)
//       const event = this.list.find(x => x.id === id)
//       if (!event) throw new createError.NotFound()

//       return res.status(HttpStatus.OK).json(event)
//     } catch (err) {
//       next(err)
//     }
//   }

//   createEvent (req, res, next) {
//     try {
//       const { title, event_date, theme } = req.body
//       const id = this.list.length > 0 ? this.list[this.list.length - 1].id + 1 : 1
//       const event = new Event({ id, title, event_date, theme })
//       this.list.push(event)

//       return res.status(HttpStatus.CREATED).json(event)
//     } catch (err) {
//       next(err)
//     }
//   }

//   updateEvent (req, res, next) {
//     try {
//       const id = parseInt(req.params.id, 10)
//       const { title, event_date, theme } = req.body
//       const event = this.list.find(x => x.id === id)
//       if (!event) throw new createError.NotFound()
//       event.title = title
//       event.event_date = event_date
//       event.theme = theme

//       return res.status(HttpStatus.OK).end()
//     } catch (err) {
//       next(err)
//     }
//   }

//   deleteEvent (req, res, next) {
//     try {
//       const id = parseInt(req.params.id, 10)
//       const event = this.list.find(x => x.id === id)
//       if (!event) throw new createError.NotFound()
//       this.list = this.list.filter(x => x.id !== id)

//       return res.status(HttpStatus.OK).end()
//     } catch (err) {
//       next(err)
//     }
//   }
// }

// module.exports = EventController



const uri = 'http://localhost:5000/api/events';

let events = [];

function getItems() {
  // fetch(uri)
  //   .then(response => response.json())
  //   .then(data => _displayItems(data))
  //   .catch(error => console.error('Unable to get items.', error));
}

function addItem() {
  const addNameTextbox = document.getElementById('title');
  const addNameTextbox1 = document.getElementById('event_date');
  const addNameTextbox2 = document.getElementById('theme');

  const item = {
    title: addNameTextbox.value.trim(),
    event_date: addNameTextbox1.value.trim(),
    theme: addNameTextbox2.value.trim()
  };

  fetch(uri,{
    
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':  'http://localhost:5000/api/events',
    },
    body: JSON.stringify(item)
  })
    .then(response => response.json())
    // .then(() => {
    //   getItems();
    //   addNameTextbox.value = '';
    // })
    .catch(error => console.error('Unable to add item.', error));

}

function deleteItem(id) {
  fetch(`${uri}/${id}`, {
    method: 'DELETE'
  })
  .then(() => getItems())
  .catch(error => console.error('Unable to delete item.', error));
}

function updateItem() {
  const itemId = 1;
  const item = {
    ngjarja_id: parseInt(itemId, 10),
    title: 'tedttt',
    event_date: 'tdujg',
    theme: 'pink'
  };

  fetch(`${uri}/${itemId}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  })
  .then(() => getItems())
  .catch(error => console.error('Unable to update item.', error));

  // closeInput();

  return false;
}