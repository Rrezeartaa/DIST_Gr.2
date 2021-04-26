const Pool = require('pg').Pool

const pool = new Pool({
    user: 'root',
    host: 'localhost',
    database: 'Shkolla',
    password: '',
    port: 80,
})

module.exports = {
    pool
}