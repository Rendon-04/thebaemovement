import './ContactPage.css';

function ContactPage() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-content">
          <h1 className="contact-title">Get in Touch</h1>
          <p className="contact-subtitle">
            Have questions about The BAE Movement or Partnership? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
          </p>
          
          <form className="contact-form">
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
            
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
          
          <div className="contact-info">
            <div className="contact-info-item">
              <h3 className="contact-info-title">Email Us</h3>
              <p className="contact-info-text">ithebaemovement@gmail.com</p>
            </div>
            
            <div className="contact-info-item">
              <h3 className="contact-info-title">Follow Us</h3>
              <p className="contact-info-text">Stay connected on social media for updates and events</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
