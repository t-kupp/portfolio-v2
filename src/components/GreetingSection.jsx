import { FaGithub, FaLinkedin, FaAt } from 'react-icons/fa6';

export default function AboutSection() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-1">
        <div className="text-header">Jan-Thorge Kupper</div>
        <div className="text-spaced">Frontend Developer</div>
        <div className="text-description mb-8 max-w-xs">
          Started with The Odin Project in 2023, now studying full-time at Chas
          Academy to build dynamic web experiences.
        </div>
      </div>
      {/* <div className="mb-24 flex items-center gap-2 text-xl">
        <i class="devicon-html5-plain"></i>
        <i class="devicon-css3-plain"></i>
        <i class="devicon-javascript-plain"></i>
        <i class="devicon-react-original"></i>
        <i class="devicon-tailwindcss-original"></i>
      </div>
      <div className="flex gap-2 text-2xl">
        <a href="">
          <FaGithub />
        </a>
        <a href="">
          <FaLinkedin />
        </a>
        <a href="">
          <FaAt />
        </a>
      </div> */}
    </div>
  );
}
