import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/useAuth';
import Navbar from './components/common/Navbar';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Feed from './pages/Feed';
import NotFound from './pages/NotFound';

function PrivateRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <div className="text-center mt-10">Cargando...</div>;
  if (!user) return <Navigate to="/login" replace />;

  return children;
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Rutas privadas */}
        <Route
          path="/feed"
          element={
            <PrivateRoute>
              <Feed />
            </PrivateRoute>
          }
        />

        {/* Ruta por defecto */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
