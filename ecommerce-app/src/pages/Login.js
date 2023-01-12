import { useState, useEffect, useContext } from 'react';
import { Form, Button, Container, Col, Row } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import Swal from 'sweetalert2';
import UserContext from '../UserContext';
import Carousel from 'react-bootstrap/Carousel'

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

    return (
        (user.id !== null) ?
            <Redirect to="/courses" />
        :
        <Container>
            <Row className="justify-content-md-center">


                <Col xs={{ order:2}} md={{ order:1}} lg={{ order:1}}>
                    <Carousel 
                        className="mx-auto"
                        >
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          width={1000}
                          height={450}
                          src="https://ph-test-11.slatic.net/p/374d081a7fc88232881c1318745ef27d.jpg"
                          alt="First slide"
                        />
                        <Carousel.Caption>
                          <h3>First slide label</h3>
                          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          width={1000}
                          height={450}
                          src="https://ph-test-11.slatic.net/p/e3c4feca698ce2abf4cdfc60b5cfaa69.jpg"
                          alt="Second slide"
                        />

                        <Carousel.Caption>
                          <h3>Second slide label</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          width={1000}
                          height={450}
                          src="https://ph-test-11.slatic.net/p/65417beadb0afae1c57c579985a33984.png"
                          alt="Third slide"
                        />

                        <Carousel.Caption>
                          <h3>Third slide label</h3>
                          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                    </Carousel>

                </Col>

                <Col xs={{ order:1}} md={{ order:1}} lg={{ order:1}} md="6" lg="4">
                <h3>Sign In</h3>
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
                           Sign In
                       </Button>
                       :
                       <Button variant="primary" type="submit" id="submitBtn" disabled>
                           Sign In
                       </Button>
                   }
                               
                </Form> 
                </Col>

            </Row>
  
        </Container>
        
    )
}

