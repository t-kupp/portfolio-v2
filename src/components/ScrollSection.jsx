import ProjectCard from './ProjectCard';
import { useContext } from 'react';
import { ProjectContext } from '@/context/projectsContext';
import TechStack from './TechStack';
import Link from 'next/link';
import { GoArrowUpRight } from 'react-icons/go';
import { RiArrowRightUpFill } from 'react-icons/ri';

export default function ScrollSection() {
  const { projects } = useContext(ProjectContext);
  return (
    <div className='flex flex-col lg:w-[50%] lg:py-52'>
      <Section id={'about'} title={'About'}>
        <div className='text-description'>
          I'm Jan, a Frontend student at Chas Academy in Stockholm, Sweden.
          <br />I love what I do and I'm learning and gaining new skills everyday.
          <br /> <br />
          These are some of the technologies I'm working with:
          <br /> <br />
        </div>
        <TechStack />
      </Section>
      <Section id={'projects'} title={'Projects'}>
        <div className='flex flex-col'>
          {projects.map((project) => {
            return (
              <ProjectCard
                title={project.title}
                year={project.year}
                description={project.description}
                href={project.href}
              />
            );
          })}
        </div>
      </Section>
      <Section id={'contact'} title={'Contact'}>
        <ContactLink title={'GitHub'} href={''} />
        <ContactLink title={'LinkedIn'} href={''} />
      </Section>
    </div>
  );
}

function ContactLink({ href, title }) {
  return (
    <Link className='text-description group mb-1 flex' href={href}>
      <div className='my-auto mr-1 h-[1px] w-0 bg-myDark transition-[width] duration-300 group-hover:w-3 dark:bg-myLight'></div>
      {title} <RiArrowRightUpFill size={14} />
    </Link>
  );
}

function Section({ title, children, id }) {
  return (
    <div id={id} className='min-h-[55vh] pb-20 lg:min-h-96 lg:py-20'>
      <div className='flex gap-2'>
        <div className='h-7 w-1 bg-myDark'></div>
        <h1 className='text-spaced mb-12 text-lg'>{title}</h1>
      </div>
      {children}
    </div>
  );
}
