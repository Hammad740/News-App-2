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
  const handleSearch = (e) => {
    e.preventDefault();
    setCategory('');
    setSearchTerm(e.target.search.value);
    // console.log(e.target);
    // console.log(e.target.search);
    // console.log(e.target.search.value);
  };

  return (
    <>
      <Navbar expand="lg" style={{ background: '#D2D6DB' }}>
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
            <Form className="d-flex pt-1" onSubmit={handleSearch}>
              <FormControl
                type="text"
                placeholder="Search"
                className="me-2"
                name="search"
              />
              <Button variant="outline-dark" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container
        className="mt-4 mb-4 rounded p-4"
        style={{ background: '#D2D6DB' }}
      >
        <Row>
          <Col xs={12} md={3}>
            <h5>Categories</h5>
            <Nav className="flex-column">
              <Nav.Link onClick={() => setCategory('world')}>World</Nav.Link>
              <Nav.Link onClick={() => setCategory('business')}>
                Business
              </Nav.Link>
              <Nav.Link onClick={() => setCategory('technology')}>
                Technology
              </Nav.Link>
              <Nav.Link onClick={() => setCategory('sports')}>Sports</Nav.Link>
              <Nav.Link onClick={() => setCategory('entertainment')}>
                Entertainment
              </Nav.Link>
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
