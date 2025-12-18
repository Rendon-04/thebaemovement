import './PartnershipsSection.css';

function PartnershipsSection() {
  const partners = [
    {
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/2c115bfae0a42fbb62c9912a104edc5864f80093?width=816',
      name: 'Prosecco Rose Boutique'
    },
    {
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/66189056ec6449f9ff749d8d27c460a63fb0dd48?width=816',
      name: 'Sazon Grip'
    },
    {
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/ddf9ea7b0e4562341dd47274485cf06fae0d54cd?width=816',
      name: 'Blond Bungalow'
    },
    {
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/28d8957d3ed6720b57ceebf2687796aa0210ae8a?width=816',
      name: 'Salud'
    },
    {
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/60ddbdf65c84da6a34cd884a931a77dec5739e4d?width=816',
      name: 'BUBBL\'R'
    },
    {
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/c856caccbca5044f08c4c5f3b37654a38be748e8?width=816',
      name: 'Hanson'
    }
  ];

  return (
    <section className="partnerships-section">
      <div className="partnerships-container">
        <div className="partnerships-header">
          <h2 className="partnerships-title">Our Partnerships</h2>
          <p className="partnerships-description">
            Connect with an engaged community of wellness-minded women through experiential activations, sampling, and collaborative content creation.
          </p>
        </div>
      </div>
      
      <div className="partnerships-grid-wrapper">
        <div className="partnerships-grid">
          {partners.slice(0, 3).map((partner, index) => (
            <div key={index} className="partner-card">
              <img src={partner.image} alt={partner.name} className="partner-image" />
              <h3 className="partner-name">{partner.name}</h3>
            </div>
          ))}
        </div>
        
        <div className="partnerships-grid">
          {partners.slice(3, 6).map((partner, index) => (
            <div key={index} className="partner-card">
              <img src={partner.image} alt={partner.name} className="partner-image" />
              <h3 className="partner-name">{partner.name}</h3>
            </div>
          ))}
        </div>
        
        <button className="partner-button">Partner with us</button>
      </div>
    </section>
  );
}

export default PartnershipsSection;
