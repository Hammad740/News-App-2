import {
  Button,
  Col,
  Container,
  Dropdown,
  FormControl,
  Navbar,
  Nav,
  Row,
  NavDropdown,
} from 'react-bootstrap';

const App = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home" className="fs-3 fw-bold ">
            News-Hub
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Categories" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">World</NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item href="#action/3.2">Business</NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item href="#action/3.3">
                  Technology
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Sports</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Entertainment
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default App;
