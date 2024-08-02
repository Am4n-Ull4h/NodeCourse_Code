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
    userName : {
        type: String,
        required: true,
        unique: true
    },
    contact : {
        type : Number,
        required: true,
        unique: true,
        minlength: 10,
        maxlength: 15
    },
    gender : {
        type: String,
        required: true,
        enum: ['Male', 'Female', 'Other']
    }
}, {timestamps : true}, {collection : 'users'} );


let userModel = mongoose.model('users', userSchema);


module.exports = userModel;