import { Tooltip } from 'react-tooltip';
import { TechStackContext } from '@/context/techStackContext';
import { useContext } from 'react';

export default function TechStack() {
  const { techStack } = useContext(TechStackContext);
  return (
    <>
      <div className='flex items-center gap-2 text-xl'>
        {techStack.map((item, index) => {
          return (
            <div key={index}>
              <i className={item.deviconName}></i>
              <Tooltip anchorSelect={`.${item.deviconName}`}>
                <p className='text-xs'>{item.name}</p>
              </Tooltip>
            </div>
          );
        })}
      </div>
    </>
  );
}
