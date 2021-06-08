'use strict'
var express = require('express');
var router = express.Router();
const api = require('./api')
const { pool } = require('../databaza/konektimi');

var user_controller = require('../controllers/userController');

var user_cont = new user_controller();
// var user_controller = require('../controllers/userController');
var Test = require('../public/javascripts/eventController');
// const UserController = require("../controllers/UserController");
// const UserModel = require("../models/UserModel");


// var user_cont = new user_controller();
// var event_cont = new Test();

const ApiEvent = require('C:/Users/Admin/DIST_PROJECT_Gr.2/public/javascripts/eventController.js')

router.get('/', function(req, res, next) {
  res.render('index', { title: 'E-Shkolla' });
});

router.get('/loginPr', function(req, res, next) {
  res.render('loginPr', { title: 'Login' });
});

// router.get('/index', function(req, res, next) {
//   res.render('students/faqjakryesore', { title: 'Faqja Kryesore' });
// });

router.get('/st-ngjarjet', function(req, res, next) {
  res.render('students/ngjarjet', { title: 'Ngjarjet' });
});

router.get('/map', function(req, res, next) {
  res.render('map', { title: 'Harta' });
});

router.get('/admin-index', function(req, res, next) {
  res.render('admin/adminPage', { title: 'Faqja Kryesore' });
});

router.get("/event", function(req, res, next){
	res.render("admin/ngjarjet", { title: 'Ngjarjet' });
});

// const EventController = require('../controllers/EventController')

// const event = new EventController()

// router.get('/ev', event.listAll.bind(event))
// router.get('/event/:id', event.find.bind(event))

router.get('/studentet',user_cont.showUser);
router.get('/updateUser', user_cont.editUser)
// router.get('/profile/:id', user_cont.showUserById)

router.post('/createUser', user_cont.createUser);
// router.post('/index', user_cont.login);

router.post('/updateUser', user_cont.updateUser)
router.post('/deleteUser/:id', user_cont.deleteUser)

// router.post('/event', event.createEvent.bind(event))
// router.put('/event/:id', event.updateEvent.bind(event))
// router.patch('/event/:id', event.updateEvent.bind(event))
// router.delete('/event/:id', event.deleteEvent.bind(event))

module.exports = router;



