# Setup Instructions

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Add Hero Background Image (Optional but Recommended)**
   
   Download a professional office/business image and save it as:
   ```
   public/hero-bg.jpg
   ```
   
   **Image Requirements:**
   - Size: 1920x1080px or larger
   - Content: Professional office environment with person working
   - Style: Modern, bright, natural lighting
   
   **Free Image Sources:**
   - [Unsplash](https://unsplash.com/s/photos/office-professional)
   - [Pexels](https://www.pexels.com/search/business-woman-working/)
   - [Pixabay](https://pixabay.com/images/search/office-workspace/)

   **Note:** The site will work without the image (using a gradient fallback)

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Open Browser**
   Navigate to: `http://localhost:5173`

## What You'll See

✅ Professional navbar with:
- Gudfin logo with orange gradient
- Contact info (email & phone)
- Navigation menu (Home, Pages, Services, Portfolio, Blog, Contact Us)
- "Get In Touch" CTA button

✅ Hero section with:
- Large "Financial Advisor" heading
- "Discover More" button with animated arrow
- Background image (or gradient fallback)
- Smooth fade-in animations

✅ Additional sections:
- Services grid
- Features showcase
- Animated statistics counters
- Client testimonials
- Call-to-action
- Footer

## Customization

### Update Contact Info
Edit `src/components/Hero.jsx` lines 32-40

### Change Navigation Items
Edit `src/components/Hero.jsx` line 46

### Modify Colors
Edit `tailwind.config.js` - accent colors are set to orange (#f97316)

### Add Your Content
Update text in each component file in `src/components/`

## Build for Production

```bash
npm run build
```

Output will be in the `dist` folder.
