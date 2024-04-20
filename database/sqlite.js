import sqlite3 from 'sqlite3';

export const db = new sqlite3.Database('database/db.sqlite')

db.exec("CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, age INTEGER)")

db.serialize(()=>{

    const stmt = db.prepare("INSERT INTO user VALUES (NULL, ?, ?)")

    stmt.run("Juha", 21)

    stmt.finalize()

})

