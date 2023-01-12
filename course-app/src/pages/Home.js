import { Fragment } from 'react';
import Banner from '../components/Banner';
// import CourseCard from '../components/CourseCard';
import Highlights from '../components/Highlights';

export default function Home(){

	const data = {
	    title: "Zuitt Coding Bootcamp",
	    content: "Opportunities for everyone, everywhere",
	    destination: "/courses",
	    label: "Enroll now!"
	}


	return (
		<Fragment>
			<Banner data={data}/>
			<Highlights />
		</Fragment>
	)
}
