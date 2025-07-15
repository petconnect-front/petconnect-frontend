import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authAPI } from '../api/axiosClients';

function Register() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        fullName,
        email,
        password,
        role,
      };

      const response = await authAPI.post('/api/v1/auth/register', payload);
      setMessage('✅ Registro exitoso, ahora puedes iniciar sesión.');
      setTimeout(() => navigate('/login'), 2000); // Redirige en 2 segundos
    } catch (err) {
      const errorMsg = err?.response?.data?.error || 'Error desconocido al registrar';
      setMessage('❌ ' + errorMsg);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Registro de Usuario</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Nombre completo"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
          className="p-3 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-3 border border-gray-300 rounded"
        />
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="p-3 border border-gray-300 rounded w-full"
          />
          <button
            type="button"
            onClick={toggleShowPassword}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900"
            aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
          >
            {showPassword ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.27-2.944-9.543-7a9.973 9.973 0 012.029-3.355M9.88 9.88a3 3 0 104.242 4.242M3 3l18 18" />
              </svg>
            )}
          </button>
        </div>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="p-3 border border-gray-300 rounded"
          required
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

      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
}

export default Register;
