import { useState, useEffect, useContext } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import Swal from 'sweetalert2';
import UserContext from '../UserContext';

export default function Login(props) {
    // Allows to consume the User context object and it's properties to use for user validation
    const {user, setUser} = useContext(UserContext);

    // State hooks to store the values of the input fields
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isActive, setIsActive] = useState(true);

    function authenticate(e){
        e.preventDefault();

        // Process a fetch request to the corresponding backend API
        /* Syntax:
            fetch('url', {options})
            .then(res => res.json())
            .then(data => {})
        */
        fetch('http://localhost:4000/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data.accessToken)

            if(typeof data.accessToken !== "undefined"){
                localStorage.setItem('token', data.accessToken)
                retrieveUserDetails(data.accessToken);

                Swal.fire({
                    title: "Login Successful",
                    icon: "success",
                    text: "Welcome to Zuitt!"
                })
            }
            else{
                Swal.fire({
                    title: "Authentication failed",
                    icon: "error",
                    text: "Check your login details and try again."
                })
            }

        })

        // Set the email of the authenticated user in the local storeage
        /* Syntax:
            localStorage.setItem('propertyName', value);
        */
        //localStorage.setItem('email', email);

        // Set the global user state to have properties obtained from local storage
        /*setUser({
            email: localStorage.getItem('email')
        });*/

        setEmail('');
        setPassword('');

        console.log(`${email} has been verified! Welcome back!`);
    }  

    const retrieveUserDetails = (token) => {
        fetch('http://localhost:4000/api/users/details', {
            headers: {
                Authorization: `Bearer ${ token }`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);

            setUser({
                id: data._id,
                isAdmin: data.isAdmin
            })
        })
    }

    useEffect(() => {
        // Validation to enable the submit button when all fields are populated
        if(email !== '' && password !== ''){
            setIsActive(true);
        }
        else{
            setIsActive(false);
        }
    }, [email, password])

    return (
        (user.id !== null) ?
            <Redirect to="/courses" />
        :
        <Container>
            <h1>Login</h1>
            <Form onSubmit={(e) => authenticate(e)}>
               <Form.Group className="mb-3" controlId="userEmail">
                   <Form.Label>Email address</Form.Label>
                   <Form.Control 
                       type="email" 
                       placeholder="Enter email" 
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       required
                   />
               </Form.Group>

               <Form.Group className="mb-3" controlId="password">
                   <Form.Label>Password</Form.Label>
                   <Form.Control 
                       type="password" 
                       placeholder="Password"
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                       required
                   />
               </Form.Group>

               { isActive ?
                   <Button variant="primary" type="submit" id="submitBtn">
                       Submit
                   </Button>
                   :
                   <Button variant="primary" type="submit" id="submitBtn" disabled>
                       Submit
                   </Button>
               }
                           
            </Form> 
        </Container>
        
    )
}

