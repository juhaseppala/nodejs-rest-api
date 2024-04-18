import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('db.sqlite')

db.exec("CREATE TABLE IF NOT EXISTS user (username TEXT, age INT)")

db.serialize(()=>{

    const stmt = db.prepare("INSERT INTO user VALUES (?, ?)")

    stmt.run("Pasi", 50)

    stmt.finalize()

})

