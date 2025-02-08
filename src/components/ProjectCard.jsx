import { LiaExternalLinkAltSolid } from 'react-icons/lia';
import Button from './Button';

export default function ProjectCard({ title, description, hrefImg, hrefLive }) {
  return (
    <a
      className='group flex max-w-sm flex-col bg-myLight transition-colors dark:bg-myDarker'
      href={hrefLive}
      target='_blank'
    >
      <h1 className='text-header bg-myDark px-3 py-2 text-sm text-myLight dark:bg-myLight dark:text-myDarker'>
        {title}
      </h1>
      <img className='aspect-4/3' src={hrefImg} alt='' />
      <div className='p-2'>
        <p className='text-description mb-4 text-sm'>{description}</p>
        <button
          className='border border-myDark px-2 py-1 text-xs font-semibold uppercase transition-colors group-hover:border-myLight group-hover:bg-myDark group-hover:text-myLight'
          title={'live'}
        >
          source
        </button>
      </div>
    </a>
  );
}
