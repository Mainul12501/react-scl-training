import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button";

const data = [
  {
    id: 1,
    title: 'Home',
    link: '#home'
  },
  {
    id: 2,
    title: 'About',
    link: '#about'
  },
  {
    id: 3,
    title: 'Service',
    link: '#service'
  },
  {
    id: 4,
    title: 'Career',
    link: '#career'
  },
];

function AppHeader() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Corporate</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            {
              data.map((nav, index) => {
                return (
                    <Nav.Link href={nav.link}>{nav.title}</Nav.Link>
                )
              })
            }
            {/*<Nav.Link href="#home">Home</Nav.Link>*/}
            {/*<Nav.Link href="#about">About</Nav.Link>*/}
            {/*<Nav.Link href="#services">Services</Nav.Link>*/}
            <Button variant="primary">New Post</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppHeader;