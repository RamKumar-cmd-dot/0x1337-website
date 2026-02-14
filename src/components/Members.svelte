<script>
  import Footer from './Footer.svelte';
  import { quotes } from '../lib/quotes.js';
  import { members } from '../lib/membersData.js';
  
  export let isActive = false;
  
  // Organize members by team
  $: teams = members.reduce((acc, member) => {
    const team = member.team || 'Other';
    if (!acc[team]) acc[team] = [];
    acc[team].push(member);
    return acc;
  }, {});
  
  // Generate avatar URL using DiceBear avatars
  function getAvatarUrl(member) {
  if (member.profileImage) {
    return member.profileImage;
  }
  // Robot avatars - perfect for hackers!
  return `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(member.name)}`;
}
</script>
<style>
  .member-card {
    background: rgba(10, 14, 39, 0.95) !important;
    border: 3px solid #00ff41 !important;
    border-radius: 12px !important;
    padding: 3rem !important;
    min-height: 300px !important;
    box-shadow: 0 0 20px rgba(0, 255, 65, 0.3) !important;
  }
  .member-card:hover {
    transform: translateY(-8px) !important;
    box-shadow: 0 10px 30px rgba(0, 255, 65, 0.5) !important;
    border-color: #39ff14 !important;
  }
</style>
<section class="section" class:active={isActive} id="members">
  <div class="container">
    <h2 class="section-title">Our_Team</h2>
    
    {#if members.length === 0}
      <!-- Placeholder when no members -->
      <div class="dev-placeholder">
        <div class="dev-placeholder-icon">🚧</div>
        <h3 class="dev-placeholder-title">// This Page Is Still In Dev Mode...</h3>
        <p class="dev-placeholder-text">Our elite team of hackers is working on this section. Check back soon!</p>
      </div>
    {:else}
      <!-- Display members by team -->
      {#each Object.entries(teams) as [teamName, teamMembers]}
        <div class="team-section">
          <h3 class="team-title">{teamName}</h3>
          <div class="members-grid">
            {#each teamMembers as member}
              <div class="member-card">
                <div class="member-avatar">
                  <img src={getAvatarUrl(member)} alt={member.name} style="width: 100%; height: 100%; border-radius: 50%;">
                </div>
                <div class="member-name">{member.name}</div>
                <div class="member-role">{member.role}</div>
                <div class="member-year">{member.year}</div>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    {/if}
  </div>
  <Footer quote={quotes.members} />
</section>
