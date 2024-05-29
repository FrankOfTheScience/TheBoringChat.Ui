import { useState } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';
import './styles/waitingRoom.css'; 

const WaitingRoom = ({ joinChatRoom, darkMode }) => {
    const [username, setUsername] = useState('');
    const [chatroom, setChatroom] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const chatroomToJoin = chatroom.trim() === '' ? 'TheMostBoringChat' : chatroom;
        joinChatRoom(username, chatroomToJoin);
    };
    
    return (
        <Form onSubmit={handleSubmit}>
            <Row className={`waiting-room ${darkMode ? 'dark-mode' : ''}`}>
                <Col sm={12}>
                    <Form.Group>
                        <Form.Control className="input-field" placeholder='Nickname - Pls try not to be trivial...' value={username} onChange={e => setUsername(e.target.value)} />
                        <br/>
                        <Form.Control className="input-field" placeholder='Chat name - If blank, really boring stuff will come!' value={chatroom} onChange={e => setChatroom(e.target.value)} />
                    </Form.Group>
                </Col>
                <Col sm={12}>
                    <br/>
                    <Button variant='primary' type='submit' disabled={!username} className="btn-submit">I warned you!</Button>
                </Col>
            </Row>
        </Form>
    );
};

export default WaitingRoom;
