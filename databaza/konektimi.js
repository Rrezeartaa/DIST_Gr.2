const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'shkolla',
    password: 'root',
    port: 5432,
})

module.exports = {
    pool
}

// const mysql = require('mysql');

// const config = {
//     host: 'localhost',
//     user: 'root',
//     password : '',
//     database : 'Shkolla',
// };

// const pool = mysql.createPool(config);

// module.exports = pool;