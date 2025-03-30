import { TechStackContext } from '@/context/techStackContext';
import { useContext } from 'react';

export default function TechStack() {
  const { techStack } = useContext(TechStackContext);
  return (
    <>
      <div className='text-description flex flex-wrap gap-x-3 lg:gap-y-2'>
        {techStack.map((item, index) => {
          return (
            <div className='flex items-center gap-1' key={index}>
              <i className={item.deviconName + ' text-lg lg:text-xl'}></i>
              <p className=''>{item.name}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
