import { useState } from 'react';

function MessageInput({ onSend }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSend(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        placeholder="Escribe un mensaje..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 p-2 border border-gray-300 rounded"
      />
      <button type="submit" className="bg-green-600 text-white px-4 rounded hover:bg-green-700">
        Enviar
      </button>
    </form>
  );
}

export default MessageInput;
