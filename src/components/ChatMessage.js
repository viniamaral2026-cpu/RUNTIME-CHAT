import React from 'react';
import styles from '../styles/globals.css';

const ChatMessage = ({ message, isOwn, avatar, timestamp }) => {
  return (
    <div className="flex items-start gap-3 mb-4">
      {avatar && <avatar />}
      <div className={isOwn ? 'self-end' : 'self-start'} max-w-xs>
        <div className="px-3 py-2 rounded-md bg-primary-100 text-primary-900">{message}</div>
        {timestamp && <div className="text-xs text-muted-foreground mt-1">{timestamp}</div>}
      </div>
    </div>
  );
};

ChatMessage.defaultProps = {
  avatar: null,
  timestamp: null,
};

export default ChatMessage;
