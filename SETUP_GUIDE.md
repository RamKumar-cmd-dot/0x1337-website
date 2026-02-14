# 🚀 Quick Setup Guide - 0x1337 Website

## Step 1: Install Node.js (if not installed)

Download from: https://nodejs.org/
- Choose LTS version
- Install with default settings

Verify installation:
```bash
node --version
npm --version
```

## Step 2: Extract the Project

1. Extract the `0x1337-website` folder
2. Open terminal/command prompt
3. Navigate to the folder:
   ```bash
   cd path/to/0x1337-website
   ```

## Step 3: Install Dependencies

Run this command (only needed once):
```bash
npm install
```

This will take 1-2 minutes to download all dependencies.

## Step 4: Start Development Server

```bash
npm run dev
```

You'll see:
```
  VITE v5.0.0  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h + enter to show help
```

## Step 5: Open in Browser

Click the link or open: http://localhost:5173

**You're done!** 🎉

---

## Testing the Website

### Test Navigation
- Click all nav links (home, about, members, events, writeups, links)
- All sections should switch smoothly

### Test Terminal
- Click "START_TERMINAL()" button
- Type `help` and press Enter
- Type `ls` and press Enter
- Type `cd about` and press Enter (should navigate to about)
- Type `exit` and press Enter (should close terminal)

### Test Placeholders
- Members, Events, Writeups should show "Under Construction" placeholders
- This is correct! They'll show real data when you add it

---

## Adding Your First Content

### Add a Test Member

1. Open `src/lib/membersData.js`
2. Uncomment the example or add:
   ```javascript
   export const members = [
     {
       name: "Test User",
       role: "Member",
       year: "1st Year",
       team: "CTF"
     }
   ];
   ```
3. Save the file
4. Browser auto-refreshes
5. Go to Members section → You'll see the member!

### Add a Test Event

1. Open `src/lib/eventsData.js`
2. Add:
   ```javascript
   export const events = [
     {
       title: "Test Workshop",
       description: "This is a test event",
       date: "March 15, 2024",
       time: "6:00 PM",
       location: "Lab 301",
       status: "upcoming",
       icon: "🔧"
     }
   ];
   ```
3. Save → Auto-refresh → See your event!

---

## Building for Deployment

When ready to deploy:

```bash
npm run build
```

This creates a `dist/` folder with optimized files.

Upload the contents of `dist/` to your web host!

---

## Troubleshooting

### "npm: command not found"
→ Node.js not installed properly. Reinstall Node.js.

### "Port 5173 already in use"
→ Close other terminals running the dev server, or use:
```bash
npm run dev -- --port 3000
```

### Changes not showing
→ Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

### Module errors
→ Delete `node_modules` folder and run `npm install` again

---

## Next Steps

1. ✅ Website is running
2. ✅ Tested navigation and terminal
3. ✅ Added test content
4. 📖 Read full README.md for detailed instructions
5. 🎨 Start adding real members/events/writeups!

---

**Happy Hacking!** 💚
