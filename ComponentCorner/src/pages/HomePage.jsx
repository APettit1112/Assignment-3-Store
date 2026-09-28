// HomePage.jsx: Move the Hero component from App.jsx and create a brief introduction with "Why Shop with Us?"
// AI Helped with the uderstanding why costumer's should shop with us and other business research

import React from 'react';
import Hero from '../assets/components/Hero';

/* Styling for this landing page was created with AI assistance. */
function HomePage() {
  return (
    <div className="page-content">
      <Hero
        title="Component Corner"
        subtitle="Discover your next tech upgrade."
        ctaText="Shop Deals"
        image="https://placehold.co/1200x400/0f766e/ffffff?text=Smart+Tech+Deals"
      />

      <section className="home-intro">
        <div className="intro-copy">
          <p className="eyebrow">Why Shop With Us?</p>
          <h2>Smart gear for everyday living.</h2>
          <p>
            At ComponentCorner, we combine quality, affordability, and thoughtful design to
            help you upgrade your setup with products you’ll actually use every day.
          </p>
        </div>

        <div className="feature-grid">
          <article className="feature-card">
            <h3>Curated Picks</h3>
            <p>Only the essentials worth adding to your desk, home, or travel routine.</p>
          </article>
          <article className="feature-card">
            <h3>Fast Shipping</h3>
            <p>Quick delivery so you can start enjoying your new tech without the wait.</p>
          </article>
          <article className="feature-card">
            <h3>Built to Last</h3>
            <p>We focus on dependable products that balance performance and value.</p>
          </article>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
