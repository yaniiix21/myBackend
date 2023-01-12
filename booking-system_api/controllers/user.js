const User = require('../models/User');
const Course = require('../models/Course');
const bcrypt = require('bcrypt');
const auth = require('../auth');
/*
Check if the email already exists
1. Use find() method to find duplicate emails
2. Error handling, if no duplicate found, return false, else, return true

IMPORTANT NOTE: best practice to return a result is to use a boolean or return an object/array of object. because string is limited in our backend, and can't be connected to our frontend
*/

module.exports.checkEmailExists = (reqBody) =>{
	return User.find({ email: reqBody.email }).then(result => {
		if(result.length > 0) {
			return true;
		} else{
			//no duplicate email found
			return false;
		}
	})
}


//User Registration
/*
Steps:
1. Create a new User object using the mongoose model and the info from the request body.
2. Make sure that the password is encrypted
3. Save the new user to the database
*/

module.exports.registerUser = (reqBody) => {
	let newUser = new User({
		firstName: reqBody.firstName,
		lastName: reqBody.lastName,
		age: reqBody.age,
		gender: reqBody.gender,
		email: reqBody.email,
		// 10 is the value provided as the number of "salt" rounds that the bcrypt algorithm will run in order to encrypt the password
		password: bcrypt.hashSync(reqBody.password, 10),
		mobileNo: reqBody.mobileNo
	})

	//save
	return newUser.save().then((user, error) =>{
		//if registration failed
		if(error){
			return false;
		}else{
			//User registration is successful
			return true
		}
	})
}



//User authentication
/*
Steps:
1. Check if the user email exist in our database. If user does not exist, return false
2. if the user exists, Compare the password provided in the login form with the password stored in the database.
3. Generate/return a jsonwebtoken if the user is successfully logged in and return false if not
*/

module.exports.loginUser = (reqBody) => {
	//findOne() method returns the first record in the collection that matches the search criteria
	//we use findOne() instead of 'find' method which returns all records that match the search criteria
	return User.findOne({ email: reqBody.email }).then(result => {
		//User does not exist
		if(result == null){
			return false;
		}else{
			//User exists
			//The "compareSync" method is used to compare a non encrypted password from the login form to the encrypted password retrieved from the database and returns 'true' or 'false' value depending on the result
			const isPasswordCorrect = bcrypt.compareSync(reqBody.password, result.password)

			//If the password match/result of the above code is true
			if(isPasswordCorrect){
				//generate access token
				//the mongoose toObject method converts the mongoose object into a plain javascript object
				return { accessToken: auth.createAccessToken(result.toObject())}
			}else{
				//Password do not match
				return false
			}


		}
	})
}


// Retrieve user details
/*
	Steps:
	1. Find the document in the database using the user's ID
	2. Reassign the password of the returned document to an empty string
	3. Return the result back to the frontend
*/
module.exports.getProfile = (data) => {

	return User.findById(data.userId).then(result => {

		// Changes the value of the user's password to an empty string when returned to the frontend
		// Not doing so will expose the user's password which will also not be needed in other parts of our application
		// Unlike in the "register" method, we do not need to call the mongoose "save" method on the model because we will not be changing the password of the user in the database but only the information that we will be sending back to the frontend application
		result.password = "";

		// Returns the user information with the password as an empty string
		return result;

	});

};

// Enroll user to a class
/*	Steps:
	1. Find the document in the database using the user's ID
	2. Add the course ID to the user's enrollement array
	3. Update the document in the MongoDB Atlas Database
*/
module.exports.enroll = async (data) => {
	// Add the course ID in the enrollments array of the user
	let isUserUpdated = await User.findById(data.userId).then(user => {

		// Adds the courseId in the user's enrollments array
		user.enrollments.push({courseId : data.courseId})

		// Saves the updated user information in the database
		return user.save().then((user, error) => {
			if(error){
				return false;
			}
			else{
				return true;
			}
		})
	})

	// Add the user ID in the enrollees array of the course
	let isCourseUpdated = await Course.findById(data.courseId).then(course => {
		// Adds the userId in the course's enrollees array
		course.enrollees.push({userId : data.userId});

		// Saves the updated course information in the database
		return course.save().then((course, error) => {
			if(error){
				return false;
			}
			else{
				return true;
			}
		})
	})
	// Condition that will check if the user and course documents have been updated
	if(isUserUpdated && isCourseUpdated){
		return true;
	}
	else{
		return false;
	}
}