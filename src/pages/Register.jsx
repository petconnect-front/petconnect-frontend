import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); // user o shelter
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3000/api/auth/register', {
        email,
        password,
        role
      });

      navigate('/');
    } catch (err) {
      console.error(err);
      setError('Error al registrarse');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-dark">Registrarse</h2>
        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          {error && <p className="text-red-500">{error}</p>}
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 border border-gray-300 rounded"
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 border border-gray-300 rounded"
            required
          />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="p-3 border border-gray-300 rounded"
          >
            <option value="user">Usuario</option>
            <option value="shelter">Refugio</option>
          </select>
          <button
            type="submit"
            className="bg-primary text-white py-2 rounded hover:bg-green-600"
          >
            Registrarse
          </button>
        </form>
        <p className="text-center mt-4 text-sm">
          ¿Ya tienes cuenta?{' '}
          <Link to="/" className="text-primary font-medium hover:underline">
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
