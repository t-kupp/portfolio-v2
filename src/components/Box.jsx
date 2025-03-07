export default function Box({ size }) {
  const sizeClasses = {
    sm: '8',
    md: '12',
    lg: '16',
  };

  return (
    <svg
      className='stroke-myDark opacity-30 group-hover:opacity-100 dark:stroke-myLight'
      xmlns='http://www.w3.org/2000/svg'
      width={sizeClasses[size] || '12'}
      height={sizeClasses[size] || '12'}
      viewBox='0 0 13 13'
    >
      <g transform='translate(-1 -1)'>
        <path d='M1.5,1.5h12v12H1.5Z' fill='none' strokeWidth='1' fillRule='evenodd'></path>
        <path
          d='M2.5,2.5,14.231,14.231'
          transform='translate(-0.731 -0.731)'
          fill='none'
          strokeWidth='1'
          fillRule='evenodd'
        ></path>
      </g>
    </svg>
  );
}
