const User = require('../models/User')
const Product = require('../models/Product')
const bcrypt = require('bcrypt')
const auth = require('../auth')

// Create a Product for admin only

module.exports.createProduct = (reqParams,reqBody) => {
	return User.findById(reqParams.id).then((result,err)=> {
		if(result.isAdmin == false){
			return "Admin access only"
		}else{

			let newProduct = new Product({
				name: reqBody.name,
				description: reqBody.description,
				price: reqBody.price
			})
			return newProduct.save().then((product,err)=>{
				if(err){
					return "Can't save a product"
				}else{
					return "Product successfully save"
				}
			})
		}
	})
}

// Retrieve all active products

module.exports.activeProduct = () => {
	return Product.find({isActive: true}).then(result => {
		return result
	})
}

// View a Product

module.exports.viewProduct = (reqParams) => {
	return Product.findById(reqParams.productId).then(result => {
		return result
	})
}

// Update a Product (Admin only)

module.exports.updateProduct = (reqParams,reqBody) => {
	return User.findById(reqParams.id).then((result,err)=> {
		if(result.isAdmin == false){
			return "Admin access only"
		}else{
			let updatedProduct = {
				name: reqBody.name,
				description: reqBody.description,
				price: reqBody.price
			}

			return Product.findOneAndUpdate(reqParams.courseId,updatedProduct).then((product,err)=> {
				if(err){
					return "Can't update a product"
				}else{
					return "Product successfully update"
				}
			})
		}
	})
}

// Archive a Product (Admin Only)

module.exports.archiveProduct = (reqParams,reqBody) => {
	return User.findById(reqParams.id).then((result,err) => {
		if(result.isAdmin !== true){
			return "Admin access only"
		}else{
			let archivedProduct = {
				isActive: false
			}
			return Product.findByIdAndUpdate(reqParams.courseId,archivedProduct).then((course,err)=> {
				if(err){
					return "Can't archive a product"
				}else{
					return "Product successfully archive"
				}
			})
		}
	})
}