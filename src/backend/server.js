let express = require('express') ;
let app = express() ;
let cors = require('cors') ;
let bodyParser = require('body-parser') ;

var corsOptions = {
    origin: "http://localhost:4200"
};

app.use(cors(corsOptions)) ;
app.use(bodyParser.json()) ;
app.use(bodyParser.urlencoded({extended : true})) ;

// Routes
const controller = require('./routes/controller') ;

app.use('/api',controller) ;

const port = process.env.PORT || 8000 ;
app.listen(port) ;

module.exports = app ;

console.log(`API Running On Port ${port} . . .`) ;