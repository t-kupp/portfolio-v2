export default function ProjectCard({ title, description, year, href }) {
  return (
    <a className='group flex' href={href} target='_blank'>
      <div className='mr-0 h-12 w-0 border-b-2 border-myDark transition-[width] duration-200 group-hover:mr-2 group-hover:w-10 dark:border-myLight'></div>
      <div className='mr-8 transition-[margin] duration-200 group-hover:mr-0'>
        <div className='mb-2 flex flex-col gap-2 lg:flex-row'>
          <h1 className='text-spaced text-3xl lg:text-4xl'>{title}</h1>
          <p className='text-spaced text-base font-light'>/ {year}</p>
        </div>
        <p className='text-description'>{description}</p>
      </div>
    </a>
  );
}
