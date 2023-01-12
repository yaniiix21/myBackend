import Figure from 'react-bootstrap/Figure'
import { Fragment } from 'react';
import { Container, Row, Col} from 'react-bootstrap'
import fas from 'fontawesome'



export default function Headings (){

	return (



		<Container>

		  <Row>
		    <Col>
		    		<a href="https://faceboook.com" target="_blank" class="mx-3">
		    			<i class="fab fa-facebook"></i>
		    		</a>
		    		<a href="https://gitlab.com/" target="_blank" class="mx-3">
		    			<i class="fab fa-gitlab"></i>
		    		</a>
		    		<a href="https://www.gmail.com/" target="_blank" class="mx-3">
		    			<i class="fas fa-envelope"></i>
		    		</a>
		    </Col>
		    <Col>
		    	<Figure>
		    	  <Figure.Image
		    	    width={1071}
		    	    height={160}
		    	    alt="171x180"
		    	    src="https://64.media.tumblr.com/a7fa6deffd8d77be2eef6dda42dd6595/552a8ee3368dc0fd-43/s1280x1920/55c4277e51f6c478cc254b2f481edac9e13e7fec.jpg"
		    	  />
		    	</Figure>
		    </Col>
		    <Col>3 of 3</Col>
		  </Row>
		</Container>

		)
}