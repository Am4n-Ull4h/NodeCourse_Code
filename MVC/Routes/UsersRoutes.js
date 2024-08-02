let express = require('express');
let router = express.Router();
let { handleAllUsers, handleAddUser, handleUpdateUser, handleDeleteUser, handleSingleUser } = require('../Controllers/UserApi')

router.route('/').get(handleAllUsers).post(handleAddUser)
router.route('/:id').patch(handleUpdateUser).delete(handleDeleteUser).get(handleSingleUser)



module.exports = router;