function ConversationList({ onSelect }) {
  const users = [
    { id: 1, name: 'Refugio Esperanza' },
    { id: 2, name: 'Carlos Gómez' },
  ];

  return (
    <div className="w-1/3 bg-gray-200 p-4 overflow-y-auto">
      <h3 className="font-bold text-lg mb-4">Conversaciones</h3>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            className="p-2 mb-2 bg-white rounded shadow cursor-pointer hover:bg-green-100"
            onClick={() => onSelect(user)}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ConversationList;
