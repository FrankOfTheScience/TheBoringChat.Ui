import { useState } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ChatRoom from './components/chatRoom.js';
import WaitingRoom from './components/waitingRoom.js';
import DarkModeToggle from './components/darkModeToggle.js';

function App() {
  const [conn, setConnection] = useState();
  const [messages, setMessages] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const joinChatRoom = async (username, chatroom) => {
    try {
      const conn = new HubConnectionBuilder()
        .withUrl(`${process.env.REACT_APP_BACKEND_BASE_URL}boring-chat/`)
        .configureLogging(LogLevel.Information)
        .build();

      conn.on("JoinSpecificChatRoom", (username, msg) => {
        setMessages(messages => [...messages, { username, msg }]);
        console.log("msg: ", msg);
      });

      conn.on("ReceiveSpecificChatMessage", (username, msg) => {
        setMessages(messages => [...messages, { username, msg }]);
      });

      await conn.start();
      await conn.invoke("JoinSpecificChatRoom", { username, chatroom });

      setConnection(conn);
    } catch (e) {
      console.log(e);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <nav className="navbar">
        <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </nav>
      <main>
        <Container>
          <Row className='px-5 my-5'>
            <Col sm='12'>
              {!conn ? (
                <div>
                  <h1 className='font-weight-bold'>You are NOT welcome to the Boring Chat.</h1>
                  <h4 className='font-weight-light'>Really, this is gonna be boring.</h4>
                </div>
              ) : (
                <div />
              )}
            </Col>
          </Row>
          {!conn ? (
            <WaitingRoom joinChatRoom={joinChatRoom} />
          ) : (
            <ChatRoom messages={messages} />
          )}
        </Container>
      </main>
    </div>
  );
}

export default App;
