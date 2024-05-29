import { useState } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';
import './styles/waitingRoom.css'; // Importa il file CSS per il componente

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
            <Row className={`px-5 py-5 ${darkMode ? 'dark-mode' : ''}`}>
                <Col sm={12}>
                    <Form.Group>
                        <Form.Control placeholder='Nickname' value={username} onChange={e => setUsername(e.target.value)} />
                        <br/>
                        <Form.Control placeholder='Chat name - If blank, really boring stuff will come!' value={chatroom} onChange={e => setChatroom(e.target.value)} />
                    </Form.Group>
                </Col>
                <Col sm={12}>
                    <hr/>
                    <Button variant='success' type='submit'>I warned you!</Button>
                </Col>
            </Row>
        </Form>
    );
};

export default WaitingRoom;
