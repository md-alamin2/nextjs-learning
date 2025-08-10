import Link from "next/link";
import React from "react";

export default function ServicesPage() {
  const data = [
    {
      id: 1,
      title: "Professional Tennis Courts",
      tagline: "Where champions are made",
      description:
        "Join our premium sports facility and experience world-class courts, professional training, and an exceptional community.",
      image:
        "https://i.ibb.co/RGPYDfzX/j-schiemann-Z4-Sxy1-3wd-Y-unsplash-min.jpg",
      cta: [
        {
          text: "Book a Court",
          icon: "FaCalendarAlt",
          action: "/booking/tennis",
        },
        {
          text: "Learn More",
          icon: "FaInfoCircle",
          action: "/about/tennis",
        },
      ],
    },
    {
      id: 2,
      title: "Olympic Badminton Courts",
      tagline: "Precision meets passion",
      description:
        "Professional-grade courts with tournament lighting and premium shuttle service for all skill levels.",
      image:
        "https://i.ibb.co/6Rd1D4XL/muktasim-azlan-p-Pf-OLOK0oe-I-unsplash-min.jpg",
    },
    {
      id: 3,
      title: "Cricket Practice Nets",
      tagline: "Perfect your technique",
      description:
        "High-quality turf nets with bowling machines and professional coaching sessions available.",
      image:
        "https://i.ibb.co/XrcZ45WZ/alfred-kenneally-Xq-Fe-Vpr-J3j-Q-unsplash-min.jpg",
    },
    {
      id: 4,
      title: "Football Turf Grounds",
      tagline: "Train like the pros",
      description:
        "FIFA-approved artificial turf with floodlights for evening matches and league competitions.",
      image:
        "https://i.ibb.co/cKK7Rn5d/lesly-juarez-is-WEKd-SRCr-A-unsplash-min.jpg",
    },
  ];
  return (
    <div>
      <p className="text-3xl font-bold">Services page</p>
      <div className="grid grid-cols-4 gap-10 mt-8">
        {data.map((s) => (
          <div key={s.id}>
            <h2>Title: {s.title}</h2>
            <Link href={`/services/${s.id}`}>
              <button className="px-2 py-1 bg-indigo-500 rounded-lg cursor-pointer">
                See Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
