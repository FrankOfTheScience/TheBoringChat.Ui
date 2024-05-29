import { Col, Row, Container } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WaitingRoom from './components/waitingRoom.js';
import { useState } from 'react';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

function App() {
  const [conn, setConnection] = useState();

  const joinChatRoom = async (username, chatroom) => {
    try {
      const conn = new HubConnectionBuilder()
                      .withUrl(`${process.env.REACT_APP_BACKEND_BASE_URL}boring-chat/`)
                      .configureLogging(LogLevel.Information)
                      .build();

      conn.on("JoinSpecificChatRoom", (username, msg) => {
        console.log("msg: ", msg)
      });

      await conn.start();
      await conn.invoke("JoinSpecificChatRoom", { username, chatroom });

      setConnection(conn);

    }catch(e) {
      console.log(e);
    }
  }

  return (
    <div>
      <main>
        <Container>
          <Row className='px-5 my-5'>
            <Col sm='12'>
              <h1 className='font-weight-light'>You are NOT welcome to the Boring Chat.</h1>
              <h3 className='font-weight-light'>Really, this is gonna be boring.</h3>
            </Col>
          </Row>
          <WaitingRoom joinChatRoom={joinChatRoom}/>
        </Container>
      </main>
    </div>
  );
}

export default App;
