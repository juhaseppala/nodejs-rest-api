import sqlite3 from 'sqlite3';

export const db = new sqlite3.Database('database/db.sqlite')

db.exec("CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT NOT NULL UNIQUE, password TEXT NOT NULL, age INTEGER, jti TEXT, role TEXT NOT NULL)STRICT")

db.exec("CREATE TABLE IF NOT EXISTS events(id INTEGER PRIMARY KEY AUTOINCREMENT, event TEXT NOT NULL, location TEXT NOT NULL, event_date TEXT NOT NULL)")

//db.serialize(()=>{

    //const stmt = db.prepare("INSERT INTO user VALUES (NULL, ?, ?)")

    //stmt.run("Juha", 21)

    //stmt.finalize()

//})

