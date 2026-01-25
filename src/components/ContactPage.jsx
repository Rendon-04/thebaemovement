import { useState } from 'react';
import './ContactPage.css';

function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const APPS_SCRIPT_URL = import.meta.env.VITE_APPS_SCRIPT_URL;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatusMessage('');

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      firstName: formData.get("firstName")?.trim() || "",
      lastName: formData.get("lastName")?.trim() || "",
      email: formData.get("email")?.trim() || "",
      phone: formData.get("phone")?.trim() || "",
      subject: formData.get("subject")?.trim() || "",
      message: formData.get("message")?.trim() || "",
    };    
    try {
      const response = await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();

      if (data && data.ok) {
        form.reset();
        setStatusMessage('Thanks! Your message has been sent.');
      } else {
        setStatusMessage('Sorry, something went wrong. Please try again.');
      }
    } catch (error) {
      setStatusMessage('Sorry, something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-content">
          <h1 className="contact-title">Get in Touch</h1>
          <p className="contact-subtitle">
            Have questions about The BAE Movement or Partnership? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
          </p>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="form-input"
                  placeholder="Enter your first name"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="form-input"
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="your.email@example.com"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone" className="form-label">Phone Number (Optional)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-input"
                placeholder="(555) 123-4567"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-input"
                placeholder="What is this regarding?"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                placeholder="Tell us more about your inquiry..."
                rows="6"
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-button" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {statusMessage ? (
              <p role="status" aria-live="polite">
                {statusMessage}
              </p>
            ) : null}
          </form>
          
          <div className="contact-info">
            <div className="contact-info-item">
              <h3 className="contact-info-title">Email Us</h3>
              <p className="contact-info-text">thebaemovement@gmail.com</p>
            </div>
            
            <div className="contact-info-item">
                <h3 className="contact-info-title">Follow Us</h3>
                <p className="contact-info-text">
                  Stay connected on social media for updates and events
                </p>

                <a
                  href="https://www.instagram.com/the.bae.movement/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-link"
                >
                  <svg
                    className="instagram-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
                  </svg>

                  <span>@the.bae.movement</span>
                </a>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
