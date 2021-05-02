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
                    // // var role =  results.rows[0]['role'];
                    // var  user_id = results.rows[0]['ids'];
                    // // req.session.role = role;
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
   
   updateUser(req,res, next){ 
        const { idS, name, prindi, data, vendi, adresa, numri, gjinia, email, password} = req.body

        pool.query(
            'UPDATE students SET idS=$1, name=$2, prindi=$3, data=$4, vendi=$5, adresa=$6, numri=$7, gjinia=$8, email=$9, password=$10 WHERE username =$17', [idS, name, prindi, data, vendi, adresa, numri, gjinia, email, password],
            (error, results) => {
                if (error) {
                    throw error
                }
                    res.redirect('/students')
               
            }
        )
    }

    deleteUser(req, res){

        pool.query('DELETE FROM students WHERE ids = $1',[req.body.idS],  (error, results) => {
            if(error){
                throw error
            }
            res.redirect('/students')
        });
    }
    
}

module.exports = UserController;