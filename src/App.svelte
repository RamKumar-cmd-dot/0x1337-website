<script>
  import { onMount } from 'svelte';
  import Nav from './components/Nav.svelte';
  import Hero from './components/Hero.svelte';
  import About from './components/About.svelte';
  import Members from './components/Members.svelte';
  import Events from './components/Events.svelte';
  import Writeups from './components/Writeups.svelte';
  import Links from './components/Links.svelte';
  import Terminal from './components/Terminal.svelte';
  
  let activeSection = 'home';
  let terminalOpen = false;
  
  function navigateToSection(section) {
    activeSection = section;
  }
  
  function openTerminal() {
    terminalOpen = true;
  }
  
  function closeTerminal() {
    terminalOpen = false;
  }
  
  // Fix for unwanted space on first load
  onMount(() => {
    navigateToSection('home');
  });
</script>

<div class="scanline"></div>

<Nav 
  {activeSection} 
  onNavigate={navigateToSection}
/>

<Hero 
  isActive={activeSection === 'home'} 
  onNavigate={navigateToSection}
  onOpenTerminal={openTerminal}
/>

<About isActive={activeSection === 'about'} />

<Members isActive={activeSection === 'members'} />

<Events isActive={activeSection === 'events'} />

<Writeups isActive={activeSection === 'writeups'} />

<Links isActive={activeSection === 'links'} />

<Terminal 
  isOpen={terminalOpen}
  onClose={closeTerminal}
  onNavigate={navigateToSection}
/>
