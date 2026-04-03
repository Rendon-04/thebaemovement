const DEFAULT_CLASS_TABS = [
  {
    label: "Pilates Spring Equinox Edition",
    subtitle: "Pilates con Banda",
    description:
      "Celebrate the Spring Equinox with our signature Pilates con Banda experience, a live Banda-powered flow that marks a fresh season of energy, strength, and community.",
    image: "/banda.jpg",
    bookingUrl:
      "https://www.eventbrite.com/e/pilates-con-banda-spring-equinox-edition-the-bae-movement-tickets-1982937227627",
    features: [
      {
        icon: "https://api.builder.io/api/v1/image/assets/TEMP/49e841e3f63baf55a5bf58c4ea8b492ccdf367ee?width=68",
        title: "Equinox Energy",
        description:
          "A fresh-season flow designed to help you reset, recharge, and step into spring with intention and strength.",
      },
      {
        icon: "https://api.builder.io/api/v1/image/assets/TEMP/9d4e4b631e1ad6189bc080de5132af97137d13e6?width=68",
        title: "Strength + Sculpt",
        description:
          "Core, glutes, and full-body strength work that leaves you feeling accomplished, energized, and ready for the new season.",
      },
      {
        icon: "https://api.builder.io/api/v1/image/assets/TEMP/210712b163db78b144cd7f63b1aefacb2b461a76?width=68",
        title: "Culture & Community",
        description:
          "Move to live Banda in a space where women feel seen and celebrated, honoring culture through music, movement, and shared energy.",
      },
      {
        icon: "https://api.builder.io/api/v1/image/assets/TEMP/aa63d0c82877627c09df9c2ff976f1e2567b083c?width=68",
        title: "Seasonal Experience",
        description:
          "A special-edition class with curated vibes, sound, and intention to welcome the Spring Equinox together.",
      },
    ],
  },
  {
    label: "Wellness Pop-Ups",
    subtitle: "Wellness Pop-Ups",
    description:
      "Curated experiences beyond the workout, designed to reset your mind, reconnect with your body, and meet women who are on the same journey.",
    image: "/wellnesspopup.png",
    bookingUrl: null,
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
    image: "/social.jpg",
    bookingUrl: null,
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
          "Leave with new connections, a lighter mood, and plans for what's next, not just 'nice meeting you.'",
      },
    ],
  },
];

const DEFAULT_COMING_SOON_EVENTS = [
  {
    title: "Mother's Day Build Your Bouquet + Editorial Photo Shoots",
    location: "San Francisco",
    date: "May 2nd",
    note: "Stay tuned for tickets — mark your calendars!",
  },
];

const STORAGE_KEY = "bae_classes_data";

export function getClassesData() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch {
    // ignore parse errors
  }
  return {
    classTabs: DEFAULT_CLASS_TABS,
    comingSoonEvents: DEFAULT_COMING_SOON_EVENTS,
  };
}

export function saveClassesData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export { DEFAULT_CLASS_TABS, DEFAULT_COMING_SOON_EVENTS };
