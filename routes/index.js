'use strict'
var express = require('express');
var router = express.Router();
global.fetch = require("node-fetch");
const controller = require("../controllers/fileController");

var user_controller = require('../controllers/userController');

var user_cont = new user_controller();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'E-Shkolla' });
});

router.get('/enroll', function(req, res, next) {
  res.render('admin/enroll', { title: 'Enroll' });
});

router.get('/loginPr', function(req, res, next) {
  res.render('loginPr', { title: 'Login' });
});

router.get('/st-ngjarjet', function(req, res, next) {
  res.render('students/ngjarjet', { title: 'Ngjarjet' });
});

router.get('/st-lendet', user_cont.showProfessors);

router.get('/literatura', user_cont.literature);

router.get('/literaturaUp', user_cont.literatureUp);

router.get("/file/:name", controller.download);

router.get('/ankesat', function(req, res, next) {
  res.render('admin/ankesat', { title: 'Login' });
});

router.get('/stafi',user_cont.showProfessor);

router.get("/event", function(req, res, next){
	res.render("admin/ngjarjet", { title: 'Ngjarjet' });
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
router.get('/updateUser', user_cont.editUser);
router.get("/notaMesatare", user_cont.notaMesatare);

router.get('/notat', user_cont.showLendaId);

// router.get('/notat', checkNotAuthenticated, function(req, res, next) {
//   res.render('professor/nota', { user: req.user });
// });

router.post('/createUser', user_cont.createUser);

router.post('/updateUser', user_cont.updateUser)
router.post('/deleteUser/:id', user_cont.deleteUser)
router.post('/deleteLiterature/:id', user_cont.deleteLiterature)
router.post('/editPassword', user_cont.editPassword)
router.post('/stafi',user_cont.showOne);
router.post('/literatura', user_cont.showOneLit);
router.post("/literaturaupload", controller.upload);
router.post("/notat", user_cont.notoStudentin);

module.exports = router;



