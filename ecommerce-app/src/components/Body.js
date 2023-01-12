import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Fragment } from 'react';
import { Container, Row, Col} from 'react-bootstrap'





export default function Body (props){

	return (

		<Container fluid>



		  <Row className="text-center">

		  	<Col>
		  	<Button variant="dark" size="lg">Shop Now</Button>{' '}
		  	</Col>
		  </Row>
		  <Row>
		  	<Col>
		  	<Card style={{ width: '18rem' }}>
		  	  <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSETQMPWkqyskn0tal4MOkDQ4bAQqcq2SWsA&usqp=CAU" />
		  	  <Card.Body>
		  	    <Card.Title>Card Title</Card.Title>
		  	    <Card.Text>
		  	      Some quick example text to build on the card title and make up the bulk of
		  	      the card's content.
		  	    </Card.Text>
		  	    <Button variant="primary">Go somewhere</Button>
		  	  </Card.Body>
		  	</Card>
		  	</Col>

		  	<Col>

		  	<Card style={{ width: '18rem' }}>
		  	  <Card.Img variant="top" src="https://cf.shopee.ph/file/728906a78185ac86c5eb1b02b4955eda" />
		  	  <Card.Body>
		  	    <Card.Title>Card Title</Card.Title>
		  	    <Card.Text>
		  	      Some quick example text to build on the card title and make up the bulk of
		  	      the card's content.
		  	    </Card.Text>
		  	    <Button variant="primary">Go somewhere</Button>
		  	  </Card.Body>
		  	</Card>
		  	</Col>

		  	<Col>
		  	<Card style={{ width: '18rem' }}>
		  	  <Card.Img variant="top" src="https://angelinkbali.com/wp-content/uploads/2020/08/Untitled-1.png" />
		  	  <Card.Body>
		  	    <Card.Title>Card Title</Card.Title>
		  	    <Card.Text>
		  	      Some quick example text to build on the card title and make up the bulk of
		  	      the card's content.
		  	    </Card.Text>
		  	    <Button variant="primary">Go somewhere</Button>
		  	  </Card.Body>
		  	</Card>
		  	</Col>


		  </Row>
		</Container>



		)
}