import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
            <Container>
                <Navbar.Brand href="/">LuxeCart</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar nav" />
                <Navbar.Collapse>
                    <Nav className="ms-auto ">
                        <Nav.Link href="/cart"><FaShoppingCart />Cart</Nav.Link>
                        <Nav.Link href="/login"><FaUser />Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header