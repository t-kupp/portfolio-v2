import { createContext, useEffect, useState } from 'react';

export const ProjectContext = createContext();

export default function ProjectProvider({ children }) {
  const initialProjects = [
    {
      id: 3,
      title: 'ChasGPT',
      description:
        "An AI-driven chatbot modeled after ChatGPT, using Google's Gemini AI. I learned how to integrate an AI API for real-time interaction.",
      year: '2025',
      href: 'https://chas-chasgpt.vercel.app/',
    },
    {
      id: 2,
      title: 'MediaDB',
      description:
        'Developed a database for movies and TV series with search and tracking features. This project taught me how to use dynamic routing and improved my understanding of website architecture.',
      year: '2025',
      href: 'https://chas-media-db.vercel.app/',
    },
    {
      id: 1,
      title: 'Weather App',
      description:
        'Created a web app to search for locations worldwide and display real-time weather along with a 7-day forecast. Built entirely with vanilla HTML, CSS, and JavaScript, focusing on fundamental web development principles before transitioning to frameworks and libraries.',
      year: '2024',
      href: 'https://t-kupp.github.io/odin-weather-app/',
    },
    {
      id: 0,
      title: 'AOT Randomizer',
      description: 'A team randomizer for the video game Across the Obelisk.',
      year: '2024',
      href: 'https://t-kupp.github.io/across-the-obelisk-randomizer/',
    },
  ];

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(JSON.parse(localStorage.getItem('projects')) || initialProjects);
  }, []);

  function deleteFromProjects(id) {
    const newProjects = projects.filter((item) => item.id != id);
    setProjects(newProjects);
    updateLocalStorage(newProjects);
  }

  function updateLocalStorage(newProjects) {
    localStorage.setItem('projects', JSON.stringify(newProjects));
  }

  function addProject(year, title, description, href) {
    const project = {
      id: Date.now(),
      year: year,
      title: title,
      description: description,
      href: href,
    };

    const newProjects = [...projects, project];
    setProjects(newProjects);
    updateLocalStorage(newProjects);
  }

  return (
    <ProjectContext.Provider value={{ projects, addProject, deleteFromProjects }}>
      {children}
    </ProjectContext.Provider>
  );
}
