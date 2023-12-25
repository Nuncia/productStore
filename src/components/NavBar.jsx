import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
   return (
      <div
         className="d-flex justify-between, items-center, flex-col"
         // style={{
         //    display: 'flex',
         //    justifyContent: 'space-between',
         //    alignItems: 'center',
         // }}
      >
         <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
               <Navbar.Brand href="#home">ProductStore</Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                     <Nav.Link href="#home">Inicio</Nav.Link>
                     <NavDropdown title="Categorias" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">
                           {`Men's clothing`}
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                           Jewelery
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                           Electronics
                        </NavDropdown.Item>
                        <NavDropdown.Item>{`Women's clothing`}</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                           Separated link
                        </NavDropdown.Item>
                     </NavDropdown>
                  </Nav>
                  <div
                     style={{
                        backgroundColor: 'grey',
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        position: 'relative',
                        zIndex: -3,
                     }}
                  >
                     <i className="fa-solid fa-cart-shopping fa-2x pt-2 ps-1"></i>
                  </div>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </div>
   );
};

export default NavBar;
