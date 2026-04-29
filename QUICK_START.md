# ⚡ Quick Start Guide

Get your portfolio live in 5 minutes!

## 🚀 Local Setup (2 minutes)

### Windows

```bash
# Open Command Prompt in project folder, then:
python -m http.server 8000

# Open browser: http://localhost:8000
```

### Mac/Linux

```bash
# Open Terminal in project folder, then:
python3 -m http.server 8000

# Open browser: http://localhost:8000
```

### No Command Line? Use VS Code

1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

---

## 📤 Deploy to GitHub Pages (3 minutes)

### Quick Version (Recommended)

```bash
# Step 1: Initialize Git
git init

# Step 2: Add files
git add .

# Step 3: Commit
git commit -m "Initial portfolio"

# Step 4: Create repo on GitHub.com (use "portfolio" as name)

# Step 5: Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main

# Step 6: Enable GitHub Pages
# Go to: Settings → Pages → Select "main" branch → Save

# Step 7: Visit your live site (wait 1-2 min)
# https://YOUR_USERNAME.github.io/portfolio
```

### Full Detailed Version

See **README.md** → Deployment section

---

## ✏️ Customize Your Content

### Update These Fields in `index.html`:

1. **Hero Title** (Line ~105)

   ```html
   <h2 class="hero-title">YOUR VALUE PROPOSITION</h2>
   ```

2. **Services** (Lines ~160-180)

   ```html
   <h3>📧 Your Service Name</h3>
   <p>Your service description here.</p>
   ```

3. **Contact Info** (Lines ~400-420)
   ```html
   <a href="mailto:YOUR_EMAIL">your_email@example.com</a>
   <a href="tel:YOUR_PHONE">Your Phone Number</a>
   ```

### Change Colors in `css/styles.css`:

Find `:root` section (Line ~8):

```css
:root {
  --accent-color: #5b3aed; /* Your brand color */
  --accent-hover: #4a2fd1; /* Hover effect color */
}
```

Pick a color from: [colorpicker.com](https://colorpicker.com)

---

## 🧪 Test Before Deploy

### Checklist

- [ ] Open `index.html` in browser locally
- [ ] Click all links (should not be broken)
- [ ] Test dark mode toggle
- [ ] Fill contact form (should show success message)
- [ ] Scroll through entire page
- [ ] Open on mobile device (use Chrome DevTools: F12 → mobile icon)

### Check for Errors

1. Press `F12` (Developer Tools)
2. Click **"Console"** tab
3. Should see no red errors
4. Should see: `"Portfolio Loaded Successfully"`

---

## 🎨 Dark Mode Test

1. Click the **Sun/Moon icon** in top-right
2. Page should switch to dark theme
3. Refresh page → should remember theme
4. Switch back to light mode
5. Refresh page → should remember light mode

---

## 📱 Mobile Test

### Using Chrome Browser:

1. Press `F12` (DevTools)
2. Click phone icon (top-left of DevTools)
3. Select **"iPhone 12"** from dropdown
4. Check if everything looks good
5. Try **"Tablet"** view too

### Using Real Phone:

1. Deploy to GitHub Pages (see above)
2. Open your GitHub Pages URL on phone
3. Test all links and features
4. Test dark mode

---

## 🚀 Deploy Steps (Simplified)

### For GitHub Users:

```bash
git add .
git commit -m "Portfolio update"
git push
```

### For Non-Git Users:

1. Go to GitHub.com
2. Open your portfolio repo
3. Click "Add file" → "Upload files"
4. Drag & drop updated files
5. Click "Commit changes"

---

## 🔧 Useful Files

| File                      | Purpose                   |
| ------------------------- | ------------------------- |
| `index.html`              | Main content (edit here)  |
| `css/styles.css`          | Design & colors           |
| `js/script.js`            | Interactivity & dark mode |
| `TaskManager.java`        | Java showcase (optional)  |
| `README.md`               | Detailed guide            |
| `CONVERSION_CHECKLIST.md` | Pre-launch checklist      |

---

## ⚠️ Common Issues

**Problem**: Links don't work

- **Solution**: Make sure `href` values are correct (should start with `#` for same-page links)

**Problem**: Dark mode doesn't work

- **Solution**: Check `js/script.js` is loaded (look in browser console)

**Problem**: Form doesn't send email

- **Solution**: This version shows a success message but doesn't send email. Use Formspree (see README) to enable email

**Problem**: Page won't load on GitHub Pages

- **Solution**:
  - Check repository name matches URL
  - Wait 2-3 minutes after enabling Pages
  - Check that Settings → Pages shows "main" branch

---

## 💡 Pro Tips

1. **Always test locally first** before pushing to GitHub
2. **Use descriptive commit messages**: `git commit -m "Updated services section"`
3. **Keep README updated** when you make major changes
4. **Use branch for big changes**:
   ```bash
   git checkout -b new-feature
   # Make changes
   git commit -am "Add feature"
   git push -u origin new-feature
   ```
5. **Monitor performance**: Use Chrome DevTools → Lighthouse

---

## 📞 Need Help?

1. **Check README.md** - Has detailed instructions
2. **Read comments in code** - CSS and JS have comments
3. **Use ChatGPT/Copilot** - For coding questions
4. **Check browser console** - F12 → Console tab for errors

---

## ✅ Success Criteria

Your portfolio is ready when:

✓ All links work  
✓ No errors in browser console (F12)  
✓ Dark mode toggles properly  
✓ Looks good on mobile  
✓ Contact form shows success message  
✓ All content is accurate (no placeholder text)  
✓ Live on GitHub Pages  
✓ You feel confident sharing it

---

## 🎯 Next Steps After Launch

1. Add portfolio link to:
   - Upwork profile
   - OnlineJobs.ph profile
   - LinkedIn
   - Email signature

2. Get feedback from 2-3 people

3. Update portfolio regularly:
   - Add new projects
   - Update experience
   - Add testimonials
   - Keep credentials current

4. Monitor GitHub Pages analytics (optional):
   - Use Google Analytics
   - Track visitor behavior
   - Identify improvements

---

**Questions?** See **README.md** for complete documentation.

**Ready?** Run: `git push` and go live! 🚀
