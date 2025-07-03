const mockUsers = [
  { id: 1, email: 'user1@correo.com', role: 'user' },
  { id: 2, email: 'refugio@petconnect.com', role: 'shelter' },
  { id: 3, email: 'admin@petconnect.com', role: 'admin' },
];

function UserTable() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-lg font-semibold text-dark mb-4">Usuarios registrados</h3>
      <table className="w-full table-auto text-left">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="p-3">ID</th>
            <th className="p-3">Correo</th>
            <th className="p-3">Rol</th>
          </tr>
        </thead>
        <tbody>
          {mockUsers.map((user) => (
            <tr key={user.id} className="border-t border-gray-200">
              <td className="p-3">{user.id}</td>
              <td className="p-3">{user.email}</td>
              <td className="p-3 capitalize">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
