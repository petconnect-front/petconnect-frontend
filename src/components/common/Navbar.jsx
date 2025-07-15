// src/components/common/Navbar.jsx
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/useAuth';

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Ocultar navbar en rutas públicas específicas
  const hiddenRoutes = ['/login', '/register'];
  if (hiddenRoutes.includes(location.pathname)) return null;

  const handleLogout = async () => {
    await logout();
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
            <img
              src={user.avatar || '/default-avatar.png'}
              alt="avatar"
              className="w-8 h-8 rounded-full object-cover border"
            />
            <span className="text-gray-700 font-medium">
              Hola, {user.fullName || user.email || 'Usuario'}
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
