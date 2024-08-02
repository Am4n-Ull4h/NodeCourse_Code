let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    firstName : {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    userName : {
        type: String,
        required: true,
        unique: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    gender : {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        default:'Male'
    }
}, {timestamps: true}, {collection : 'users'});

let userModel = mongoose.model('User', userSchema);

module.exports = userModel;