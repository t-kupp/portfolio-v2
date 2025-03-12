import Blinker from './Blinker';
import Box from './Box';

import Link from 'next/link';

export default function ProjectCard({ project }) {
  return (
    <Link
      id={'project-' + project.id}
      className='group flex max-w-2xl lg:py-5'
      href={project.href}
      target='_blank'
    >
      <div className='mr-12 w-full duration-200'>
        <div className='mb-4 flex flex-col lg:flex-row lg:gap-2'>
          <h1 className='text-header lg:text-nowrap'>{project.title}</h1>
          <p className='text-spaced pt-1 text-sm font-light lg:pt-2 lg:text-base'>
            / {project.year}
          </p>
        </div>
        <p className='text-description'>{project.description}</p>
      </div>
      {/* <div className='flex flex-col gap-2 pt-1'>
        <Box size={'md'} />
        <Box size={'md'} />
        <Blinker size={'md'} />
      </div> */}
    </Link>
  );
}
