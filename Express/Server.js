let express = require('express')

let app = express()
const PORT = 5000

// app.get('/', (req, res)=>{  
//     // res.send('Aman Ullah');
//     console.log(`Helloo ${req.query.name}`)
// }).listen(5000)




app.get('/about', (req, res)=>{
    res.send('About Aman Ullah');
    console.log(req.query.name)
})


app.listen(PORT)