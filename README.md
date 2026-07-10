# Veer Kumar - Portfolio Website

## How to Run Locally

### Option 1: Open Directly
Just open `index.html` in any modern browser (Chrome, Edge, Firefox).

### Option 2: VS Code Live Server (Recommended)
1. Open the `veer-portfolio` folder in VS Code
2. Install the **Live Server** extension (by Ritwick Dey)
3. Right-click `index.html` → **Open with Live Server**
4. Your browser will open at `http://127.0.0.1:5500`

## Folder Structure

```
veer-portfolio/
├── index.html          ← Main HTML file
├── css/
│   └── style.css       ← All styles
├── js/
│   └── main.js         ← Interactivity & animations
├── assets/
│   └── resume.pdf      ← Place your resume PDF here
└── README.md
```

## Customization Guide

### Change Your Photo
Replace the avatar placeholder in `index.html`:
```html
<!-- Find this block and replace with your image -->
<div class="avatar-placeholder">
  <i class="fas fa-user-tie"></i>
</div>
```
Change to:
```html
<img src="assets/photo.jpg" alt="Veer Kumar" style="width:200px;height:240px;border-radius:24px;object-fit:cover;" />
```

### Add Your Resume
Place your resume PDF in the `assets/` folder named `resume.pdf`.

### Update Contact Info
Edit the contact section in `index.html` with your real phone number and links.

### Update Social Links
Find the LinkedIn and GitHub links in both the sidebar and contact section and replace `#` with your profile URLs.

## Technologies Used
- HTML5, CSS3, Vanilla JavaScript
- Google Fonts (Inter)
- Font Awesome 6 (Icons)
- No build tools needed — runs directly in the browser!
