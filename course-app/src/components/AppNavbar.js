// Import necessary react-bootstrap components
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Fragment, useState, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import { Link, NavLink } from 'react-router-dom';
import UserContext from '../UserContext';

export default function AppNavbar(){
	// State to store the user information stored in the login page
	// const [user, setUser] = useState(localStorage.getItem("email"));
	// console.log(user);

	const {user} = useContext(UserContext);

	return (
		<Navbar bg="light" expand="lg">
		  <Container>
		    <Navbar.Brand as={Link} to="/">Zuitt</Navbar.Brand>
		    <Navbar.Toggle aria-controls="basic-navbar-nav" />
		    <Navbar.Collapse id="basic-navbar-nav">
		      <Nav className="me-auto">
		        <Nav.Link as={NavLink} to="/" exact>Home</Nav.Link>
		        <Nav.Link as={NavLink} to="/courses" exact>Courses</Nav.Link>
		        { (user.id !== null) ?
		        	<Nav.Link as={NavLink} to="/logout" exact>Logout</Nav.Link>
		        	:
		        	<Fragment>
		        		<Nav.Link as={NavLink} to="/login" exact>Login</Nav.Link>
		        		<Nav.Link as={NavLink} to="/register" exact>Register</Nav.Link>
		        	</Fragment>
		        } 
		      </Nav>
		    </Navbar.Collapse>
		  </Container>
		</Navbar>
	)
}
