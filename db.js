const mysql = require('mysql2');

const connection = mysql.createConnection({

    host: 'localhost',

    user: 'root',

    password: 'Password',

    database: 'she_can_db'

});

connection.connect((err) => {

    if(err){

        console.log(err);

    }
    else{

        console.log('MySQL Connected');

    }

});

module.exports = connection;