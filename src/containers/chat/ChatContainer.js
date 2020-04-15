import React, { Component } from 'react';
import Chat from '../../components/chat/Chat';

class ChatContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Chat />
        );
    }
}

export default ChatContainer;