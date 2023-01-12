const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
	email: {
		type: String,
		required: [true, "Email is required "]
	},
	productName: {
		type: String,
		required: [true, "Product name is required"]
	},
	totalAmount: {
		type: Number,
		required: [true, "Total amount is required"]
	},
	purchasedOn: {
		type: Date,
		default: new Date()
	},
	orderProduct: [
		{
			userId: {
				type: String,
				required: [true, "User id is required "]
			},
			productId: {
				type: String,
				required: [true, "Product id is required"]
			}
		}
	]
})

module.exports = mongoose.model('Order', orderSchema)