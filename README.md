# Traversium Website

A modern promotional website for the Traversium mobile app, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Dark theme matching the Traversium mobile app aesthetic
- **Responsive**: Fully responsive design for all devices
- **Performance**: Built with Next.js 14 for optimal performance
- **Animations**: Smooth animations using Framer Motion
- **SEO Optimized**: Built-in SEO optimization with Next.js

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
TraversiumWebsite/
├── app/
│   ├── about/          # About Us page
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Homepage
│   └── globals.css     # Global styles
├── components/
│   ├── Navigation.tsx  # Navigation bar
│   ├── Hero.tsx        # Hero section
│   ├── ProblemSection.tsx
│   ├── SolutionSection.tsx
│   ├── UserExpectations.tsx
│   ├── TeamSection.tsx
│   └── Footer.tsx
└── ...
```

## Customization

### Team Members

Edit `components/TeamSection.tsx` to add or modify team members.

### Colors

Colors are defined in `tailwind.config.js` and match the mobile app's theme.

### Content

All content can be customized in the respective component files.

## Deployment

The site can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- Any platform supporting Next.js

## License

Private - Traversium Project

