import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-green-600">🐾 PetConnect</h1>
        <div className="flex gap-4">
          <Link to="/feed" className="hover:text-green-600 font-medium">Inicio</Link>
          <Link to="/profile" className="text-gray-800 hover:text-green-600">Mi Perfil</Link>
          <Link to="/pet" className="text-gray-800 hover:text-green-600">Mascotas</Link>
          <Link to="/chat" className="text-gray-800 hover:text-green-600">Chat</Link>
          <button
            onClick={handleLogout}
            className="text-red-500 hover:underline"
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
