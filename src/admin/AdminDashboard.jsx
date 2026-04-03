import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { getClassesData, saveClassesData } from "../data/classesData";
import "./AdminDashboard.css";

// Default icons used when adding a new tab (mirrors the existing icon set)
const DEFAULT_FEATURE_ICONS = [
  "https://api.builder.io/api/v1/image/assets/TEMP/49e841e3f63baf55a5bf58c4ea8b492ccdf367ee?width=68",
  "https://api.builder.io/api/v1/image/assets/TEMP/9d4e4b631e1ad6189bc080de5132af97137d13e6?width=68",
  "https://api.builder.io/api/v1/image/assets/TEMP/210712b163db78b144cd7f63b1aefacb2b461a76?width=68",
  "https://api.builder.io/api/v1/image/assets/TEMP/aa63d0c82877627c09df9c2ff976f1e2567b083c?width=68",
];

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [data, setData] = useState(() => getClassesData());
  const [activeSection, setActiveSection] = useState({ type: "tab", index: 0 });
  const [toast, setToast] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function showToast(msg) {
    setToast(msg);
    setTimeout(() => setToast(null), 3200);
  }

  function handleSave() {
    saveClassesData(data);
    showToast("Changes saved successfully!");
  }

  function handleLogout() {
    localStorage.removeItem("bae_admin_session");
    navigate("/admin/login");
  }

  function navigateTo(section) {
    setActiveSection(section);
    setSidebarOpen(false);
  }

  // ── Tab operations ────────────────────────────────────────────────────────

  function updateTab(index, field, value) {
    setData((prev) => {
      const tabs = [...prev.classTabs];
      tabs[index] = { ...tabs[index], [field]: value };
      return { ...prev, classTabs: tabs };
    });
  }

  function updateTabFeature(tabIndex, featureIndex, field, value) {
    setData((prev) => {
      const tabs = [...prev.classTabs];
      const features = [...tabs[tabIndex].features];
      features[featureIndex] = { ...features[featureIndex], [field]: value };
      tabs[tabIndex] = { ...tabs[tabIndex], features };
      return { ...prev, classTabs: tabs };
    });
  }

  function moveTab(index, direction) {
    const newIndex = direction === "up" ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= data.classTabs.length) return;

    setData((prev) => {
      const tabs = [...prev.classTabs];
      [tabs[index], tabs[newIndex]] = [tabs[newIndex], tabs[index]];
      return { ...prev, classTabs: tabs };
    });

    // Keep the active selection following the moved tab
    setActiveSection((prev) => {
      if (prev.type !== "tab") return prev;
      if (prev.index === index) return { type: "tab", index: newIndex };
      if (prev.index === newIndex) return { type: "tab", index: index };
      return prev;
    });
  }

  function addTab() {
    const newTab = {
      label: "New Class",
      subtitle: "New Class",
      description: "",
      image: "",
      bookingUrl: "",
      features: DEFAULT_FEATURE_ICONS.map((icon, i) => ({
        icon,
        title: `Feature ${i + 1}`,
        description: "",
      })),
    };
    const newIndex = data.classTabs.length;
    setData((prev) => ({ ...prev, classTabs: [...prev.classTabs, newTab] }));
    setActiveSection({ type: "tab", index: newIndex });
    setSidebarOpen(false);
  }

  function deleteTab(index) {
    if (data.classTabs.length <= 1) return;
    setData((prev) => ({
      ...prev,
      classTabs: prev.classTabs.filter((_, i) => i !== index),
    }));
    setActiveSection((prev) => {
      if (prev.type !== "tab") return prev;
      const newIndex =
        prev.index >= index
          ? Math.max(0, prev.index - 1)
          : prev.index;
      return { type: "tab", index: newIndex };
    });
  }

  // ── Event operations ──────────────────────────────────────────────────────

  function updateEvent(index, field, value) {
    setData((prev) => {
      const events = [...prev.comingSoonEvents];
      events[index] = { ...events[index], [field]: value };
      return { ...prev, comingSoonEvents: events };
    });
  }

  function addEvent() {
    setData((prev) => ({
      ...prev,
      comingSoonEvents: [
        ...prev.comingSoonEvents,
        { title: "", location: "", date: "", note: "" },
      ],
    }));
  }

  function removeEvent(index) {
    setData((prev) => ({
      ...prev,
      comingSoonEvents: prev.comingSoonEvents.filter((_, i) => i !== index),
    }));
  }

  const activeTab =
    activeSection.type === "tab" ? data.classTabs[activeSection.index] : null;

  const pageTitle =
    activeSection.type === "tab"
      ? activeTab?.label || "Class Tab"
      : "Coming Soon Events";

  return (
    <div className="admin-layout">
      {/* ── Mobile top bar ── */}
      <div className="admin-mobile-bar">
        <button
          className="mobile-menu-btn"
          onClick={() => setSidebarOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className="hamburger">☰</span>
        </button>
        <span className="mobile-bar-title">BAE Movement</span>
        <span className="admin-badge-pill">ADMIN</span>
      </div>

      {/* ── Sidebar ── */}
      <aside className={`admin-sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
        <div className="sidebar-brand-area">
          <p className="sidebar-brand-name">BAE Movement</p>
          <span className="admin-badge-pill">ADMIN</span>
        </div>

        <nav className="sidebar-nav" aria-label="Admin navigation">
          <p className="sidebar-section-label">Classes</p>
          <ul className="sidebar-tab-list">
            {data.classTabs.map((tab, i) => (
              <li
                key={i}
                className={`sidebar-tab-item${
                  activeSection.type === "tab" && activeSection.index === i
                    ? " sidebar-item-active"
                    : ""
                }`}
              >
                <button
                  className="sidebar-tab-btn"
                  onClick={() => navigateTo({ type: "tab", index: i })}
                  title={tab.label}
                >
                  {tab.label || "Untitled Tab"}
                </button>
                <div className="sidebar-tab-actions">
                  <button
                    className="sact-btn"
                    onClick={() => moveTab(i, "up")}
                    disabled={i === 0}
                    title="Move up"
                  >
                    ↑
                  </button>
                  <button
                    className="sact-btn"
                    onClick={() => moveTab(i, "down")}
                    disabled={i === data.classTabs.length - 1}
                    title="Move down"
                  >
                    ↓
                  </button>
                  <button
                    className="sact-btn sact-delete"
                    onClick={() => deleteTab(i)}
                    disabled={data.classTabs.length <= 1}
                    title="Delete tab"
                  >
                    ×
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <button className="sidebar-add-tab-btn" onClick={addTab}>
            + Add Tab
          </button>

          <div className="sidebar-divider" />

          <button
            className={`sidebar-nav-item${
              activeSection.type === "coming-soon" ? " sidebar-item-active" : ""
            }`}
            onClick={() => navigateTo({ type: "coming-soon" })}
          >
            Coming Soon Events
          </button>
        </nav>

        <div className="sidebar-footer">
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="sidebar-preview-btn"
          >
            ↗ Preview Site
          </a>
          <button className="sidebar-logout-btn" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </aside>

      {/* Backdrop for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="sidebar-backdrop"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ── Main content ── */}
      <main className="admin-main">
        <div className="admin-topbar">
          <h1 className="admin-page-title">{pageTitle}</h1>
          <button className="admin-save-btn" onClick={handleSave}>
            Save Changes
          </button>
        </div>

        {toast && <div className="admin-toast">{toast}</div>}

        <div className="admin-content">
          {activeSection.type === "tab" && activeTab && (
            <TabEditor
              tab={activeTab}
              tabIndex={activeSection.index}
              onUpdateTab={updateTab}
              onUpdateFeature={updateTabFeature}
            />
          )}
          {activeSection.type === "coming-soon" && (
            <ComingSoonEditor
              events={data.comingSoonEvents}
              onUpdate={updateEvent}
              onAdd={addEvent}
              onRemove={removeEvent}
            />
          )}
        </div>
      </main>
    </div>
  );
}

// ── Image resize helper ──────────────────────────────────────────────────────
// Resizes an image File to max 1400px on either dimension and returns a
// compressed JPEG data URL suitable for localStorage storage.

function resizeImageToDataURL(file, maxDim = 1400, quality = 0.85) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = (e) => {
      const img = new Image();
      img.onerror = reject;
      img.onload = () => {
        const scale = Math.min(1, maxDim / img.width, maxDim / img.height);
        const w = Math.round(img.width * scale);
        const h = Math.round(img.height * scale);
        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        canvas.getContext("2d").drawImage(img, 0, 0, w, h);
        resolve(canvas.toDataURL("image/jpeg", quality));
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
}

// ── Tab editor ───────────────────────────────────────────────────────────────

function TabEditor({ tab, tabIndex, onUpdateTab, onUpdateFeature }) {
  const fileInputRef = useRef(null);
  const [uploadStatus, setUploadStatus] = useState(null); // null | 'processing' | 'done' | 'error'

  async function handleFileChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadStatus("processing");
    try {
      const dataUrl = await resizeImageToDataURL(file);
      onUpdateTab(tabIndex, "image", dataUrl);
      setUploadStatus("done");
    } catch {
      setUploadStatus("error");
    }
    // Reset input so the same file can be re-selected if needed
    e.target.value = "";
  }

  const isDataUrl = tab.image?.startsWith("data:");

  return (
    <div className="editor-stack">
      {/* Basic Info */}
      <section className="editor-card">
        <h2 className="editor-card-heading">Basic Info</h2>
        <div className="form-grid">
          <div className="form-field">
            <label htmlFor={`label-${tabIndex}`}>Tab Label</label>
            <input
              id={`label-${tabIndex}`}
              type="text"
              value={tab.label}
              onChange={(e) => onUpdateTab(tabIndex, "label", e.target.value)}
              placeholder="e.g. Pilates con Banda"
            />
          </div>
          <div className="form-field">
            <label htmlFor={`subtitle-${tabIndex}`}>Subtitle</label>
            <input
              id={`subtitle-${tabIndex}`}
              type="text"
              value={tab.subtitle}
              onChange={(e) =>
                onUpdateTab(tabIndex, "subtitle", e.target.value)
              }
              placeholder="Heading shown in the content panel"
            />
          </div>
          <div className="form-field form-field-full">
            <label htmlFor={`desc-${tabIndex}`}>Description</label>
            <textarea
              id={`desc-${tabIndex}`}
              value={tab.description}
              onChange={(e) =>
                onUpdateTab(tabIndex, "description", e.target.value)
              }
              placeholder="Describe this class or event…"
              rows={4}
            />
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="editor-card">
        <h2 className="editor-card-heading">Image</h2>

        {/* Upload from device */}
        <div className="image-upload-row">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="image-file-input"
            aria-label="Upload image from device"
            onChange={handleFileChange}
          />
          <button
            type="button"
            className="image-upload-btn"
            onClick={() => fileInputRef.current?.click()}
            disabled={uploadStatus === "processing"}
          >
            {uploadStatus === "processing" ? "Processing…" : "↑ Upload from device"}
          </button>
          {uploadStatus === "done" && isDataUrl && (
            <span className="upload-status upload-status-ok">Image uploaded</span>
          )}
          {uploadStatus === "error" && (
            <span className="upload-status upload-status-err">Upload failed — try again</span>
          )}
        </div>

        {/* Or paste a URL */}
        <div className="image-url-divider">
          <span>or paste a URL</span>
        </div>
        <div className="form-field">
          <input
            id={`image-${tabIndex}`}
            type="text"
            value={isDataUrl ? "" : tab.image}
            onChange={(e) => {
              setUploadStatus(null);
              onUpdateTab(tabIndex, "image", e.target.value);
            }}
            placeholder="/filename.jpg  or  https://…"
          />
        </div>

        {/* Preview */}
        {tab.image && (
          <div className="image-preview-box">
            <img
              src={tab.image}
              alt="Preview"
              className="image-preview-img"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
            <button
              type="button"
              className="image-clear-btn"
              onClick={() => {
                onUpdateTab(tabIndex, "image", "");
                setUploadStatus(null);
              }}
              title="Remove image"
            >
              ×
            </button>
          </div>
        )}
      </section>

      {/* Booking */}
      <section className="editor-card">
        <h2 className="editor-card-heading">Booking</h2>
        <div className="form-field">
          <label htmlFor={`booking-${tabIndex}`}>
            Book Now URL{" "}
            <span className="field-hint">
              — leave blank to disable the button
            </span>
          </label>
          <input
            id={`booking-${tabIndex}`}
            type="text"
            value={tab.bookingUrl || ""}
            onChange={(e) =>
              onUpdateTab(tabIndex, "bookingUrl", e.target.value || null)
            }
            placeholder="https://www.eventbrite.com/…"
          />
        </div>
      </section>

      {/* Features */}
      <section className="editor-card">
        <h2 className="editor-card-heading">Feature Blocks</h2>
        <div className="features-stack">
          {tab.features.map((feature, fi) => (
            <div key={fi} className="feature-editor-row">
              <div className="feature-icon-preview">
                <img src={feature.icon} alt="" />
              </div>
              <div className="feature-fields">
                <div className="form-field">
                  <label htmlFor={`ft-title-${tabIndex}-${fi}`}>Title</label>
                  <input
                    id={`ft-title-${tabIndex}-${fi}`}
                    type="text"
                    value={feature.title}
                    onChange={(e) =>
                      onUpdateFeature(tabIndex, fi, "title", e.target.value)
                    }
                    placeholder="Feature title"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor={`ft-desc-${tabIndex}-${fi}`}>
                    Description
                  </label>
                  <textarea
                    id={`ft-desc-${tabIndex}-${fi}`}
                    value={feature.description}
                    onChange={(e) =>
                      onUpdateFeature(
                        tabIndex,
                        fi,
                        "description",
                        e.target.value
                      )
                    }
                    placeholder="Feature description"
                    rows={3}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// ── Coming Soon editor ───────────────────────────────────────────────────────

function ComingSoonEditor({ events, onUpdate, onAdd, onRemove }) {
  return (
    <div className="editor-stack">
      <p className="coming-soon-intro">
        These events appear in the Coming Soon section on the main site.
      </p>

      {events.map((event, i) => (
        <section key={i} className="editor-card event-card">
          <div className="event-card-header">
            <h2 className="editor-card-heading" style={{ margin: 0 }}>
              Event {i + 1}
            </h2>
            <button
              className="event-remove-btn"
              onClick={() => onRemove(i)}
            >
              Remove
            </button>
          </div>
          <div className="form-grid" style={{ marginTop: "16px" }}>
            <div className="form-field form-field-full">
              <label htmlFor={`ev-title-${i}`}>Title</label>
              <input
                id={`ev-title-${i}`}
                type="text"
                value={event.title}
                onChange={(e) => onUpdate(i, "title", e.target.value)}
                placeholder="Event title"
              />
            </div>
            <div className="form-field">
              <label htmlFor={`ev-loc-${i}`}>Location</label>
              <input
                id={`ev-loc-${i}`}
                type="text"
                value={event.location}
                onChange={(e) => onUpdate(i, "location", e.target.value)}
                placeholder="e.g. San Francisco"
              />
            </div>
            <div className="form-field">
              <label htmlFor={`ev-date-${i}`}>Date</label>
              <input
                id={`ev-date-${i}`}
                type="text"
                value={event.date}
                onChange={(e) => onUpdate(i, "date", e.target.value)}
                placeholder="e.g. May 2nd"
              />
            </div>
            <div className="form-field form-field-full">
              <label htmlFor={`ev-note-${i}`}>Note</label>
              <input
                id={`ev-note-${i}`}
                type="text"
                value={event.note}
                onChange={(e) => onUpdate(i, "note", e.target.value)}
                placeholder="e.g. Stay tuned for tickets!"
              />
            </div>
          </div>
        </section>
      ))}

      <button className="add-event-btn" onClick={onAdd}>
        + Add Event
      </button>
    </div>
  );
}
