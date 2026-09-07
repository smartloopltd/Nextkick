"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface NavigationLink {
  href: string;
  label: string;
}

interface Story {
  id: string;
  title: string;
  paragraphs: string[];
}

interface Benefit {
  title: string;
  description: string;
}

interface BrandLinkProps {
  className?: string;
}

const navigationLinks: NavigationLink[] = [
  { href: "#about-us", label: "About Us" },
  { href: "#talent", label: "Talent" },
  { href: "#stories", label: "Stories" },
];

const footerLinks: NavigationLink[] = [
  ...navigationLinks,
  { href: "#why-nextkick", label: "Why Nextkick" },
];

const stories: Story[] = [
  {
    id: "about-us",
    title: "About Us",
    paragraphs: [
      "NextKick is designed to transform the way young football talents in Nigeria and across Africa are developed and discovered.",
      "With NextKick, young players can create detailed profiles that highlight their growth and performance over time. The app offers a comprehensive platform for tracking development through daily drills, and it also hosts exciting tournaments. These tournaments feature live scoring, team standings, and individual player stats, making it easy for everyone to follow and support the athletes.",
      "As we continue to grow, we also plan to empower users to organize their own tournaments, creating a vibrant community for young footballers.",
      "And the best part? NextKick also serves as a scouting tool. It allows scouts and agents to discover new talent by viewing player profiles and watching their progress, making it a fantastic opportunity for young athletes to get noticed.",
    ],
  },
  {
    id: "talent",
    title: "Talent",
    paragraphs: [
      "We look beyond the highlight reel and scout for the qualities that matter most: discipline, character, coachability, and the hunger to improve. At NextKick, we identify potential early and help turn it into lasting progress.",
      "Great football is not only about skill; it is about mindset, consistency, and the willingness to keep growing under pressure. We back players who are ready to learn, compete, and rise to the next level.",
    ],
  },
  {
    id: "stories",
    title: "Stories",
    paragraphs: [
      "Every player has a journey, and every step matters. From first training sessions to breakthrough performances, these are the stories of resilience, belief, and the work behind every rise.",
      "At NextKick, we celebrate the moments that turn potential into progress and progress into opportunity. This is where ambition meets support, and where future stars begin to build their legacy.",
    ],
  },
];

const benefits: Benefit[] = [
  {
    title: "Discover potential",
    description: "We search beyond the usual spotlight to find players with real character, drive, and promise.",
  },
  {
    title: "Build growth",
    description: "Through training, discipline, and performance, we help young players develop the skills and mindset to rise.",
  },
  {
    title: "Create opportunity",
    description: "We connect emerging talent with the guidance, visibility, and chances they need to move forward.",
  },
];

const appStoreUrl = "https://play.google.com/store/apps/details?id=com.nextkick.user";
const videoSrc = "/img/nextkick_app_video.mp4";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "#organization",
      name: "NextKick",
      url: siteUrl,
      description: "NextKick helps young football talent across Nigeria and Africa build profiles, develop their game, compete, and get discovered.",
      telephone: "+2349151910798",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Shop 12 informal section Wuse market",
        addressLocality: "Abuja",
        addressRegion: "FCT",
        addressCountry: "NG",
      },
      areaServed: ["Nigeria", "Africa"],
      knowsAbout: ["Football talent development", "Youth football scouting", "Football tournaments"],
    },
    {
      "@type": "WebSite",
      "@id": "#website",
      name: "NextKick",
      url: siteUrl,
      description: "Discovering Africa's next football stars.",
      publisher: { "@id": "#organization" },
      mentions: { "@type": "Organization", name: "Binal Sports" },
    },
  ],
};

function BrandLink({ className = "brand" }: BrandLinkProps) {
  return (
    <a className={className} href="#top" aria-label="Nextkick home">
      <span>Nextkick</span>
    </a>
  );
}

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const navMenuRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const handleOutsidePointer = (event: PointerEvent) => {
      if (navMenuRef.current && !navMenuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", handleOutsidePointer);
    return () => document.removeEventListener("pointerdown", handleOutsidePointer);
  }, [menuOpen]);

  return (
    <header className="hero-nav">
      <BrandLink />
      <nav className="nav-menu" ref={navMenuRef} aria-label="Main navigation">
        <button
          className="nav-toggle"
          type="button"
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
        <div className={`nav-links ${menuOpen ? "is-open" : ""}`} id="primary-navigation">
          {navigationLinks.map(({ href, label }) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="match-hero" aria-labelledby="hero-title">
      <SiteHeader />
      <div className="hero-content" id="top">
        <p className="eyebrow"><span aria-hidden="true" /> Discovering tomorrow&apos;s stars</p>
        <h1 id="hero-title">Develop<br /><em>the next</em><br />generation.</h1>
        <p className="hero-copy">
          We discover young football talent across Africa, guide their growth, and create opportunities for them to compete, improve, and get noticed.
        </p>
        <div className="hero-actions">
          <a className="button button-bright" href={appStoreUrl} target="_blank" rel="noreferrer">
            Get our app and register today <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <div className="hero-footer" aria-label="Nextkick focus areas">
        <span>Discovering talent</span>
        <span className="footer-line" aria-hidden="true" />
        <span>Development / Growth / Opportunity</span>
      </div>
    </section>
  );
}

function StoriesSection() {
  return (
    <section className="brand-section" aria-label="Nextkick stories">
      <div className="story-stack">
        {stories.map(({ id, title, paragraphs }) => (
          <article className="story-block" id={id} key={id}>
            <section className="story-copy" aria-labelledby={`${id}-title`}>
              <h2 id={`${id}-title`}>{title}</h2>
              {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          </article>
        ))}
      </div>
    </section>
  );
}

function VideoSection() {
  return (
    <section className="video-feature" aria-labelledby="video-title">
      <div className="video-feature-inner">
        <header className="video-copy">
          <h2 id="video-title">See how NextKick helps players grow, compete, and get discovered.</h2>
        </header>
        <figure className="video-frame">
          <video
            className="video-media"
            src={videoSrc}
            controls
            playsInline
            preload="metadata"
            aria-label="NextKick app overview video"
          />
        </figure>
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section className="why-section" id="why-nextkick" aria-labelledby="why-title">
      <div className="why-inner">
        <header className="why-heading">
          <p className="section-kicker">Why Nextkick</p>
          <h2 id="why-title">Built for the player behind the potential.</h2>
        </header>
        <div className="why-grid">
          {benefits.map(({ title, description }) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnerSection() {
  return (
    <section className="brand-section affiliate-section" aria-labelledby="partner-title">
      <div className="affiliate-content">
        <Image
          src="/img/photo_2026-09-04_17-52-19.jpg"
          alt="Binal Sports logo"
          className="affiliate-logo"
          width={1000}
          height={552}
        />
        <div className="affiliate-copy">
          <p className="section-kicker" id="partner-title">Major partner</p>
          <p className="affiliate-text">Binal Sports is a proud supporter and strategic partner of the NextKick platform, helping drive opportunity, visibility, and growth for emerging football talent.</p>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-main">
        <div className="footer-brand-block">
          <BrandLink className="brand footer-brand" />
          <p>Discovering the next generation of football talent.</p>
          <address className="office-address">
            Shop 12 informal section Wuse market, Fct, Abuja, Nigeria<br />
            <a href="tel:+2349151910798">+234 915 191 0798</a>
          </address>
        </div>
        <div className="footer-cta">
          <a className="footer-action" href={appStoreUrl} target="_blank" rel="noreferrer">
            Get our app and register today <span aria-hidden="true">↗</span>
          </a>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          {footerLinks.map(({ href, label }) => <a key={href} href={href}>{label}</a>)}
        </nav>
      </div>
      <div className="footer-bottom">
        <span>Scouting worldwide</span>
        <span>Talent / Development / Opportunity</span>
        <span>© 2026 Nextkick</span>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HeroSection />
      <StoriesSection />
      <VideoSection />
      <WhySection />
      <PartnerSection />
      <SiteFooter />
    </main>
  );
}
