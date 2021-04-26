const Pool = require('pg').Pool

const pool = new Pool({
    user: 'root',
    host: 'localhost',
    database: 'Shkolla',
    password: '',
    port: 8000,
})

module.exports = {
    pool
}