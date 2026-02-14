<script>
  import Footer from './Footer.svelte';
  import { quotes } from '../lib/quotes.js';
  import { writeups } from '../lib/writeupsData.js';
  
  export let isActive = false;
  
  function getDifficultyColor(difficulty) {
    if (difficulty === 'Easy') return 'var(--primary)';
    if (difficulty === 'Medium') return 'var(--accent)';
    if (difficulty === 'Hard') return 'var(--danger)';
    return 'var(--text)';
  }
</script>

<section class="section" class:active={isActive} id="writeups">
  <div class="container">
    <h2 class="section-title">Writeups</h2>
    
    {#if writeups.length === 0}
      <!-- Placeholder when no writeups -->
      <div class="dev-placeholder">
        <div class="dev-placeholder-icon">📝</div>
        <h3 class="dev-placeholder-title">// This Page Is Still In Dev Mode...</h3>
        <p class="dev-placeholder-text">CTF writeups and hacking tutorials under construction!</p>
      </div>
    {:else}
      <div class="features-grid">
        {#each writeups as writeup}
          <div class="feature-card">
            <span class="feature-icon">📝</span>
            <h3 class="feature-title">{writeup.title}</h3>
            <p class="feature-description">
              <strong>Author:</strong> {writeup.author}<br>
              <strong>Date:</strong> {writeup.date}<br>
              <strong>Category:</strong> {writeup.category}<br>
              <strong>Difficulty:</strong> <span style="color: {getDifficultyColor(writeup.difficulty)}">{writeup.difficulty}</span><br>
              {#if writeup.ctf}
                <strong>CTF:</strong> {writeup.ctf}<br>
              {/if}
              {#if writeup.tags && writeup.tags.length > 0}
                <strong>Tags:</strong> {writeup.tags.map(t => `#${t}`).join(' ')}<br>
              {/if}
              <br>
              {writeup.description}<br><br>
              <a href={writeup.link} target="_blank" style="color: var(--primary);">Read Full Writeup →</a>
            </p>
          </div>
        {/each}
      </div>
    {/if}
  </div>
  <Footer quote={quotes.writeups} />
</section>
