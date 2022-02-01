let express = require('express') ;
let router = express.Router() ;
let dbCon = require('../dbCon') ;


// Check API
router.get('/', (req, res) => {
    res.send({message: "API Working . . ."}) ;
})

// Get book
router.post('/book', (req,res) => {
    let sql = `SELECT * FROM book` ;

    dbCon.query(sql, (error, result, field) => {
        if(error) 
        {
            console.log(error) ;
        }
        res.send({ data: result }) ;
    })
})

// Get book data by id
router.post('/bookById',(req,res) => {
    let id = req.body.id ;

    if(!id)
    {
        res.status(400).send({message : 'id is require'}) ;
    }
    else
    {
        let sql = `SELECT * FROM book WHERE id = ?` ;
        dbCon.query(sql,id, (error, result, field) => {
            if(error)
            {
                console.log(error) ;
            }
            res.send({ data: result }) ;
        })
    }
})

// Add book
router.post('/add', (req,res) => {
    let name = req.body.name ;
    let start_date = req.body.start_date ;
    let end_date = req.body.end_date ;
    let writer = req.body.writer ;
    let cover = req.body.cover ;
    let messageArray = new Array() ;

    if(!name || !start_date || !end_date || !writer || !cover)
    {
        if(!name)
        {
            messageArray.push('name is require') ;
        }
        if(!start_date)
        {
            messageArray.push('start_date is require') ;
        }
        if(!end_date)
        {
            messageArray.push('end_date is require') ;
        }
        if(!writer)
        {
            messageArray.push('writer is require') ;
        }
        if(!cover)
        {
            messageArray.push('cover is require') ;
        }

        res.status(400).send({message: messageArray}) ;
    }
    else
    {
        let sql = `INSERT INTO book (name, start_date, end_date, writer, cover)
                   VALUES (?, ?, ?, ?, ?)` ;
        
        let values = [name, start_date, end_date, writer, cover] ;
        dbCon.query(sql,values, (error, result, field) => {
            if(error)
            {
                console.log(error)
            }
            res.send({message: "success", data: result}) ;
        })
    }
})

// Edit book
router.post('/edit', (req,res) => {
    let id = req.body.id ;
    let name = req.body.name ;
    let start_date = req.body.start_date ;
    let end_date = req.body.end_date ;
    let writer = req.body.writer ;
    let cover = req.body.cover ;
    let messageArray = new Array() ;

    if(!id || !name || !start_date || !end_date || !writer || !cover)
    {
        if(!id)
        {
            messageArray.push('id is require') ;
        }
        if(!name)
        {
            messageArray.push('name is require') ;
        }
        if(!start_date)
        {
            messageArray.push('start_date is require') ;
        }
        if(!end_date)
        {
            messageArray.push('end_date is require') ;
        }
        if(!writer)
        {
            messageArray.push('writer is require') ;
        }
        if(!cover)
        {
            messageArray.push('cover is require') ;
        }

        res.status(400).send({message: messageArray}) ;
    }
    else
    {
        let sql = `UPDATE book SET name = ?, start_date = ?, end_date = ?, writer = ?, cover = ? WHERE id = ?` ;
        let values = [name, start_date, end_date, writer, cover, id] ;

        dbCon.query(sql,values, (error, result, field) => {
            if(error)
            {
                console.log(error)
            }
            if(result.changedRows == 0)
            {
                message = 'fail' ;
            }
            else
            {
                message = 'success' ;
            }
            res.send({message: message, data: result}) ;
        })
    }
})

// Delete book
router.post('/delete', (req,res) => {
    let id = req.body.id ;

    if(!id)
    {
        res.status(400).send({message : 'id is require'}) ;
    }
    else
    {
        let sql = `DELETE FROM book WHERE id = ? ` ;

        dbCon.query(sql,id, (error, result, field) => {
            if(error) 
            {
                console.log(error) ;
            }

            if(result.affectedRows == 0)
            {
                message = "fail" ;
            }
            else
            {
                message = "success" ;
            }
            res.send({message: message, data: result}) ;
        })
    }
})


module.exports = router ;