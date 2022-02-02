var mysql = require('mysql');

var pool = mysql.createPool({
connectionLimit: 500,
host: '172.17.0.1',
port: 3306,
user: 'root',
password: '',
database: 'futureskill'
})

module.exports = pool;