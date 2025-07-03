import Navbar from '../components/common/Navbar';
import { useState } from 'react';


function Profile() {
  const [user] = useState({
    name: 'Usuario Demo',
    email: 'usuario@petconnect.com',
    avatar: 'https://i.pravatar.cc/150?u=petconnect-user',
  });

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-2xl mx-auto py-10 px-6">
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
          <img
            src={user.avatar}
            alt="Avatar"
            className="w-28 h-28 rounded-full mb-4 shadow"
          />
          <h2 className="text-xl font-semibold text-dark">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
          <button className="mt-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            Editar perfil
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
