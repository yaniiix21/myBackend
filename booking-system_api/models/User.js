const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

	firstName: {
		type: String,
		required: [true, "First Name is required"]
	},
	lastName: {
		type: String,
		required: [true, "Last Name is required"]
	},
	age: {
		type: String,
		required: [true, "Age is required"]
	},
	gender: {
		type: String,
		required: [true, "Gender is required"]
	},
	email: {
		type: String,
		required: [true, "Email is required"]
	},
	password: {
		type: String,
		required: [true, "Password is required"]
	},
	mobileNo: {
		type: String,
		required: [true, "Mobile Number is required"]
	},
	isAdmin: {
		type: Boolean,
		default: false
	},
	//enrollment field will be an array of objects
	enrollments: [
		{
			courseId: {
				type: String,
				required: [true, 'Course ID is required']
			},
			enrolledOn: {
				type: Date,
				default: new Date()
			},
			status: {
				type: String,
				default: "Enrolled"
			}
		}
	]

})

module.exports = mongoose.model('User', userSchema);