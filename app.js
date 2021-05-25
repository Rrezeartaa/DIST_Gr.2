
var createError = require('http-errors');
var express = require('express');
var app = express();
var path = require('path');
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const CONNECTION_URL = "mongodb://localhost:27017/schoolmx";
const DATABASE_NAME = "schoolmx";
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const server = require("http").Server(app);
const { v4: uuidv4 } = require("uuid");
app.set("view engine", "ejs");
const io = require("socket.io")(server, {
  cors: {
    origin: '*'
  }
});
const { ExpressPeerServer } = require("peer");
const peerServer = ExpressPeerServer(server, {
  debug: true,
});
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// mongoose.connect("mongodb://localhost:27017/schoolmx", {useNewUrlParser: true, useUnifiedTopology: true});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/peerjs", peerServer);

app.get("/chat", function(req, res){
	res.redirect(`/${uuidv4()}`);  //students/student-chat
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get("/:room", function(req, res){
	res.render("students/student-chat", { roomId: req.param.room });
  });

// app.get('/', (req, res) => {
//     res.render('index.pug', {
//         title: 'Home Page'
//     });
// });

// app.get('/about', (req, res) => {
//     res.render('Student.pug', {
//         title: 'About Page'
//     });
// });



  io.on("connection", (socket)=>{
	socket.on("join-room", (roomId, userId, userName)=>{
	  socket.join(roomId);
	  socket.to(roomId).emit("user-connected", userId);
	  socket.on("message", (message)=> {
		io.to(roomId).emit("createMessage", message, userName);
	  });
	});
  });

  // server.listen(process.env.PORT || 5000);  

  app.listen(5000, () => {
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("users");
        console.log("Connected to `" + DATABASE_NAME + "`!");
    });
});

app.post("/test", (request, response) => {
  collection.insert(request.body, (error, result) => {
      if(error) {
          return response.status(500).send(error);
      }
      response.send(result.result);
  });
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


app.use(function(err, req, res, next) { 

  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
