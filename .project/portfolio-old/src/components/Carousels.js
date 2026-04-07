import Carousel from 'react-bootstrap/Carousel';
import cara1 from './static/photos/cara1.jpg'
import cara2 from './static/photos/cara2.jpg'
import cara3 from './static/photos/cara3.jpg'
import cara4 from './static/photos/cara4.jpg'
import cara5 from './static/photos/cara5.jpg'
import cara6 from './static/photos/cara6.jpg'
import cara7 from './static/photos/cara7.jpg'
import cara8 from './static/photos/cara8.jpg'
import cara9 from './static/photos/cara9.jpg'
import cara10 from './static/photos/cara10.jpg'
import cara11 from './static/photos/cara11.jpg'
import cara12 from './static/photos/cara12.jpg'
import cara13 from './static/photos/cara13.jpg'
import Image from 'react-bootstrap/Image';
import './styles/Carousels.css'
import {Container} from 'react-bootstrap';

function Carousels() {
  return (
    <Container fluid className='cara-container'>
    <Carousel fade>
      <Carousel.Item>
        <Image src={cara1} style={{ width: '100%', borderRadius: '10px', maxHeight: '450px'}} fluid text="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={cara2} style={{ width: '100%', borderRadius: '10px', maxHeight: '450px' }} fluid text="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={cara3} style={{ width: '100%', borderRadius: '10px', maxHeight: '450px' }} fluid text="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={cara4} style={{ width: '100%', borderRadius: '10px', maxHeight: '450px' }} fluid text="fourth slide" />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={cara5} style={{ width: '100%', borderRadius: '10px', maxHeight: '450px' }} fluid text="fifth slide" />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={cara6} style={{ width: '100%', borderRadius: '10px', maxHeight: '450px' }} fluid text="sixth slide" />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={cara7} style={{ width: '100%', borderRadius: '10px', maxHeight: '450px' }} fluid text="seventh slide" />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={cara8} style={{ width: '100%', borderRadius: '10px', maxHeight: '450px' }} fluid text="eight slide" />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={cara9} style={{ width: '100%', borderRadius: '10px', maxHeight: '450px' }} fluid text="ninth slide" />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={cara10} style={{ width: '100%', borderRadius: '10px', maxHeight: '450px' }} fluid text="tenth slide" />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={cara11} style={{ width: '100%', borderRadius: '10px', maxHeight: '450px' }} fluid text="eleventh slide" />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={cara12} style={{ width: '100%', borderRadius: '10px', maxHeight: '450px' }} fluid text="twelveth slide" />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={cara13} style={{ width: '100%', borderRadius: '10px', maxHeight: '450px' }} fluid text="thirteenth slide" />
      </Carousel.Item>
    </Carousel>
    </Container>
  );
}

export default Carousels;