import { TechStackContext } from '@/context/techStackContext';
import { ProjectContext } from '@/context/projectsContext';
import Link from 'next/link';
import { useState, useContext } from 'react';
import LoginPage from '@/components/LoginPage';
import { Tooltip } from 'react-tooltip';
import Button from '@/components/Button';

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { techStack, addTechStack, deleteFromStack } = useContext(TechStackContext);
  const { projects, addProject, deleteFromProjects } = useContext(ProjectContext);
  const [techStackName, setTechStackName] = useState('');
  const [deviconName, setDeviconName] = useState('');
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [description, setDescription] = useState('');
  const [href, setHref] = useState('');

  if (!isLoggedIn) {
    return <LoginPage setIsLoggedIn={setIsLoggedIn} />;
  }

  if (isLoggedIn) {
    return (
      <div className='text-description p-8 text-sm'>
        <Link href={'/'}>← Home</Link>
        <div className='mx-auto flex max-w-xl flex-col items-center gap-2'>
          <h1 className='text-3xl'>Admin Panel</h1>
          <div>
            <div className='flex flex-col items-start gap-2'>
              <div className='flex flex-col items-start gap-2 py-12'>
                <p className='text-header text-base'>Current TechStack:</p>
                <div className='flex items-center gap-4 text-lg'>
                  {techStack.map((item, index) => {
                    return (
                      <div key={index} className='relative'>
                        <i className={item.deviconName}></i>
                        <Tooltip anchorSelect={`.${item.deviconName}`}>
                          <p className='text-xs'>{item.name}</p>
                        </Tooltip>
                        <button
                          className='hover-effect absolute right-[-12px] top-0 flex h-3 w-3 items-center justify-center rounded-full border border-myDark text-xs'
                          onClick={() => deleteFromStack(item.id)}
                        >
                          ×
                        </button>
                      </div>
                    );
                  })}
                </div>
                <div className='flex items-center gap-2'>
                  <label className='w-16' htmlFor='techStackName'>
                    Name:
                  </label>
                  <input
                    onChange={(e) => setTechStackName(e.target.value)}
                    type='text'
                    id='techStackName'
                  />
                </div>
                <div className='flex items-center gap-2'>
                  <label className='w-16' htmlFor='deviconName'>
                    Devicon:
                  </label>
                  <input
                    onChange={(e) => setDeviconName(e.target.value)}
                    type='text'
                    id='deviconName'
                  />
                </div>
                <div onClick={() => addTechStack(techStackName, deviconName)}>
                  <Button title={'add'} />
                </div>
              </div>
            </div>
            <p className='text-header mb-2 text-base'>Current Projects:</p>
            <ul className='flex flex-col gap-4'>
              {projects.map((project, index) => {
                return (
                  <li key={index} className='mb-4 flex flex-col items-start'>
                    <p>
                      <span className='font-bold'>Title:</span> {project.title}
                    </p>
                    <p>
                      <span className='font-bold'>Year:</span> {project.year}
                    </p>
                    <p>
                      <span className='font-bold'>Desc:</span> {project.description}
                    </p>
                    <p>
                      <span className='font-bold'>href:</span>{' '}
                      {project.href ? project.href : 'No link provided'}
                    </p>
                    <span className='mt-2' onClick={() => deleteFromProjects(project.id)}>
                      <Button title={'Remove'} />
                    </span>
                  </li>
                );
              })}
            </ul>
            <div className='grid max-w-48 grid-cols-[auto,1fr] gap-2'>
              <label htmlFor='title'>title: </label>
              <input onChange={(e) => setTitle(e.target.value)} type='text' id='title' />

              <label htmlFor='year'>year: </label>
              <input onChange={(e) => setYear(e.target.value)} type='text' id='year' />

              <label htmlFor='description'>description: </label>
              <input
                onChange={(e) => setDescription(e.target.value)}
                type='text'
                id='description'
              />

              <label htmlFor='href'>href: </label>
              <input onChange={(e) => setHref(e.target.value)} type='text' id='href' />
            </div>
            <span onClick={() => addProject(title, year, description, href)}>
              <Button title={'add'} />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

// <TechStackIcon name={'html5'} deviconName={'devicon-html5-plain'} />
// <TechStackIcon name={'css3'} deviconName={'devicon-css3-plain'} />
// <TechStackIcon name={'javascript'} deviconName={'devicon-javascript-plain'} />
// <TechStackIcon name={'node.js'} deviconName={'devicon-nodejs-plain'} />
// <TechStackIcon name={'react'} deviconName={'devicon-react-original'} />
// <TechStackIcon name={'next.js'} deviconName={'devicon-nextjs-plain'} />
// <TechStackIcon name={'tailwindcss'} deviconName={'devicon-tailwindcss-original'} />
