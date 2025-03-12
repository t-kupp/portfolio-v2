import { useEffect, useState } from 'react';

export default function VerticalBar() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;
      const scrollPercentage = (scrollTop / scrollHeight) * 100;

      if (scrollPercentage >= 0 && scrollPercentage < 20) {
        setActiveSection('about');
      } else if (scrollPercentage >= 20 && scrollPercentage < 80) {
        setActiveSection('projects');
      } else if (scrollPercentage >= 80) {
        setActiveSection('contact');
      }
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='fixed left-0 z-50 hidden w-8 items-center justify-center lg:flex lg:w-[40px]'>
      <ul className='text-description flex h-full items-center justify-center text-center text-sm !opacity-100 [writing-mode:sideways-lr]'>
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
          title={'PRO'}
          fullTitle={'projects'}
          href={'#projects'}
          isActive={activeSection === 'projects'}
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
      className={`my-2 flex h-[100px] items-center justify-center gap-1 px-[1px] transition-[background-color,height] duration-300 ${isActive ? 'h-[128px] bg-myDark text-myLight dark:bg-myLight dark:text-myDarker' : 'hover-effect hover:h-[128px]'}`}
      href={href}
      onMouseEnter={() => setShowFullTitle(true)}
      onMouseLeave={() => setShowFullTitle(false)}
    >
      <span
        className={`transition-opacity duration-300 ${showFullTitle || isActive ? 'opacity-0' : 'opacity-100'}`}
      >
        {!showFullTitle && !isActive && (
          <>
            {<span className='text-spaced text-sm'>{number}</span>} {title}
          </>
        )}
      </span>
      <span
        className={`transition-opacity duration-300 ${showFullTitle || isActive ? 'opacity-100' : 'opacity-0'}`}
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
