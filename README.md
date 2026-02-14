# 0x1337 - The Hacking Club Website

Official website for 0x1337, the premier hacking and cybersecurity club at IIIT Hyderabad.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm (comes with Node.js)

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```
   
   The website will open at `http://localhost:5173`

3. **Build for production:**
   ```bash
   npm run build
   ```
   
   This creates optimized files in the `dist/` folder.

---

## 📝 How to Add Content

### Adding Members

1. Open `src/lib/membersData.js`
2. Add to the `members` array:

```javascript
{
  name: "John Doe",
  role: "Member",
  year: "2nd Year",
  team: "CTF",
  profileImage: "/images/john.jpg", // Optional
  email: "john@iiit.ac.in",
  github: "johndoe"
}
```

### Adding Events

1. Open `src/lib/eventsData.js`
2. Add to the `events` array:

```javascript
{
  title: "CTF Workshop",
  description: "Learn CTF basics!",
  date: "March 15, 2024",
  time: "6:00 PM",
  location: "Lab 301",
  status: "upcoming",
  icon: "🔧"
}
```

### Adding Writeups

1. Open `src/lib/writeupsData.js`
2. Add to the `writeups` array:

```javascript
{
  title: "PicoCTF - SQL Injection",
  author: "Your Name",
  date: "Feb 20, 2024",
  category: "Web",
  difficulty: "Medium",
  tags: ["web", "sqli"],
  description: "Walkthrough...",
  link: "/writeups/picoctf.html"
}
```

---

## 🎨 Customization

Edit `src/global.css` to change colors, fonts, animations, etc.

Edit `src/lib/quotes.js` to change footer quotes.

---

## 📁 Project Structure

```
src/
├── lib/              # DATA FILES - EDIT THESE!
│   ├── membersData.js
│   ├── eventsData.js
│   └── writeupsData.js
└── components/       # UI components
```

---

## 🐛 Troubleshooting

- Port in use? Run: `npx kill-port 5173`
- Not updating? Hard refresh: Ctrl+Shift+R

---

**Happy Hacking! 🚩**
