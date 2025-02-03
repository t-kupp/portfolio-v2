import { FaGithub, FaLinkedin, FaAt } from 'react-icons/fa';

export default function () {
  return (
    <div className='flex items-center gap-2'>
      <a href='https://github.com/t-kupp' target='_blank'>
        <FaGithub />
      </a>
      <a href='https://www.linkedin.com/in/jan-thorge-kupper/' target='_blank'>
        <FaLinkedin />
      </a>
      <a
        href='mailto:kupper.thorge@gmail.com
'
      >
        <FaAt />
      </a>
    </div>
  );
}
