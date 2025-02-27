import ProjectCard from './ProjectCard';
import { useContext } from 'react';
import { ProjectContext } from '@/context/projectsContext';

export default function ScrollSection() {
  const { projects } = useContext(ProjectContext);
  return (
    <div className='flex flex-col lg:w-[50%] lg:py-52'>
      <Section id={'about'} title={'01. About'}>
        <p className='text-description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. <br /> <br /> Duis aute irure
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum.
        </p>
      </Section>
      <Section id={'experience'} title={'02. Experience'}>
        <div className='flex flex-col gap-12'>
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
      <Section id={'contact'} title={'03. Contact'}>
        <p className='text-description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. <br /> <br /> Duis aute irure
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum.
        </p>
      </Section>

      {/* <AboutSection />
      <ExperienceSection />
      <ContactSection /> */}
    </div>
  );
}

function Section({ id, title, children }) {
  return (
    <div id={id} className='min-h-[55vh] pb-20 lg:min-h-96 lg:py-20'>
      <div className='flex gap-2'>
        <div className='h-7 w-1 bg-myDark'></div>
        <h1 className='text-spaced mb-16 text-lg'>{title}</h1>
      </div>
      {children}
    </div>
  );
}
