import { Routes, Route } from 'react-router-dom';
import './styles/globals.css';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import NotFound  from './pages/notFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='*' element={<NotFound />} />  {/* Catch-all for 404s */}
    </Routes>
  );
}

export default App;
