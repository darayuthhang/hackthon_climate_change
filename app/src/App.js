
import { Tab, Row, Col, Nav, Container } from 'react-bootstrap';
import * as React from 'react';
import Map from './Map';
// import 'mapbox-gl/dist/mapbox-gl.css';
function App() {
  return (
    <div className="App">
    <h1>hello world</h1>
      <Container className='p-3'>
        <Row>
          <Col>
            <Tab.Container>
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
              </Row>

            </Tab.Container>
          </Col>
          <Col xs={8}>
              <Map />
          </Col>
        </Row>
      </Container>
     
    </div>
  );
}

export default App;
