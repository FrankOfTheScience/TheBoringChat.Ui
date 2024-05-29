import { useState } from "react";
import { Form, Button, InputGroup } from 'react-bootstrap';
import './styles/sendMessageForm.css';

const SendMessageForm = ({ sendMessage }) => {
    const [msg, setMessage] = useState('');

    return (<Form className="send-message-form" onSubmit={e => {
            e.preventDefault();
            sendMessage(msg);
            setMessage('');
        }}>
            <InputGroup className='mb-3'>
                <InputGroup.Text className="input-group-text-custom">You know what to do</InputGroup.Text>
                <Form.Control 
                    onChange={e => setMessage(e.target.value)} 
                    value={msg} 
                    placeholder='...come on dude type!' 
                    className="form-control-custom"
                />
                <Button variant='primary' type='submit' disabled={!msg} className="btn-submit">
                    Nuke the aliens
                </Button>
            </InputGroup>
        </Form>
    );
};

export default SendMessageForm;
