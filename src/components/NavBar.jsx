import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import { BsBag } from 'react-icons/bs';
import { CiUser } from 'react-icons/ci';

const NavBar = () => {
   const setActive = (isActive) => (isActive ? 'active' : 'inActive');
   return (
      <div>
         <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
               <Navbar.Brand href="#home">
                  <NavLink className={setActive} to="/">
                     PS
                  </NavLink>
               </Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                     <NavLink className={setActive} to="/">
                        Inicio
                     </NavLink>
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
                        fontSize: '20px',
                     }}
                  >
                     <CiUser />
                     &nbsp;
                     <BsBag className="bg-transparent" />
                  </div>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </div>
   );
};

export default NavBar;
