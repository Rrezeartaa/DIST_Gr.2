var moment = require('moment');
const { pool } = require('../databaza/konektimi')

class EventController {

    createEvent(req,res){
        const { title, event_date, theme} = req.body
       
        pool.query('INSERT INTO event (title, event_date, theme) VALUES ($1, $2, $3)', [title, event_date, theme], (error, results) => {
            if (error) {
                throw error
            }
  
            res.redirect('/students')
        })
    }


}