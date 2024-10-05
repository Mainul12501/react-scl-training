import {Carousel, Image} from "react-bootstrap";

const AppCarousal = () => {
  return (
      <Carousel>
          <Carousel.Item>
              {/*<Image src="https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp" width="100%" height="550px"  />*/}
              <img src="https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp" sx="height: 200px" className="d-block w-100" alt=""/>
              {/*<ExampleCarouselImage text="First slide" />*/}
              <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
              {/*<ExampleCarouselImage text="Second slide" />*/}
              <Image src="https://media1.thrillophilia.com/filestore/uwpz857lua13qmvub6um2v93dlrm_IMG%20Worlds%20%20of%20Adventure.jpg?w=400&dpr=2" width="100%" height="550px"  />
              <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
              {/*<ExampleCarouselImage text="Third slide" />*/}
              <Image src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0c/04/55/9b.jpg" width="100%" height="550px"  />
              <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p >
                      Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
              </Carousel.Caption>
          </Carousel.Item>
      </Carousel>
  );
}

export default AppCarousal;