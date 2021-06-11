var moment = require('moment');
var LocalStrategy    = require('passport-local').Strategy;
const { pool } = require('../databaza/konektimi')
const bcrypt = require('bcrypt')
// const validation = require('../controllers/validation.js')
const { body, validationResult } = require('express-validator');

class UserController {

    createUser(req,res){
      const { idS, name, prindi, data, vendi, adresa, numri, gjinia, email, password} = req.body
      
      pool.query('SELECT * from students WHERE email = $1', [email], (error, results) => {
        var emaili = results.rows
        console.log(emaili)   //kshyre edhe per idS se per email e ndreqa!!!!! edhe te Edit me kshyr!
      
      if(emaili.length == 1){ 
        console.log('This email exists!')

      }
      else {
      const saltRounds = 10;
      bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
        pool.query('INSERT INTO students (idS, name, prindi, data, vendi, adresa, numri, gjinia, email, password) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)', [idS, name, prindi, data, vendi, adresa, numri, gjinia, email, hash], (error, results) => {
        if (error) {
                throw error
            }

            res.redirect('/studentet')
        })
        });
      });
    }
  });
    }

    showUser(req, res){

      pool.query('SELECT * FROM students', (error, results) => {
          if(error){
              throw error
          }
          var students = results.rows

          res.render('admin/shtoStudent', {
              title: 'Studentet',
              students: students
          });
      })
  }

  editUser(req,res){

    var post = req.query;
    var id = post.id;

    pool.query('SELECT * FROM students WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }

      var students = results.rows

          res.render('admin/editModal', {
              id: id,
              idS: students[0]['ids'],
              name: students[0]['name'],        
              prindi: students[0]['prindi'],
              data: students[0]['data'],
              vendi: students[0]['vendi'],
              adresa: students[0]['adresa'],
              numri: students[0]['numri'],
              gjinia : students[0]['gjinia'],
              email: students[0]['email']
          });
    })  

    // me bo qe admini mos me mujt mo me ja ndrru password-in po veq studenti qe don

  }

  updateUser(req,res){ 

    const id = req.body.id
    const { idS, name, prindi, data, vendi, adresa, numri, gjinia, email} = req.body
    if (prindi === '' || email === '' || name === '' || idS === '' || data === '' || vendi === '' || adresa === '' || numri  === '' || gjinia === ''){
      var message = 'Duhet te jepni te gjitha te dhenat per studentin!';
    }
    // else{
    // const saltRounds = 10;
    //   bcrypt.genSalt(saltRounds, function(err, salt) {
    //     bcrypt.hash(password, salt, function(err, hash) {
    pool.query(
        'UPDATE students SET idS=$1, name=$2, prindi=$3, data=$4, vendi=$5, adresa=$6, numri=$7, gjinia=$8, email=$9 WHERE id=$10', [idS, name, prindi, data, vendi, adresa, numri, gjinia, email, id],
        (error, results) => {
            if (error) {
                throw error
            }
            res.redirect('/studentet')
        });
    // )});});
  // }
  
}

editPassword(req,res){ 

  const id = req.body.id
  const { password} = req.body
  if (password === ''){
   var message = 'Duhet te shkruani password-in!';
  }
  else{
  const saltRounds = 10;
    bcrypt.genSalt(saltRounds, function(err, salt) {
      bcrypt.hash(password, salt, function(err, hash) {
  pool.query(
      'UPDATE students SET password=$1 WHERE id=$2', [ hash, id],
      (error, results) => {
          if (error) {
              throw error
          }
          res.redirect('/studentet')
      });
});});
}

}


deleteUser(req,res){ 

  var post = req.body;
  var id = post.id;

  pool.query('DELETE FROM students WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    res.redirect('/studentet')
  })
}

}

module.exports = UserController;