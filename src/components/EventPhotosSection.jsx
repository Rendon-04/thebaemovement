import { useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import events from "../data/events";
import "./EventPhotosSection.css";

function EventPhotosSection() {
  const carouselRef = useRef(null);

  const carouselItems = useMemo(
    () =>
      events.flatMap((event) =>
        event.coverImages.map((image) => ({
          ...image,
          eventId: event.id,
          eventTitle: event.title,
        }))
      ),
    []
  );

  const scrollCarousel = (direction) => {
    if (!carouselRef.current) return;
    const scrollAmount = direction === "left" ? -320 : 320;
    carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="event-carousel-section">
      <div className="event-carousel-container">
        <div className="event-carousel-header">
          <h3 className="event-carousel-title">Event Photos</h3>
          <div className="event-carousel-controls">
            <button
              type="button"
              className="event-carousel-button"
              onClick={() => scrollCarousel("left")}
              aria-label="Scroll event photos left"
            >
              Prev
            </button>
            <button
              type="button"
              className="event-carousel-button"
              onClick={() => scrollCarousel("right")}
              aria-label="Scroll event photos right"
            >
              Next
            </button>
          </div>
        </div>

        <div className="event-carousel-track" ref={carouselRef}>
          {carouselItems.map((item, index) => (
            <Link
              key={`${item.eventId}-${index}`}
              className="event-carousel-card"
              to={`/events/${item.eventId}/photos`}
              aria-label={`View ${item.eventTitle} photos`}
            >
              <div className="event-carousel-image">
                <img src={item.src} alt={item.alt} />
              </div>
              <div className="event-carousel-card-title">
                <span>{item.eventTitle}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EventPhotosSection;
