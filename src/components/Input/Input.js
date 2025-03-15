import React from 'react';

import './Input.css';

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form" aria-label="message form">
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyDown={event => event.key === 'Enter' ? sendMessage(event) : null}
      aria-label="message input"
    />
    <button 
      className="sendButton" 
      onClick={e => sendMessage(e)}
      aria-label="send message"
    >
      Send
    </button>
  </form>
)

export default Input;