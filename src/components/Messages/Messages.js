import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message/Message';

import './Messages.css';

const Messages = ({ messages, name }) => {
  const handleReaction = (messageId, emoji) => {
    console.log(`Reaction ${emoji} added to message ${messageId}`);
  };


  return (
    <ScrollToBottom className="messages">
      {messages.map((message, i) => (
        <div key={i}>
          <Message 
            message={message} 
            name={name}
            onReact={handleReaction}
          />
        </div>
      ))}
    </ScrollToBottom>
  );
};

export default Messages;