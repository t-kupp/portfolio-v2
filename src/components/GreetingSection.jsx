import TechStack from './TechStack';

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
      <TechStack />
    </div>
  );
}
