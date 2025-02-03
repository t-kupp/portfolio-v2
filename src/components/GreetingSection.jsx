import { Tooltip } from 'react-tooltip';

export default function GreetingSection() {
  return (
    <div className='sticky top-0 flex max-h-screen w-[50%] flex-col justify-center'>
      <div className='flex flex-col gap-2'>
        <div className='text-header'>Jan-Thorge Kupper</div>
        <div className='text-spaced'>Frontend Developer</div>
        <div className='text-description mb-8 max-w-xs'>
          Started with The Odin Project in 2023, now studying full-time at Chas Academy to build
          dynamic web experiences.
        </div>
      </div>
      <div className='mb-24 flex items-center gap-2 text-xl'>
        <i className='devicon-html5-plain'></i>
        <i className='devicon-css3-plain'></i>
        <i className='devicon-javascript-plain'></i>
        <i className='devicon-nodejs-plain'></i>
        <i className='devicon-react-original'></i>
        <i className='devicon-nextjs-plain'></i>
        <i className='devicon-tailwindcss-original'></i>
      </div>

      <Tooltip anchorSelect='.devicon-html5-plain'>
        <p className='text-xs'>HTML5</p>
      </Tooltip>
      <Tooltip anchorSelect='.devicon-css3-plain'>
        <p className='text-xs'>CSS3</p>
      </Tooltip>
      <Tooltip anchorSelect='.devicon-javascript-plain'>
        <p className='text-xs'>Javascript</p>
      </Tooltip>
      <Tooltip anchorSelect='.devicon-nodejs-plain'>
        <p className='text-xs'>Node.js</p>
      </Tooltip>
      <Tooltip anchorSelect='.devicon-react-original'>
        <p className='text-xs'>React</p>
      </Tooltip>
      <Tooltip anchorSelect='.devicon-nextjs-plain'>
        <p className='text-xs'>Next.js</p>
      </Tooltip>
      <Tooltip anchorSelect='.devicon-tailwindcss-original'>
        <p className='text-xs'>TailwindCSS</p>
      </Tooltip>
    </div>
  );
}
