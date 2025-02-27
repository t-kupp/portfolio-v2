export default function Blinker({ size }) {
  const sizeClasses = {
    sm: 'h-2 w-2',
    md: 'h-3 w-3',
    lg: 'h-4 w-4',
  };

  return (
    <div
      className={`${sizeClasses[size] || 'h-3 w-3'} animate-blink group-hover:animate-blinkFast bg-myDark group-hover:bg-myLight`}
    ></div>
  );
}
