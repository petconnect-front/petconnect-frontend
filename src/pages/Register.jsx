import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

import { AuthContext } from '../context/AuthContext';
import PublicAPI from '../api/axios';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Por favor completa todos los campos');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      setError('Correo electrónico no válido');
      return;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!passwordRegex.test(password)) {
      setError('La contraseña debe tener al menos 6 caracteres, una mayúscula y un número');
      return;
    }

    try {
      const res = await PublicAPI.post('/auth/register', {
        email,
        password,
        role,
      });

      const { token } = res.data;

      localStorage.setItem('token', token);
      const decodedUser = jwtDecode(token);
      setUser(decodedUser);

      navigate('/feed');
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || 'Error al registrarse');
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

          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 border border-gray-300 rounded w-full"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-sm text-blue-500"
            >
              {showPassword ? 'Ocultar' : 'Mostrar'}
            </button>
          </div>

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
