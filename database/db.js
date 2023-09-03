const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database/payments.db');

db.serialize(() => {
  // Create tables or other initial setup tasks here
});

module.exports = db;
