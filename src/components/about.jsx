export default function About(){
    <div className="max-w-6xl mx-auto px-4 py-2">
          <h1 className="text-xl lg:text-3xl font-extrabold text-gray-800 mb-1 lg:mb-8 text-center uppercase tracking-wide lg:p-4">
            {"{ about_me }"}
          </h1>
          {/* Paragraphs Section */}
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="md:w-1/2 text-gray-900 text-lg p-6 bg-gradient-to-r from-teal-100 via-white to-teal-50 shadow-xl rounded-lg m-2 hover:cursor-pointer transform hover:scale-105 transition-transform duration-300">
              <p>
                I am passionate about web development, with a solid foundation in both front-end and back-end technologies. My journey has equipped me with <span className="text-blue-600 font-semibold">hands-on experience</span> in creating responsive, user-friendly applications.
              </p>
            </div>
            <div className="md:w-1/2 text-gray-900 text-lg p-6 bg-gradient-to-r from-green-100 via-white to-green-50 shadow-xl rounded-lg m-2 hover:cursor-pointer transform hover:scale-105 transition-transform duration-300">
              <p>
                I have gained proficiency in <span className="text-green-600 font-semibold">HTML, CSS, JavaScript</span>, along with modern tools and frameworks such as <span className="text-green-600 font-semibold">React</span>, <span className="text-green-600 font-semibold">Node.js</span>, <span className="text-green-600 font-semibold">Bootstrap</span>, <span className="text-green-600 font-semibold">Tailwind CSS</span>, and <span className="text-green-600 font-semibold">jQuery</span>.
              </p>
            </div>
          </div>
        </div>
}