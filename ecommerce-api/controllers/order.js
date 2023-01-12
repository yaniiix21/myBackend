const User = require('../models/User')
const Product = require('../models/Product')
const Order = require('../models/Order')
const bcrypt = require('bcrypt')
const auth = require('../auth')

module.exports.createOrder = (reqParams,reqBody) => {

	return User.findById(reqParams.id).then((result,err) => {
		if(result.isAdmin == true){
			return "User access only"
		}else{
			return Product.findOne({name: reqBody.name}).then(order => {
				if(order == null){
					return "Product do not exist"
				}else{
					let newOrder = Order({
						email: result.email,
						productName: order.name,
						totalAmount: order.price,
						orderProduct: [{
							userId: result._id,
							productId: order._id
						}]
					})
					return newOrder.save().then((result,err) => {
						if(err){
							return "Can't make an order"
						}else{
							return "Order move to cart"
						}
					})
					
				}
			})
		}
	})
}

// Retrieve All Orders

module.exports.viewOrder = (reqParams) => {
	return User.findById(reqParams.id).then((result,err) => {
		if(result.isAdmin !== true){
			return "Admin access only"
		}else{
			return Order.find({}).then(allOrder => {
				return allOrder
			})
		}
	})
	
}


// Retrieve User Orders 

module.exports.myOrder = (reqParams,reqBody) => {
	return User.findById(reqParams.id).then(result => {
		if(result.isAdmin == true){
			return "User access only"
		}else{
			return Order.find({email: reqBody.email}).then(purchase => {
				return purchase
			})
		}
	})
}
