import { useState } from "react";
import { getClassesData } from "../data/classesData";
import "./ClassesSection.css";

function ClassesSection() {
  const [{ classTabs, comingSoonEvents }] = useState(() => getClassesData());

  const [activeIndex, setActiveIndex] = useState(0);

  const activeTab = classTabs[activeIndex];

  return (
    <section className="classes-section">
      <div className="classes-container">
        <div className="classes-header">
          <h2 className="classes-title">Classes & Events</h2>
        </div>

        <div className="classes-content">
          <div className="classes-tabs">
            {classTabs.map((tab, index) => (
              <button
                key={tab.label}
                className={`tab-button ${index === activeIndex ? "tab-active" : ""}`}
                onClick={() => setActiveIndex(index)}
                type="button"
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="classes-details">
            <div
              className={`classes-image-wrapper ${
                activeTab.imageFit === "contain" ? "image-wrapper-contain" : ""
              }`}
            >
              <img
                src={activeTab.image}
                alt={activeTab.subtitle}
                className={`classes-image ${
                  activeTab.imageFit === "contain" ? "image-contain" : ""
                }`}
              />
            </div>

            <div className="classes-info">
              <div className="classes-text">
                <h3 className="classes-subtitle">{activeTab.subtitle}</h3>
                <p className="classes-description">{activeTab.description}</p>
              </div>

              <div className="classes-features">
                {activeTab.features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <div className="feature-icon">
                      <img src={feature.icon} alt={feature.title} />
                    </div>
                    <div className="feature-content">
                      <h4 className="feature-title">{feature.title}</h4>
                      <p className="feature-description">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {activeTab.bookingUrl ? (
                <a
                  className="book-button"
                  href={activeTab.bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Book Now
                </a>
              ) : (
                <button className="book-button" type="button" disabled>
                  Book Now
                </button>
              )}
            </div>
          </div>

          <div className="coming-soon">
            <h3 className="coming-soon-title">Coming Soon</h3>
            {comingSoonEvents.map((event) => (
              <div
                key={`${event.title}-${event.date}`}
                className="coming-soon-item"
              >
                <p className="coming-soon-line">
                  {event.title} — {event.location} | {event.date}
                </p>
                <p className="coming-soon-note">{event.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClassesSection;
