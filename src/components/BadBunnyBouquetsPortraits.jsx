import { useEffect, useMemo, useState } from "react";
import "./BadBunnyBouquetsPortraits.css";

const ACCESS_CODE = import.meta.env.VITE_ACCESS_CODE;
const SESSION_KEY = import.meta.env.VITE_SESSION_KEY;

const images = [
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-36.webp", alt: "BAE Event photo 36", filename: "Baeevent-36.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-37.webp", alt: "BAE Event photo 37", filename: "Baeevent-37.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-38.webp", alt: "BAE Event photo 38", filename: "Baeevent-38.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-39.webp", alt: "BAE Event photo 39", filename: "Baeevent-39.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-40.webp", alt: "BAE Event photo 40", filename: "Baeevent-40.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-41.webp", alt: "BAE Event photo 41", filename: "Baeevent-41.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-42.webp", alt: "BAE Event photo 42", filename: "Baeevent-42.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-43.webp", alt: "BAE Event photo 43", filename: "Baeevent-43.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-44.webp", alt: "BAE Event photo 44", filename: "Baeevent-44.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-45.webp", alt: "BAE Event photo 45", filename: "Baeevent-45.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-46.webp", alt: "BAE Event photo 46", filename: "Baeevent-46.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-47.webp", alt: "BAE Event photo 47", filename: "Baeevent-47.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-48.webp", alt: "BAE Event photo 48", filename: "Baeevent-48.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-49.webp", alt: "BAE Event photo 49", filename: "Baeevent-49.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-50.webp", alt: "BAE Event photo 50", filename: "Baeevent-50.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-51.webp", alt: "BAE Event photo 51", filename: "Baeevent-51.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-52.webp", alt: "BAE Event photo 52", filename: "Baeevent-52.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-53.webp", alt: "BAE Event photo 53", filename: "Baeevent-53.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-54.webp", alt: "BAE Event photo 54", filename: "Baeevent-54.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-55.webp", alt: "BAE Event photo 55", filename: "Baeevent-55.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-56.webp", alt: "BAE Event photo 56", filename: "Baeevent-56.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-57.webp", alt: "BAE Event photo 57", filename: "Baeevent-57.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-58.webp", alt: "BAE Event photo 58", filename: "Baeevent-58.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-59.webp", alt: "BAE Event photo 59", filename: "Baeevent-59.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-60.webp", alt: "BAE Event photo 60", filename: "Baeevent-60.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-61.webp", alt: "BAE Event photo 61", filename: "Baeevent-61.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-62.webp", alt: "BAE Event photo 62", filename: "Baeevent-62.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-63.webp", alt: "BAE Event photo 63", filename: "Baeevent-63.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-64.webp", alt: "BAE Event photo 64", filename: "Baeevent-64.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-65.webp", alt: "BAE Event photo 65", filename: "Baeevent-65.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-66.webp", alt: "BAE Event photo 66", filename: "Baeevent-66.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-67.webp", alt: "BAE Event photo 67", filename: "Baeevent-67.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-68.webp", alt: "BAE Event photo 68", filename: "Baeevent-68.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-69.webp", alt: "BAE Event photo 69", filename: "Baeevent-69.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-70.webp", alt: "BAE Event photo 70", filename: "Baeevent-70.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-71.webp", alt: "BAE Event photo 71", filename: "Baeevent-71.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-72.webp", alt: "BAE Event photo 72", filename: "Baeevent-72.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-73.webp", alt: "BAE Event photo 73", filename: "Baeevent-73.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-74.webp", alt: "BAE Event photo 74", filename: "Baeevent-74.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-75.webp", alt: "BAE Event photo 75", filename: "Baeevent-75.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-76.webp", alt: "BAE Event photo 76", filename: "Baeevent-76.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-77.webp", alt: "BAE Event photo 77", filename: "Baeevent-77.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-78.webp", alt: "BAE Event photo 78", filename: "Baeevent-78.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-79.webp", alt: "BAE Event photo 79", filename: "Baeevent-79.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-80.webp", alt: "BAE Event photo 80", filename: "Baeevent-80.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-81.webp", alt: "BAE Event photo 81", filename: "Baeevent-81.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-82.webp", alt: "BAE Event photo 82", filename: "Baeevent-82.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-83.webp", alt: "BAE Event photo 83", filename: "Baeevent-83.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-84.webp", alt: "BAE Event photo 84", filename: "Baeevent-84.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-85.webp", alt: "BAE Event photo 85", filename: "Baeevent-85.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-86.webp", alt: "BAE Event photo 86", filename: "Baeevent-86.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-87.webp", alt: "BAE Event photo 87", filename: "Baeevent-87.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-88.webp", alt: "BAE Event photo 88", filename: "Baeevent-88.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-89.webp", alt: "BAE Event photo 89", filename: "Baeevent-89.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-90.webp", alt: "BAE Event photo 90", filename: "Baeevent-90.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-91.webp", alt: "BAE Event photo 91", filename: "Baeevent-91.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-92.webp", alt: "BAE Event photo 92", filename: "Baeevent-92.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-93.webp", alt: "BAE Event photo 93", filename: "Baeevent-93.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-94.webp", alt: "BAE Event photo 94", filename: "Baeevent-94.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-95.webp", alt: "BAE Event photo 95", filename: "Baeevent-95.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-96.webp", alt: "BAE Event photo 96", filename: "Baeevent-96.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-97.webp", alt: "BAE Event photo 97", filename: "Baeevent-97.webp" },
  { src: "/events/bad-bunny-bouquets/gallery/Baeevent-98.webp", alt: "BAE Event photo 98", filename: "Baeevent-98.webp" },

];

function BadBunnyBouquetsPortraits() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState("");
  const [code, setCode] = useState("");

  useEffect(() => {
    const stored = sessionStorage.getItem(SESSION_KEY);
    if (stored === "true") {
      setIsUnlocked(true);
    }
  }, []);

  const imageList = useMemo(() => images, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (code === ACCESS_CODE) {
      setIsUnlocked(true);
      setError("");
      sessionStorage.setItem(SESSION_KEY, "true");
      return;
    }
    setError("Incorrect code. Please try again.");
  };

  return (
    <section className="portraits-section">
      <div className="portraits-container">
        {!isUnlocked ? (
          <div className="portraits-card">
            <h1 className="portraits-title">
              Bad Bunny & Bouquets  Portraits
            </h1>
            <p className="portraits-text">
              Enter your access code to view and download portraits.
            </p>
            <form className="portraits-form" onSubmit={handleSubmit}>
              <input
                className="portraits-input"
                type="password"
                value={code}
                onChange={(event) => setCode(event.target.value)}
                placeholder="Access code"
                aria-label="Access code"
              />
              <button className="portraits-button" type="submit">
                Submit
              </button>
            </form>
            {error ? <p className="portraits-error">{error}</p> : null}
          </div>
        ) : (
          <>
            <div className="portraits-header">
              <h1 className="portraits-title">
                Bad Bunny & Bouquets Portraits
              </h1>
              <p className="portraits-text">
                Tap a photo to view it and use the download button to save.
              </p>
            </div>
            <div className="portraits-grid">
              {imageList.map((image, index) => (
                <div className="portraits-card-item" key={`${image.src}-${index}`}>
                  <a
                    className="portraits-image-link"
                    href={image.src}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={image.src} alt={image.alt} />
                  </a>
                  <a
                    className="portraits-download"
                    href={image.src}
                    download={image.filename}
                    aria-label={`Download ${image.alt}`}
                    onClick={(event) => event.stopPropagation()}
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
          </>
        )}
      </div>
    </section>
  );
}

export default BadBunnyBouquetsPortraits;
