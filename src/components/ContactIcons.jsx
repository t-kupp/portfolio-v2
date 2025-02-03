import { FaGithub, FaLinkedin, FaAt } from 'react-icons/fa';

export default function () {
  return (
    <div className='flex items-center gap-2'>
      <a href=''>
        <FaGithub />
      </a>
      <a href=''>
        <FaLinkedin />
      </a>
      <a href=''>
        <FaAt />
      </a>
    </div>
  );
}
