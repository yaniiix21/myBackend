const express = require('express')
const router = express.Router()
const auth = require('../auth')
const orderController = require('../controllers/order')

// Create Order

router.post('/:id/users/checkout', auth.verify, (req,res) => {
	orderController.createOrder(req.params,req.body).then(result => res.send(result))
})

// Retrieve all order

router.get('/:id/users/orders',(req,res) => {
	orderController.viewOrder(req.params).then(result => res.send(result))
})


// Retrieve User Order

router.post('/:id/users/myOrder', auth.verify,(req,res) => {
	orderController.myOrder(req.params,req.body).then(result => res.send(result))
})

module.exports = router