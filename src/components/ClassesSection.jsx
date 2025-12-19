import { useState } from "react";
import "./ClassesSection.css";

function ClassesSection() {
  // Curated tabs / sections (each has unique copy + features)
  const classTabs = [
    {
      label: "Pilates con Banda",
      subtitle: "Pilates con Banda",
      description:
        "Our signature Pilates experience set to live Banda, an energizing, culturally rooted flow that blends strength, rhythm, and community in one unforgettable class.",
      image:
        "/banda.jpg",
      features: [
        {
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/49e841e3f63baf55a5bf58c4ea8b492ccdf367ee?width=68",
          title: "Rhythm-Led Flow",
          description:
            "A Pilates sequence designed to move with the music, control, power, and driven by the live energy in the room.",
        },
        {
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/9d4e4b631e1ad6189bc080de5132af97137d13e6?width=68",
          title: "Strength + Sculpt",
          description:
            "Core, glutes, and full-body strength work that leaves you feeling accomplished and proud of what your body can do.",
        },
        {
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/210712b163db78b144cd7f63b1aefacb2b461a76?width=68",
          title: "Culture & Community",
          description:
            "A space where women feel seen and celebrated, honoring culture through movement, music, and shared energy.",
          image:
        "thebaemovement/public/Screenshot 2025-12-19 at 11.30.58 AM.png",
        },
        {
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/aa63d0c82877627c09df9c2ff976f1e2567b083c?width=68",
          title: "Event-Level Experience",
          description:
            "More than a class, curated lighting, sound, and vibes that feel like a wellness event you’ll want to come back to.",
        },
      ],
    },

    {
      label: "Run & Sculpt",
      subtitle: "Run & Sculpt",
      description:
        "A performance driven workout that pairs a runner’s high with a sculpt-focused finish. Built for women who want to sweat, push, and leave feeling strong.",
        image: "/runnandsculpt.png",
      features: [
        {
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/49e841e3f63baf55a5bf58c4ea8b492ccdf367ee?width=68",
          title: "Cardio + Endurance",
          description:
            "A run segment designed to build stamina and confidence, approachable for beginners, challenging for regulars.",
        },
        {
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/9d4e4b631e1ad6189bc080de5132af97137d13e6?width=68",
          title: "Sculpt Finish",
          description:
            "Targeted strength work to tone legs, glutes, core, and arms, the kind of burn that feels worth it.",
        },
        {
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/210712b163db78b144cd7f63b1aefacb2b461a76?width=68",
          title: "Coach-Guided Form",
          description:
            "Clear cues and modifications so you can move safely, progress at your pace, and still feel challenged.",
        },
        {
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/aa63d0c82877627c09df9c2ff976f1e2567b083c?width=68",
          title: "High-Confidence Energy",
          description:
            "A hype, supportive room that makes pushing yourself feel exciting, not intimidating.",
        },
      ],
    },

    {
      label: "Wellness Pop-Ups",
      subtitle: "Wellness Pop-Ups",
      description:
        "Curated experiences beyond the workout, designed to reset your mind, reconnect with your body, and meet women who are on the same journey.",
      image:
        "/wellnesspopup.png",
      features: [
        {
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/49e841e3f63baf55a5bf58c4ea8b492ccdf367ee?width=68",
          title: "Rotating Themes",
          description:
            "Breathwork, sound baths, mobility, journaling, self-care nights, each pop-up brings something fresh and intentional.",
        },
        {
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/9d4e4b631e1ad6189bc080de5132af97137d13e6?width=68",
          title: "Mind-Body Reset",
          description:
            "Space to decompress and recharge, leaving you calmer, clearer, and more connected to yourself.",
        },
        {
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/210712b163db78b144cd7f63b1aefacb2b461a76?width=68",
          title: "Community Connection",
          description:
            "Meet new friends in a low-pressure environment designed for real conversation and genuine connection.",
        },
        {
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/aa63d0c82877627c09df9c2ff976f1e2567b083c?width=68",
          title: "Local Partners",
          description:
            "Collaborations with women-led brands, creators, and wellness practitioners to keep it rooted and real.",
        },
      ],
    },

    {
      label: "Social Hours",
      subtitle: "Social Hours",
      description:
        "Intentional hangouts for women who want community, relaxed, fun, and designed to help you meet people without it feeling awkward or forced.",
      image:
        "/social.jpg",
      features: [
        {
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/49e841e3f63baf55a5bf58c4ea8b492ccdf367ee?width=68",
          title: "Low-Pressure Vibes",
          description:
            "Come solo or bring a friend, the environment is welcoming, easy, and built for natural connection.",
        },
        {
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/9d4e4b631e1ad6189bc080de5132af97137d13e6?width=68",
          title: "Curated Conversation",
          description:
            "Icebreakers and prompts (optional) that make meeting new people feel simple, not cringe.",
        },
        {
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/210712b163db78b144cd7f63b1aefacb2b461a76?width=68",
          title: "Culture & Celebration",
          description:
            "Music, movement, and community energy, a space that feels like a mini celebration of being you.",
        },
        {
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/aa63d0c82877627c09df9c2ff976f1e2567b083c?width=68",
          title: "After-Event Glow",
          description:
            "Leave with new connections, a lighter mood, and plans for what’s next, not just ‘nice meeting you.’",
        },
      ],
    },
  ];

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
            <div className="classes-image-wrapper">
              <img
                src={activeTab.image}
                alt={activeTab.subtitle}
                className="classes-image"
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

              <button className="book-button" type="button">
                Book now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClassesSection;
