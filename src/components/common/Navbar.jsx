// src/components/common/Navbar.jsx
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/useAuth';

function Navbar() {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/feed" className="text-xl font-bold text-green-600">
        🐾 PetConnect
      </Link>

      <div className="flex items-center gap-4">
        {user ? (
          <>
            {user.avatar && (
              <img
                src={user.avatar}
                alt="avatar"
                className="w-8 h-8 rounded-full object-cover border"
              />
            )}
            <span className="text-gray-700 font-medium">
              Hola, {user.name || user.email || 'Usuario'}
            </span>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
            >
              Cerrar sesión
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="text-green-600 font-medium hover:underline text-sm"
            >
              Iniciar sesión
            </Link>
            <Link
              to="/register"
              className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 text-sm"
            >
              Regístrate
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
