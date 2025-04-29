import {  Route, Routes } from 'react-router-dom';
import SplashPage from '../components/SplashPage';
import MapPage from '../components/MapPage';
import AddLogForm from '../components/AddLogForm';
import ProfilePage from '../components/ProfilePage';
import StatsPage from '../components/StatsPage';

const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/add" element={<AddLogForm />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/statistics" element={<StatsPage />} />
      </Routes>
  );
}

export default AppRoutes;
