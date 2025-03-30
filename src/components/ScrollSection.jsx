import ProjectCard from './ProjectCard';
import { useContext, useState } from 'react';
import { ProjectContext } from '@/context/projectsContext';
import TechStack from './TechStack';
import Link from 'next/link';
import { RiArrowRightUpFill } from 'react-icons/ri';

export default function ScrollSection() {
  const { projects } = useContext(ProjectContext);
  const [hoveredProject, setHoveredProject] = useState(null);

  function handleEnter(e) {
    setHoveredProject(e.currentTarget.id);
  }

  function handleLeave() {
    setHoveredProject(null);
  }

  return (
    <div className='z-10 flex flex-col gap-24 pb-36 pt-12 lg:w-[50%] lg:gap-16 lg:pb-24'>
      <Section id={'about'} title={'About'}>
        <div className='text-description'>
          I'm Jan, a Frontend student at Chas Academy in Stockholm, Sweden.
          <br />I love what I do and I'm learning and gaining new skills everyday.
          <br /> <br />
          These are some of the technologies I work with:
          <br /> <br />
        </div>
        <TechStack />
      </Section>
      <Section id={'projects'} title={'Projects'}>
        <div className='mb-[-24px] mt-[-6px] flex flex-col gap-6 lg:mt-[-16px] lg:gap-0'>
          {projects.map((project, index) => {
            const isHovered = hoveredProject === 'project-' + project.id;
            return (
              <div
                id={'project-' + project.id}
                key={index}
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                className={`${isHovered || hoveredProject === null ? 'lg:opacity-100' : 'lg:opacity-50'} transition-opacity duration-300`}
              >
                <ProjectCard project={project} />
              </div>
            );
          })}
        </div>
      </Section>
      <Section id={'contact'} title={'Contact'}>
        <ContactLink title={'GitHub'} href={'https://github.com/t-kupp'} />
        <ContactLink title={'LinkedIn'} href={'https://www.linkedin.com/in/jan-thorge-kupper/'} />
      </Section>
    </div>
  );
}

function ContactLink({ href, title }) {
  return (
    <Link className='mb-1 flex' href={href}>
      <div className='my-auto mr-1 h-[1px] w-0 bg-myDark opacity-80 transition-[width] duration-300 dark:bg-myLight'></div>
      <span className='text-description hover:brightness-75 dark:hover:brightness-125'>
        {title}
      </span>
      <RiArrowRightUpFill size={14} />
    </Link>
  );
}

function Section({ title, children, id }) {
  return (
    <div id={id} className=''>
      <div className='mb-6 flex flex-col gap-2 pt-12 lg:mb-8'>
        <h1 className='text-spaced'>{title}</h1>
        <div className='border-b border-myDark opacity-20 dark:opacity-40'></div>
      </div>
      {children}
    </div>
  );
}
