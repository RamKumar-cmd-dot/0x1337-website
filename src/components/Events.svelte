<script>
  import Footer from './Footer.svelte';
  import { quotes } from '../lib/quotes.js';
  import { events } from '../lib/eventsData.js';
  
  export let isActive = false;
</script>

<section class="section" class:active={isActive} id="events">
  <div class="container">
    <h2 class="section-title">Events</h2>
    
    {#if events.length === 0}
      <!-- Placeholder when no events -->
      <div class="dev-placeholder">
        <div class="dev-placeholder-icon">⚙️</div>
        <h3 class="dev-placeholder-title">// This Page Is Still In Dev Mode...</h3>
        <p class="dev-placeholder-text">Upcoming hacking events and workshops coming soon!</p>
      </div>
    {:else}
      <div class="features-grid">
        {#each events as event}
          <div class="feature-card">
            <span class="feature-icon">{event.icon || '📅'}</span>
            <h3 class="feature-title">{event.title}</h3>
            <p class="feature-description">
              {event.description}<br><br>
              <strong>Date:</strong> {event.date}<br>
              <strong>Time:</strong> {event.time}<br>
              {#if event.location}
                <strong>Location:</strong> {event.location}<br>
              {/if}
              <strong>Status:</strong> <span style="color: {event.status === 'upcoming' ? 'var(--accent)' : '#999'}">{event.status}</span><br><br>
              {#if event.status === 'upcoming' && event.registrationLink}
                <a href={event.registrationLink} target="_blank" style="color: var(--primary);">Register →</a>
              {/if}
            </p>
          </div>
        {/each}
      </div>
    {/if}
  </div>
  <Footer quote={quotes.events} />
</section>
