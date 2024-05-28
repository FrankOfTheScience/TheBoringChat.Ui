import { Col, Row, Container } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WaitingRoom from './components/waitingRoom.js';

function App() {
  return (
    <div>
      <main>
        <Container>
          <Row class='px-5 my-5'>
            <Col sm='12'>
              <h1 className='font-weight-light'>You are NOT welcome to the Boring Chat.</h1>
              <h3 classNae='font-weight-light'>Really, this is gonna be boring.</h3>
            </Col>
          </Row>
          <WaitingRoom/>
        </Container>
      </main>
    </div>
  );
}

export default App;
