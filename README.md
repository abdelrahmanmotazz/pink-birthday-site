# 💖 Overkill Pink Birthday Love Website 🎀

An aesthetic, interactive, custom-coded romantic birthday website crafted with love, pastel pink glassmorphism, unique cursive and bubble fonts, cute icons, a custom heart cursor, background music ("Be My Baby" by The Ronettes), interactive memory scrapbook, love clock, wax-sealed love letter, virtual birthday cake, and an evasive "Will you go on a date with me?" grand finale!

---

## ✨ Features Included

1. **💖 Custom Heart Cursor & Fairy Dust Trail:**
   - Mouse cursor shaped like a heart with sparkling particles (`✨`, `💕`, `🌸`, `🎀`) floating behind as you move.
2. **🎵 Retro Vinyl Music Player ("Be My Baby" by The Ronettes):**
   - Floating glass vinyl player that spins when music plays with play/pause controls.
   - Smooth entrance screen designed to comply with browser audio autoplay policies.
3. **⏳ Real-Time Love Clock:**
   - Live timer showing days, hours, minutes, and seconds you've spent together.
4. **💌 Wax-Sealed Love Letter:**
   - Clickable wax seal that opens the envelope flap and slides out an animated handwritten love letter with a confetti burst.
5. **📸 Aesthetic Polaroid Scrapbook:**
   - Vintage-taped polaroid frames with hover tilts, sparkles, and captions.
6. **🌟 "10 Reasons Why I Love You" Flip Cards:**
   - Interactive 3D flip cards with reasons and custom cute badges (mobile touch & desktop hover supported).
7. **🎂 Make-A-Wish Birthday Cake:**
   - Layered strawberry pink cake with flickering candle flame. Click to blow out the candle, watch the smoke puff, and trigger celebratory confetti!
8. **💍 The Grand Finale: "Will You Go On A Date With Me?":**
   - **"No" Button:** Runs away whenever the mouse gets close or touched, with funny excuses ("Too slow!", "Nice try! 😜", "Not an option!").
   - **"Yes" Button:** Grows bigger every time "No" is attempted! When clicked, launches a massive confetti firework celebration and opens a VIP Date Pass.

---

## 🎨 How to Customize

### 1. Change Name & Anniversary Date
Open `script.js` and edit lines 8–13:
```javascript
const CONFIG = {
  // Set your anniversary or special date (YYYY-MM-DD)
  relationshipStartDate: new Date('2024-01-01T00:00:00'),
  // Birthday person's name
  partnerName: 'My Beautiful Princess 💕',
};
```
And in `index.html`, search for `My Favorite Person!` or `name-placeholder` to put your partner's actual name!

### 2. Add Your Own Photos
In `index.html`, find the `<div class="polaroid-grid">` section. Replace the `src="..."` URLs with links to your own photos or local file paths (e.g. `assets/photo1.jpg`).

### 3. Personalize the Love Letter
In `index.html`, find `<p class="letter-body font-handwriting">` and write your own heartfelt message!

### 4. Background Song ("Be My Baby" by The Ronettes)
An online high-quality stream fallback is included. You can also place an MP3 file named `be-my-baby.mp3` inside an `assets/` folder in this project for 100% offline playback.

---

## 🚀 How to View or Publish Online for Free

### Option A: View Locally on Your Computer
Simply double-click `index.html` to open it in Chrome, Edge, Safari, or Firefox!

### Option B: Publish to GitHub Pages (Free URL to send to your partner)
1. Create a free account at [github.com](https://github.com).
2. Create a new repository named `happy-birthday`.
3. Upload `index.html`, `style.css`, and `script.js`.
4. Go to **Settings > Pages** in your repository.
5. Set the branch to `main` (or `master`) and folder to `/ (root)`.
6. Click **Save**. Within 1 minute, you will get a live link like `https://yourusername.github.io/happy-birthday` to text or generate a QR code for!

### Option C: Netlify / Vercel (Drag & Drop)
1. Go to [netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop this folder (`pink-birthday-love-site`).
3. You immediately get a live shareable HTTPS link!
