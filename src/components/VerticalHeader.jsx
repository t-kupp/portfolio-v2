export default function VerticalHeader() {
  return (
    <ul className="text-spaced my-auto flex h-full max-h-[400px] items-center justify-between text-center text-xs [writing-mode:sideways-lr]">
      <Link title={'Contact'} href={''} />
      <Divider />
      <Link title={'Work'} href={''} />
      <Divider />
      <Link title={'About'} href={''} />
    </ul>
  );
}

function Link({ number, title, href }) {
  return (
    <a className="flex items-center px-1 py-2" href={href}>
      <div className="font-bold">{number}</div> {title}
    </a>
  );
}

function Divider() {
  return (
    <div className="bg-myDark dark:bg-myLight h-full w-[0.8px] transition-colors duration-300"></div>
  );
}
