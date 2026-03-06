import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import EventPhotoLibrary from './components/EventPhotoLibrary';
import BadBunnyBouquetsPortraits from './components/BadBunnyBouquetsPortraits';
import Gallery from './pages/Gallery';
import PartnershipsPage from './pages/PartnershipsPage';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/partnerships" element={<PartnershipsPage />} />
          <Route path="/events/:eventId/photos" element={<EventPhotoLibrary />} />
          <Route
            path="/albums/bad-bunny-bouquets-portraits"
            element={<BadBunnyBouquetsPortraits />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
