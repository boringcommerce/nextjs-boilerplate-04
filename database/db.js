// db.js

const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

let db;

async function openDb() {
    return open({
        filename: './scale10x.db',
        driver: sqlite3.Database
    });
}

async function getDb() {
    if (!db) {
        db = await openDb();
    }
    return db;
}

module.exports = {
    getDb
};
