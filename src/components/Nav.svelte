<script>
  export let activeSection = 'home';
  export let onNavigate = () => {};
</script>

<nav>
  <div class="container">
    <div class="logo">0x1337</div>
    <ul class="nav-links">
      <a 
        href="#" 
        class:active={activeSection === 'home'} 
        on:click|preventDefault={() => onNavigate('home')}
      >home</a>
      <a 
        href="#" 
        class:active={activeSection === 'about'} 
        on:click|preventDefault={() => onNavigate('about')}
      >about</a>
      <a 
        href="#" 
        class:active={activeSection === 'members'} 
        on:click|preventDefault={() => onNavigate('members')}
      >members</a>
      <a 
        href="#" 
        class:active={activeSection === 'events'} 
        on:click|preventDefault={() => onNavigate('events')}
      >events</a>
      <a 
        href="#" 
        class:active={activeSection === 'writeups'} 
        on:click|preventDefault={() => onNavigate('writeups')}
      >writeups</a>
      <a 
        href="#" 
        class:active={activeSection === 'links'} 
        on:click|preventDefault={() => onNavigate('links')}
      >links</a>
    </ul>
  </div>
</nav>
