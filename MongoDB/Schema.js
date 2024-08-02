let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    firstName : {
        type: String,
        required: true
    },
    lastName : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    gender : {
        type: String,
        enum: ['male', 'female', 'other','Male', 'Female', 'Other'],
        default: 'male'
    }
}, {timestamps : true},);

module.exports = userSchema;