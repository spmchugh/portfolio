# Sean McHugh Portfolio Website

This is my portfolio website. It was built with React, Vite, and Tailwind CSS to showcase my skills, projects, education, and work experience in a clean, modern aesthetic, and serves as an extension of my resume. It is hosted using GitHub Pages and has a custom domain from AWS's Route 53.

## Live Site

Visit my live site at [https://mchughseanp.com](https://mchughseanp.com)

## Features

- **Responsive Layout** - The layout changes based on the device being used, to appropriately appear on desktop, tablet, or mobile devices
- **Dynamic Content** - Easily updatable content sections for projects, skills, and experience
- **Interactive Elements** - Small animations on components with hover effects and transitions
- **Contact Form** - Integrated EmailJS for direct email functionality
- **Smooth Scrolling** - Smooth scrolling and section reveal for a dynamic experience

## Built With
- [React](https://reactjs.org/) - Frontend library
- [Vite](https://vitejs.dev/) - Build tool and development server
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [EmailJS](https://www.emailjs.com/) - Email service integration

## Development

### Prerequisites
- Node.js (v14.0.0 or later)
- npm

### Installation

1. Clone the repository
```bash
git clone https://github.com/spmchugh/portfolio.git
```

2. Dependencies
```bash
npm install
```

3. Set up environment variables. Create an .env file and add the following variables (for EmailJS)
```bash
VITE_SERVICE_ID = emailjs_service_id
VITE_TEMPLATE_ID = emailjs_template_id
VITE_PUBLIC_KEY = emailjs_public_key
```

4. Start the server
```bash
npm run dev
```

### Deployment

1. Build project
```bash
npm run build
```