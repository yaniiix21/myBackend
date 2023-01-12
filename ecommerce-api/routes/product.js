const express = require('express')
const router = express.Router()
const auth = require('../auth')
const productController = require('../controllers/product')


// Create Product

router.post('/:id/create', auth.verify, (req,res) => {
	productController.createProduct(req.params,req.body).then(result => res.send(result))
})

// Retrieve all active products

router.get('/', (req,res) => {
	productController.activeProduct().then(result => res.send(result))
})

// View a Product

router.get('/:productId',(req,res) => {
	productController.viewProduct(req.params).then(result => res.send(result))
})

// Update a Product (Admin Only)

router.put('/:id/:productId/update', auth.verify,(req,res)=> {
	productController.updateProduct(req.params,req.body).then(result => res.send(result))
})
// Archive a Product (Admin Only)
router.put('/:id/:productId/archive', auth.verify, (req,res)=> {
	productController.archiveProduct(req.params,req.body).then(result => res.send(result))
})

module.exports = router 