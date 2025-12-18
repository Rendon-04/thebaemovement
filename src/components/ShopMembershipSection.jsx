import './ShopMembershipSection.css';

function ShopMembershipSection() {
  return (
    <section className="shop-membership-section">
      <div className="section-wrapper">
        <div className="shop-card">
          <h2 className="card-title">Shop Our Collection</h2>
          <p className="card-description">
            Explore our curated collection of wellness essentials and BAE-branded merch designed to inspire movement, confidence, and community.
          </p>
          <button className="shop-cta-button">Shop</button>
        </div>
        
        <div className="membership-card">
          <h2 className="card-title card-title-dark">Membership</h2>
          <p className="card-description card-description-dark">
            Join our inner circle and get early access to events, discounted tickets, exclusive meetups, and member-only perks from our brand partners.
          </p>
          <button className="membership-cta-button">Join Us</button>
        </div>
      </div>
    </section>
  );
}

export default ShopMembershipSection;
