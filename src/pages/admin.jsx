import { TechStackContext } from '@/context/techStackContext';
import Link from 'next/link';
import { useState, useContext } from 'react';
import LoginPage from '@/components/LoginPage';
import { Tooltip } from 'react-tooltip';

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { techStack, addTechStack, deleteFromStack } = useContext(TechStackContext);
  const [techStackName, setTechStackName] = useState('');
  const [deviconName, setDeviconName] = useState('');

  if (!isLoggedIn) {
    return <LoginPage setIsLoggedIn={setIsLoggedIn} />;
  }

  if (isLoggedIn) {
    return (
      <div className='text-description p-8 text-sm'>
        <Link href={'/'}>← Home</Link>
        <div className='mx-auto flex flex-col items-center gap-2'>
          <h1>Admin Panel</h1>
          <div>
            <div className='flex flex-col gap-2'>
              <p>Current TechStack:</p>
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
              <div className='flex items-center justify-between gap-2'>
                <label htmlFor='techStackName'>Name:</label>
                <input
                  onChange={(e) => setTechStackName(e.target.value)}
                  type='text'
                  id='techStackName'
                />
              </div>
              <div className='flex items-center justify-between gap-2'>
                <label htmlFor='deviconName'>Devicon:</label>
                <input
                  onChange={(e) => setDeviconName(e.target.value)}
                  type='text'
                  id='deviconName'
                />
              </div>
              <button
                className='border border-myDark dark:border-myLight'
                onClick={() => addTechStack(techStackName, deviconName)}
              >
                Add
              </button>
            </div>
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
