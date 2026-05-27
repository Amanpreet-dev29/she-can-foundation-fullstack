const express = require('express');

const path = require('path');

const db = require('./db');

const app = express();

/* ================= MIDDLEWARE ================= */

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

/* STATIC FILES */

app.use(express.static(path.join(__dirname, 'public')));

/* ================= ROUTES ================= */

/* HOME PAGE */

app.get('/', (req, res) => {

    res.sendFile(
        path.join(__dirname, 'views/index.html')
    );

});

/* ABOUT PAGE */

app.get('/about', (req, res) => {

    res.sendFile(
        path.join(__dirname, 'views/about.html')
    );

});

/* CONTACT PAGE */

app.get('/contact', (req, res) => {

    res.sendFile(
        path.join(__dirname, 'views/contact.html')
    );

});

/* DONATE PAGE */

app.get('/donate', (req, res) => {

    res.sendFile(
        path.join(__dirname, 'views/donate.html')
    );

});

/* CONTACT FORM SUBMISSION */

app.post('/submit-form', (req, res) => {

    const { name, email, message } = req.body;

    const sql =
    'INSERT INTO contacts(name, email, message) VALUES (?, ?, ?)';

    db.query(

        sql,

        [name, email, message],

        (err, result) => {

            if(err){

                console.log(err);

                res.json({

                    success: false,

                    message: 'Database Error'

                });

            }
            else{

                console.log('Contact Saved');

                res.json({

                    success: true,

                    message: 'Form Submitted Successfully'

                });

            }

        }

    );

});

/* DONATION FORM SUBMISSION */

app.post('/donate-submit', (req, res) => {

    console.log(req.body);

    const {

        donor_name,
        email,
        amount,
        payment_method

    } = req.body;

    const sql = `
        INSERT INTO donations
        (donor_name, email, amount, payment_method)
        VALUES (?, ?, ?, ?)
    `;

    db.query(

        sql,

        [donor_name, email, amount, payment_method],

        (err, result) => {

            if(err){

                console.log(err);

                res.json({

                    success: false,

                    message: 'Database Error'

                });

            }
            else{

                console.log('Donation Saved');

                res.json({

                    success: true,

                    message: 'Donation Submitted Successfully'

                });

            }

        }

    );

});

/* ================= SERVER ================= */

const PORT = 3000;

app.listen(PORT, () => {

    console.log(
        `Server running on http://localhost:${PORT}`
    );

});