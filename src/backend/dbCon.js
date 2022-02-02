var mysql = require('mysql');

var pool = mysql.createPool({
connectionLimit: 500,
host: '127.0.0.1',
port: 3306,
user: 'root',
password: '',
database: 'futureskill'
})

module.exports = pool;