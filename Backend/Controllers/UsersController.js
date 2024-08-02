let userModel = require('../Models/users')



let handleAllUsers = async (req, res) =>{
    try{
        let users = await userModel.find({});
        res.status(200).send(users);
    }catch(err){
        res.status(500).send({message: err.message});
    }
}

let handleAddUser = async (req, res) =>{
    let addUser = new userModel(req.body)
    try{
        let saveUser = await addUser.save()
        if (!saveUser) return res.status(500).send({message:'No such user added'});

        res.status(200).send(saveUser);
    } catch (err) {
        if (err.code === 11000) { // Mongoose duplicate key error code
          const errorResponse = err.message.errorResponse;
          let keyValue;
      
          if (errorResponse) {
            keyValue = errorResponse.keyValue;
            let errorMessage;
      
            if (keyValue.userName) {
              errorMessage = 'Username already exists';
            } else if (keyValue.email) {
              errorMessage = 'Email already exists';
            } else {
              errorMessage = 'Duplicate key error'; // Generic error message
            }
      
            res.status(400).json({ message: errorMessage });
          } else {
            res.status(500).json({ message: 'Internal server error' });
          }
        } else {
            res.status(500).json({ message: 'Aman server error' });
        }
      }
}
module.exports = {
    handleAllUsers,
    handleAddUser,
}