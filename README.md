# 🚀 Personal Portfolio Website

A modern, responsive portfolio website showcasing my projects, skills, and education as a Software Engineering student. Built with Next.js, TypeScript, and Tailwind CSS for optimal performance and maintainability.

![Portfolio Preview](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- 🎨 Modern, clean dark theme design
- 📱 Fully responsive across all devices
- ⚡ Fast page loads with Next.js optimization
- 🔧 Easy content management via JSON configuration
- 🎯 Smooth scrolling navigation
- 💼 Project showcase with live demos
- 📧 Contact section with social links

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** React Icons
- **Deployment:** Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/4honore/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Customization Guide

### Update Your Information

All content is managed through `data/portfolio.json`. Simply edit this file to update:

- **Personal Info:** Name, title, tagline, email, social links
- **About:** Bio and introduction
- **Skills:** Categorized technical skills
- **Projects:** Portfolio projects with descriptions, tech stack, and links
- **Education:** Academic background

Example:
```json
{
  "personal": {
    "name": "Your Name",
    "title": "Software Engineer",
    "email": "your.email@example.com"
  }
}
```

### Add New Projects

Add projects to the `projects` array in `data/portfolio.json`:

```json
{
  "id": 3,
  "title": "Project Name",
  "description": "Brief description of what the project does",
  "tech": ["React", "Node.js", "MongoDB"],
  "github": "https://github.com/username/repo",
  "demo": "https://your-demo-url.com",
  "image": "/projects/project3.png"
}
```

Place project images in the `public/projects/` folder.

### Customize Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  primary: '#0ea5e9',        // Accent color
  background: '#0f172a',      // Main background
  'background-light': '#1e293b', // Secondary background
}
```

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Deploy with one click

Alternatively, deploy to Netlify, Railway, or any platform supporting Next.js.

## 📂 Project Structure

```
portfolio-website/
├── app/                  # Next.js app directory
│   ├── page.tsx         # Main page
│   ├── layout.tsx       # Root layout
│   └── globals.css      # Global styles
├── components/          # React components
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Education.tsx
│   ├── Contact.tsx
│   └── Navbar.tsx
├── data/
│   └── portfolio.json   # Content configuration
├── public/
│   └── projects/        # Project images
└── tailwind.config.ts   # Tailwind configuration
```

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the MIT License.

## 📧 Contact

- **Email:** ishimwehonore450@gmail.com
- **GitHub:** [@4honore](https://github.com/4honore)
- **LinkedIn:** [Honore Ishimwe](https://www.linkedin.com/in/honore-ishimwe-26940a388/)

---

⭐ If you found this helpful, consider giving it a star!
