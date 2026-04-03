import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";
import EventPhotoLibrary from "./components/EventPhotoLibrary";
import BadBunnyBouquetsPortraits from "./components/BadBunnyBouquetsPortraits";
import Gallery from "./pages/Gallery";
import PartnershipsPage from "./pages/PartnershipsPage";
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import ProtectedRoute from "./admin/ProtectedRoute";

// Layout wrapper for all public-facing pages (includes Header + Footer)
function PublicLayout() {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin routes — no Header or Footer */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* Public routes — wrapped with Header + Footer */}
        <Route element={<PublicLayout />}>
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
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
