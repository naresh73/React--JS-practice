import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
    return (
        <div >
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#netflix">
                        NETFLIX
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#trending">Trending</Nav.Link>
                        <Nav.Link href="#tvshow">TV Shows</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default ColorSchemesExample;