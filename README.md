# Khinda Limited Website

A modern, responsive website for Khinda Limited - a licensed family-owned residential renovation and finishing company serving Alberta.

## 🚀 Features

- **Modern React Stack**: Built with React 18, TypeScript, and Vite
- **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop
- **Smooth Animations**: Fade-in/out transitions for image galleries and testimonials
- **Dynamic Image Gallery**: Auto-rotating showcase of 29 renovation projects
- **Mobile Navigation**: Hamburger menu for seamless mobile browsing
- **Performance Optimized**: Fast loading times with lazy loading and optimized assets
- **SEO Ready**: Proper meta tags and semantic HTML structure

## 📁 Project Structure

```
kh/
├── public/
│   └── assets/
│       ├── logo/
│       │   └── kh-logo.jpeg
│       └── works/
│           └── work-01.jpeg to work-29.jpeg
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Gallery.tsx
│   │   ├── WorksShowcase.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   ├── testimonials.ts
│   │   ├── services.ts
│   │   └── contact.ts
│   ├── hooks/
│   │   └── useFadeAnimation.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## 🛠️ Installation

1. Install dependencies:
```bash
npm install
```

## 🚀 Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173/`

## 🏗️ Build

Build for production:
```bash
npm run build
```

The production files will be in the `dist/` directory.

## 👀 Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## 🎨 Design Features

### Color Palette
- **Navy Blue** (#1a2b48): Primary text and headings
- **Gold** (#d4a574): Accent color for highlights and CTAs
- **Cream** (#faf8f5): Light background sections
- **White** (#ffffff): Clean sections
- **Black** (#000000): Footer and dark sections

### Typography
- **Headings**: Playfair Display (serif) - Elegant and professional
- **Body Text**: Inter (sans-serif) - Clean and readable

## 📱 Sections

1. **Hero**: Eye-catching introduction with company tagline
2. **About**: Company description with image grid
3. **Services**: Three main service categories
4. **Gallery**: Project gallery with hover effects
5. **Works Showcase**: Auto-rotating gallery of 29 renovation projects
6. **Testimonials**: Client reviews with carousel navigation
7. **Contact**: Office information, hours, and contact details
8. **Footer**: Legal links and copyright

## ✨ Key Features

### Animated Works Gallery
- Displays 9 random images at a time
- Auto-rotates every 5 seconds
- Smooth fade-in/out transitions
- Showcases all 29 renovation projects

### Mobile-First Design
- Hamburger menu for mobile navigation
- Responsive grid layouts
- Touch-friendly interactions
- Optimized images for mobile

### Performance
- Lazy loading for images
- Optimized bundle size
- Fast initial load time
- Smooth animations using CSS transitions

## 📞 Contact Information

**Office**: 303-116 Loutit Road, Fort McMurray, Alberta, Canada T9K 0K5  
**Phone**: 780-803-3245  
**Email**: info@khindaltd.com  
**Social**: @khindahomes  

**Office Hours**: Monday to Friday 9:00 am to 6:00 pm, Weekends by appointment

## 🔧 Technologies Used

- React 18
- TypeScript
- Vite
- CSS Modules
- Google Fonts (Playfair Display, Inter)

## 📝 License

© 2026 Khinda Limited. All rights reserved.
