import { useRef, useState } from 'react';
import './App.css';
import { IconMoon, IconSun } from '@tabler/icons-react';
import Hamburger from 'hamburger-react';

function App() {

  const [mode, setMode] = useState('light');
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

  return (
    <>
      <header className="flex justify-between items-center h-[70px] shadow-md dark:bg-slate-800 dark:border-b-2 dark:border-gray-700">
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

      <div ref={ref} className="fixed bg-white top-0 right-0 transform transition-transform translate-x-full h-full w-80 dark:!bg-slate-800 z-10">
        <h1 className='mx-16 mt-8 pb-5 text-xl dark:text-white'>Navigation</h1>
        <ul className='flex flex-col justify-center items-center border-t-2 border-gray-200 dark:border-gray-700 py-6'>
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
    </>
  );
}

export default App;
