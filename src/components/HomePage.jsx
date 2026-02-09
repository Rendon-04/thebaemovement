import HeroSection from './HeroSection';
import MissionSection from './MissionSection';
import ClassesSection from './ClassesSection';
import PartnershipsSection from './PartnershipsSection';
import ShopMembershipSection from './ShopMembershipSection';

function HomePage() {
  return (
    <>
      <HeroSection />
      <section id="about">
        <MissionSection />
      </section>
      <section id="classes">
        <ClassesSection />
      </section>
      <section id="partnerships">
        <PartnershipsSection />
      </section>
      <ShopMembershipSection />
    </>
  );
}

export default HomePage;
