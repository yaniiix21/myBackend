//Import the usestate
import { useState, useEffect, useContext } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Redirect, useHistory } from 'react-router-dom';
import UserContext from '../UserContext';
import Swal from 'sweetalert2';

export default function Register() {

	const {user, setUser} = useContext(UserContext);

	const history = useHistory();

	//State Hook to store the values of the input fields
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [age, setAge] = useState('');
	const [gender, setGender] = useState('');
	const [mobileNumber, setMobileNumber] = useState('');
	const [email, setEmail] = useState('');
	const [password1, setPassword1] = useState('');
	const [password2, setPassword2] = useState('');

	//State to determine whether submit button is enabled or not
	const [isActive, setIsActive] = useState(false);

	// check if values are successfully binded
/*	console.log(firstName);
	console.log(lastName);
	console.log(age);
	console.log(gender);
	console.log(email);
	console.log(mobileNumber);
	console.log(password1);
	console.log(password2);*/

	localStorage.setItem('firstName', firstName);
	localStorage.setItem('lastName', lastName);
	localStorage.setItem('age', age);
	localStorage.setItem('gender', gender);
	localStorage.setItem('mobileNumber.', mobileNumber);
	localStorage.setItem('email', email);
	localStorage.setItem('password1', password1);
	localStorage.setItem('password2', password2);



	//Function to simulate user registration 
	function registerUser(e) {
		//Prevent page redirection via form submission
		e.preventDefault()

		//Clear input fields
		setFirstName('');
		setLastName('');
		setAge('');
		setGender('');
		setMobileNumber('');
		setEmail('');
		setPassword1('');
		setPassword2('');

		//alert('Thank you for registering!')

		fetch('http://localhost:4000/api/users/checkEmail', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify
			({
                email: email,
            })
		})
		.then(res => res.json())
        .then(data => {
            console.log(data)
				if(data === true){
						Swal.fire({
							title: "Successfully registered",
							icon: "success",
							text: "You have successfully registered an account."
						})
						history.push("/login")
			}else{
				Swal.fire({
							title: "Duplicate email found!",
							icon: "error",
							text: "Please provide a different email."
						})
					}
				})
			}

	useEffect(() => {
		//Validation to enable the submit button when all fields are populated and both passwords match
		if((firstName !== '' && lastName !== '' && age !== '' && gender !== '' && mobileNumber !== '' && email !== '' && password1 !== '' &&password2 !== '') && (password1 === password2)){
			setIsActive(true)
		}else{
			setIsActive(false)
		}

	}, [firstName, lastName, age, gender, mobileNumber, email, password1, password2])
	
	return(
		
		(user.email === null) ?
			<Redirect to='./courses'/>
		:
		<Container>
			<h1>Register</h1>

			<Form onSubmit={(e) => registerUser(e)}>
			   <Form.Group className="mb-3" controlId="userFirstName">
			  	{/*<h3>Register</h3>*/}
			    <Form.Label>First Name</Form.Label>
			    <Form.Control 
			    	type="text" 
			    	placeholder="Enter First Name" 
			    	value = {firstName}
			    	onChange = { e => setFirstName(e.target.value)}
			    	required 
			    />
			  </Form.Group>

			   <Form.Group className="mb-3" controlId="userLastName">
			  	
			    <Form.Label>Last Name</Form.Label>
			    <Form.Control 
			    	type="text" 
			    	placeholder="Enter Last Name" 
			    	value = {lastName}
			    	onChange = { e => setLastName(e.target.value)}
			    	required 
			    />
			  </Form.Group>

			  <Form.Group className="mb-3" controlId="userAge">
			  	
			    <Form.Label>Age</Form.Label>
			    <Form.Control 
			    	type="number" 
			    	placeholder="Enter Age" 
			    	value = {age}
			    	onChange = { e => setAge(e.target.value)}
			    	required 
			    />
			  </Form.Group>

			  <Form.Group className="mb-3" controlId="userGender">
			  
			    <Form.Label>Gender</Form.Label>
			    <Form.Control 
			    	type="text" 
			    	placeholder="Enter Gender" 
			    	value = {gender}
			    	onChange = { e => setGender(e.target.value)}
			    	required 
			    />
			  </Form.Group>


			  <Form.Group className="mb-3" controlId="userMobileNumber">
			    <Form.Label>Mobile Number</Form.Label>
			    <Form.Control 
			    	type="tel"  
			    	placeholder="Enter Mobile Number" 
			    	value = {mobileNumber}
			    	onChange = { e => setMobileNumber(e.target.value)
			    	}
			    	maxlength = "11"
			    	required 
			    />
			  </Form.Group>

			   <Form.Group className="mb-3" controlId="userEmail">
			    <Form.Label>Email address</Form.Label>
			    <Form.Control 
			    	type="email" 
			    	placeholder="Enter email" 
			    	value = {email}
			    	onChange = { e => setEmail(e.target.value)}
			    	required 
			    />
			    <Form.Text className="text-muted">
			      We'll never share your email with anyone else.
			    </Form.Text>
			  </Form.Group>

			  <Form.Group className="mb-3" controlId="password1">
			    <Form.Label>Password</Form.Label>
			    <Form.Control 
			    	type="password" 
			    	placeholder="Password" 
			    	value = {password1}
			    	onChange = { e => setPassword1(e.target.value)}
			    	required
			    />
			  </Form.Group>

			   <Form.Group className="mb-3" controlId="password2">
			    <Form.Label>Verify Password</Form.Label>
			    <Form.Control 
			    	type="password" 
			    	placeholder="VerifyPassword" 
			    	value = {password2}
			    	onChange = { e => setPassword2(e.target.value)}
			    	required
			    	/>
			  </Form.Group>

			{/*Conditionally render submit button based on isActive state*/}
			  { isActive ? 
					<Button variant="danger" type="submit" id="submitBtn">
					    Submit
					</Button>
				:

					<Button variant="danger" type="submit" id="submitBtn" disabled>
					    Submit
					</Button>
			  }

			</Form>
		</Container>
	)
}

