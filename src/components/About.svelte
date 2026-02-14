<script>
  import Footer from './Footer.svelte';
  import { quotes } from '../lib/quotes.js';
  
  export let isActive = false;
</script>

<section class="section" class:active={isActive} id="about">
  <div class="container">
    <h2 class="section-title">About_Us</h2>
    <div class="about-content">
      <p>Welcome to <span class="highlight">0x1337</span>, the premier hacking and cybersecurity club at IIIT Hyderabad!</p>
      <p>We are a community of passionate security researchers, CTF players, and ethical hackers dedicated to exploring the fascinating world of cybersecurity. From web exploitation to cryptography, from reverse engineering to forensics - we hack it all!</p>
      <p>Our mission is to foster a culture of security awareness and technical excellence through workshops, CTF competitions, and collaborative learning. Whether you're a complete beginner or a seasoned hacker, there's a place for you here.</p>
      <p><span class="highlight">Join us</span> in breaking things, learning from failures, and building a more secure digital world!</p>
    </div>

    <div class="features-grid">
      <div class="feature-card">
        <span class="feature-icon">🚩</span>
        <h3 class="feature-title">CTF Competitions</h3>
        <p class="feature-description">Participate in Capture The Flag competitions and test your skills against challenging problems.</p>
      </div>
      <div class="feature-card">
        <span class="feature-icon">🔧</span>
        <h3 class="feature-title">Workshops</h3>
        <p class="feature-description">Learn from experienced members through hands-on workshops covering various security domains.</p>
      </div>
      <div class="feature-card">
        <span class="feature-icon">📝</span>
        <h3 class="feature-title">Writeups</h3>
        <p class="feature-description">Share knowledge through detailed writeups of CTF challenges and security research.</p>
      </div>
    </div>

    <!-- Community Partner Section -->
    <div class="community-partner">
      <div class="partner-label">Community partner:</div>
      <div class="partner-content">
        <div class="partner-logo">
          <div class="partner-logo-text">
            <span style="color: var(--text); font-size: 2rem;">▶</span> 
            The <span class="hackers">Hackers</span> <span class="meetup">Meetup</span>
          </div>
          <div class="partner-tagline">Let's Talk About <span class="hacking-text">Hacking</span></div>
        </div>
        <div class="partner-description">
          The Hackers Meetup is a fantastic initiative that conducts regular meetups in various cities across India, featuring experienced speakers and delivering engaging content. Known for being beginner-friendly and highly supportive, they are a great resource for anyone interested in cybersecurity and hacking.
          <br>
          <a href="https://thehackersmeetup.org/" target="_blank" class="partner-link">Visit The Hackers Meetup →</a>
        </div>
      </div>
    </div>
  </div>
  <Footer quote={quotes.about} />
</section>
