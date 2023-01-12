const express = require("express");
const router = express.Router();
const courseController = require("../controllers/course");
const auth = require("../auth");

// Route for creating a course
/*router.post("/", auth.verify, (req, res) => {

	const data = {
		course: req.body,
		isAdmin: auth.decode(req.headers.authorization).isAdmin
	}
	courseController.addCourse(data).then(resultFromController => res.send(resultFromController))
})*/

router.post("/", auth.verify, (req, res) => {

    const userData = auth.decode(req.headers.authorization)

    courseController.addCourse(req.body, {userId: userData.id, isAdmin:userData.isAdmin}).then(resultFromController => res.send(resultFromController))
})

// Retrieve all courses
router.get("/all", (req, res) =>{
	courseController.getAllCourses().then(resultFromController => res.send(resultFromController));
})

// Retrieve all active courses
router.get("/", (req, res) => {
	courseController.getAllActive().then(resultFromController => res.send(resultFromController));
})

// Retrieve a specific course
router.get("/:courseId", (req, res) => {
	console.log(req.params.courseId);

	courseController.getCourse(req.params).then(resultFromController => res.send(resultFromController));
})

// Update a course
router.put("/:courseId", auth.verify, (req, res) =>{
	courseController.updateCourse(req.params, req.body).then(resultFromController => res.send(resultFromController))
})

// Archiving a course
router.put("/:courseId/archive", auth.verify, (req,res) => {
	courseController.archiveCourse(req.params).then(resultFromController => res.send(resultFromController))
})
module.exports = router;