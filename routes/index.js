'use strict'
var express = require('express');
var router = express.Router();
const api = require('./api')
const { pool } = require('../databaza/konektimi');

var user_controller = require('../controllers/userController');

var user_cont = new user_controller();
// var user_controller = require('../controllers/userController');
var Test = require('../controllers/eventController');
// const UserController = require("../controllers/UserController");
// const UserModel = require("../models/UserModel");


// var user_cont = new user_controller();
// var event_cont = new Test();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'E-Shkolla' });
});

router.get('/loginPr', function(req, res, next) {
  res.render('loginPr', { title: 'Login' });
});
router.get('/loginSt', function(req, res, next) {
  res.render('loginSt', { title: 'Login' });
});
router.get('/index', function(req, res, next) {
  res.render('students/faqjakryesore', { title: 'Faqja Kryesore' });
});

router.get('/admin-index', function(req, res, next) {
  res.render('admin/adminPage', { title: 'Faqja Kryesore' });
});

router.get('/student-profile', function(req, res, next) {
  res.render('students/student-profile', { title: 'Profili i studentit' });
});

router.get("/chat", function(req, res, next){
	res.render("students/student-chat", { title: 'Student Profile' });
});

router.get("/ngjarjet", function(req, res, next){
	res.render("admin/ngjarjet", { title: 'Ngjarjet' });
});

// router.get('/studentet',user_cont.showUser);

// router.put('/updateUser/2', user_cont.updateUser);

// router.delete("/delete/:id", (req, res) => {
//   const { ids } = req.params;

//   pool.query("DELETE FROM students WHERE ids = $1", [ids], (error, results) => {
//     if (error) {
//       throw error;
//     }
//     res.sendStatus(200);
//   });
// });

// router.post('/createUser', user_cont.createUser);

// // router.post('/createEvent', event_cont.createEvent);



// router.use('/api',api);
router.get('/studentet',user_cont.showUser);
router.get('/updateUser/:id', user_cont.editUser)

router.post('/createUser', user_cont.createUser);
router.post('/index', user_cont.login);

router.post('/updateUser/:id', user_cont.updateUser)
router.post('/deleteUser/:id', user_cont.deleteUser)
// router.post("/addname", (req, res) => {
//   var myData = new UserModel(req.body);
//   myData.save()
//     .then(item => {
//       res.send("item saved to database");
//     })
//     .catch(err => {
//       res.status(400).send("unable to save to database");
//     });
// });


module.exports = router;



