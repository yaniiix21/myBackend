const express = require('express');
const router = express.Router();
const auth = require("../auth");

const userController = require('../controllers/user')

//Route for checking if the user's email already exists in the database
router.post('/checkEmail', (req, res)=>{
	userController.checkEmailExists(req.body).then(result => res.send(result))
})


//Routes for User Registration
router.post('/register', (req, res) => {
	userController.registerUser(req.body).then(result => res.send(result));
})


//Routes for authenticating a user
router.post('/login', (req, res) => {
	userController.loginUser(req.body).then(result => res.send(result))
})

// Route for retrieving user details
/*router.post("/", auth.verify, (req, res) => {

	const data = {
		course: req.body,
		isAdmin: auth.decode(req.headers.authorization).isAdmin
	}

	courseController.addCourse(data).then(resultFromController => res.send(resultFromController));

});
*/
router.get("/details", auth.verify, (req, res) => {

	const userData = auth.decode(req.headers.authorization);

	// Provides the user's ID for the getProfile controller method
	userController.getProfile({userId : userData.id}).then(resultFromController => res.send(resultFromController));

});

// Route to enroll user to a course
router.post("/enroll", auth.verify, (req, res) => {
	let data = {
		userId : auth.decode(req.headers.authorization).id,
		courseId : req.body.courseId
	}

	userController.enroll(data).then(resultFromController => res.send(resultFromController));
})


module.exports = router;