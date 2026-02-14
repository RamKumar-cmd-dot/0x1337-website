<script>
  import { terminalCommands, navigationCommands } from '../lib/terminalCommands.js';
  
  export let isOpen = false;
  export let onClose = () => {};
  export let onNavigate = () => {};
  
  let terminalOutput = [
    { text: 'Welcome to 0x1337 Interactive Terminal v1.0', type: 'success' },
    { text: "Type 'help' for available commands", type: '' },
    { text: '', type: '' }
  ];
  
  let inputValue = '';
  let terminalOutputEl;
  
  function handleCommand(event) {
    if (event.key !== 'Enter') return;
    
    const command = inputValue.trim().toLowerCase();
    
    // Add command to output
    terminalOutput = [...terminalOutput, { text: `C:/home/wannabe_hacker$ ${inputValue}`, type: '' }];
    
    // Check for navigation commands
    if (navigationCommands[command]) {
      terminalOutput = [...terminalOutput, { text: 'Navigating...', type: 'success' }];
      inputValue = '';
      setTimeout(() => {
        onClose();
        onNavigate(navigationCommands[command]);
      }, 300);
      return;
    }
    
    // Handle clear command
    if (command === 'clear') {
      terminalOutput = [];
      inputValue = '';
      return;
    }
    
    // Handle exit command
    if (command === 'exit') {
      terminalOutput = [...terminalOutput, { text: 'Closing terminal...', type: 'success' }];
      inputValue = '';
      setTimeout(onClose, 500);
      return;
    }
    
    // Check for other commands
    if (terminalCommands[command]) {
      const cmd = terminalCommands[command];
      terminalOutput = [...terminalOutput, { text: cmd.output, type: cmd.type }];
    } else {
      terminalOutput = [...terminalOutput, { text: `Command not found: ${command}. Type 'help' for available commands.`, type: 'error' }];
    }
    
    inputValue = '';
    
    // Scroll to bottom
    setTimeout(() => {
      if (terminalOutputEl) {
        terminalOutputEl.scrollTop = terminalOutputEl.scrollHeight;
      }
    }, 10);
  }
  
  function handleClose() {
    onClose();
  }
</script>

<!-- Terminal Popup Overlay -->
<div class="terminal-popup-overlay" class:active={isOpen}>
  <div class="interactive-terminal">
    <div class="interactive-terminal-header">
      <div class="interactive-terminal-title">root@0x1337:~$</div>
      <button class="terminal-close-btn" on:click={handleClose}>✕</button>
    </div>
    <div class="interactive-terminal-body">
      <div class="terminal-output" id="terminalOutput" bind:this={terminalOutputEl}>
        {#each terminalOutput as line}
          <div class="terminal-output-line {line.type}">{line.text}</div>
        {/each}
      </div>
      <div class="terminal-input-container">
        <span class="terminal-prompt-symbol">C:/home/wannabe_hacker$</span>
        <input 
          type="text" 
          class="terminal-input-field" 
          bind:value={inputValue}
          on:keydown={handleCommand}
          placeholder="Enter command..." 
          autocomplete="off"
          spellcheck="false"
        />
        <span class="terminal-cursor-blink"></span>
      </div>
    </div>
  </div>
</div>
