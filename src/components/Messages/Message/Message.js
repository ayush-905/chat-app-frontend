import React, { memo, useState } from 'react';
import './Message.css';

import ReactEmoji from 'react-emoji';

const Message = memo(({ message, name, onReact }) => {
  const [showReactions, setShowReactions] = useState(false);
  const { text, user } = message;
  
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if(user === trimmedName) {
    isSentByCurrentUser = true;
  }

  const handleReaction = (emoji) => {
    onReact(message.id, emoji);
  };

  return (
    <div className="message-container">
      {isSentByCurrentUser
        ? (
          <div className="messageContainer justifyEnd">
            <p className="sentText pr-10">{trimmedName}</p>
            <div className="messageBox backgroundBlue">
              <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
            </div>
          </div>
        )
        : (
          <div className="messageContainer justifyStart">
            <div className="messageBox backgroundLight">
              <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
            </div>
            <p className="sentText pl-10 ">{user}</p>
          </div>
        )}
      <div className="message-actions">
        <button onClick={() => setShowReactions(!showReactions)}>😀</button>
      </div>
      {showReactions && (
        <div className="reaction-picker">
          {['👍', '❤️', '😂', '😮', '😢', '👏'].map(emoji => (
            <button key={emoji} onClick={() => handleReaction(emoji)}>
              {emoji}
            </button>
          ))}
        </div>
      )}
    </div>
  );
});

export default Message;