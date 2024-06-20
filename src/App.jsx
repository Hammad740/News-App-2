import React, { useState } from 'react';
import {
  Button,
  Container,
  FormControl,
  Form,
  Navbar,
  Nav,
  NavDropdown,
  Row,
  Col,
} from 'react-bootstrap';
import NewsList from './components/NewsList';

const App = () => {
  const [category, setCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategoryClick = (category) => {
    setCategory(category);
    setSearchTerm('');
  };
  return (
    <>
      <Navbar expand="lg" className="bg-light">
        <Container>
          <Navbar.Brand href="#home" className="fs-3 fw-bold">
            News-Hub
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Categories" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => handleCategoryClick('world')}>
                  World
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleCategoryClick('business')}
                >
                  Business
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleCategoryClick('technology')}
                >
                  Technology
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleCategoryClick('sports')}>
                  Sports
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleCategoryClick('entertainment')}
                >
                  Entertainment
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="text"
                placeholder="Search"
                className="me-2"
                name="search"
              />
              <Button variant="outline-dark">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Row>
          <Col xs={12} md={3}>
            <h5>Categories</h5>
            <Nav className="flex-column">
              <Nav.Link>World</Nav.Link>
              <Nav.Link>Business</Nav.Link>
              <Nav.Link>Technology</Nav.Link>
              <Nav.Link>Sports</Nav.Link>
              <Nav.Link>Entertainment</Nav.Link>
            </Nav>
          </Col>
          <Col xs={12} md={9}>
            <NewsList category={category} searchTerm={searchTerm}></NewsList>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
