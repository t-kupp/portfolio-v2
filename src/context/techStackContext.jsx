import { createContext, useState } from 'react';
import { useEffect } from 'react';

export const TechStackContext = createContext();

export default function CountProvider({ children }) {
  const [techStack, setTechStack] = useState([]);

  useEffect(() => {
    setTechStack(JSON.parse(localStorage.getItem('techStack')) || []);
  }, []);

  function addTechStack(name, deviconName) {
    const techStackIcon = { name: name, deviconName: deviconName };
    const newTechStack = [...techStack, techStackIcon];

    setTechStack(newTechStack);
    localStorage.setItem('techStack', JSON.stringify(newTechStack));
    console.log('techStackIcon', techStackIcon);
    console.log('newTechStack', newTechStack);
  }

  return (
    <TechStackContext.Provider value={{ techStack, addTechStack }}>
      {children}
    </TechStackContext.Provider>
  );
}
