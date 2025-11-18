# Gudfin - Financial Services Website

A modern, animated financial services website built with React, TailwindCSS, and Framer Motion - inspired by professional financial advisory platforms.

## Features

- 🎨 Professional navbar with contact info and navigation
- ✨ Hero section with smooth animations
- 📊 Animated counters and statistics
- 💼 Service cards with hover effects
- 💬 Client testimonials section
- 📱 Fully responsive design
- 🎯 Clean component-based architecture

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **TailwindCSS** - Styling
- **Framer Motion** - Animations
- **React Icons** - Icon library

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. **IMPORTANT**: Add your hero background image
   - Place an image named `hero-bg.jpg` in the `public` folder
   - See `public/IMAGE-INSTRUCTIONS.md` for details
   - Or use the temporary gradient background (already configured)

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Hero.jsx          # Hero section with navbar
│   ├── Services.jsx      # Services grid with icons
│   ├── Features.jsx      # Why choose us section
│   ├── Stats.jsx         # Animated counters
│   ├── Testimonials.jsx  # Client testimonials
│   ├── CTA.jsx           # Call-to-action section
│   └── Footer.jsx        # Footer with social links
├── App.jsx               # Main app component
├── main.jsx              # Entry point
└── index.css             # Global styles
```

## Customization

### Navbar

Edit `src/components/Hero.jsx` to update:
- Logo and brand name
- Contact information (phone, email)
- Navigation menu items
- CTA button text

### Colors

The site uses an orange accent color (#f97316) matching the reference design.
Edit `tailwind.config.js` to customize further.

### Hero Background

Place your image as `public/hero-bg.jpg` or update the path in `Hero.jsx`

## License

MIT
