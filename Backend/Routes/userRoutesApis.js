let express = require('express');
let router = express.Router();

let { handleAllUsers, handleAddUser } = require('../Controllers/UsersController')


router.route('/').get(handleAllUsers).post(handleAddUser)







module.exports = router;