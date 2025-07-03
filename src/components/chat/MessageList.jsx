function MessageList({ messages }) {
  return (
    <div className="flex-1 overflow-y-auto mb-4 space-y-2">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`p-2 rounded max-w-xs ${
            msg.from === 'yo' ? 'bg-green-200 self-end ml-auto' : 'bg-gray-200'
          }`}
        >
          <p className="text-sm">{msg.text}</p>
          <span className="text-xs text-gray-500">{msg.time}</span>
        </div>
      ))}
    </div>
  );
}

export default MessageList;
