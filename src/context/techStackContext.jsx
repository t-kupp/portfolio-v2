import { createContext, useState } from 'react';

export const TechStackContext = createContext();

export default function CountProvider({ children }) {
  const [techStack, setTechStack] = useState([]);

  return (
    <TechStackContext.Provider value={{ techStack, setTechStack }}>
      {children}
    </TechStackContext.Provider>
  );
}
