import { Table } from 'react-bootstrap';
import './styles/messageContainer.css';

const MessageContainer = ({messages}) =>{

    const getUsernameColor = (username) => {
        const colors = ['#FFB6B9', '#FFEEAD', '#FFEDD2', '#D0ECE7', '#A0CED9', '#B4F8C8', '#E2F0CB', '#E2F0CB', '#B5EAD7', '#C7CEEA'];
        const index = username.charCodeAt(0) % colors.length;
        return colors[index];
    };

    return (
        <div>
            <Table striped bordered hover>
                <tbody>
                    {
                        messages.map((msg, index) => {
                            console.log(`Username: ${msg.username}, Color: ${getUsernameColor(msg.username)}`);
                            return (
                                <tr key={index}>
                                    <td style={{ backgroundColor: getUsernameColor(msg.username) }}>
                                        <span className="username">{msg.username}</span>: 
                                        <span className="message">{msg.msg}</span>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default MessageContainer;


