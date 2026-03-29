import pic from "./assets/pic.jpg";
//TODO: put logo instead
//import ensign from "./assets/ensign_internship/ensign.jpg";
import type { picture } from "./carousel/EmblaCarousel.tsx";

const hbwImages = import.meta.glob("./assets/hotel_booking_website/*.png", {
  eager: true,
});

const hbwImagesPics = Object.entries(hbwImages)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, mod]) => ({
    src: (mod as { default: string }).default,
    caption: path
      .split("/")
      .pop()!
      .replace(/\.[^.]+$/, "") // remove extension
      .replace(/^\d+_/, "") // remove leading order prefix e.g. "01_"
      .replace(/_/g, " "), // underscores to spaces
  }));

const scaImages = import.meta.glob("./assets/self_care_app/*.jpeg", {
  eager: true,
});

const scaImagesPics = Object.entries(scaImages)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, mod]) => ({
    src: (mod as { default: string }).default,
    caption: path
      .split("/")
      .pop()!
      .replace(/\.[^.]+$/, "") // remove extension
      .replace(/^\d+_/, "") // remove leading order prefix e.g. "01_"
      .replace(/_/g, " "), // underscores to spaces
  }));

const fpgaImages = import.meta.glob("./assets/fpga_game/*.jpg", {
  eager: true,
});

const fpgaImagesPics = Object.entries(fpgaImages)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, mod]) => ({
    src: (mod as { default: string }).default,
    caption: path
      .split("/")
      .pop()!
      .replace(/\.[^.]+$/, "") // remove extension
      .replace(/^\d+_/, "") // remove leading order prefix e.g. "01_"
      .replace(/_/g, " "), // underscores to spaces
  }));

export const about: string = `I build robust solutions across the full stack with a passion
              for user-centric design.`;

export const about_pic: string = pic;

type WorkType = "internship" | "project";

type Work = {
  title: string;
  type: WorkType;
  desc: string;
  tech: string[];
  start: string;
  end: string;
  pic: picture[];
};

export const work: Work[] = [
  {
    title: "Full-stack Software Engineer Intern @ Ensign Infosecurity",
    type: "internship",
    desc: `Built an end-to-end AI platform that facilitates real-time anomaly detection, historical data visualization, and automated model training cycles, allowing for better operation and management of plant systems`,
    tech: [
      "Frontend - ReactJS",
      "Middleware - NestJS",
      "Database - PostgreSQL",
      "Web technologies - Microservices, Kafka, Websockets",
      "Deployment - Kubernetes, Helm, Terraform, Github CI, AWS",
    ],
    start: "Sep 2025",
    end: "Dec 2025",
    pic: [],
  },

  {
    title: "Hotel Booking Website",
    type: "project",
    desc: `Worked in a team to build a full-stack, web-based hotel booking system that includes a destination search feature, guest and room input, hotel details page, and payment page`,
    tech: [
      "Frontend - ReactJS",
      "Backend - Node.js",
      "Database - MongoDB",
      "Testing - Jest, Cypress",
    ],
    start: "June 2025",
    end: "Aug 2025",
    pic: hbwImagesPics,
  },

  {
    title: "Self-Care Android App",
    type: "project",
    desc: `Collaborated in developing a full-stack care app with Android Studio, featuring a growable plant mascot, point-based goals system, and mood calendar for reflection and healthier mental state`,
    tech: ["Frontend - XML", "Backend - Java", "Database - SQLite with RoomDB"],
    start: "Jan 2025",
    end: "April 2025",
    pic: scaImagesPics,
  },

  {
    title: '"Whack or Bomb!" FPGA based Game',
    type: "project",
    desc: `A classic whack-a-mole game with a twist: a bomb with a constantly changing color. Built using FPGA and Lucid programming through Alchitry Labs, and fabricated with custom-made 3D printed buttons and a laser-cut outer case.`,
    tech: ["FPGA - Alchitry Au+"],
    start: "Jan 2025",
    end: "April 2025",
    pic: fpgaImagesPics,
  },

  {
    title:
      "Software Engineer Intern @ GUE Ecosystem (Digital Health-Tech Company)",
    type: "internship",
    desc: `Developed a unique internal tool using full-stack Frappe development framework to streamline workflows for planning and managing merchant visits, enhancing team productivity. Exposed to database knowledge (MariaDB), REST API (Postman), and basic CI/CD concepts.`,
    tech: ["Frontend - JavaScript (Frappe)", "Backend - Python (Frappe)"],
    start: "May 2024",
    end: "Aug 2024",
    pic: [],
  },
];

type Contact = {
  text: string;
  email: string;
  linkedin: string;
  github: string;
};

export const contact: Contact = {
  text: "Feel free to reach out for collaborations, inquiries, or just a chat!",
  email: "nadineverelia@gmail.com",
  linkedin: "https://www.linkedin.com/in/nadinemoiras/",
  github: "https://github.com/NadineeSCH",
};
