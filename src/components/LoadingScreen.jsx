import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 2000);

    setInterval(() => {
      setFading(true);
    }, 1500);
  }, []);

  return (
    loading && (
      <div
        className={`${fading ? 'opacity-0' : 'opacity-100'} fixed z-[99] flex h-screen w-screen items-center justify-center bg-myLight transition-opacity duration-500 dark:bg-myDarker`}
      >
        <div className='text-myDark dark:text-myLight'>
          <p className='text-spaced mb-1 text-3xl'>Jan Kupper</p>
          <p className='text-description text-xl font-light'>// Portfolio</p>
        </div>
      </div>
    )
  );
}
