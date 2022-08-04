
import { Tab, Row, Col, Nav, Container } from 'react-bootstrap';
import * as React from 'react';
import Map from './Map';
// import 'mapbox-gl/dist/mapbox-gl.css';
function App() {
  return (
    <div className="App">
    <h1>hello world hellos</h1>
      <Container className='p-3'>
        <Row>
          <Col>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Car</Nav.Link>
                 
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Ship</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                        Car
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        Ship
                    </Tab.Pane>
                  </Tab.Content>
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
