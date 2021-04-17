var express = require('express');
var router = express.Router();

/* GET home page. */
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

// router.get('/student-chat', function(req, res, next) {
//   res.render('students/student-chat', { title: 'Student Chat' });
// });

router.get('/admin-chat', function(req, res, next) {
  res.render('admin/admin-chat', { title: 'Admin Chat' });
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

router.get("/studentet", function(req, res, next){
	res.render("admin/shtoStudent", { title: 'Studentet' });
});


module.exports = router;
