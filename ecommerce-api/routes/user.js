const express = require('express')
const router = express.Router()
const auth = require('../auth')
const userController = require('../controllers/user')


// routes for registration
router.post('/register', (req,res) => {
	userController.registerUser(req.body).then(result => res.send(result))
})

// routes for aunthenticating a user
router.post('/login', (req,res) => {
	userController.loginUser(req.body).then(result => res.send(result))
})

// Set user as admin (Admin Only)

router.put('/:id/setting', auth.verify, (req,res) => {

	userController.setUser(req.params,req.body).then(result => res.send(result))
})


module.exports = router 