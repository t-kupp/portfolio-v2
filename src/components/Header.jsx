export default function Header() {
  return (
    <nav className="flex items-center gap-4">
      <div className="text-header text-lg">Jan</div>
      <Spacer />
      <ul className="text-spaced flex items-center gap-4 text-center">
        <Link number={'01'} title={'About'} href={''} />
        <Link number={'02'} title={'Work'} href={''} />
        <Link number={'03'} title={'Contact'} href={''} />
      </ul>
    </nav>
  );
}

function Link({ number, title, href }) {
  return (
    <a className="group relative px-4 underline-offset-4" href={href}>
      {number}. {title}
      <span className="absolute bottom-0 left-1/2 h-[1px] w-0 -translate-x-1/2 transform bg-[--foreground] transition-all duration-200 group-hover:w-full"></span>
    </a>
  );
}

function Spacer() {
  return <div className="font-bold">//</div>;
}
