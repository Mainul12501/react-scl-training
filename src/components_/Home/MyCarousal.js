import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import {Image} from "react-bootstrap";

function MyCarousal() {
    return (
        <Carousel>
            <Carousel.Item>
                {/*<ExampleCarouselImage text="First slide" />*/}
                <Image src="/imgs/1.jpg" width="100%" height="500px" />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                {/*<ExampleCarouselImage text="Second slide" />*/}
                <Image src="/imgs/3.webp"  width="100%" height="500px" />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                {/*<ExampleCarouselImage text="Third slide" />*/}
                <Image src="/imgs/2.webp"  width="100%" height="500px" />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default MyCarousal;