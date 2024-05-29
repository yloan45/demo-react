import { Link, NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../assets/image/logo192.png';

const Header = (props) => {
    return (
        <>
            <Navbar expand="lg" className="bg-light">
                <img
                    src={Logo}
                    width="30"
                    height="30"
                    className='d-inline-block align-top'
                    alt='React Bootstrap logo'
                />
                <Navbar.Brand as={Link} to="/">DEMO</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/" exact>Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/users">Manager User</Nav.Link>
                        <NavDropdown title="Setting" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/logout">Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default Header;
