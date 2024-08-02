// const http = require('http')
// const fs = require('fs')

// let server = http.createServer((req, res) => {

//     let data = `${Date.now()} : Rquest recieved \n`

//     fs.appendFile('./Server/UserRequestData.txt',data, (err,rez)=>{
//         console.log(data)
//         res.end('Ended successfully')
//     })
// })


// // fs.unlink('./UserRequestData.txt', ()=>{})


// server.listen(5000)






        // 2nd Practice


    // const FS = require('fs');
    // const HTTP = require('http').createServer((req, res)=>{
    //     FS.appendFile('./Server/UserRequestData.txt',`'Hellooooo' \n`, ()=>{
    //         res.write('Hellooo')
    //         res.end()
            
    //     })
        
    // })


    // HTTP.listen(5000)



    // 3RD PRACTICE

    // let HTTP = require('http').createServer((req, res)=>{
    //     res.write('Helloooo')
    //     console.log('Welcome Site')
    //     res.end()

    // })


    // HTTP.listen(5000, (req, res)=>{
    //     console.log('Server is running on port 5000')
    // })


    let fs = require('fs')

    // fs.writeFile('./Server/Aman.js', `'Welcome Aman'`, ()=>{})


    // fs.unlink('./Server/Aman.js' ,()=>{})


        // fs.appendFile('./Server/Aman.js','\n "Request Done"', (err,rzlt)=>{
        //     if(err){
        //         console.log('Error :',err)
        //     }else{
        //         console.log('Data added',rzlt)
        //     }
        // })



        let http = require('http').createServer((req, res) =>{
            switch(req.url){
                case '/':
                    res.write('Home Page')
                    break;
                case '/about':
                    res.write('About Page')
                    break;
                default:
                    res.write('Not Found')
                    break;
            }
            res.end()
        })


        http.listen(5000, ()=>{
            console.log('Server is running on port 5000')
        })