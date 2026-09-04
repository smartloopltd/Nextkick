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
            <span className="brand-mark">N</span>
            <span>Nextkick</span>
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
          <p className="eyebrow"><span /> Scouting tomorrow&apos;s stars</p>
          <h1>Build<br /><em>the next</em><br />elite.</h1>
          <p className="hero-copy">
            We discover football talent from every corner of the world, develop their craft, and help them turn raw potential into professional dreams.
          </p>
          <div className="hero-actions">
            <a className="button button-bright" href="https://play.google.com/store/apps/details?id=com.nextkick.user" target="_blank" rel="noreferrer">Get our app and register today <span aria-hidden="true">↗</span></a>
          </div>
        </div>

        <div className="hero-footer">
          <span>Scouting worldwide</span>
          <span className="footer-line" />
          <span>Talent / Development / Opportunity</span>
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
                We scout raw talent across borders and back players with ambition, character, and the hunger to grow. Our work begins with identifying potential early, even before the world has a chance to notice it.
              </p>
              <p>
                We look beyond the highlight reel, focusing on what matters most: discipline, mentality, coachability, and the ability to improve under pressure. We believe the next great player is not only defined by skill, but by the mindset to keep developing.
              </p>
            </div>
          </article>

          <article className="story-block" id="stories">
            <div className="story-copy">
              <h3>Stories</h3>
              <p>
                Every player has a path. Every journey matters. We celebrate the progress, resilience, and dream behind every rise, because success is never built on talent alone.
              </p>
              <p>
                These are the stories of belief, hard work, and the moments that turn promise into possibility. From first training sessions to breakthrough performances, each chapter shapes the future of the player and the legacy they are building.
              </p>
            </div>
          </article>
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
              <h3>See further</h3>
              <p>Our global scouting network finds character and promise beyond the usual spotlight.</p>
            </article>
            <article>
              <h3>Develop fully</h3>
              <p>Technical growth, football intelligence, and personal discipline move forward together.</p>
            </article>
            <article>
              <h3>Move forward</h3>
              <p>We connect committed players with the guidance and opportunities needed for their next step.</p>
            </article>
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
          </div>

          <div className="footer-cta">
            <p className="section-kicker">Start the conversation</p>
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
