<script>
  import Footer from './Footer.svelte';
  import { quotes } from '../lib/quotes.js';
  
  export let isActive = true;
  export let onNavigate = () => {};
  export let onOpenTerminal = () => {};
</script>

<section class="hero section" class:active={isActive} id="home">
  <div class="hero-content">
    <div class="terminal-window">
      <div class="terminal-header">
        <div class="terminal-button close"></div>
        <div class="terminal-button minimize"></div>
        <div class="terminal-button maximize"></div>
      </div>
      <h1>0x1337</h1>
      <p class="subtitle">THE HACKING CLUB - IIITH</p>
      <div class="typing-text">
        <span>&gt; Initializing system...</span><br>
        <span>&gt; Loading hacker_mode.exe...</span><br>
        <span>&gt; Welcome to the 0x1337 club<span class="cursor"></span></span>
      </div>
      <div style="display: flex; gap: 1.5rem; justify-content: center; flex-wrap: wrap;">
        <button class="cta-button" on:click={() => onNavigate('about')}>EXPLORE_CLUB()</button>
        <button class="cta-button" on:click={onOpenTerminal}>START_TERMINAL()</button>
      </div>
    </div>
  </div>
  <Footer quote={quotes.home} />
</section>
