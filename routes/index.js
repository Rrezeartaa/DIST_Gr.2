var express = require('express');
var router = express.Router();

var user_controller = require('../controllers/userController');
var Test = require('../controllers/eventController');

var user_cont = new user_controller();
var event_cont = new Test();

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

router.get('/studentet',user_cont.showUser);

router.post('/createUser', user_cont.createUser);

router.post('/createEvent', event_cont.createEvent);

router.put('/updateUser/:id', user_cont.updateUser);

router.post('/index', user_cont.login);

router.get('/delete', user_cont.deleteUser)

module.exports = router, EventController;



