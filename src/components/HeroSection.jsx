import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero-section">
       <video
          className="hero-background"
          src="https://my-site-media-todd.s3.us-east-2.amazonaws.com/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">A Women's Wellness Club Reimagined</h1>
          <p className="hero-description">
            Where fitness meets culture and community meets celebration. Built to remind women to pour into themselves first. Before Anyone Else.
          </p>
        </div>
        <div className="hero-actions">
          
          <button className="btn-primary"
          onClick={() =>
            document.getElementById("classes")?.scrollIntoView({ behavior: 'smooth' })
          }>Secure Your Spot</button>
          {/* <button className="btn-secondary">
            <span>Join the Movement</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className='btn-icon'>
              <path d="M9.96094 0C7.99085 0 6.06501 0.584199 4.42694 1.67872C2.78887 2.77324 1.51216 4.32893 0.758236 6.14905C0.00431575 7.96918 -0.192944 9.97199 0.191401 11.9042C0.575746 13.8365 1.52443 15.6113 2.9175 17.0044C4.31056 18.3974 6.08543 19.3461 8.01766 19.7305C9.94989 20.1148 11.9527 19.9176 13.7728 19.1636C15.593 18.4097 17.1486 17.133 18.2432 15.4949C19.3377 13.8569 19.9219 11.931 19.9219 9.96094C19.9188 7.32008 18.8683 4.78828 17.001 2.92092C15.1336 1.05355 12.6018 0.00310142 9.96094 0ZM9.96094 18.75C8.22263 18.75 6.52335 18.2345 5.078 17.2688C3.63265 16.303 2.50613 14.9304 1.84091 13.3244C1.17568 11.7184 1.00163 9.95119 1.34076 8.24628C1.67989 6.54137 2.51696 4.9753 3.74614 3.74613C4.97531 2.51696 6.54137 1.67988 8.24628 1.34075C9.95119 1.00163 11.7184 1.17568 13.3244 1.8409C14.9304 2.50613 16.303 3.63264 17.2688 5.078C18.2345 6.52335 18.75 8.22262 18.75 9.96094C18.7474 12.2911 17.8206 14.5252 16.1729 16.1729C14.5252 17.8206 12.2912 18.7474 9.96094 18.75ZM12.7188 9.54688C12.8285 9.65674 12.8901 9.80566 12.8901 9.96094C12.8901 10.1162 12.8285 10.2651 12.7188 10.375L8.8125 14.2813C8.70143 14.3848 8.55452 14.4411 8.40272 14.4384C8.25092 14.4357 8.10609 14.3742 7.99874 14.2669C7.89138 14.1595 7.82989 14.0147 7.82721 13.8629C7.82453 13.7111 7.88088 13.5642 7.98438 13.4531L11.4756 9.96094L7.98438 6.46875C7.88088 6.35768 7.82453 6.21076 7.82721 6.05897C7.82989 5.90717 7.89138 5.76234 7.99874 5.65498C8.10609 5.54763 8.25092 5.48614 8.40272 5.48346C8.55452 5.48078 8.70143 5.53713 8.8125 5.64062L12.7188 9.54688Z" fill="currentColor"/>
            </svg>
          </button> */}
        </div>
      </div>
    </section>
  );
}
//               <Link to="/#classes" className="nav-link">Classes & Events</Link>

export default HeroSection;
