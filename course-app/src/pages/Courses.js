import { Fragment, useEffect, useState } from 'react';
import CourseCard from '../components/CourseCard';
//import courses from '../data/courses';

export default function Courses() {
	//Checks to see if the mock data was captured
		// console.log(courses);
		// console.log(courses[0]);

		// State that will be used to store the courses retrieved from the database
		const [courses, setCourses] = useState([])

		// Retrieve the courses from the database upon initial render of the "Courses" component
		useEffect(() => {
			fetch('http://localhost:4000/api/courses/all')
			.then(res => res.json())
			.then(data => {
				console.log(data);

				// Sets the "courses" state to map the data retrieved from the fetch request into several "CourseCard" components
				setCourses(
					data.map(course => {
						return (
							<CourseCard key={course._id} courseProp={course} />
						);
					})
				)
				
			})
		}, []);

		/* const coursesData = courses.map(course => {
			return (
				<CourseCard key={course.id} courseProp={course} />
			);
		}) */

	return(
		<Fragment>
			{courses}
		</Fragment>
	)
}
