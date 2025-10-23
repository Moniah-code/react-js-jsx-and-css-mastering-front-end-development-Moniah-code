# React Task Manager Application

A modern React application built with Vite, featuring task management functionality, posts viewing, and theme switching capabilities. This project demonstrates the implementation of React best practices, context API usage, and responsive design with Tailwind CSS.

![Application Screenshot](screenshots/app-screenshot.png)

[Live Demo](https://your-app-url-here.com) <!-- Replace with your deployment URL -->

## Features

- Task Management (Create, Read, Update, Delete)
- Posts viewing and interaction
- Dark/Light theme switching
- Responsive design
- Modern React practices (Hooks, Context API)
- Clean component architecture

## Technologies Used

- React 18
- Vite
- Tailwind CSS
- Context API for state management
- React Router for navigation
- Modern JavaScript (ES6+)

## Prerequisites

Before you begin, ensure you have installed:
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## Project Structure

```
src/
├── api/          # API integration
├── components/   # Reusable components
├── context/      # Context providers
├── pages/        # Page components
└── assets/       # Static assets
```

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production
- `npm run preview` - Preview the production build locally

## Deployment Guide

### Option 1: Vercel (Recommended)

1. Create an account on [Vercel](https://vercel.com)
2. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. Run:
   ```bash
   vercel login
   vercel
   ```

### Option 2: Netlify

1. Create an account on [Netlify](https://netlify.com)
2. Build your project:
   ```bash
   npm run build
   ```
3. Drag and drop the `dist` folder to Netlify's sites page
   or
   Connect your GitHub repository through Netlify's UI

### Option 3: GitHub Pages

1. Add homepage to package.json:
   ```json
   {
     "homepage": "https://username.github.io/repo-name"
   }
   ```
2. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```
3. Add deploy scripts to package.json:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```
4. Deploy:
   ```bash
   npm run deploy
   ```

## Recommended Deployment: Vercel

For this project, I recommend using **Vercel** because:
1. Zero-configuration deployment
2. Automatic builds and deployments from Git
3. Seamless integration with React and Vite
4. Free tier with generous limits
5. Excellent performance and reliability

## Screenshots

![Home Page](screenshots/home.png)
![Tasks Page](screenshots/tasks.png)
![Posts Page](screenshots/posts.png)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- React Team for the excellent documentation
- Vite Team for the build tool
- Tailwind CSS Team for the styling framework
