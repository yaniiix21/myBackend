const Course = require("../models/Course");

// Creating a course
/*module.exports.addCourse = (data) => {

	// User is an admin
	if (data.isAdmin) {

		// Creates a variable "newCourse" and instantiates a new "Course" object using the mongoose model
		// Uses the information from the request body to provide all the necessary information
		let newCourse = new Course({
			name : data.course.name,
			description : data.course.description,
			price : data.course.price
		});

		// Saves the created object to our database
		return newCourse.save().then((course, error) => {

			// Course creation successful
			if (error) {

				return false;

			// Course creation failed
			} else {

				return true;

			};

		});

	// User is not an admin
	} else {
		return false;
	};
	

};*/

module.exports.addCourse = (reqBody, userData) => {

    return Course.findById(userData.userId).then(result => {

        if (userData.isAdmin) {
            return "You are not an admin"
        } else {
            let newCourse = new Course({
                name: reqBody.name,
                description: reqBody.description,
                price: reqBody.price
            })
        
            //Saves the created object to the database
            return newCourse.save().then((course, error) => {
                //Course creation failed
                if(error) {
                    return false
                } else {
                    //course creation successful
                    return "Course creation successful"
                }
            })
        }
        
    });    
}

// Retrieve all courses
module.exports.getAllCourses = () => {
	return Course.find({}).then(result => {
		return result;
	})
}

// Retrieve all active courses
module.exports.getAllActive = () => {
	return Course.find({isActive : true}).then(result => {
		return result;
	})
};

// Retrieve specific course
module.exports.getCourse = (reqParams) => {
	return Course.findById(reqParams.courseId).then(result => {
		return result;
	})
}

// Update a course
module.exports.updateCourse = (reqParams, reqBody) => {
	let updatedCourse = {
		name : reqBody.name,
		description : reqBody.description,
		price : reqBody.price
	}

	return Course.findByIdAndUpdate(reqParams.courseId, updatedCourse).then((course, error) => {
		if(error){
			return false;
		}
		else{
			return true;
		}
	})
}

// Archive a course
module.exports.archiveCourse = (reqParams) => {
	let updatedActiveField = {
		isActive : false
	};

	return Course.findByIdAndUpdate(reqParams.courseId, updatedActiveField).then((course, error) => {

		if (error){
			return false;
		}
		else{
			return true;
		}
	})
}