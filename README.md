# Portfolio Web

Hello! 👋 This is a personal portfolio website built with modern web tooling. It showcases projects, certificates, experience, and contact information with smooth animations and a responsive UI.

Live Demo: https://portfolio-ahqsa.vercel.app/ 

## 🚀 Tech Stack
- React 19 + Vite
- Tailwind CSS v4
- AOS (Animate On Scroll) for scroll animations
- Framer Motion for component/section animations
- React Router v7 for routing
- EmailJS for contact form (optional)

## 📋 Prerequisites
Make sure you have:
- Node.js 18+ (LTS recommended)
- npm (bundled with Node.js)

Check versions:

```powershell
node -v
npm -v
```

## 🏃‍♂️ Getting Started

1) Clone the repository

```powershell
git clone https://github.com/ahqsa24/portfolio-v1
cd "Portfolio Web"
```

2) Install dependencies

```powershell
npm install
```

If you encounter peer dependency warnings, you can try:

```powershell
npm install --legacy-peer-deps
```

3) Start the development server

```powershell
npm run dev
```

Then open the URL shown in the terminal (usually http://localhost:5173).

## 🔧 Environment Variables (EmailJS)
If you want the contact form to send emails via EmailJS, create a `.env` file in the project root and add:

```dotenv
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

Important:
- In Vite, frontend env vars must start with `VITE_`.
- Restart the dev server after editing `.env`.

Detailed steps are documented in `EMAIL_SETUP_GUIDE.md`.

## 🏗️ Production Build
Create an optimized build:

```powershell
npm run build
```

The output will be in the `dist` folder, ready to be deployed to static hosting (e.g., Vercel, Netlify, GitHub Pages).

Optional preview of the production build locally:

```powershell
npm run preview
```

## 📁 Project Structure (key files)
- `src/main.jsx` – App bootstrap, Router, AOS initialization, Motion wrapper usage
- `src/components/` – UI sections: `Home.jsx`, `About.jsx`, `Experience.jsx`, `Portfolio.jsx`, `Contact.jsx`, `Navbar.jsx`, `Footer.jsx`
- `src/animations/motion.js` – Shared Framer Motion variants
- `src/components/MotionSection.jsx` – Wrapper for applying variants + AOS attributes
- `src/components/AOSRouteInit.jsx` – Refresh AOS on route change
- `src/data.js` – Static data and asset imports

## 🎞️ Animations
This project uses both AOS and Framer Motion. See `ANIMATIONS_GUIDE.md` for quick usage and best practices. Quick example:

```jsx
<MotionSection variant="fadeInUp" aos="fade-up" delay={0.2}>
  {/* your content */}
</MotionSection>
```

## 🚨 Troubleshooting
- Ensure you’re in the correct directory before running commands
- Verify Node and npm versions are installed and accessible
- If env vars are undefined, ensure `.env` is in the project root and keys start with `VITE_`
- For EmailJS issues, double-check Service ID, Template ID, and Public Key; then restart the dev server
- Clear browser cache or open a new incognito window if assets don’t refresh

## 📝 Credits & License
If you use or get inspired by this project, a credit mention is appreciated. Feel free to customize and extend it.

## 📞 Contact
Questions or feedback? Open an issue or reach out via the contact links on the site.
