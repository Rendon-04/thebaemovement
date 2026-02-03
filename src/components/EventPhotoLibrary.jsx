import { useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import events from "../data/events";
import "./EventPhotoLibrary.css";

function EventPhotoLibrary() {
  const { eventId } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [eventId]);

  const event = useMemo(
    () => events.find((item) => item.id === eventId),
    [eventId]
  );

  if (!event) {
    return (
      <section className="event-library">
        <div className="event-library-container">
          <h1 className="event-library-title">Event not found</h1>
          <p className="event-library-subtitle">
            We could not find that event. Please check the link or head back to
            classes.
          </p>
          <Link className="event-library-link" to="/">
            Back to home
          </Link>
        </div>
      </section>
    );
  }

  const hasGallery = event.galleryImages && event.galleryImages.length > 0;

  return (
    <section className="event-library">
      <div className="event-library-container">
        <div className="event-library-header">
          <h1 className="event-library-title">{event.title}</h1>
          <p className="event-library-subtitle">
            Browse the highlights and download your favorites.
          </p>
        </div>

        {!hasGallery ? (
          <div className="event-library-empty">
            <p>Photos coming soon.</p>
            <Link className="event-library-link" to="/">
              Back to home
            </Link>
          </div>
        ) : (
          <div className="event-library-grid">
            {event.galleryImages.map((image, index) => (
              <div className="photo-card" key={`${event.id}-${index}`}>
                <a
                  className="photo-card-link"
                  href={image.src}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={image.src} alt={image.alt} />
                </a>
                <a
                  className="photo-download"
                  href={image.src}
                  download={image.filename}
                  aria-label={`Download ${image.alt}`}
                  onClick={(eventClick) => eventClick.stopPropagation()}
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 3v10m0 0 4-4m-4 4-4-4M5 21h14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default EventPhotoLibrary;
