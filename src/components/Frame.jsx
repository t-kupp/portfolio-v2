export default function Frame() {
  return (
    <>
      <div className='blur-overlay pointer-events-none fixed left-0 top-0 h-screen w-screen'></div>
      <div className='pointer-events-none fixed left-0 top-0 h-screen w-screen p-8 2xl:p-10'>
        <div className='relative h-full w-full border border-myDark dark:border-myLight'>
          <div className='vignette'></div>
        </div>
      </div>
    </>
  );
}
