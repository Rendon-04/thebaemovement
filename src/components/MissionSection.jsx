import './MissionSection.css';

function MissionSection() {
  const values = [
    {
      icon: 'https://api.builder.io/api/v1/image/assets/TEMP/9d8e7979387557a369070a072e270d583f2b8e01?width=160',
      title: 'Community',
      description: 'Creating spaces where women come together to connectand build lasting bonds.'
    },
    {
      icon: 'https://api.builder.io/api/v1/image/assets/TEMP/d918073d0e894d02941ec9a677938d8c18dc4674?width=160',
      title: 'Inclusivity',
      description: 'Welcoming every woman, background, story, into a collective to feel celebrated.'
    },
    {
      icon: 'https://api.builder.io/api/v1/image/assets/TEMP/beaefc7a496380533bf5bf286815965967247f7e?width=144',
      title: 'Wellness',
      description: 'Centering holistic well-being by offering environments that nourish the mind, body, and spirit."'
    },
    {
      icon: 'https://api.builder.io/api/v1/image/assets/TEMP/9dc12a2c1cb9779ff388a3eb9bad121f2da13efc?width=160',
      title: 'Empowerment',
      description: 'Encouraging women to pour into themselves first so they can show up stronger.'
    },
    {
      icon: 'https://api.builder.io/api/v1/image/assets/TEMP/79890a44212e7179d95403de6c1de9b00a250e7a?width=160',
      title: 'Joy',
      description: 'Infusing every experience with joy, celebration, and positive energy that inspires women to thrive.'
    }
  ];

  return (
    <section className="mission-section">
      <div className="mission-header">
        <h2 className="mission-title">Our Mission</h2>
        <p className="mission-description">
          The BAE Movement is a women's social and wellness collective blending movement, culture, and community. We host curated fitness events with live music, premium brand activations, and joyful spaces that empower women to connect, celebrate, and give back.
        </p>
      </div>
      
      <div className="mission-values">
        {values.map((value, index) => (
          <div key={index} className="value-card">
            <div className="value-icon-wrapper">
              <img src={value.icon} alt={value.title} className="value-icon" />
              <h3 className="value-title">{value.title}</h3>
            </div>
            <p className="value-description">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MissionSection;
