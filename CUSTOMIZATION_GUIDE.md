# 🎨 Portfolio Customization Guide

This guide helps you personalize your portfolio website by editing text content and images.

## 📝 Quick Start

All customizable text and site-wide content is centralized in **`src/text.js`** for easy editing.

### What You Can Customize

1. **Text Content** - All headings, descriptions, names, and labels
2. **Images** - Profile pictures, icons, and assets
3. **Tech Stack** - Your skills and tools
4. **Job Titles** - Rotating hero titles
5. **Contact Info** - Section headings and CTAs

---

## 🏠 Home Section

**File:** `src/text.js` → `homeData`

```javascript
export const homeData = [
    {
        id: 1,
        text: "Ready to Develop" // 👈 Change the badge text
    },
    {
        id: 2,
        firstName: "Ahmad Qaulan", // 👈 Your first name
        lastName: "Sadida",        // 👈 Your last name
    },
    {
        id: 3,
        position: [
            { text: "Front-End Developer" }, // 👈 Add/edit job titles
            { text: "UI/UX Enthusiast" },
            { text: "Software Engineer" }
        ]
    },
    {
        id: 4,
        text: "Your tagline here..." // 👈 Hero description
    },
    {
        id: 5,
        techstack: [
            { text: "ReactJS" },     // 👈 Add/edit tech badges
            { text: "TailwindCSS" }
        ]
    }
]
```

### How to Edit:
1. Open `src/text.js`
2. Find the `homeData` array
3. Edit the `text`, `firstName`, `lastName` values
4. Add or remove items from `position` and `techstack` arrays
5. Save the file — changes appear instantly (hot reload)

---

## 👤 About Section

**File:** `src/text.js` → `aboutData`

```javascript
export const aboutData = [
    {
        id: 1,
        heading: "About Me",           // 👈 Section title
        firstLine: "Hello I'm",        // 👈 Greeting before name
        name: "Ahmad Qaulan Sadida",   // 👈 Full name
        description: "Your bio here...", // 👈 About paragraph
        picture: About                 // 👈 Profile image (see Images section)
    }
]
```

### How to Edit:
1. Change `heading` to customize the section title
2. Update `description` with your bio (can be multiple sentences)
3. To change the profile picture, see **Images** section below

---

## 💼 Experience Section

**File:** `src/text.js` → `experiencesData`

```javascript
export const experiencesData = [
    {
        id: 1,
        heading: "Experiences",  // 👈 Section title
        text: "Intro text..."    // 👈 Section description
    }
]
```

**Note:** Individual education and organization entries are in `src/data.js` (educationData, organizationData)

---

## 🚀 Portfolio Section

**File:** `src/text.js` → `portfolioData`

```javascript
export const portfolioData = [
    {
        id: 1,
        heading: "Portfolio", // 👈 Section title
        text: "Intro text..." // 👈 Section description
    }
]
```

**Note:** Projects, certificates, and tech stack details are in `src/data.js`

---

## 📧 Contact Section

**File:** `src/text.js` → `contactData`

```javascript
export const contactData = [
    {
        id: 1,
        heading: "Contact Me",  // 👈 Option 1: heading
        text: "Description..."  // 👈 Option 1: text
    },
    {
        id: 2,
        heading: "Connect with Me", // 👈 Option 2
        text: "Another variant..."
    },
    {
        id: 3,
        heading: "Get in Touch", // 👈 Option 3
        text: "Third variant..."
    }
]
```

The component can pick which variant to display (check `src/components/Contact.jsx` to see which `id` is used).

---

## 🖼️ Customizing Images

### Step 1: Prepare Your Images
- Place your images in `/public/assets/`
- Supported formats: PNG, JPG, SVG, WebP
- Recommended: Optimize images before uploading (use TinyPNG or similar)

### Step 2: Update Image Imports

**File:** `src/text.js` (top section)

```javascript
// Replace the paths to match your new filenames
import About from "/assets/your-profile-pic.png"; // 👈 Profile picture
import Logo from "/assets/your-logo.png";         // 👈 Navbar logo
import ProjectIcon from "/assets/project-icon.png"; // 👈 Icons
// ... etc
```

### Common Images to Replace:
- **Profile Picture** → `/assets/about-image.png` (used in About section)
- **Logo** → `/assets/Logo-1.png` (used in Navbar and Footer)
- **Icons** → `/assets/Code.png`, `/assets/Contact.png`, etc. (section icons)

### Step 3: Save & Refresh
After updating imports, the dev server will hot-reload with your new images.

---

## 🎯 Tips for Best Results

### Text Content
- **Keep it concise**: Short, punchy descriptions work best
- **Use active voice**: "I build..." instead of "Things are built by me..."
- **Update regularly**: Keep projects and skills current

### Images
- **Consistent style**: Use similar color schemes and formats
- **Optimize size**: Large images slow down the site
  - Profile: ~500KB max
  - Icons: ~50KB max
- **Aspect ratios**: 
  - Profile pic: 1:1 (square) or 3:4 (portrait)
  - Project screenshots: 16:9 (landscape)

### Tech Stack Badges
Add or remove items from the `techstack` array in `homeData`:
```javascript
techstack: [
    { text: "React" },
    { text: "Node.js" },
    { text: "Python" },
    // Add more as needed
]
```

---

## 📁 File Structure Reference

```
src/
├── text.js          ← Main customization file (YOU EDIT THIS)
├── data.js          ← Projects, certificates, education (detailed data)
└── components/
    ├── Home.jsx     ← Uses homeData
    ├── About.jsx    ← Uses aboutData
    ├── Experience.jsx ← Uses experiencesData
    ├── Portfolio.jsx  ← Uses portfolioData
    └── Contact.jsx    ← Uses contactData

public/
└── assets/          ← Place your image files here
    ├── about-image.png
    ├── Logo-1.png
    └── ... (other images)
```

---

## 🔄 Development Workflow

1. **Edit** `src/text.js` with your content
2. **Save** the file
3. **View** changes instantly in browser (Vite hot reload)
4. **Repeat** for other sections

### When Editing Images:
1. Add new image to `/public/assets/`
2. Update import path in `src/text.js`
3. Save and refresh browser

---

## 🚨 Common Issues

### Changes Not Showing?
- **Hard refresh**: Press `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
- **Clear cache**: Open DevTools → Network tab → Disable cache
- **Restart dev server**: Stop (`Ctrl+C`) and run `npm run dev` again

### Image Not Loading?
- Check path is correct: `/assets/filename.png` (not `./assets/...`)
- Ensure file is in `/public/assets/` folder
- Check filename matches exactly (case-sensitive)

### Broken Layout?
- Don't remove `id` fields from data objects
- Keep array structure intact
- Check for missing commas or brackets

---

## 📞 Need Help?

If you run into issues:
1. Check browser console for error messages (F12 → Console tab)
2. Verify all quotes and brackets are balanced
3. Compare your edits with the original file structure
4. Open an issue on GitHub if you're stuck

---

## ✅ Checklist: Personalizing Your Portfolio

- [ ] Update name and job titles in `homeData`
- [ ] Add your tech stack badges in `homeData`
- [ ] Write your bio in `aboutData`
- [ ] Replace profile picture (About section)
- [ ] Update logo image (Navbar)
- [ ] Customize section headings (Experience, Portfolio, Contact)
- [ ] Add your projects/certificates in `data.js`
- [ ] Test on mobile and desktop
- [ ] Build for production: `npm run build`

---

**Happy customizing! 🎉**
