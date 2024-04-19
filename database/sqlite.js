import sqlite3 from 'sqlite3';

export const db = new sqlite3.Database('database/db.sqlite')

db.exec("CREATE TABLE IF NOT EXISTS user (username TEXT, age INT)")

db.serialize(()=>{

    const stmt = db.prepare("INSERT INTO user VALUES (?, ?)")

    stmt.run("Juha", 21)

    stmt.finalize()

})

