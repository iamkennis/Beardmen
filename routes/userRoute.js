const express = require('express');
const userController = require('../controller/userController')
const userAuth = require('../auth/userAuth')


const router = express.Router();

router.post('/signup', userAuth.signup);
router.post('/signin', userAuth.signin);

router.route('/')
    .get(userController.getAllUser)
    // .post(userController.createUser)

// router.route('/:id')
//     .get(userController.getUser)
//     .patch(userController.updateUser)
//     .delete(userController.deleteUser)

module.exports = router;