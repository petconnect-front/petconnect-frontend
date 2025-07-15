import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Feed from './pages/Feed'; // ejemplo
import PrivateRoute from './routes/PrivateRoute';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Ruta protegida */}
      <Route element={<PrivateRoute />}>
        <Route path="/feed" element={<Feed />} />
        {/* Puedes incluir más rutas privadas aquí */}
      </Route>

      {/* Ruta pública por defecto */}
      <Route path="*" element={<Login />} />
    </Routes>
  );
}

export default AppRoutes;
