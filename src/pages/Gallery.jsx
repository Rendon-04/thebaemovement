import { Link } from "react-router-dom";
import EventPhotosSection from "../components/EventPhotosSection";
import "./Gallery.css";

function Gallery() {
  return (
    <div className="gallery-page">
      <section className="gallery-hero">
        <div className="gallery-container">
          <h1 className="gallery-title">Gallery</h1>
          <div className="gallery-subtitle-row">
            <p className="gallery-subtitle">
              Browse event recaps and access private portrait albums.
            </p>
            <span className="gallery-pill">Attendee access available</span>
          </div>
          <div className="gallery-divider" aria-hidden="true" />
        </div>
      </section>

      <section className="gallery-section">
        <div className="gallery-container">
          <EventPhotosSection />
        </div>
      </section>

      <section className="gallery-private">
        <div className="gallery-container">
          <div className="gallery-section-header">
            <h2 className="gallery-section-title">Private Albums</h2>
            <p className="gallery-section-subtitle">Unlock curated portrait sets.</p>
          </div>
          <Link
            to="/albums/bad-bunny-bouquets-portraits"
            className="gallery-private-card"
          >
            <div className="gallery-private-card-top">
              <div className="gallery-private-lock" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="18" height="18">
                  <path
                    d="M7 11V8a5 5 0 0 1 10 0v3m-9 0h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="gallery-private-badge">Private</span>
            </div>
            <div className="gallery-private-card-title">
              Bad Bunny + Bouquets — Portraits
            </div>
            <div className="gallery-private-card-note">Access code required</div>
            <div className="gallery-private-cta">Enter code to unlock</div>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
