import { Tooltip } from 'react-tooltip';

export default function TechStack() {
  return (
    <>
      <div className='mb-24 flex items-center gap-2 text-xl'>
        <TechStackIcon name={'html5'} deviconName={'devicon-html5-plain'} />
        <TechStackIcon name={'css3'} deviconName={'devicon-css3-plain'} />
        <TechStackIcon name={'javascript'} deviconName={'devicon-javascript-plain'} />
        <TechStackIcon name={'node.js'} deviconName={'devicon-nodejs-plain'} />
        <TechStackIcon name={'react'} deviconName={'devicon-react-original'} />
        <TechStackIcon name={'next.js'} deviconName={'devicon-nextjs-plain'} />
        <TechStackIcon name={'tailwindcss'} deviconName={'devicon-tailwindcss-original'} />
      </div>
    </>
  );
}

function TechStackIcon({ name, deviconName }) {
  return (
    <>
      <i className={deviconName}></i>
      <Tooltip anchorSelect={`.${deviconName}`}>
        <p className='text-xs'>{name}</p>
      </Tooltip>
    </>
  );
}
