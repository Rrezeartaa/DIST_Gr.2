var moment = require('moment');
const { pool } = require('../databaza/konektimi')

class UserController {


  login(req, res) {
    var message = '';

    if (req.method == "POST") {
        var post = req.body;
        var idS = post.idS;
        var password = post.password;

        pool.query('SELECT * FROM students WHERE students.ids = $1',[idS], (error, results) => {
            if (error) {
                throw error;
            }
            else if(idS == results.rows[0]['ids'] && password == results.rows[0]['password']){
                // req.session.userId = idS;
                // var role =  results.rows[0]['role'];
                // var  user_id = results.rows[0]['idS'];
                // req.session.role = role;
                // req.session.user = user_id;
                res.redirect('/index')                   
            }else{
                message = 'Nuk e keni shkruar përdoruesin ose fjalëkalimin e saktë!';
                res.render('loginSt', { title: 'Login', message: message });
            }
        })
    }
}

    createUser(req,res){
      const { idS, name, prindi, data, vendi, adresa, numri, gjinia, email, password} = req.body
      
      pool.query('INSERT INTO students (idS, name, prindi, data, vendi, adresa, numri, gjinia,email, password) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)', [idS, name, prindi, data, vendi, adresa, numri, gjinia, email, password], (error, results) => {
        if (error) {
                throw error
            }

            res.redirect('/students')
        })
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

    var post = req.body;
    var id = post.id;
    pool.query('SELECT * FROM students WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      var students = results.rows

          res.render('admin/editModal', {
              students: students

          });
    })

  }

  updateUser(req,res){ 
    const id = parseInt(request.params.id)
    const { idS, name, prindi, data, vendi, adresa, numri, gjinia, email, password} = req.body

    pool.query(
        'UPDATE students SET idS=$1, name=$2, prindi=$3, data=$4, vendi=$5, adresa=$6, numri=$7, gjinia=$8, email=$9, password=$10 WHERE id =$11', [idS, name, prindi, data, vendi, adresa, numri, gjinia, email, password,id],
        (error, results) => {
            if (error) {
                throw error
            }
                res.redirect('/students')

        }
    )
  
}

deleteUser(req,res){ 

  var post = req.body;
  var id = post.id;
  // const id = request.params.id)

  pool.query('DELETE FROM students WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    res.redirect('/students')
    // response.status(200).send(`User deleted with ID: ${id}`)
  })
}

}

module.exports = UserController;