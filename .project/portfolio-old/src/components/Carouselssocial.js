import Carousel from 'react-bootstrap/Carousel';
import carasocial1 from './static/photos/carasocial1.jpg'
import Image from 'react-bootstrap/Image';
import './styles/Carousels.css'
import {Container} from 'react-bootstrap';

function Carousels() {
  return (
    <Container fluid className='cara-container'>
    <Carousel fade>
      <Carousel.Item>
        <Image src={carasocial1} style={{ width: '100%', borderRadius: '10px', maxHeight: '450px'}} fluid text="First slide" />
      </Carousel.Item>
    </Carousel>
    </Container>
  );
}

export default Carousels;