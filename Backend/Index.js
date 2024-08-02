let express = require('express');
let app = express();
const PORT = process.env.PORT || 5000;

let userRouter = require('./Routes/userRoutesApis')


require('./Connection/Connection')

app.use(express.json())


app.use('/users', userRouter)
app.listen(PORT)