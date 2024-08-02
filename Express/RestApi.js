let express = require('express');
let app = express();

const PORT = process.env.PORT || 5000;
let fs = require('fs');



let usersData = require('./MOCK_DATA.json')

app.use(express.json());



app.use(express.urlencoded({ extended: false}));

app.use((req, res, next)=>{
    if(!fs.existsSync('./Express/Aman.txt')){
        fs.writeFile('./Express/Aman.txt', `\n ${new Date().getDate()} ${req.method} ${req.url}`, ()=>{});
        next();
    }else{
        fs.appendFile('./Express/Aman.txt', `\n ${new Date().getDate()+ ' ' + new Date().getMonth() + ' ' +new Date().getFullYear()} ${req.method} ${req.url}`, ()=>{});
        next();
    }
})

// app.get('/users/:id', (req, res) => {
//     // res.send(usersData)

//     let fil = req.params.id.charAt(0).toUpperCase() + req.params.id.slice(1).toLowerCase(); 
//     let aman = usersData.filter (user => user.gender === fil ? user : null)


//     res.json(aman)
// });




app.route('/users').get((req, res)=>{
    res.json(usersData)
}).post((req, res)=>{
    let newUser = req.body;
    usersData.push({...newUser, id : usersData.length + 1});
    fs.writeFile('./Express/MOCK_DATA.json', JSON.stringify(usersData), ()=>{});
    res.send(usersData);
});



app.route('/users/:id').get((req, res)=>{
    let singleUser = usersData.find((user)=> user.id === parseInt(req.params.id) ? user : null)
    res.json(singleUser);
})

app.listen(PORT);