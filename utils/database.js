const mysql = require('mysql2')

const pool = mysql.createPool({
    host : 'local',
    user : 'root',
    database : 'nodejs_sharpener',
    password : 'nodejs_sharpener'
})

module.exports = pool.promise();