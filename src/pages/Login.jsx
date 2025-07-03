import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:3000/api/auth/login', {
        email,
        password
      });

      localStorage.setItem('token', res.data.token);
      navigate('/feed');
    } catch (err) {
      console.error(err);
      setError('Credenciales inválidas');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-dark">Iniciar sesión</h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
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
          <button
            type="submit"
            className="bg-primary text-white py-2 rounded hover:bg-green-600"
          >
            Ingresar
          </button>
        </form>
        <p className="text-center mt-4 text-sm">
          ¿No tienes cuenta?{' '}
          <Link to="/register" className="text-primary font-medium hover:underline">
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
