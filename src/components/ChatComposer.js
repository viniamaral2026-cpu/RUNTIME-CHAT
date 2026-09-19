import React, { useState } from 'react';
import { Input, Button } from './';

const ChatComposer = ({ onSend, isLoading, disabled }) => {
  const [content, setContent] = useState('');

  const handleSend = async (e) => {
    e.preventDefault();
    if (content.trim()) {
      onSend(content);
      setContent('');
    }
  };

  return (
    <div className="p-3 border-t border-border">
      <form onSubmit={handleSend} className="flex gap-2">
        <Input
          type="text"
          placeholder="Digite uma mensagem..."
          value={content}
          onChange={e => setContent(e.target.value)}
          disabled={disabled}
        />
        <Button type="submit" disabled={disabled || !content.trim() || isLoading}>
          {isLoading ? 'Enviando...' : 'Enviar'}
        </Button>
      </form>
    </form>
  );
};

export default ChatComposer;
