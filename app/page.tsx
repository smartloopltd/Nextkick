"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navMenuRef = useRef<HTMLElement>(null);

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
    <main>
      <section className="match-hero">
        <header className="hero-nav">
          <a className="brand" href="#top" aria-label="Nextkick home">
            <span className="brand-word">NEXTKICK</span>
          </a>

          <nav className="nav-menu" ref={navMenuRef} aria-label="Main navigation">
            <button
              className="nav-toggle"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span />
              <span />
              <span />
            </button>

            <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
              <a href="#academy" onClick={() => setMenuOpen(false)}>About Us</a>
              <a href="#talent" onClick={() => setMenuOpen(false)}>Talent</a>
              <a href="#stories" onClick={() => setMenuOpen(false)}>Stories</a>
            </div>
          </nav>
        </header>

        <div className="hero-content" id="top">
          <p className="eyebrow"><span /> Discovering tomorrow&apos;s stars</p>
          <h1>Develop<br /><em>the next</em><br />generation.</h1>
          <p className="hero-copy">
            We discover young football talent across Africa, guide their growth, and create opportunities for them to compete, improve, and get noticed.
          </p>
          <div className="hero-actions">
            <a className="button button-bright" href="https://play.google.com/store/apps/details?id=com.nextkick.user" target="_blank" rel="noreferrer">Get our app and register today <span aria-hidden="true">↗</span></a>
          </div>
        </div>

        <div className="hero-footer">
          <span>Discovering talent</span>
          <span className="footer-line" />
          <span>Development / Growth / Opportunity</span>
        </div>
      </section>

      <section className="brand-section">
        <div className="story-stack">
          <article className="story-block" id="academy">
            <div className="story-copy">
              <h3>About Us</h3>
              <p>
                NextKick is designed to transform the way young football talents in Nigeria and across Africa are developed and discovered.
              </p>
              <p>
                With NextKick, young players can create detailed profiles that highlight their growth and performance over time. The app offers a comprehensive platform for tracking development through daily drills, and it also hosts exciting tournaments. These tournaments feature live scoring, team standings, and individual player stats, making it easy for everyone to follow and support the athletes.
              </p>
              <p>
                As we continue to grow, we also plan to empower users to organize their own tournaments, creating a vibrant community for young footballers.
              </p>
              <p>
                And the best part? NextKick also serves as a scouting tool. It allows scouts and agents to discover new talent by viewing player profiles and watching their progress, making it a fantastic opportunity for young athletes to get noticed.
              </p>
            </div>
          </article>

          <article className="story-block" id="talent">
            <div className="story-copy">
              <h3>Talent</h3>
              <p>
                We look beyond the highlight reel and scout for the qualities that matter most: discipline, character, coachability, and the hunger to improve. At NextKick, we identify potential early and help turn it into lasting progress.
              </p>
              <p>
                Great football is not only about skill; it is about mindset, consistency, and the willingness to keep growing under pressure. We back players who are ready to learn, compete, and rise to the next level.
              </p>
            </div>
          </article>

          <article className="story-block" id="stories">
            <div className="story-copy">
              <h3>Stories</h3>
              <p>
                Every player has a journey, and every step matters. From first training sessions to breakthrough performances, these are the stories of resilience, belief, and the work behind every rise.
              </p>
              <p>
                At NextKick, we celebrate the moments that turn potential into progress and progress into opportunity. This is where ambition meets support, and where future stars begin to build their legacy.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="video-feature" aria-label="NextKick app overview video">
        <div className="video-feature-inner">
          <div className="video-copy">
            <h2>See how NextKick helps players grow, compete, and get discovered.</h2>
          </div>

          <div className="video-frame" aria-label="NextKick app overview video">
            <video
              className="video-media"
              src="/img/nextkick_app_video.mp4"
              controls
              playsInline
              preload="metadata"
            />
          </div>
        </div>
      </section>

      <section className="why-section" id="why-nextkick">
        <div className="why-inner">
          <div className="why-heading">
            <p className="section-kicker">Why Nextkick</p>
            <h2>Built for the player behind the potential.</h2>
          </div>

          <div className="why-grid">
            <article>
              <h3>Discover potential</h3>
              <p>We search beyond the usual spotlight to find players with real character, drive, and promise.</p>
            </article>
            <article>
              <h3>Build growth</h3>
              <p>Through training, discipline, and performance, we help young players develop the skills and mindset to rise.</p>
            </article>
            <article>
              <h3>Create opportunity</h3>
              <p>We connect emerging talent with the guidance, visibility, and chances they need to move forward.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="brand-section affiliate-section" aria-label="Binal Sports partnership">
        <div className="affiliate-content">
          <img
            src="/img/photo_2026-09-04_17-52-19.jpg"
            alt="Binal Sports logo"
            className="affiliate-logo"
          />
          <div className="affiliate-copy">
            <p className="section-kicker">Major partner</p>
            <p className="affiliate-text">Binal Sports is a proud supporter and strategic partner of the NextKick platform, helping drive opportunity, visibility, and growth for emerging football talent.</p>
          </div>
        </div>
      </section>

      <footer className="site-footer" id="contact">
        <div className="footer-main">
          <div className="footer-brand-block">
            <a className="brand footer-brand" href="#top" aria-label="Nextkick home">
              <span className="brand-mark">N</span>
              <span>Nextkick</span>
            </a>
            <p>Discovering the next generation of football talent.</p>
            <p className="office-address">Shop 12 informal section Wuse market, Fct, Abuja, Nigeria</p>
            <p className="office-address">+234 915 191 0798</p>
          </div>

          <div className="footer-cta">
            <a className="footer-action" href="https://play.google.com/store/apps/details?id=com.nextkick.user" target="_blank" rel="noreferrer">
              Get our app and register today <span aria-hidden="true">↗</span>
            </a>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            <a href="#academy">About Us</a>
            <a href="#talent">Talent</a>
            <a href="#stories">Stories</a>
            <a href="#why-nextkick">Why Nextkick</a>
          </nav>
        </div>

        <div className="footer-bottom">
          <span>Scouting worldwide</span>
          <span>Talent / Development / Opportunity</span>
          <span>© 2026 Nextkick</span>
        </div>
      </footer>
    </main>
  );
}
