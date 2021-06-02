
var createError = require('http-errors');
var express = require('express');
var app = express();
var path = require('path');
let stream = require( 'C:/Users/Admin/DIST_PROJECT_Gr.2/ws/stream' );
// let favicon = require( 'serve-favicon' );
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const server = require("http").Server(app);
// const { v4: uuidv4 } = require("uuid");
app.set("view engine", "ejs");
const io = require("socket.io")(server);

// const { ExpressPeerServer } = require("peer");
// const peerServer = ExpressPeerServer(server, {
//   debug: true,
// });
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use( favicon( path.join( __dirname, 'favicon.ico' ) ) );
// app.use("/peerjs", peerServer);


app.use('/', indexRouter);
app.use('/users', usersRouter);

// app.get("/chat", (req, res) => {
//   res.redirect(`/${uuidv4()}`);
// });

// app.get("/:room", (req, res) => {
//   res.render("students/student-chat", { roomId: req.params.room });
// });

// // io.listen(4000);

// io.on("connection", (socket)=>{
// 	socket.on("join-room", (roomId, userId, userName)=>{
// 	  socket.join(roomId);
//     socket.to(roomId).broadcast.emit("user-connected", userId);
// 	  socket.on("message", (message)=>{
// 		io.to(roomId).emit("createMessage", message, userName);
// 	  });
// 	});
//   });

io.of( '/stream' ).on( 'connection', stream );

server.listen( 3000 );

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });


// app.use(function(err, req, res, next) { 

//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;







