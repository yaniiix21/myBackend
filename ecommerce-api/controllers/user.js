const User = require('../models/User')
const bcrypt = require('bcrypt')
const auth = require('../auth')

// registration form

module.exports.registerUser = (reqBody) => {
	let newUser = new User ({
		email: reqBody.email,
		password: bcrypt.hashSync(reqBody.password, 10),
		isAdmin: reqBody.isAdmin
	})
	return newUser.save().then((user,err) => {
		if(err){
			return "User is not register"
		}else{
			return "User successfully register"
		}
	})
}

// user aunthentication

module.exports.loginUser = (reqBody) => {
	return User.findOne({email: reqBody.email}).then(result => {
		if(result == null){
			return "Email not Found"
		}else{
			const isPassCorrect = bcrypt.compareSync(reqBody.password, result.password)

			if(isPassCorrect){
				return {accessToken: auth.createToken(result.toObject())}
			}else{
				return "Invalid Password"
			}
		}
	})
	
}

// Set user as admin (Admin Only)

module.exports.setUser = (reqParams,reqBody) => {
	return User.findById(reqParams.id).then((result,err) => {
		if(result.isAdmin == false){
			return "Admin access only"
		}else{
			let status = {
				isAdmin: reqBody.isAdmin
			}
			return User.findByIdAndUpdate(reqParams.id,status).then((use,err) => {
				if(err){
					return "Need a status"
				}else{
					return "Successfully change status"
				}
			})	
		}
	})
}  


