import Blinker from './Blinker';
import Box from './Box';

export default function ProjectCard({ title, description, year, href }) {
  return (
    <div>
      <a className='group flex' href={href} target='_blank'>
        <div className='mr-0 h-12 w-0 border-b-2 border-myDark transition-[width,margin] duration-200 group-hover:mr-2 group-hover:w-10 dark:border-myLight'></div>
        <div className='mr-12 w-full transition-[margin] duration-200 group-hover:mr-1'>
          <div className='mb-2 flex flex-col gap-2 lg:flex-row'>
            <h1 className='text-spaced text-3xl lg:text-4xl'>{title}</h1>
            <p className='text-spaced text-base font-light'>/ {year}</p>
          </div>
          <p className='text-description'>{description}</p>
        </div>
        <div className='flex flex-col gap-2 pt-1'>
          <Box size={'md'} />
          <Box size={'md'} />
          <Blinker size={'md'} />
        </div>
      </a>
    </div>
  );
}
