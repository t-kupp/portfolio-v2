export default function BackgroundImage() {
  return (
    <div className='pointer-events-none fixed -z-50 h-screen w-screen p-8 2xl:p-10'>
      <div className="h-full w-full bg-[url('/plasticHead.png')] bg-cover bg-center opacity-15 blur-[2px] grayscale dark:opacity-5"></div>
    </div>
  );
}
