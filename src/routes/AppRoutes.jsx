import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Feed from '../pages/Feed';
import Profile from '../pages/Profile';
import PetProfile from '../pages/PetProfile';
import Chat from '../pages/Chat';
import Shelter from '../pages/Shelter';
import Pet from '../pages/Pet';
import Admin from '../pages/Admin';


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/pet" element={<PetProfile />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/shelter" element={<Shelter />} />
        <Route path="/pet" element={<Pet />} />
        <Route path="/admin" element={<Admin />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
