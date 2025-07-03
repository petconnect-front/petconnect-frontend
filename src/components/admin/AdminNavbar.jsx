import { Link } from 'react-router-dom';

function AdminNavbar() {
  return (
    <nav className="w-64 bg-white shadow-lg p-6 hidden md:block">
      <h2 className="text-xl font-bold mb-8 text-green-700">Admin Panel</h2>
      <ul className="space-y-4">
        <li>
          <Link to="/admin" className="text-gray-700 hover:text-green-600 font-medium">
            Usuarios
          </Link>
        </li>
        <li>
          <Link to="/admin" className="text-gray-700 hover:text-green-600 font-medium">
            Refugios
          </Link>
        </li>
        <li>
          <Link to="/admin" className="text-gray-700 hover:text-green-600 font-medium">
            Mascotas
          </Link>
        </li>
        <li>
          <Link to="/admin" className="text-gray-700 hover:text-green-600 font-medium">
            Analíticas
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default AdminNavbar;
