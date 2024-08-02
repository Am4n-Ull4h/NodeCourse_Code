let express = require('express');
let app = express();
require('./Connection');
let userModel = require('./Model');

let PORT = process.env.PORT || 5000;

app.use(express.json());

// Get all users

app.route('/users').get(async (req, res) => {
    try {
        let users = await userModel.find({});
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}).post(async (req, res) => {
    const newUser = new userModel(req.body);
    try {
        let user = await newUser.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get single user

app.route('/users/:id').get(async (req, res) => {
    try {
        let user = await userModel.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}).put(async (req, res) => {
    try {
        let user = await userModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}).delete(async (req, res) => {
    try {
        let user = await userModel.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})


app.listen(PORT)




