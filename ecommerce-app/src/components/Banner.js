import Carousel from 'react-bootstrap/Carousel'
import { Fragment } from 'react';
import Image from 'react-bootstrap/Image'
import { Container, Row, Col} from 'react-bootstrap'

export default function Banner (){

	return (

		<Container fluid>
		  <Row>
		    <Col>
		    	<Carousel 
		    		className="mx-auto"
		    		>
		    	  <Carousel.Item>
		    	    <img
		    	      className="d-block w-100"
		    	      width={1000}
		    	      height={450}
		    	      src="https://soulfiestablog.files.wordpress.com/2018/02/hm.jpg?w=584"
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
		    	      src="https://soulfiestablog.files.wordpress.com/2017/07/h1.jpg?w=1400"
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
		    	      src="https://soulfiestablog.files.wordpress.com/2019/01/hmc-001.jpg"
		    	      alt="Third slide"
		    	    />

		    	    <Carousel.Caption>
		    	      <h3>Third slide label</h3>
		    	      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
		    	    </Carousel.Caption>
		    	  </Carousel.Item>
		    	</Carousel>
		    </Col>
		  </Row>
		</Container>



		)
}