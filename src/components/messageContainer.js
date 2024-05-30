import { Table } from 'react-bootstrap';
import './styles/messageContainer.css';

const MessageContainer = ({messages}) =>{

    const getUsernameColor = (username) => {
        const colors = ['#BF616A', '#D08770', '#EBCB8B', '#A3BE8C', '#B48EAD'];
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


