// let express = require('express');

// let app = express();
// let data = require('./MOCK_DATA.json')

let cors = require('cors');



// app.use(cors());

// // FOR JSON FORMAT FOR ALL LANGUAGES

// app.get('/', (req, res) => {
//     return res.send(data);
// });


// // DATA ONLY FOR WEB USER

// app.get('/users', (req, res) => {
//     let html = `
//     <ul>
//     ${data.map(user => `<div  style='display:flex;justify-content:space-evenly;'><li>${user.id}<li>${user.first_name}</li><li>${user.last_name}</li></div>`).join('')}
//     </ul>
//     `
//     res.send(html)
// })


// // SINGLE USER


// // app.get('/users/:id', (req, res) => {
// //     let user = data.find(user => user.id === parseInt(req.params.id));
// //     if (!user) return res.status(404).send('User not found');
// //     res.send(user);
// // })


// app.get('/users/:id',(req, res)=>{
//     let userId = req.params.id

//     let user = data.find((user)=> user.id === parseInt(userId))

//     res.send(user)
// })

// app.listen('5000', (req, res) => {
//     console.log('Server is running on port 5000');
// })







            // 2ND PRACTICE


    let express = require('express');

    let app = express();

    let data = require('./MOCK_DATA.json')


    app.use(cors())

    // app.get('/users',(req,res)=>{
    //     res.send(data)
    // })




    app.get('/users/:id', (req, res)=>{
        let singleUser = data.find((user)=> user.id === parseInt(req.params.id) ? user : '')


        res.send(singleUser);
    })


    app.listen('5000', (req, res) => {
        console.log('Server is running on port 5000');
    })