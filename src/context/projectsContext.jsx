import { createContext, useEffect, useState } from 'react';

export const ProjectContext = createContext();

export default function ProjectProvider({ children }) {
  const initialProjects = [
    {
      id: 0,
      title: 'ChasGPT',
      description:
        'A ChatGPT clone I built with Googles Gemini 1.5 Flash as part of a group project.',
      year: '2025',
      href: 'https://chas-chasgpt.vercel.app/',
    },
    {
      id: 1,
      title: 'Weather App',
      description:
        'A weather app that displays the current weather and a 7-day forecast for any place on earth.',
      year: '2024',
      href: 'https://t-kupp.github.io/odin-weather-app/',
    },
    {
      id: 2,
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
