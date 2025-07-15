// src/pages/Home.jsx
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 px-4 py-12">
      {/* Branding / Intro */}
      <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 px-4">
        <h1 className="text-5xl font-extrabold text-green-700 mb-4">
          🐾 PetConnect
        </h1>
        <p className="text-xl text-gray-800 font-medium max-w-lg leading-relaxed">
          La red social para los amantes de las mascotas. Publica historias, adopta, encuentra refugios y más. 🐶🐱
        </p>
      </div>

      {/* Tarjeta de acceso */}
      <div className="md:w-1/3 w-full bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-black text-center mb-6">Comienza ahora</h2>
        <div className="flex flex-col gap-4">
          <Link
            to="/login"
            className="bg-green-600 text-white text-lg py-3 rounded-lg text-center hover:bg-green-700 transition"
          >
            Iniciar sesión
          </Link>
          <Link
            to="/register"
            className="text-green-600 border border-green-600 text-lg py-3 rounded-lg text-center hover:bg-green-50 transition"
          >
            Regístrate
          </Link>
        </div>
        <p className="text-sm text-gray-500 text-center mt-6">
          Es gratis y siempre lo será.
        </p>
      </div>
    </div>
  );
}

export default Home;
