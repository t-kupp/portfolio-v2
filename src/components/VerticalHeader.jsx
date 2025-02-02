export default function VerticalHeader() {
  return (
    <ul className='text-spaced my-auto flex h-full max-h-[400px] items-center justify-between text-center text-xs [writing-mode:sideways-lr]'>
      <Link number={'03'} title={'CNT'} href={''} />
      <Divider />
      <Link number={'02'} title={'EXP'} href={''} />
      <Divider />
      <Link number={'01'} title={'ABT'} href={''} />
    </ul>
  );
}

function Link({ number, title, href }) {
  return (
    <a className='flex items-center px-1 py-2' href={href}>
      <div className='font-squarefont'>{number}.</div> {title}
    </a>
  );
}

function Divider() {
  return (
    <div className='h-full w-[0.8px] bg-myDark transition-colors duration-300 dark:bg-myLight'></div>
  );
}
