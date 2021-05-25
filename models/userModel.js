const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  studentID: {
    type: String,
    required: true,
  },
//   name: {
//     type: String,
//     required: true,
//   },
//   parent_name: {
//     type: String,
//     required: true,
//   },
//   birthday: {
//     type: String,
//     required: true,
//   },
//   address: {
//     type: String,
//     required: true,
//   },
//   address: {
//     type: String,
//     required: true,
//   },
//   country: {
//     type: String,
//     required: true,
//   },
//   gender: {
//     type: String,
//     required: true,
//   },
//   phone: {
//     type: String,
//     required: true,
//   },
//  email: {
//     type: String,
//     required: true,
//   },
  paassword: {
    type: String,
    required: true,
  }
  // dateOfRegistration: {
  //   type: String,
  //   default: Date.now(),
  // },
  // isAdmin: {
  //   type: Boolean,
  //   default: false,
  // }
});

const User =  mongoose.model("User", userSchema)
 
module.exports = User;

