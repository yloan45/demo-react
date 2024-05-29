import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../assets/image/logo192.png'

const Header = (props) => {
    return (<>
        <Navbar expand="lg" className="bg-light">
          
                <img
                    src={Logo}
                    width="30"
                    height="30"
                    className='d-inline-block align-top'
                    alt='React Bootstrap logo'
                />
                <Navbar.Brand href="/">DEMO</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" activeKey={"/users"}>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/users">Link</Nav.Link>
                        <NavDropdown title="Setting" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                            <NavDropdown.Item href="/logout">Logout </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    </>)
}

export default Header;