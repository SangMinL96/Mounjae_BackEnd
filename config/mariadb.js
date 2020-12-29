
// let mariadb = require('mariadb');

// console.log( process.env.DB_PORT)
// const dbConInfo = {
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DATABASE,
//     connectionLimit: process.env.DB_MAX
// }

// const pool = mariadb.createPool(dbConInfo);


// module.exports = pool

let mariadb = require('mariadb');

const dbConInfo = {
    host: "193.123.224.133",
    port: 3306,
    user: "mounjea",
    password: "adsf153246",
    database: "mounjea",
    connectionLimit: process.env.DB_MAX
}

const pool = mariadb.createPool(dbConInfo);


module.exports = pool