import { createContext, useState } from 'react';
import { useEffect } from 'react';

export const TechStackContext = createContext();

export default function TechStackProvider({ children }) {
  const initialTechStack = [
    {
      id: 0,
      name: 'html5',
      deviconName: 'devicon-html5-plain',
    },
    {
      id: 1,
      name: 'css3',
      deviconName: 'devicon-css3-plain',
    },
    {
      id: 2,
      name: 'javascript',
      deviconName: 'devicon-javascript-plain',
    },
    {
      id: 3,
      name: 'react',
      deviconName: 'devicon-react-original',
    },
    {
      id: 4,
      name: 'next.js',
      deviconName: 'devicon-nextjs-plain',
    },
    {
      id: 5,
      name: 'tailwind',
      deviconName: 'devicon-tailwindcss-original',
    },
    {
      id: 6,
      name: 'three.js',
      deviconName: 'devicon-threejs-original',
    },
  ];
  const [techStack, setTechStack] = useState([]);

  useEffect(() => {
    setTechStack(JSON.parse(localStorage.getItem('techStack')) || initialTechStack);
  }, []);

  function addTechStack(name, deviconName) {
    const techStackIcon = { id: Date.now(), name: name, deviconName: deviconName };
    const newTechStack = [...techStack, techStackIcon];
    setTechStack(newTechStack);
    updateLocalStorage(newTechStack);
  }

  function deleteFromStack(id) {
    const newTechStack = techStack.filter((item) => item.id != id);
    setTechStack(newTechStack);
    updateLocalStorage(newTechStack);
  }

  function updateLocalStorage(newTechStack) {
    localStorage.setItem('techStack', JSON.stringify(newTechStack));
  }

  return (
    <TechStackContext.Provider value={{ techStack, addTechStack, deleteFromStack }}>
      {children}
    </TechStackContext.Provider>
  );
}
