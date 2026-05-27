const express = require('express');
const path = require('path');

const router = express.Router();

/* HOME PAGE */

router.get('/', (req, res) => {

    res.sendFile(
        path.join(__dirname, '../views/index.html')
    );

});

/* ABOUT PAGE */

router.get('/about', (req, res) => {

    res.sendFile(
        path.join(__dirname, '../views/about.html')
    );

});

app.post('/submit-form', (req, res) => {

    const { name, email, message } = req.body;

    const sql =
    'INSERT INTO contacts(name, email, message) VALUES (?, ?, ?)';

    db.query(sql, [name, email, message], (err, result) => {

        if(err){

            console.log(err);

        }
        else{

            res.json({

                success: true,

                message: 'Form Submitted Successfully'

            });

        }

    });

});

module.exports = router;