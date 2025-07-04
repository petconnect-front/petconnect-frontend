// src/pages/Home.jsx
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-4">
      <h1 className="text-4xl font-bold text-green-700 mb-4">🐾 Bienvenido a PetConnect</h1>
      <p className="text-gray-700 text-lg mb-8 text-center max-w-md">
        Conecta con amantes de mascotas, publica, adopta y comparte historias peludas 🐶🐱.
      </p>
      <div className="flex gap-4">
        <Link
          to="/login"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Iniciar sesión
        </Link>
        <Link
          to="/register"
          className="border border-green-600 text-green-600 px-6 py-2 rounded hover:bg-green-100"
        >
          Regístrate
        </Link>
      </div>
    </div>
  );
}

export default Home;
