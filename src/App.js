import { useRef, useState } from 'react';
import './App.css';
import { IconBrandCss3, IconBrandHtml5, IconBrandInstagram, IconBrandJavascript, IconBrandNextjs, IconBrandReact, IconBrandTailwind, IconBrandTelegram, IconBrandWhatsapp, IconMail, IconMoon, IconSun, IconX } from '@tabler/icons-react';
import Hamburger from 'hamburger-react';

function App() {

  const skills = [
    {
      icon: <IconBrandHtml5 size={50} className='dark:text-white' />,
      title: 'HTML',
      des: 'HTML stands for HyperText Markup Language which is the basic requirement for developing websites and web applications. It is known as the skeleton of the webpage.'
    },
    {
      icon: <IconBrandCss3 size={50} className='dark:text-white' />,
      title: 'CSS',
      des: 'CSS stands for Cascading Style Sheet which is used for designing the web pages. Without css, it is impossible to attract the users for the website.'
    },
    {
      icon: <IconBrandJavascript size={50} className='dark:text-white' />,
      title: 'JavaScript',
      des: 'JavaScript is a scripting language which is used with the primary purpose of DOM manipulaion. This language can be used to make real time changes in the web pages.'
    },
    {
      icon: <IconBrandReact size={50} className='dark:text-white' />,
      title: 'MERN stack',
      des: 'MERN stack is a combination of various JavaScript frameworks and a database such as MongoDB, Express, React and NodeJs. These frameworks are togetherly used for web development.'
    },
    {
      icon: <IconBrandNextjs size={50} className='dark:text-white' />,
      title: 'NextJs',
      des: 'NextJs is a React framework which enhaces the usage of React by adding some new features like app router and pages router which eliminates the complex tasks of express and node.'
    },
    {
      icon: <IconBrandTailwind size={50} className='dark:text-white' />,
      title: 'Tailwind CSS',
      des: 'Bootstrap and Tailwind Css are UI libraries which provides quick solution for designing. It provides readymade classes applied with common CSS which can be directly used in the websites.'
    },
  ]

  const projects = [
    {
      title: 'Fashion Flair',
      des: "Fashion Flair is a merchandise selling web application which is similar to e commerce website. It contains a secure payment gateway, checkout page and other necessary pages which allows users to view and buy cloths like t-shirts, jeans, shorts, etc. It also contains an admin dashboard which allows admin to keep track of orders, products and so on.",
      images: ['/p1/1.png', '/p1/2.png', '/p1/3.png', '/p1/4.png', '/p1/5.png', '/p1/6.png'],
      link: 'https://fashion-flair-chi.vercel.app/'
    },
    {
      title: 'Bloggers',
      des: "Bloggers is a blog website which allows users to add, edit and delete their blogs. They will also get access to wide variety of blogs on the internet. The users will be able to comment on other's blogs and communicate with each other in the comment section. There is also an admin panel for keeping track of all the blogs.",
      images: ['/p2/1.png', '/p2/2.png', '/p2/3.png', '/p2/4.png', '/p2/5.png', '/p2/6.png'],
      link: 'https://github.com/SahilAnvekar002/BlogWebsite'
    },
    {
      title: 'Social Media App',
      des: "It is a clone of social media application which allows users to upload images, create and edit profile, search users, follow and unfollow users, get notifications, like , comment and unlike posts by creating account with our application. It contains features such as login and signup, image uploading and other similar features.",
      images: ['/p3/1.png', '/p3/2.png', '/p3/3.png', '/p3/4.png', '/p3/5.png', '/p3/6.png'],
      link: 'https://github.com/SahilAnvekar002/SocialMediaApp'
    }
  ]

  const [mode, setMode] = useState('light');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const ref = useRef();

  const toggleMode = () => {
    if (document.body.classList.contains('dark')) {
      document.body.classList.remove('dark');
      setMode('light');
    }
    else {
      document.body.classList.add('dark');
      setMode('dark');
    }
  }

  const toggleSidebar = () => {
    if (ref.current?.classList.contains('translate-x-full')) {
      ref.current?.classList.replace('translate-x-full', 'translate-x-0');
    }
    else {
      ref.current?.classList.replace('translate-x-0', 'translate-x-full');
    }
  }

  const toggleModal = (index) => {
    if (isModalOpen) {
      setIsModalOpen(false);
      setActiveIndex(index);
    }
    else {
      setIsModalOpen(true);
      setActiveIndex(index);
    }
  }

  return (
    <>
      <header className="bg-white fixed top-0 w-full flex justify-between items-center h-[70px] shadow-md dark:bg-slate-800 dark:border-b dark:border-gray-700 z-20">
        <div className="md:ml-16 ml-4 cursor-pointer">
          <a href="#home">
            <img src='https://assets-global.website-files.com/61129bb2ecedf803564c68ec/612a715b08e8df7a8419c063_logo-you-x-webflow-template.svg' alt='Logo' className='dark:grayscale dark:invert' />
          </a>
        </div>
        <ul className="md:flex hidden justify-center items-center h-[100%]">
          <li className="px-4 hover:bg-gray-200 dark:hover:bg-gray-900 transition-all ease-in-out delay-100 h-[100%] flex items-center dark:text-white"><a className='h-[100%] flex justify-center items-center' href='#home'><span>Home</span></a></li>
          <li className="px-4 hover:bg-gray-200 dark:hover:bg-gray-900 transition-all ease-in-out delay-100  h-[100%] flex items-center dark:text-white"><a className='h-[100%] flex justify-center items-center' href='#about'><span>About</span></a></li>
          <li className="px-4 hover:bg-gray-200 dark:hover:bg-gray-900 transition-all ease-in-out delay-100 h-[100%] flex items-center dark:text-white"><a className='h-[100%] flex justify-center items-center' href='#skills'><span>Skills</span></a></li>
          <li className="px-4 hover:bg-gray-200 dark:hover:bg-gray-900 transition-all ease-in-out delay-100 h-[100%] flex items-center dark:text-white"><a className='h-[100%] flex justify-center items-center' href='#projects'><span>Projects</span></a></li>
          <li className="px-4 hover:bg-gray-200 dark:hover:bg-gray-900 transition-all ease-in-out delay-100 h-[100%] flex items-center dark:text-white"><a className='h-[100%] flex justify-center items-center' href='#contact'><span>Contact</span></a></li>
        </ul>
        <div className="md:flex hidden mr-16">
          <button className='border-2 border-gray-300 p-1 rounded-md dark:text-white' onClick={toggleMode}>
            {mode === 'dark' ? <IconSun size={26} /> : <IconMoon size={26} />}
          </button>
        </div>
        <div className="flex md:hidden mr-4 z-20 dark:text-white">
          <Hamburger size={22} onToggle={toggleSidebar} />
        </div>
      </header>

      <div ref={ref} className="fixed bg-white top-0 right-0 transform transition-transform ease-out delay-200 translate-x-full h-full w-80 dark:!bg-slate-800 z-10">
        <h1 className='mx-16 mt-8 pb-5 text-xl dark:text-white'>Navigation</h1>
        <ul className='flex flex-col justify-center items-center py-6'>
          <li className="mb-2 transition-all dark:text-white"><a href='#home'>Home</a></li>
          <li className="mb-2 transition-all dark:text-white"><a href='#about'>About</a></li>
          <li className="mb-2 transition-all dark:text-white"><a href='#skills'>Skills</a></li>
          <li className="mb-2 transition-all dark:text-white"><a href='#projects'>Projects</a></li>
          <li className="mb-2 transition-all dark:text-white"><a href='#contact'>Contact</a></li>
        </ul>
        <div className='flex justify-center items-center w-[100%]'>
          <button className='flex justify-center w-[80%] border-2 border-gray-200 rounded-md dark:text-white py-1 dark:border-gray-700' onClick={toggleMode}>
            {mode === 'dark' ? <IconSun size={26} /> : <IconMoon size={26} />}
          </button>
        </div>
      </div>

      <section className="text-gray-600 body-font dark:bg-slate-800 md:pt-24 pt-16" id='home'>
        <div className="xl:mx-auto flex px-6 sm:px-16 lg:pb-24 pb-10 lg:pt-6 pt-24 lg:flex-row flex-col lg:items-center lg:w-[100vw]">
          <div className="lg:flex-grow md:w-[70%] lg:w-[50%] md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center">
            <p className="mb-8 leading-relaxed text-2xl dark:text-gray-500 font-semibold">Hey, I am Sahil Anvekar</p>
            <h1 className="title-font xl:text-6xl lg:5xl text-5xl mb-10 font-bold text-gray-900 sm:leading-snug xl:leading-snug leading-snug dark:text-white">
              I enjoy building professional websites and apps
            </h1>
            <button className=' bg-slate-800 text-white px-8 py-4 sm:px-12 sm:py-5 rounded-full font-bold hover:text-black transition-all ease-in-out delay-150 hover:bg-transparent border-2 border-gray-200 dark:hover:text-gray-500 dark:border-gray-700 dark:border-2 md:mb-0 mb-10'>Get in Touch</button>
          </div>

          <div className="flex flex-wrap lg:max-w-xl lg:w-[50%] w-full h-[100vh] md:-mt-28">
            <div className={`flex flex-wrap w-1/3 h-full images1`}>
              <div className="md:p-2 p-1 h-[40%] invisible">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/500x300" />
              </div>
              <div className="md:p-2 p-1 h-[40%] w-full">
                <img alt="gallery" className="w-full object-cover h-full object-center block rounded-lg" src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=1778&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              </div>
              <div className="md:p-2 p-1 h-[20%] invisible">
                <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://dummyimage.com/600x360" />
              </div>
            </div>
            <div className={`flex flex-wrap w-1/3 h-full images2`}>
              <div className="md:p-2 p-1 h-[20%] invisible">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/500x300" />
              </div>
              <div className="md:p-2 p-1 h-[40%] w-full">
                <img alt="gallery" className="w-full object-cover h-full object-center block rounded-lg" src="https://plus.unsplash.com/premium_photo-1677870728087-2257ce93bfe9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              </div>
              <div className="md:p-2 p-1 h-[40%] w-full">
                <img alt="gallery" className="w-full h-full object-cover object-center block rounded-lg" src="https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              </div>
            </div>
            <div className={`flex flex-wrap w-1/3 h-full images3`}>
              <div className="md:p-2 p-1 h-[40%] w-full">
                <img alt="gallery" className="w-full object-cover h-full object-center block rounded-lg" src="https://images.unsplash.com/photo-1625314897518-bb4fe6e95229?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              </div>
              <div className="md:p-2 p-1 h-[40%] w-full">
                <img alt="gallery" className="w-full object-cover h-full object-center block rounded-lg" src="https://plus.unsplash.com/premium_photo-1676998930828-cabd06cb61c5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              </div>
              <div className="md:p-2 p-1 h-[20%] invisible">
                <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://dummyimage.com/600x360" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='about' className='dark:bg-slate-800'>
        <div className='flex px-6 sm:px-16 md:flex-row flex-col pt-10 items-center'>
          <div className='lg:w-[60%] md:w-[100%]  w-full md:mr-10'>
            <h1 className='title-font sm:text-4xl text-2xl mb-8 font-bold text-gray-900 leading-tight dark:text-white'>About Me</h1>
            <p className="mb-5 leading-relaxed sm:text-xl text-base dark:text-gray-500 ">I am pursuing the role as a web developer with a passion for creating immersive user experiences through knowledge of programming languages and frameworks.</p>
            <p className="mb-5 leading-relaxed sm:text-xl text-base dark:text-gray-500">I have the basic understanding and knowledge of HTML, CSS, Javascript, Tailwind CSS, ReactJs, NextJs and other related technologies develop, assist as well as troubleshoot the websites and web applications.</p>
            <p className="mb-5 leading-relaxed sm:text-xl text-base dark:text-gray-500">I have developed some websites like blog website, social media website and e-commerce website during my education as personal projects. You will find the projects and their source code in the projects section of my portfolio.</p>
          </div>
          <div className="lg:flex hidden ml-16">
            <img src="https://sahilanvekar002.github.io/Portfolio/media/sahil.jpg" className='max-h-[500px] rounded-2xl' alt="Me" />
          </div>
        </div>
        <div className='flex justify-center sm:py-24 py-10'>
          <img src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="About" className='max-h-[500px] w-full' />
        </div>
      </section>

      <section id='skills'>
        <div className='px-6 sm:px-16 flex flex-col pb-20 dark:bg-slate-800'>
          <h1 className='title-font sm:text-4xl text-2xl mb-6 font-bold text-gray-900 leading-tight dark:text-white'>My Skills</h1>
          <p className="leading-relaxed sm:text-xl text-base dark:text-gray-500 mb-1">I have learned number of programming languages and frameworks throught my graduation.</p>
          <p className="lg:mb-10 mb-5 leading-relaxed sm:text-xl text-base dark:text-gray-500">Following is the list of my skills.</p>
          <div className="flex flex-wrap">
            {skills.map((skill) => {
              return (
                <div className='flex xl:w-[30%] lg:w-[45%] md:w-[100%] dark:shadow-none dark:border dark:border-gray-700 shadow-md rounded-xl sm:px-10 px-2 py-10 sm:mr-6 mb-6' key={skill.title}>
                  <div className="pr-5">
                    {skill.icon}
                  </div>
                  <div className='flex flex-col'>
                    <h1 className='text-xl sm:text-2xl font-bold mb-4 dark:text-white'>{skill.title}</h1>
                    <span className='text-base sm:text-lg dark:text-gray-500'>{skill.des}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id='projects'>
        <div className='px-6 sm:px-16 flex flex-col pb-20 dark:bg-slate-800'>
          <h1 className='title-font sm:text-4xl text-2xl mb-6 font-bold text-gray-900 leading-tight dark:text-white'>My Projects</h1>
          <p className="leading-relaxed sm:text-xl text-base dark:text-gray-500 mb-1">I have developed number of personal projects throught my graduation.</p>
          <p className="lg:mb-10 mb-5 leading-relaxed sm:text-xl text-base dark:text-gray-500">Following is the list of my personal projects.</p>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            {projects.map((project, index) => {
              return (
                <div className="p-4 md:w-1/3 sm:mb-0 mb-6" key={project.title}>
                  <div className="rounded-lg h-64 overflow-hidden">
                    <img alt="content" className="object-cover object-center h-full w-full" src={process.env.PUBLIC_URL + project.images[0]} />
                  </div>
                  <h2 className="text-xl font-medium title-font text-gray-900 mt-5 dark:text-white">{project.title}</h2>
                  <p className="text-base leading-relaxed mt-2 dark:text-gray-500">{project.des}</p>
                  <button className="text-indigo-500 dark:text-white inline-flex items-center mt-3 cursor-pointer mr-5" onClick={() => toggleModal(index)}>Learn More
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                  <br />
                  <a className=" text-indigo-500 dark:text-white inline-flex items-center mt-3 cursor-pointer mr-5" target='_blank' href={project.link} rel="noreferrer">Project Link
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id='contact'>
        <div className='px-6 sm:px-16 flex sm:flex-row flex-col pb-20 dark:bg-slate-800 pt-10'>
          <div className='sm:w-1/2 pr-24'>
            <h1 className='title-font sm:text-4xl text-2xl mb-6 font-bold text-gray-900 leading-tight dark:text-white'>Get in Touch</h1>
            <p className="leading-relaxed sm:text-xl text-base dark:text-gray-500 mb-8 sm:mb-0">Get in touch for more information or ask questions through following Email & links.</p>
          </div>
          <div className='flex flex-wrap sm:w-1/2'>
            <div className='flex flex-col py-10 px-10 rounded-2xl bg-gray-100 w-[100%] lg:w-[45%] lg:mr-5 mb-5 dark:bg-slate-800 dark:border dark:border-gray-700'>
              <IconMail size={50} className='mb-3 dark:text-white'/>
              <a target='_blank' rel='noreferrer' href="mailto:sanvekar108@gmail.com"><span className='text-lg font-semibold text-gray-700 dark:text-gray-500'>Email Address</span></a>
            </div>
            <div className='flex flex-col py-10 px-10 rounded-2xl bg-gray-100 w-[100%] lg:w-[45%] lg:mr-5 mb-5  dark:bg-slate-800 dark:border dark:border-gray-700'>
              <IconBrandWhatsapp size={50} className='mb-3 dark:text-white'/>
              <a target='_blank' rel='noreferrer' href="https://wa.me/8459723961"><span className='text-lg font-semibold text-gray-700 dark:text-gray-500'>Whats App</span></a>
            </div>
            <div className='flex flex-col py-10 px-10 rounded-2xl bg-gray-100 w-[100%] lg:w-[45%] lg:mr-5 mb-5  dark:bg-slate-800 dark:border dark:border-gray-700'>
              <IconBrandInstagram size={50} className='mb-3 dark:text-white'/>
              <a target='_blank' rel='noreferrer' href="https://www.instagram.com/_itz_sahil_08/"><span className='text-lg font-semibold text-gray-700 dark:text-gray-500'>Instagram</span></a>
            </div>
            <div className='flex flex-col py-10 px-10 rounded-2xl bg-gray-100 w-[100%] lg:w-[45%] lg:mr-5 mb-5  dark:bg-slate-800 dark:border dark:border-gray-700'>
              <IconBrandTelegram size={50} className='mb-3 dark:text-white'/>
              <a target='_blank' rel='noreferrer' href="https://web.telegram.org/k/#@Sahil_anvekar002"><span className='text-lg font-semibold text-gray-700 dark:text-gray-500'>Telegram</span></a>
            </div>
          </div>
        </div>
      </section>

      <footer className='h-[80px] flex justify-center items-center dark:bg-slate-800 border-t border-gray-200 dark:border-gray-700'>
            <span className='dark:text-white text-center sm:text-left sm:px-0 px-6'>Copyright ©2024 All rights reserved | This website is made by Sahil Anvekar</span>
      </footer>


      <section className={`overflow-y-scroll flex flex-col items-end fixed top-0 left-0 z-50 text-gray-600 body-font bg-white py-1 transform transition-transform ${isModalOpen ? 'translate-y-0' : 'translate-y-full'} h-full w-full`}>
        <button className='mx-1' onClick={() => toggleModal(null)}> <IconX /></button>
        <div className="container px-5 py-10 mx-auto flex flex-wrap">
          <div className="flex sm:flex-row flex-col flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap sm:w-1/2 ">
              <div className="md:p-2 p-1 lg:w-1/2  w-full border border-gray-300">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src={process.env.PUBLIC_URL + projects[activeIndex]?.images[0]} />
              </div>
              <div className="md:p-2 p-1 lg:w-1/2  w-full border border-gray-300">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src={process.env.PUBLIC_URL + projects[activeIndex]?.images[1]} />
              </div>
              <div className="md:p-2 p-1 lg:w-full  w-full border border-gray-300">
                <img alt="gallery" className="w-full h-full object-cover object-center block" src={process.env.PUBLIC_URL + projects[activeIndex]?.images[2]} />
              </div>
            </div>
            <div className="flex flex-wrap sm:w-1/2">
              <div className="md:p-2 p-1 lg:w-full w-full border border-gray-300">
                <img alt="gallery" className="w-full h-full object-cover object-center block" src={process.env.PUBLIC_URL + projects[activeIndex]?.images[3]} />
              </div>
              <div className="md:p-2 p-1 lg:w-1/2  w-full border border-gray-300">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src={process.env.PUBLIC_URL + projects[activeIndex]?.images[4]} />
              </div>
              <div className="md:p-2 p-1 lg:w-1/2  w-full border border-gray-300">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src={process.env.PUBLIC_URL + projects[activeIndex]?.images[5]} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
