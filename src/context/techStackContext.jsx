import { createContext, useState } from 'react';
import { useEffect } from 'react';

export const TechStackContext = createContext();

export default function CountProvider({ children }) {
  const [techStack, setTechStack] = useState([]);

  useEffect(() => {
    setTechStack(JSON.parse(localStorage.getItem('techStack')) || []);
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
