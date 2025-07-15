import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/useAuth';

const PrivateRoute = () => {
  const { user, loading } = useAuth();

  if (loading) return <p>Cargando...</p>;

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
