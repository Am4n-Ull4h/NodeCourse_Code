let userModel = require("../Models/UsersModel");

let handleAllUsers = async (req, res) => {
  try {
    let users = await userModel.find({});
    if (!users) return res.status(404).send({ message: "No users found" });
    res.send(users);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

let handleAddUser = async (req, res) => {
  let user = new userModel(req.body);
  try {
    let newUser = await user.save();
    res.send({ newUser, message: "New user created successfully" });
  } catch (err) {
    if (err.code === 11000) {
        // Extract the key pattern to identify which field is duplicated
        const field = Object.keys(err.keyPattern)[0];
        if (field === 'email') {
          res.status(400).send({ message: "Email is already in use" });
        } else if (field === 'userName') {
          res.status(400).send({ message: "Username is already in use" });
        } else {
          res.status(400).send({ message: "Duplicate field error" });
        }
      } else {
        res.status(400).send({ message: err.message });
      }
  }
};

let handleUpdateUser = async (req, res) => {
  try {
    let updateUser = await userModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updateUser) return res.status(404).send({ message: "User not found" });
    res.send({ updateUser, message: "User updated successfully" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

let handleDeleteUser = async (req, res) => {
    try {
      let deleteUser = await userModel.findByIdAndDelete(req.params.id);
      if (!deleteUser) return res.status(404).send({ message: "User not found" });
      res.send({ message: "User deleted successfully" });
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  };

let handleSingleUser = async (req, res) => {
    try {
      let user = await userModel.findById(req.params.id);
      if (!user) return res.status(404).send({ message: "User not found" });
      res.send(user);
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  };


module.exports = {
  handleAllUsers,
  handleAddUser,
  handleUpdateUser,
  handleDeleteUser,
  handleSingleUser
};
