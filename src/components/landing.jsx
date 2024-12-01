import React from 'react';
import { useState } from 'react';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiJavascript, SiJquery, SiCss3, SiTailwindcss, SiBootstrap, SiSwiper, SiReactrouter, SiEjs, SiHtml5 } from 'react-icons/si';

const Landing = () => {
  const [aboutMe, setAboutMe] = useState(false)



  function showAboutMe() {
    setAboutMe(!aboutMe)
  }
  return (
    <div className="min-h-screen flex flex-col items-center w-full justify-center bg-black text-white text-center max-w-5xl mx-auto">
      {/* express, mongoose, json web token, nodemailer, dotenv,bcrypt, 
      directries:- routes, controller, views, config, models
      files:- .env, app.js/server.js
      */}

      <h1 className="text-2xl lg:text-5xl mt-6 text-blue-500 font-serif lg:mb-2 mb-0">Mubashar Siddique</h1>
      <h2 className="lg:text-2xl text-sm text-red-300 lg:mb-6 mt-2 lg:mt-0 font-thin"><span>Web Designer & Developer</span></h2>
      <div className="flex space-x-1 lg:space-x-2 mt-2 lg:mt-0 font-mono">

        <a href="https://facebook.com" className="lg:text-3xl text-xl hover:text-[#1877F2]" aria-label="Facebook">
          <i className="fab fa-facebook"></i>
        </a>

        <a href="https://instagram.com" className="lg:text-3xl text-xl hover:text-[#E4405F]" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </a>

        <a href="https://twitter.com" className="lg:text-3xl text-xl hover:text-[#1DA1F2]" aria-label="Twitter">
          <i className="fab fa-twitter"></i>
        </a>

        <a href="https://github.com/mubashar-mizA" className="lg:text-3xl text-xl hover:text-[#333]" aria-label="GitHub">
          <i className="fab fa-github"></i>
        </a>

        <a href="https://linkedin.com" className="lg:text-3xl text-xl hover:text-[#0077B5]" aria-label="LinkedIn">
          <i className="fab fa-linkedin"></i>
        </a>



        <a href="https://pinterest.com" className="lg:text-3xl hover:text-[#E60023]" aria-label="Pinterest">
          <i className="fab fa-pinterest"></i>
        </a>


      </div>
      <div className='lg:mt-4 mt-3 border lg:px-5 px-2 lg:py-1 lg:rounded-3xl rounded-2xl hover:cursor-pointer hover:border-gray-700 hover:bg-gray-700'
        onClick={showAboutMe}
      >About me</div>
      <div className='lg:mt-[60px] mt-[40px] flex lg:gap-2 gap-3'>
        <div className='w-5 h-5 rounded-full bg-red-600 animate-bounce duration-150'></div>
        <div className='w-5 h-5 rounded-full bg-yellow-600 animate-bounce duration-150'></div>
        <div className='w-5 h-5 rounded-full bg-green-600 animate-bounce duration-150'></div>
      </div>
      {
        aboutMe && (
          <div className='absolute lg:my-5 lg:top-0 left-0 lgright-0 right-5 ease-in-out duration-100  z-50 lg:inset-0  lg:mx-auto lg:border lg:rounded-lg overflow-hidden lg:flex lg:items-center lg:gap-x-10  bg-black lg:h-auto h-screen lg:w-3/4 lg:p-1 m-0'>

            <div className='absolute hover:bg-red-700 text-red-700 border lg:border-none rounded-lg  lg:text-white  lg:bg-none lg:top-0 top-5  lg:right-0 right-5  px-2 py-0 lg:px-1 lg:py-1 hover:cursor-pointer'
              onClick={() => setAboutMe(!aboutMe)}>Close
            </div>

            <div className='lg:flex  lg:justify-evenly lg:text-left '>

              <div className='lg:w-1/2 mt-[70px] lg:mt-0 lg:m-5 p-4 lg:p-0'>
                <h3 className='text-3xl lg:text-4xl '>About me</h3>
                <p className=' text-sm my-3'>
                  I am a web developer with a strong focus on MongoDB, Express.js, React, Node.js, TypeScript, and Tailwind CSS. I specialize in building interactive, responsive web applications, ensuring high performance and user-friendly interfaces. I am committed to continually refining my skills, embracing modern web development practices, and delivering efficient, dynamic solutions that meet users' needs and expectations.
                </p>
                <div className='flex flex-wrap gap-2 justify-center m-1 '>
                  {/* Technology Icons */}
                  <div className='flex flex-wrap lg:gap-2 gap-4 lg:justify-start justify-center mt-4 '>
                    <div className='flex items-center space-x-2'>
                      <SiReact className="text-blue-500 text-3xl" />
                    </div>
                    <div className='flex items-center space-x-2'>
                      <SiMongodb className="text-green-500 text-3xl" />
                    </div>
                    <div className='flex items-center space-x-2'>
                      <SiExpress className="text-white text-3xl" />
                    </div>

                    <div className='flex items-center space-x-2'>
                      <SiNodedotjs className="text-green-400 text-3xl" />
                    </div>
                    <div className='flex items-center space-x-2'>
                      <SiJavascript className="text-yellow-300 text-3xl" />
                    </div>
                    <div className='flex items-center space-x-2'>
                      <SiJquery className="text-blue-500 text-3xl" />
                    </div>
                    <div className='flex items-center space-x-2'>
                      <SiCss3 className="text-blue-500 text-3xl" />
                    </div>
                    <div className='flex items-center space-x-2'>
                      <SiTailwindcss className="text-blue-300 text-3xl" />
                    </div>
                    <div className='flex items-center space-x-2'>
                      <SiBootstrap className="text-purple-500 text-3xl" />
                    </div>
                    <div className='flex items-center space-x-2'>
                      <SiSwiper className="text-orange-500 text-3xl" />
                    </div>
                    <div className='flex items-center space-x-2'>
                      <SiReactrouter className="text-red-500 text-3xl" />
                    </div>
                    <div className='flex items-center space-x-2'>
                      <SiEjs className="text-green-500 text-3xl" />
                    </div>
                    <div className='flex items-center space-x-2'>
                      <SiHtml5 className="text-orange-500 text-3xl" />
                    </div>
                  </div>

                </div>

              </div>

              <div className='hidden lg:block  w-1/2 lg:m-8 '>
                <img src="dummyDev.png" alt="dummy photo" className='w-full bg-green-600 rounded-3xl bg-transparent p-4' />
              </div>
            </div>
          </div>


        )
      }
      <div className="flex items-center justify-center hover:cursor-pointer">

        <div className="absolute text-white w-10/12 lg:bottom-7 bottom-10 text-sm lg:hover:no-underline text-center font-thin group">
          <a href="myProjects" className='text-[15px]'>
            Scroll to see Projects <span className='text-green-300'>(Completed & Parially Completed) </span>
          </a>

          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center">
            <i className="fas fa-chevron-down underline"></i> {/* Font Awesome down arrow */}
          </div>

        </div>

      </div>


    </div>
  );
};

export default Landing;