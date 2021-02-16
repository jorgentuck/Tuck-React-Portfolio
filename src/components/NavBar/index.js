import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { withRouter } from 'react-router';

function Navigation({ location }) {
    return (
        <Navbar bg='light' expand='md' activeKey={location.pathname}>
            <Navbar.Brand href='/'>Jorgen Tuck</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse className='justify-content-end' id='basic-navbar-nav'>
                <Nav>
                    <Nav.Link href='/'>Home</Nav.Link>
                    <Nav.Link href='/about'>About</Nav.Link>
                    <Nav.Link href='/portfolio'>Portfolio</Nav.Link>
                    <Nav.Link href='/contact'>Contact</Nav.Link>
                </Nav>
                {/* <Form inline>
      <FormControl type='text' placeholder='Search' className='mr-sm-2' />
      <Button variant='outline-success'>Search</Button>
    </Form> */}
            </Navbar.Collapse>
        </Navbar>
        // <Nav className='navbar navbar-expand-lg navbar-light bg-white d-flex flex-row' variant='pills btn-dark' defaultActiveKey='/' activeKey={location.pathname}>
        //     <Container fluid className='justify-content-start'>
        //     <Nav.Item>
        //         <Nav.Link className='navbar-brand ml-2 text-white bg-dark px-4' href='/'>Jorgen Tuck</Nav.Link>
        //     </Nav.Item>
        //     </Container>
        //     <Container fluid className='justify-content-end collapse navbar-collapse'>
        //         <Nav.Item>
        //             <Nav.Link className='text-dark justify-content-end' href='/about'>About</Nav.Link>
        //         </Nav.Item>
        //         <Nav.Item>
        //             <Nav.Link className='text-dark justify-content-end' href='/portfolio'>Portfolio</Nav.Link>
        //         </Nav.Item>
        //         <Nav.Item>
        //             <Nav.Link className='text-dark justify-content-end' href='/contact'>Contact</Nav.Link>
        //         </Nav.Item>
        //     </Container>
        // </Nav>
    )
};

const NavBar = withRouter(Navigation)

export default NavBar;