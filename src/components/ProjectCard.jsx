import { useScramble } from 'use-scramble';
import Blinker from './Blinker';
import Box from './Box';

import { useRef } from 'react';
import Link from 'next/link';

export default function ProjectCard({ title, description, year, href }) {
  const titleReplayRef = useRef(null);
  const descriptionReplayRef = useRef(null);

  const handleHover = () => {
    if (titleReplayRef.current) titleReplayRef.current();
    if (descriptionReplayRef.current) descriptionReplayRef.current();
  };

  return (
    <div className=''>
      <Link
        className='group flex min-h-32 max-w-2xl lg:min-h-28'
        href={href}
        target='_blank'
        onMouseEnter={handleHover}
      >
        <div className='mr-12 w-full duration-200'>
          <div className='mb-4 flex flex-col lg:flex-row lg:gap-2'>
            <h1 className='text-header lg:text-nowrap'>
              <Scramble text={title} replay={(fn) => (titleReplayRef.current = fn)} />
            </h1>
            <p className='text-spaced pt-1 text-sm font-light lg:pt-2 lg:text-base'>/ {year}</p>
          </div>
          <p className='text-description'>
            <Scramble text={description} replay={(fn) => (descriptionReplayRef.current = fn)} />
          </p>
        </div>
        {/* <div className='flex flex-col gap-2 pt-1'>
          <Box size={'md'} />
          <Box size={'md'} />
          <Blinker size={'md'} />
        </div> */}
      </Link>
    </div>
  );
}

function Scramble({ text, replay }) {
  const { ref, replay: internalReplay } = useScramble({
    playOnMount: false,
    text: text,
    range: [65, 125],
    speed: 1,
    tick: 2,
    step: 5,
    scramble: 10,
    seed: 2,
    chance: 0.8,
    overdrive: false,
    overflow: false,
  });

  replay(internalReplay);
  return <span ref={ref} />;
}
