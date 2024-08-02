let mongoose = require('mongoose');
let userSchema = require('./Schema')

let userModel = mongoose.model('User', userSchema);

module.exports = userModel;