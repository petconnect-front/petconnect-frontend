// src/pages/NotFound.jsx
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
      <h1 className="text-6xl font-bold text-green-700 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Página no encontrada</h2>
      <p className="text-gray-600 mb-6">
        Lo sentimos, la página que buscas no existe.
      </p>
      <Link
        to="/"
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
      >
        Volver al inicio
      </Link>
    </div>
  );
}

export default NotFound;
