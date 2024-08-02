let express = require("express");
let app = express();
let mongoose = require("mongoose");
let PORT = process.env.PORT || 5000;

mongoose
  .connect("mongodb://localhost:27017/Practice")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));

app.use(express.json());

let userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
    },
  },
  { collection: "admins" },
  { timestamps: true }
);

let userModel = mongoose.model("admin", userSchema);

app
  .route("/admins")
  .get(async (req, res) => {
    try {
      let users = await userModel.find({});
      res.send(users);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  })
  .post(async (req, res) => {
    let newUser1 = new userModel(req.body);
    try {
      let newUser = await newUser1.save();
      res.send({ newUser, message: "new user created successfully" });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  });

// Get single user

app
  .route("/admins/:id")
  .get(async (req, res) => {
    try {
      let singleAdmin = await userModel.findById(req.params.id);
      if (!singleAdmin) res.status(200).send({message: "No users found"});
      res.send(singleAdmin);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  })
  .patch(async (req, res) => {
    try {
      let updatedUser = await userModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.send(updatedUser);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  })
  .delete(async (req, res) => {
    try {
      let userDeleted = await userModel.findByIdAndDelete(req.params.id);
      if (!userDeleted)
        return res.status(404).send({ message: "User not found" });
      res.send({ message: "User deleted" });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
