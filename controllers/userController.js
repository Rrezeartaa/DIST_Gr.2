var moment = require('moment');
const { pool } = require('../databaza/konektimi')

class UserController {

    createUser(req,res){
        const { idS, name, prindi, data, vendi, adresa, numri, gjinia, address, email, password} = req.body
       
        pool.query('INSERT INTO students (idS, name, prindi, data, vendi, adresa, numri, gjinia, address, email, password) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)', [idS, name, prindi, data, vendi, adresa, numri, gjinia, address, email, password , moment(Date.now()).format('MM/DD/YYYY')], (error, results) => {
            if (error) {
                throw error
            }
  
            res.redirect('/students')
        })
    }
    
}

module.exports = UserController;