// Import the Button, Row, and Col components from react-boostrap
// import Button from 'react-bootstrap/Button';
// // Bootstrap grid system components
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Banner({data}){

	console.log(data);
	const {title, content, destination, label} = data;

	return (
		<Row>
			<Col className="p-5">
				<h1>{title}</h1>
				<p>{content}</p>
				<Link to={destination}>{label}</Link>
			</Col>
		</Row>
	)
}
