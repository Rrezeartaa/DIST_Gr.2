const bcrypt = require("bcryptjs");
const UserModel = require("../models/UserModel");
const Mongoose = require("mongoose");
const axios = require("axios");
const MAIL_SERVER_ENDPOINT =
  "https://mail-rrestorant.herokuapp.com/api/sendmail";

exports.postLogin = (req, res, next) => {
  const studentID = req.body.studentID;
  const password = req.body.password;

  UserModel.findOne({ studentID: studentID, password: password }).then((user) => {
    if (!user) {
      return res.redirect("/loginPr");
      console.log('Fail');
    }
    else if(user){
        return res.redirect("/admin-index");
    }
    //  compare(password, user.password).then((doMatch) => {
    //   if (doMatch) {
        // if (user.isAdmin) {
        //   req.session.isLoggedIn = true;
        //   req.session.user = user;
        //   return req.session.save((err) => {
            // console.log(err);
            res.
        //   });
        
        // req.session.isLoggedIn = true;
        // req.session.user = user;
        // req.session.name = user.name;
    //   }
      res.redirect("/loginPr");
      console.log('Failed');
    });

};

module.exports.postLogOut = (req, res, next) => {
  req.session.destroy((err) => {
    res.redirect("/");
  });
};



