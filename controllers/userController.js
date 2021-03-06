const { pool } = require('../databaza/konektimi')
const bcrypt = require('bcrypt')
const moment = require('moment')

class UserController {

  createUser(req,res){
        const { idS, name, prindi, data, vendi, adresa, numri, gjinia, email, password, isprofessor} = req.body
        
        pool.query('SELECT * from students WHERE email = $1 or ids = $2', [email, idS], (error, results) => {
          var emaili = results.rows
          console.log(emaili)   
        
        if(emaili.length == 1){ 
          console.log('This user already exists!')
        }
        else {
        const saltRounds = 10;
        bcrypt.genSalt(saltRounds, function(err, salt) {
          bcrypt.hash(password, salt, function(err, hash) {
          pool.query('INSERT INTO students (idS, name, prindi, data, vendi, adresa, numri, gjinia, email, password, isprofessor) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)', [idS, name, prindi, data, vendi, adresa, numri, gjinia, email, hash, isprofessor], (error, results) => {
          if (error) {
                  throw error
              }
            res.redirect('/users')
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

          res.render('admin/users', {
              title: 'Users',
              students: students
          });
      })
  }

  showProfessor(req, res){
    pool.query('SELECT * FROM students where isprofessor = 1', (error, results) => {
        if(error){
            throw error
        }
        var students = results.rows

        res.render('students/stafi', {
            title: 'Stafi',
            students: students
        });
    })
}

showProfessors(req, res){
  // pool.query('SELECT students.name, lendet.emri, lendet.id FROM lendet INNER JOIN students ON lendet.user_id=students.id', (error, results) => {
    pool.query('SELECT lendet.id, lendet.emri, students.name, lu.nota FROM lendet INNER JOIN lu ON lendet.id=lu.l_id INNER JOIN students ON lendet.user_id = students.id', (error, results) => {
    if(error){
          throw error
      }
      var students = results.rows

      res.render('students/lendet', {
          title: 'Lendet',
          students: students
      });
  })
}

showLendaId(req, res){

  pool.query('SELECT lendet.id FROM lendet INNER JOIN students ON lendet.user_id=students.id' ,(error, results) => {
      if(error){
          throw error
      }
      var students = results.rows

      console.log(students)

      res.render('professor/nota', {
          title: 'Lendet',
          students: students
      });
  })
}

notaMesatare(req,res){

  pool.query("SELECT AVG(nota) FROM lu WHERE l_id = 117" ,(error, results) => {

      if(error){
          throw error
      }
      var students = results.rows
      console.log(students)

      res.render('professor/nota', {
          title: 'Lendet',
          students: students[0]['avg']
      });
  })
}

notaMesatareSt(req,res){

  const { s_id } = req.body

  pool.query("SELECT AVG(nota) FROM lu WHERE s_id = $1",[s_id],(error, results) => {

      if(error){
          throw error
      }
      var students = results.rows
      console.log(students)

      res.render('students/lendet', {
          title: 'Lendet',
          students: students[0]['avg']
      });
  })
}

literature(req, res){
  pool.query('SELECT students.name, literature.emri, literature.description, literature.author, literature.file FROM literature INNER JOIN students ON literature.user_id=students.id', (error, results) => {
      if(error){
          throw error
      }
      var students = results.rows

      res.render('students/literatura', {
          title: 'Literatura',
          students: students
      });
  })
}

literatureUp(req, res){
  pool.query('SELECT students.name, literature.emri, literature.description, literature.author, literature.file, literature.id FROM literature INNER JOIN students ON literature.user_id=students.id', (error, results) => {
      if(error){
          throw error
      }
      var students = results.rows

      res.render('admin/literatura', {
          title: 'Literatura',
          students: students
      });
  })
}

showOneLit(req, res){

  const { emri } = req.body

  pool.query('SELECT students.name, literature.emri, literature.description, literature.author, literature.file FROM literature INNER JOIN students ON literature.user_id=students.id where literature.emri = $1',[emri], (error, results) => {
      if(error){
          throw error
      }
      var students = results.rows

      res.render('students/literatura', {
          title: 'Literatura',
          students: students
      });
  })
}

showOne(req, res){

  const { name } = req.body

  pool.query('SELECT * FROM students where isprofessor = 1 and name = $1',[name], (error, results) => {
      if(error){
          throw error
      }
      var students = results.rows

      res.render('students/stafi', {
          title: 'Stafi',
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
      
      var momentDate = moment(students[0]['data'])
     
          res.render('admin/editModal', {
              id: id,
              idS: students[0]['ids'],
              name: students[0]['name'],        
              prindi: students[0]['prindi'],
              data: momentDate.format("DD/MM/YYYY"),
              vendi: students[0]['vendi'],
              adresa: students[0]['adresa'],
              numri: students[0]['numri'],
              gjinia : students[0]['gjinia'],
              email: students[0]['email'],
          });
    })  

  }

  updateUser(req,res){ 

    const id = req.body.id
    const { idS, name, prindi, data, vendi, adresa, numri, gjinia, email} = req.body

    pool.query(
        'UPDATE students SET idS=$1, name=$2, prindi=$3, data=$4, vendi=$5, adresa=$6, numri=$7, gjinia=$8, email=$9 WHERE id=$10', [idS, name, prindi, data, vendi, adresa, numri, gjinia, email, id],
        (error, results) => {
            if (error) {
                throw error
            }
            res.redirect('/users')
        });
        
  }

editPassword(req,res){ 

  const id = req.body.id
  const { password } = req.body
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
          res.redirect('/student-profile')
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
    res.redirect('/users')
  })
}

deleteLiterature(req,res){ 

  var post = req.body;
  var id = post.id;

  pool.query('DELETE FROM literature WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    res.redirect('/literaturaUp')
  })
}

notoStudentin(req,res){
    const { l_id, s_id, nota } = req.body
    pool.query('INSERT INTO lu (l_id, s_id, nota) VALUES ($1, $2, $3)', [l_id, s_id, nota], (error, results) => {
      if (error) {
          throw error
      }

    res.redirect('/notat')
    });
}

}

module.exports = UserController;