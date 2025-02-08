import TechStack from './TechStack';

export default function GreetingSection() {
  return (
    <div className='sticky top-0 flex max-h-screen w-[50%] flex-col justify-center'>
      <div className='flex flex-col gap-2'>
        <div className='text-header'>Jan-Thorge Kupper</div>
        <div className='text-spaced'>Frontend Developer</div>
        <div className='text-description mb-8 max-w-xs'>
          I'm Jan, a Frontend student at Chas Academy in Stockholm, Sweden. I absolutely love what I
          do and develop my skills every single day.
        </div>
      </div>
      <TechStack />
    </div>
  );
}
