import ProjectCard from './ProjectCard';

export default function ScrollSection() {
  return (
    <div className='flex w-[50%] flex-col py-24'>
      <AboutSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}

function AboutSection() {
  return (
    <div id='about' className='py-12'>
      <h1 className='text-spaced mb-2 text-base'>01. About</h1>
      <p className='text-description'>Lorem ipsum. </p>
    </div>
  );
}

function ExperienceSection() {
  return (
    <div id='experience' className='py-12'>
      <h1 className='text-spaced mb-2 text-base'>02. Experience</h1>
      <div className='flex flex-col gap-16'>
        <ProjectCard
          title={'ChasGPT'}
          description={
            'A ChatGPT clone I built with Googles Gemini 1.5 Flash as part of a group project.'
          }
          hrefImg={'/ChasGPT.png'}
          hrefLive={''}
          hrefSource={''}
        />
        <ProjectCard
          title={'ChasGPT'}
          description={
            'A ChatGPT clone I built with Googles Gemini 1.5 Flash as part of a group project.'
          }
          hrefImg={'/ChasGPT.png'}
          hrefLive={''}
          hrefSource={''}
        />
        <ProjectCard
          title={'ChasGPT'}
          description={
            'A ChatGPT clone I built with Googles Gemini 1.5 Flash as part of a group project.'
          }
          hrefImg={'/ChasGPT.png'}
          hrefLive={''}
          hrefSource={''}
        />
        <ProjectCard
          title={'ChasGPT'}
          description={
            'A ChatGPT clone I built with Googles Gemini 1.5 Flash as part of a group project.'
          }
          hrefImg={'/ChasGPT.png'}
          hrefLive={''}
          hrefSource={''}
        />
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <div id='contact' className='py-12'>
      <h1 className='text-spaced mb-2 text-base'>03. Contact</h1>

      <p className='text-description'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. <br /> <br /> Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum. <br />
        <br />
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
        architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
        dolore magnam aliquam quaerat voluptatem. <br />
        <br /> Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
        laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
        qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum
        fugiat quo voluptas nulla pariatur?
      </p>
    </div>
  );
}
