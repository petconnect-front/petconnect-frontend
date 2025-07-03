import { useState } from 'react';
import Navbar from '../components/common/Navbar';
import ConversationList from '../components/chat/ConversationList';
import MessageList from '../components/chat/MessageList';
import MessageInput from '../components/chat/MessageInput';

function Chat() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);

  const handleSelectUser = (user) => {
    setSelectedUser(user);
    // Simulamos carga de mensajes
    setMessages([
      { id: 1, from: 'yo', text: 'Hola!', time: '10:00' },
      { id: 2, from: user.name, text: 'Hola! ¿Cómo estás?', time: '10:01' },
    ]);
  };

  const handleSendMessage = (text) => {
    const newMessage = {
      id: Date.now(),
      from: 'yo',
      text,
      time: new Date().toLocaleTimeString(),
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="flex max-w-6xl mx-auto mt-6 h-[75vh] rounded-xl shadow overflow-hidden">
        <ConversationList onSelect={handleSelectUser} />
        <div className="flex-1 flex flex-col bg-white p-4">
          {selectedUser ? (
            <>
              <h2 className="font-semibold text-lg border-b pb-2 mb-2">
                Chat con {selectedUser.name}
              </h2>
              <MessageList messages={messages} />
              <MessageInput onSend={handleSendMessage} />
            </>
          ) : (
            <div className="text-gray-500 text-center my-auto">
              Selecciona una conversación para empezar
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Chat;
