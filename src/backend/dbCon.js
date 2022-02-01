var mysql = require('mysql');

var pool = mysql.createPool({
connectionLimit: 500,
host: 'localhost',
user: 'root',
password: '',
database: 'futureskill'
})

module.exports = pool;