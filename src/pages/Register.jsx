
import { useState } from 'react';
import axios from 'axios';

function Register() {
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/v1/auth/register', {
        username,
        fullName,
        email,
        password,
      });
      setMessage('Registro exitoso: ' + JSON.stringify(response.data));
    } catch (err) {
      console.error(err);
      setMessage('Error al registrar: ' + (err.response?.data?.message || 'Error desconocido'));
    }
  };

  return (
    <div>
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nombre de usuario" value={username} onChange={e => setUsername(e.target.value)} required /><br/>
        <input type="text" placeholder="Nombre completo" value={fullName} onChange={e => setFullName(e.target.value)} required /><br/>
        <input type="email" placeholder="Correo electrónico" value={email} onChange={e => setEmail(e.target.value)} required /><br/>
        <input type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} required /><br/>
        <button type="submit">Registrarse</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Register;
