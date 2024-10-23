export default function Projects() {
  return (
    <>
      <div className="max-w-5xl mx-auto ">

        {/* ****************************************************************** */}

        <div className="relative bg-gray-300 lg:flex justify-between
         items-center lg:gap-x-36 gap-y-10 lg:p-0 p-[5px] lg:pt-10 pt-5">

          <div className="w-[2px] bg-white left-1/2 hidden lg:block  absolute top-0 bottom-0"></div>

          <div className="lg:m-4  lg:p-2 p-4 lg:w-1/2  relative bg-transparent  ">

            <div className="relative">

              <div className="hover:cursor-pointer hover:scale-105  transition-all duration-700  ease-in-out group ">
                <a href="https://mdexplorecountries.netlify.app/">
                  <img src="02-explore-countries.svg" alt="alpha" className="" />
                </a>

                {/* Tooltip */}

                <div className="opacity-0 group-hover:opacity-100 transition-all duration-150 absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full  text-sm rounded-lg hover:text-black">
                  <a href="https://mdexplorecountries.netlify.app/" className="hover:underline">
                    Explore Countries
                  </a>
                </div>
              </div>

              <div className="hidden lg:block  w-[1px] h-3/5 absolute bg-black 
                top-0 right-0 rotate-90 -translate-x-[px] translate-y-8 translate-x-[45px]  transition-all duration-700">
                <a href="https://mdexplorecountries.netlify.app/" className="w-[20px] h-[20px] border border-gray-900 bg-gray-500 hover:bg-gray-600 rounded-full
                 absolute top-0 right-0 translate-x-[9px] 
                translate-y-[0px] transition-all duration-700" />
              </div>


            </div>

          </div>

          <div className="lg:m-4 m-5 lg:p-2 p-4 lg:mr-7 lg:w-1/2  border-[#f0f8ff] lg:rounded-bl-[100px] lg:rounded-tr-[100px]            hover:rounded-bl-[10px] hover:rounded-tr-[10px] hover:rounded-tl-[10px] hover:rounded-br-[10px] flex items-center  bg-[#fff] transition-all ease-in-out duration-1000 hover:cursor-pointer ">
            <div className="m-3 flex items-center justify-center flex-wrap">
              <div className="">

                <h1 className="text-xl text-gray-800 font-bold font-serif">Discover Countries Globally</h1>
                <h6 className="text-gray-400 text-sm font-serif">Search, filter, and explore countries based on name and region.</h6>
                <p className="lg:text-center text-left">
                  This React application allows users to explore global countries. It provides a search feature to find countries by name and a filter option to sort by region, such as Asia, Africa, or Europe. Each country displays its flag, region, capital, and population. Built using React, Tailwind CSS, and dynamic routing.
                </p>

              </div>
            </div>
          </div>


        </div>

        {/* ****************************************************************** */}

        <div className="relative bg-gray-300 lg:flex justify-between flex-col-reverse lg:flex-row-reverse
         items-center lg:gap-x-40 gap-y-10 lg:p-0 p-[5px] lg:pt-10 pt-5">

          <div className="w-[2px] bg-white left-1/2 hidden lg:block  absolute top-0 bottom-0"></div>

          <div className="lg:m-4  lg:p-2 p-4 lg:w-1/2  relative bg-transparent  ">

            <div className="relative">


              <div className="hover:cursor-pointer hover:scale-105  transition-all duration-700  ease-in-out group ">
                <a href="https://mubashar-miza.github.io/table/">
                  <img src="03-table-printer.svg" alt="alpha" className="" />
                </a>

                {/* Tooltip */}

                <div className="opacity-0 group-hover:opacity-100 transition-all duration-150 absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full  text-sm rounded-lg hover:text-black">
                  <a href="https://mubashar-miza.github.io/table/" className="hover:underline">
                    Print Any Table
                  </a>
                </div>
              </div>

              <div className="hidden lg:block  w-[1px] h-3/5 absolute bg-black 
                top-0 left-0 rotate-90 -translate-x-[40px] translate-y-[40px] transition-all duration-700">
                <a href="https://mubashar-miza.github.io/table/" className="w-[20px] h-[20px] border border-gray-900 bg-green-500 hover:bg-green-700 
                rounded-full
                 absolute bottom-0 left-0 -translate-x-[10px] 
                translate-y-[13px] transition-all duration-700" />
              </div>

            </div>

          </div>

          <div className="lg:m-4 m-5 lg:p-2 p-4 lg:mr-7 lg:w-1/2  border-[#f0f8ff] 
          lg:rounded-bl-[100px] lg:rounded-tr-[100px] hover:rounded-bl-[10px] 
          hover:rounded-tr-[10px] hover:rounded-tl-[10px] hover:rounded-br-[10px] 
          flex items-center  bg-[#f0f8ff] transition-all ease-in-out duration-1000 
          hover:cursor-pointer ">
            <div className="m-3 flex items-center justify-center flex-wrap">
              <div className="">

                <h1 className="text-xl text-gray-800 font-bold font-serif">Print Math Tables Instantly</h1>
                <h6 className="text-gray-400 text-sm font-serif">A web app that generates and prints multiplication tables easily.</h6>
                <p className="lg:text-center text-left">
                  This project uses HTML, CSS, and JavaScript to dynamically generate tables based on user input. It features an intuitive interface, pop-ups, responsive design, and supports customized table printing with limitless rows. Ionicons are used for iconography.
                </p>

              </div>
            </div>
          </div>

        </div>

        {/* ****************************************************************** */}

        <div className="relative bg-gray-300 lg:flex justify-between
         items-center lg:gap-x-40 gap-y-10 lg:p-0 p-[5px] lg:pt-10 pt-5">

          <div className="w-[2px] bg-white left-1/2 hidden lg:block  absolute top-0 bottom-0"></div>

          <div className="lg:m-4  lg:p-2 p-4 lg:w-1/2  relative bg-transparent  ">

            <div className="relative">

              <div className="hover:cursor-pointer hover:scale-105  transition-all duration-700  ease-in-out group ">
                <a href="https://passgenerator51438.netlify.app/">
                  <img src="04-password-generator.svg" alt="alpha" className="" />
                </a>

                {/* Tooltip */}

                <div className="opacity-0 group-hover:opacity-100 transition-all duration-150 absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full  text-sm rounded-lg hover:text-black">
                  <a href="https://passgenerator51438.netlify.app/" className="hover:underline">
                    Generate a Strong Passwrod!
                  </a>
                </div>
              </div>
              <div className="hidden lg:block  w-[1px] h-3/5 absolute bg-black 
                top-0 right-0 rotate-90 translate-y-8 translate-x-[55px]  transition-all duration-700">
                <a href="https://passgenerator51438.netlify.app/" className="w-[20px] h-[20px] border border-gray-900 bg-blue-500 hover:bg-blue-900 rounded-full
                 absolute top-0 right-0 translate-x-[9px] 
                translate-y-[0px] transition-all duration-700" />
              </div>


            </div>

          </div>

          <div className="lg:m-4 m-5 lg:p-2 p-4 lg:mr-7 lg:w-1/2  border-[#f0f8ff] lg:rounded-bl-[100px] lg:rounded-tr-[100px]
           hover:rounded-bl-[10px] hover:rounded-tr-[10px] hover:rounded-tl-[10px] 
           hover:rounded-br-[10px] flex items-center  bg-[#fff] transition-all ease-in-out 
           duration-1000 hover:cursor-pointer ">
            <div className="m-3 flex items-center justify-center flex-wrap">
              <div className="">

                <h1 className="text-xl text-gray-800 font-bold font-serif">Generate Secure Passwords Instantly</h1>
                <h6 className="text-gray-400 text-sm font-serif">A tool to generate customizable, strong passwords with optional numbers and characters.</h6>
                <p className="lg:text-center text-left">
                  This project is built using React and Tailwind CSS to create an interactive password generator. Users can specify password length and include numbers or special characters. It dynamically updates the password strength and provides an easy copy-to-clipboard feature for convenience.
                </p>

              </div>
            </div>
          </div>

        </div>

        {/* ****************************************************************** */}

        <div className="relative bg-gray-300 lg:flex justify-between flex-col-reverse lg:flex-row-reverse
         items-center lg:gap-x-40 gap-y-10 lg:p-0 p-[5px] lg:pt-10 pt-5">

          <div className="w-[2px] bg-white left-1/2 hidden lg:block  absolute top-0 bottom-0"></div>

          <div className="lg:m-4  lg:p-2 p-4 lg:w-1/2  relative bg-transparent  ">

            <div className="relative">


              <div className="hover:cursor-pointer hover:scale-105  transition-all duration-700  ease-in-out group ">
                <a href="https://webcal51438.netlify.app/">
                  <img src="05-calculator.svg" alt="alpha" className="" />
                </a>

                {/* Tooltip */}

                <div className="opacity-0 group-hover:opacity-100 transition-all duration-150 absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full  text-sm rounded-lg hover:text-black">
                  <a href="https://webcal51438.netlify.app/" className="hover:underline">
                    Print Any Table
                  </a>
                </div>
              </div>

              <div className="hidden lg:block  w-[1px] h-3/5 absolute bg-black 
                top-0 left-0 rotate-90 -translate-x-[40px] translate-y-[45px] transition-all duration-700">
                <a href="https://webcal51438.netlify.app/" className="w-[20px] h-[20px] border border-gray-900 bg-yellow-500 hover:bg-yellow-900 
                rounded-full
                 absolute bottom-0 left-0 -translate-x-[10px] 
                translate-y-[13px] transition-all duration-700" />
              </div>


            </div>

          </div>

          <div className="lg:m-4 m-5 lg:p-2 p-4 lg:mr-7 lg:w-1/2  border-[#f0f8ff] lg:rounded-bl-[100px] lg:rounded-tr-[100px]            hover:rounded-bl-[10px] hover:rounded-tr-[10px] hover:rounded-tl-[10px] hover:rounded-br-[10px] flex items-center  bg-black text-white transition-all ease-in-out duration-1000 hover:cursor-pointer ">
            <div className="m-3 flex items-center justify-center flex-wrap">
              <div className="">

                <h1 className="text-xl text-blue-800 font-bold font-serif">Simple and Effective Calculator</h1>
                <h6 className="text-gray-400 text-sm font-serif">Perform basic mathematical calculations with an intuitive interface.</h6>
                <p className="lg:text-center text-left">
                  This React and Tailwind CSS-based calculator allows users to perform operations such as addition, subtraction, multiplication, and division. It includes a history feature to track previous calculations and an info section for usage instructions. The calculator is designed with simplicity and usability in mind.
                </p>

              </div>
            </div>
          </div>

        </div>






      </div>
    </>
  )
}