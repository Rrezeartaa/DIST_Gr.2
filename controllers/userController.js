var moment = require('moment');
const { pool } = require('../databaza/konektimi')

class UserController {

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
   
    
}

module.exports = UserController;