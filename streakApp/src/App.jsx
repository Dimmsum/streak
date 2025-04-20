import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import LandingPage from './pages/Landing';

function App() {
  return (
    // React router setup to enable routing between different pages
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
  );
}

export default App;
