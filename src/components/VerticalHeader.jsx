import { useEffect, useState } from 'react';

export default function VerticalHeader() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const sections = document.querySelectorAll('#about, #experience, #contact');

    const handleScroll = () => {
      let currentSection = null;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        // rect.top is the distance from the top of the viewport to the top of the div
        // window.innerHeight * 0.5 checks if the top of the section is within the upper half of the viewport
        if (rect.top >= 0 && rect.top < window.innerHeight * 0.5) {
          currentSection = section.id;
        }
      });

      if (currentSection != null) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='fixed left-0 z-50 flex items-center pl-1 2xl:pl-2'>
      <ul className='text-spaced flex h-full items-center justify-center text-center text-xs [writing-mode:sideways-lr]'>
        <Link
          number={'03. '}
          title={'CNT'}
          fullTitle={'contact'}
          href={'#contact'}
          isActive={activeSection === 'contact'}
        />
        <Divider />
        <Link
          number={'02. '}
          title={'EXP'}
          fullTitle={'experience'}
          href={'#experience'}
          isActive={activeSection === 'experience'}
        />
        <Divider />
        <Link
          number={'01. '}
          title={'ABT'}
          fullTitle={'about'}
          href={'#about'}
          isActive={activeSection === 'about'}
        />
      </ul>
    </div>
  );
}

function Link({ number, title, href, fullTitle, isActive }) {
  const [showFullTitle, setShowFullTitle] = useState(false);
  return (
    <a
      className={`my-2 flex h-[100px] items-center justify-center gap-1 px-1 py-2 transition-[background-color,height] duration-300 ${isActive ? 'h-[128px] bg-myDark text-myLight dark:bg-myLight dark:text-myDarker' : 'hover-effect hover:h-[128px]'}`}
      href={href}
      onMouseEnter={() => setShowFullTitle(true)}
      onMouseLeave={() => setShowFullTitle(false)}
    >
      <span
        className={`font-squarefont transition-opacity duration-300 ${showFullTitle || isActive ? 'opacity-0' : 'opacity-100'}`}
      >
        {!showFullTitle && !isActive && number + title}
      </span>
      <span
        className={`font-semibold transition-opacity duration-300 ${showFullTitle || isActive ? 'opacity-100' : 'opacity-0'}`}
      >
        {(showFullTitle || isActive) && fullTitle}
      </span>
    </a>
  );
}

function Divider() {
  return (
    <div className='h-full max-h-[100px] w-[0.8px] bg-myDark transition-colors duration-500 dark:bg-myLight'></div>
  );
}
