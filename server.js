import express, { Router } from 'express'
import { db } from './database/sqlite.js'

const app = express()
const router = Router()

app.use(express.static("public"))
app.use(express.json())

router.get("/user", (req, res)=>{

    db.all('SELECT * FROM user', [], (err, rows)=>{

        if(err){
            return res.status(404).send('User not found')
        }

        res.send(JSON.stringify(rows))

        console.log(rows)
        rows.forEach((row)=>{
            console.log(row)
        })

        // res.send("dataa myöhemmin tästä.")

    })

})

router.get("/user/:id", (req, res)=>{
    const id = req.params.id
    //res.send("Tässä palautetaan käyttäjä id:n perusteella" + req.params.id)

    db.get('SELECT * FROM user WHERE id = ?', [id], (err, row)=>{
        
        if (err){
            return res.status(404).send("User not found")
        }

        res.send(JSON.stringify(row))

    })


})

router.post("/user", (req, res)=>{
    console.log(req.body)
    res.send("Tässä luodaan uusi käyttäjä")
})

router.put("/user", (req, res)=>{

    res.send("Tällä korvataan aiempi data tietokannasta")
})

router.patch("/user", (req, res)=>{
    res.send("Tällä päivitetään yksittäinen tieto tietokannasta")
})

router.delete("/user/:id", (req, res)=>{
    res.send("Tällä poistetaan yksittäinen resurssi")
})

app.use('/api/v1', router)

app.use(express.static('public'))

app.listen(3000, ()=>{
    console.log("http-palvelin käynnistetty osoitteeseen http://localhost:3000")
})
