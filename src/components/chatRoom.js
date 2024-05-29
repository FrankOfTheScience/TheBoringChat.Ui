import { Col, Row, Card } from "react-bootstrap";
import MessageContainer from "./messageContainer.js";
import SendMessageForm from "./sendMessageForm.js";
import "./styles/chatRoom.css"; 

const ChatRoom = ({ messages, sendMessage, chatroom }) => {
    return (
        <div className="chat-room">
            <Row className="justify-content-md-center my-4">
                <Col md={10}>
                    <Card className="text-center">
                        <Card.Header className="chatroom-header">
                            <h2>Not welcome to {chatroom} ChatRoom</h2>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title className="chatroom-subtitle">I told you it was gonna be boring...</Card.Title>
                            <MessageContainer messages={messages} />
                            <SendMessageForm sendMessage={sendMessage} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default ChatRoom;
