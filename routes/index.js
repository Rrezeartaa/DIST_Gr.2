'use strict'
var express = require('express');
var router = express.Router();
global.fetch = require("node-fetch");

var user_controller = require('../controllers/userController');

var lendet_controller = require('../controllers/lendetController');

var user_cont = new user_controller();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'E-Shkolla' });
});

router.get('/loginPr', function(req, res, next) {
  res.render('loginPr', { title: 'Login' });
});

router.get('/st-ngjarjet', function(req, res, next) {
  res.render('students/ngjarjet', { title: 'Ngjarjet' });
});

router.get('/map', function(req, res, next) {
  res.render('map', { title: 'Harta' });
});

// app.get('/student-profile', checkNotAuthenticated, function(req, res, next) {
//   res.render('students/student-profile', { user: req.user });  
// });

router.get('/st-lendet', function(req, res, next) {
  res.render('students/lendet', { title: 'Lendet' });
});

router.get('/literatura', function(req, res, next) {
  res.render('students/literatura', { title: 'Lendet' });
});

router.get('/notat', function(req, res, next) {
  res.render('professor/nota', { title: 'Notat' });
});

router.get('/stafi',user_cont.showProfessor);

router.get('/ankesa', function(req, res, next) {
  res.render('students/ankesa', { title: 'Lendet' });
});

router.get("/event", function(req, res, next){
	res.render("professor/ngjarjet", { title: 'Ngjarjet' });
});

router.get('/lendet', function(req, res, next) {
  fetch('http://localhost:8080/lendet')
    .then(res => res.json())
    .then(data => {
      data.forEach(item => {

        console.log(item.emri)

      })
    }).then( res.render('admin/lendet', { title: 'Lendet', emri: res.emri })
    )
    .catch(err => {
        console.log(err); 
    });
   
});

router.get('/users',user_cont.showUser);
router.get('/updateUser', user_cont.editUser)

router.post('/createUser', user_cont.createUser);

router.post('/updateUser', user_cont.updateUser)
router.post('/deleteUser/:id', user_cont.deleteUser)
router.post('/editPassword', user_cont.editPassword)


module.exports = router;



