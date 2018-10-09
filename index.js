// db folder's index

import mysql from 'mysql'

let pool = mysql.createPool({
    connectionLimit: 10,
    password: 'app',
    user: 'app',
    database: 'chirprapp',
    host: 'localhost',
    port: '3306'
});

// let connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'app',
//     password: 'app',
//     database: 'chirprapp'
// })

// connection.connect();


let chirprdb = {};

chirprdb.all = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM chirps', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        })
    })
}

// connection.query('SELECT * FROM chirps', (err, results) => {
//     if (err){
//         connection.end();
//         return console.log(err);
//     }
//     // results.forEach(item => {
//     //     console.log(item.name, item.text)
//     // })
//     console.log(results)
//     connection.end();
// })

module.exports = chirprdb