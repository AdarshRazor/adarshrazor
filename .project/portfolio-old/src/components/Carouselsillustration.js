import Carousel from 'react-bootstrap/Carousel';
import caraillus1 from './static/photos/caraillus1.jpg'
import caraillus3 from './static/photos/caraillus3.jpg'
import Image from 'react-bootstrap/Image';
import './styles/Carousels.css'
import {Container} from 'react-bootstrap';

function Carousels() {
  return (
    <Container fluid className='cara-container'>
    <Carousel fade>
      <Carousel.Item>
        <Image src={caraillus1} style={{ width: '100%', borderRadius: '10px', maxHeight: '450px'}} fluid text="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={caraillus3} style={{ width: '100%', borderRadius: '10px', maxHeight: '450px'}} fluid text="First slide" />
      </Carousel.Item>
    </Carousel>
    </Container>
  );
}

export default Carousels;