"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <section className="match-hero">
        <header className="hero-nav">
          <a className="brand" href="#top" aria-label="Nextkick home">
            <span className="brand-mark">N</span>
            <span>Nextkick</span>
          </a>

          <nav className="nav-menu" aria-label="Main navigation">
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
              <a href="#academy" onClick={() => setMenuOpen(false)}>Academy</a>
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
            <a className="button button-bright" href="#apply">Speak to our management <span aria-hidden="true">↗</span></a>
          </div>
        </div>

        <div className="hero-footer">
          <span>Scouting worldwide</span>
          <span className="footer-line" />
          <span>Talent / Development / Opportunity</span>
        </div>
      </section>

      <section className="brand-section">
        <div className="section-header">
          <p className="section-kicker">What we do</p>
          <h2>Where talent meets opportunity.</h2>
        </div>

        <div className="story-stack">
          <article className="story-block" id="academy">
            <div className="story-copy">
              <h3>Academy</h3>
              <p>
                We build disciplined, high-performance environments where young players develop technical quality, football intelligence, and confidence.
              </p>
              <p>
                Through structured coaching, focused training, and real match pressure, we help players grow stronger, sharper, and more prepared for the next step.
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
    </main>
  );
}
