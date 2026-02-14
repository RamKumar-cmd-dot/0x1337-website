// ============================================
// TERMINAL COMMANDS
// ============================================
// These commands work in the interactive terminal
// ============================================

export const terminalCommands = {
  help: {
    output: `Available commands:
  help        - Show this help message
  ls          - List available directories
  cd <dir>    - Navigate to directory (home, about, members, events, writeups, links)
  pwd         - Print working directory
  whoami      - Display current user info
  sudo        - Attempt privilege escalation
  clear       - Clear terminal output
  exit        - Close terminal`,
    type: 'success'
  },
  
  ls: {
    output: `drwxr-xr-x  2 root  hackers   4096 Feb 13 00:00 home/
drwxr-xr-x  2 root  hackers   4096 Feb 13 00:01 about/
drwxr-xr-x  2 root  hackers   4096 Feb 13 00:02 members/
drwxr-xr-x  2 root  hackers   4096 Feb 13 00:03 events/
drwxr-xr-x  2 root  hackers   4096 Feb 13 00:04 writeups/
drwxr-xr-x  2 root  hackers   4096 Feb 13 00:05 links/
-rw-r--r--  1 root  hackers    420 Feb 13 13:37 secret_flags.txt
-rwxr-xr-x  1 root  hackers   1337 Feb 13 04:20 hack_the_planet.sh`,
    type: 'success'
  },

  pwd: {
    output: 'C:/home/wannabe_hacker',
    type: 'success'
  },

  cd: {
    output: `usage: cd <directory>

Available directories:
  cd home      - Navigate to home
  cd about     - Navigate to about
  cd members   - Navigate to members
  cd events    - Navigate to events
  cd writeups  - Navigate to writeups
  cd links     - Navigate to links`,
    type: 'success'
  },

  whoami: {
    output: 'You are a wannabe hacker exploring 0x1337.',
    type: 'success'
  },

  sudo: {
    output: `[sudo] password for wannabe_hacker: 
Permission denied. Nice try though 😎`,
    type: 'error'
  },

  clear: {
    output: '',
    type: 'clear'
  },

  exit: {
    output: 'Closing terminal...',
    type: 'success'
  }
};

// Navigation commands with their target sections
export const navigationCommands = {
  'cd home': 'home',
  'cd about': 'about',
  'cd members': 'members',
  'cd events': 'events',
  'cd writeups': 'writeups',
  'cd links': 'links'
};
