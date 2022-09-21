import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';




const Header = () => {
    return (
        <div className='site-nav'>

		<div className='container'>
		<Navbar className='menu-bg-wrap' collapseOnSelect expand="lg">
      <Container >
        <Navbar.Brand as={Link} to="/" className='logo'>MyProperty</Navbar.Brand>
        <Navbar.Toggle style={{color: "white"}} aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        
          <Nav className='ms-auto'>
            <Nav.Link as={Link} to="/" className='kabir'>Home</Nav.Link>
            <Nav.Link as={Link} to="/property" className='kabir'>Properties</Nav.Link>
            <Nav.Link as={Link} to="/about" className='kabir'>About</Nav.Link>
            <Nav.Link as={Link} to="/service" className='kabir'>Service</Nav.Link>
            <Nav.Link as={Link} to="/contact" className='kabir'>Contacts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
		</div>
	
</div>
	
        
    );
};

export default Header;