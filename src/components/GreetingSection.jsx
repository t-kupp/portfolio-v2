import TechStack from './TechStack';

export default function GreetingSection() {
  return (
    <div className='flex h-[80vh] flex-col justify-center lg:sticky lg:top-0 lg:h-screen lg:w-[50%]'>
      <div className='flex flex-col gap-2'>
        <div className='text-header'>Jan-Thorge Kupper</div>
        <div className='text-spaced'>Frontend Developer</div>
        <div className='text-description mb-8 max-w-xs'>
          I'm Jan, a Frontend student at Chas Academy in Stockholm, Sweden. I'm learning and gaining
          new skills everyday and absolutely love what I do.
        </div>
      </div>
      <TechStack />
    </div>
  );
}
