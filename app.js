const express = require('express')
const sqlite3 = require('sqlite3')
const app = new express()
const db = new sqlite3.Database('./Food')

app.use(express.static('public'))
app.use(express.json())

app.get("/foods", (req,res) => {
    const sql = "SELECT * FROM foods WHERE category = 'dairy';"
    db.all(sql,[],(err, rows) => {
        res.send(rows)
    })
})

app.get("/inventory", (req,res) => {
    const sql = "SELECT * FROM inventory"
    db.all(sql,[],(err, rows) => {
        res.send(rows)
    })
})

//app.post("/friends", (req, res) => {
    //const friendship = req.body
    //const sql = "INSERT INTO users_users (userid1, userid2) VALUES (?,?)"

    //db.run(sql,[friendship.user_id, friendship.friend_id],(err) => {
        //if (err) console.error(err)
        //res.send({
            //message: "You are now friends!",
            //friendshipID: this.lastID
        //})
    //})
//})

app.listen(3000, () => console.log("Server started"))

return db