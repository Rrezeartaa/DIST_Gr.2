const session = require("express-session");
const flash = require("express-flash");
var express = require('express');
var passport = require('passport');
var app = express();
var path = require('path');
let stream = require( 'C:/Users/Admin/DIST_PROJECT_Gr.2/ws/stream' );
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const server = require("http").Server(app);
app.set("view engine", "ejs");
const io = require("socket.io")(server);
require("dotenv").config();
const initializePassport = require("C:/Users/Admin/DIST_PROJECT_Gr.2/controllers/passport.js");

initializePassport(passport);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('12345'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false
    })
  );
app.use(passport.initialize())
app.use(passport.session())
app.use(flash());

app.use('/', indexRouter);
app.use('/users', usersRouter);

io.of( '/stream' ).on( 'connection', stream );


app.get("/loginSt", checkAuthenticated, (req, res) => {
    res.render("loginSt");
});
  
app.get("/index", checkNotAuthenticated, (req, res) => {

  if(req.user.isprofessor == 0){
    res.render("students/faqjakryesore", { user: req.user.name });
  }
  else if(req.user.isprofessor == 2){
      res.render("admin/adminPage"); 
  }
  else if(req.user.isprofessor == 1){
      res.render('professor/adminPage', { title: 'Faqja Kryesore' });
  }
});

app.get('/student-profile', checkNotAuthenticated, function(req, res, next) {
  res.render('students/student-profile', { user: req.user });  
});

app.get("/chat", checkNotAuthenticated, function(req, res, next){
	res.render("students/student-chat", { user: req.user });
});

app.get('/ankesa', checkNotAuthenticated, function(req, res, next) {
  res.render('students/ankesa', { user: req.user });
});

app.get("/profesor/literatura", checkNotAuthenticated, function(req, res, next){
	res.render("professor/shtoLiterature", { user: req.user });
});

app.get("/logout", (req, res) => {
    req.logout();
    res.render("loginSt", { message: "You have logged out successfully" });
});
  
app.post(
    "/loginSt",
    passport.authenticate("local", {
      successRedirect: "/index",
      failureRedirect: "/loginSt",
      failureFlash: true
    })
  );
  
  function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return res.redirect("/index");
    }
    next();
  }
  
  function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/loginSt");
  }

server.listen( 3000 );








