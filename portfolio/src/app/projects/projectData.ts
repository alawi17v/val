export interface Project {
  id: number;
  title: string;
  description: string; // Long description for View Project modal
  shortDescription?: string; // Short description for liked cards section
  threeWordDescriptor: string; // 3-word descriptor for project cards
  images: string[];
  startYear: number;
  endYear?: number; // Optional - if not provided, project is ongoing
  link?: string;
  githubRepo?: string; // GitHub repository URL
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Complexion",
    images: [
      '/complexion_slider/placeholder1.png',
      '/complexion_slider/placeholder2.png',
      '/complexion_slider/placeholder3.png'
    ],
    description: "An iOS application designed to help users manage their skincare routines effectively. Built with Swift and SwiftUI, Complexion features daily routine tracking to monitor skincare habits, personalized product recommendations based on skin type, smart reminder notifications to maintain consistency, progress photo tracking to visualize skin improvements over time, and comprehensive skin type analysis. The app uses Firebase for backend services including user authentication and cloud data storage, ensuring seamless synchronization across devices. This project demonstrates proficiency in modern iOS development, cloud integration, and user-centered design principles.",
    shortDescription: "iOS skincare management app with routine tracking, product recommendations, notifications, and progress photos using Swift and Firebase.",
    threeWordDescriptor: "iOS Health App",
    startYear: 2025
  },
  {
    id: 2,
    title: "WeatherNow",
    images: [
      '/weathernow_slider/placeholder1.png',
      '/weathernow_slider/placeholder2.png'
    ],
    description: "A clean and intuitive iOS weather application built as a learning project to master Swift fundamentals and API integration. The app integrates with the OpenWeatherMap API to provide real-time weather data including current conditions, hourly forecasts, and 7-day predictions. Features location-based weather detection using CoreLocation, detailed weather metrics (temperature, humidity, wind speed, UV index), and a modern SwiftUI interface with smooth animations. This project helped develop skills in asynchronous networking, JSON parsing, error handling, and responsive UI design.",
    shortDescription: "iOS weather app with real-time forecasts, location detection, and clean SwiftUI interface using OpenWeatherMap API.",
    threeWordDescriptor: "iOS Weather App",
    startYear: 2024,
    endYear: 2024
  },
  {
    id: 3,
    title: "StudySync",
    images: [
      '/studysync_slider/placeholder1.png',
      '/studysync_slider/placeholder2.png',
      '/studysync_slider/placeholder3.png'
    ],
    description: "A web-based task and assignment management application built with Next.js and React to help students organize their academic workload. Features include a dashboard view of all assignments, deadline tracking with color-coded urgency indicators, course organization system, task priority management, and a clean, responsive interface that works on desktop and mobile. The app uses React hooks for state management and local storage for data persistence. This project demonstrates front-end development skills including component architecture, responsive design with Tailwind CSS, and modern JavaScript practices.",
    shortDescription: "Student task manager web app with deadline tracking, priority management, and responsive design using Next.js and React.",
    threeWordDescriptor: "Web Task Manager",
    startYear: 2024,
    endYear: 2025
  },
  {
    id: 4,
    title: "RecipeBox",
    images: [
      '/recipebox_slider/placeholder1.png',
      '/recipebox_slider/placeholder2.png',
      '/recipebox_slider/placeholder3.png'
    ],
    description: "An iOS recipe discovery and meal planning application that helps users find and save recipes based on available ingredients. Built with Swift and SwiftUI, the app integrates with the Spoonacular API to search thousands of recipes, provides detailed cooking instructions with step-by-step guidance, nutritional information for health-conscious users, and a favorites system to save preferred recipes. Features include ingredient-based search functionality, dietary filter options (vegetarian, vegan, gluten-free), and a shopping list generator. This project showcases API integration, data modeling, and creating an engaging user experience with complex navigation flows.",
    shortDescription: "iOS recipe finder with ingredient-based search, meal planning, nutritional info, and shopping lists using Spoonacular API.",
    threeWordDescriptor: "iOS Recipe App",
    startYear: 2024
  },
  {
    id: 5,
    title: "Portfolio Website",
    images: [
      '/portfolio_slider/placeholder1.png',
      '/portfolio_slider/placeholder2.png',
      '/portfolio_slider/placeholder3.png'
    ],
    description: "A modern, responsive portfolio website featuring a unique swipe-through project interface inspired by modern mobile apps. Built with Next.js 15, React 19, and TypeScript, this site showcases projects with an interactive card-based design that adapts seamlessly across all screen sizes. Features include a three-mode theme system (light/dark/auto) using Base16 color schemes, EmailJS integration for contact form functionality, reCAPTCHA protection for security, and custom Tailwind CSS configurations for precise responsive breakpoints. The project demonstrates full-stack web development skills including server-side rendering, client-side interactivity, API integration, and modern DevOps practices with Git version control.",
    shortDescription: "Interactive portfolio website with swipe interface, theme system, and contact form using Next.js, React, and TypeScript.",
    threeWordDescriptor: "Portfolio Website",
    startYear: 2024,
    link: "https://alisami.com"
  }
];
