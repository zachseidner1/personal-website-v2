import appdev from "../assets/images/appdev.jpg";
import goosery from "../assets/images/goosery.png";
import happiness from "../assets/images/happiness.png";
import rampLogo from "../assets/images/Ramp-logo-basic.png";
import volume from "../assets/images/volume.png";

export const experienceData = [
  // Experience Section
  {
    title: "Software Engineering Intern @ Ramp",
    date: "May 2025 – Present",
    description:
      "Returned to the fastest growing SaaS startup by revenue for a second, high-impact internship. Key contributions include developing a GPS mileage tracking feature with a foreground service to automate expense reporting, and adding tabs to the manager inbox for procurement and bill pay, a feature rolled out to over 100,000 users. Also improved app architecture by modifying code generation (Mustache) and decoupling UI components to enhance scalability.",
    imageUrl: rampLogo,
    techBadges: ["Android", "Kotlin", "Java", "Mustache", "Code Generation"],
    links: [],
  },
  {
    title: "Subteam Lead @ Cornell AppDev",
    date: "Aug. 2024 – Present",
    description:
      "Led technical workshops on modern Android architecture patterns like MVVM and dependency injection with Dagger and Hilt. Co-architected the new 'Score' mobile app, establishing its foundational structure, and drove code quality by providing detailed mentorship and code reviews on all subteam pull requests.",
    imageUrl: appdev,
    techBadges: [
      "Android",
      "MVVM",
      "Dagger",
      "Hilt",
      "Mentorship",
      "Architecture",
    ],
    links: [],
  },
  {
    title: "Teaching Assistant @ Cornell AppDev",
    date: "Aug. 2024 – Nov. 2024",
    description:
      "Co-instructed a 2-credit course on modern Android development, focusing on Jetpack Compose and declarative UI. Designed new curriculum, lectures, and assignments to align with the latest industry tools, and hosted office hours to explain complex technical concepts to students.",
    imageUrl: appdev,
    techBadges: ["Android", "Jetpack Compose", "Teaching", "Curriculum Design"],
    links: [],
  },
];

export const projectsData = [
  {
    title: "Le Gooséry Store",
    date: "Feb. 2025 – May 2025",
    description:
      "Led programming for a cross-platform (iOS/Android) game deployed to the App Store, achieving over 150 downloads. Designed a modular, event-driven scene architecture and created interactive tutorials with smooth tweening animations. The project was awarded 'Most Polished' at the GDIAC showcase.",
    imageUrl: goosery,
    techBadges: ["C++", "CUGL", "iOS", "Android", "Game Development"],
    links: [
      { live: "https://apps.apple.com/us/app/le-gooséry-store/id6744664408" },
    ],
  },
  {
    title: "Happiness App",
    date: "Dec. 2022 – March 2024",
    description:
      "Led a team of 6 to create a mood-tracking social media app. I designed and implemented the backend, including data models with PostgreSQL and SQLAlchemy, supporting over 6,000 entries. I also engineered a custom time-based bearer token authentication system and used a Redis Queue with APScheduler to handle background tasks like sending email notifications.",
    imageUrl: happiness,
    techBadges: [
      "React",
      "TypeScript",
      "Flask",
      "Python",
      "PostgreSQL",
      "SQLAlchemy",
      "Redis",
      "Auth",
    ],
    links: [{ live: "https://happinessapp.me" }],
  },
  {
    title: "Volume",
    date: "Feb. 2023 – Dec. 2023",
    description:
      "Developed an Android app for Cornell campus news, partnering with over 50 student organizations. I designed a secure authentication system using bcrypt and Typegoose and enhanced the search algorithm with indexing, which led to a 360% increase in the Android user base. The app received the Ernst & Young Award at the 2023 Cornell digital technology showcase.",
    imageUrl: volume,
    techBadges: [
      "Kotlin",
      "Jetpack Compose",
      "MongoDB",
      "Typegoose",
      "TypeScript",
      "Node.js",
      "bcrypt",
    ],
    links: [
      {
        live: "https://play.google.com/store/apps/details?id=com.cornellappdev.android.volume",
      },
    ],
  },
];
