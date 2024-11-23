const express = require('express')
const app = express()
const port = 3001
const bodyPerser = require('body-parser')

app.use(bodyPerser.urlencoded({ extended : false }));
app.use(bodyPerser.json());

app.get("/register", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post('/register', (req, res)=> {
    const fullName = req.body.fullName
    const age = req.body.age
    res.send(`<h2>Your name is ${fullName} and 
        age is ${age}</h2>`)
})


// app.post('/register', (req, res)=> {
//     const name = req.body.name
//     const age = req.body.age
//     res.send(`Welcom ${name}, You are ${age}`)
// })

app.listen(port, () => {
    console.log(`Server is running at: http://localhost:${port}`);
})