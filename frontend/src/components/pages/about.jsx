import React from 'react';

function About() {
  return (
    <>
      <div className="text-center pt-24">
        {/* Title */}
        <h1 className="md:text-6xl sm:text-5xl font-weight: 900 font-serif py-10 px-20 text-7xl font-bold text-gray-900 dark:text-gray-100">
          About Me
        </h1>

        {/* Divider Line */}
        <div className="w-24 mx-auto border-t-4 border-gray-300 dark:border-gray-600"></div>
      </div>

      {/* Main Content Section */}
      <div className="px-6 bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-10">
          {/* Left side: Image Section */}
          <div className="flex justify-center">
            <div className="w-80 h-80 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden shadow-lg">
              {/* Placeholder for the image */}
              <img
                src={require('./Assests/AboutusImage.avif')} // Replace with your image link
                alt="Aadi Patel"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right side: Text Section */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Aadi Patel</h2>
            <p className="text-2xl text-gray-700 dark:text-gray-300 mb-4">Tech Enthusiast | Problem Solver | Innovator</p>

            {/* Description Section */}
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-style: italic font-serif">
              I'm Aadi Patel, currently pursuing my B.Tech in Computer Science and Engineering at IIIT Sri City, and I'm in my second year. My journey in technology has been one of exploration, learning, and creativity. Whether it's diving into coding challenges, working on innovative development projects, or exploring the latest trends in machine learning, my passion drives me to push boundaries.
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mt-4 font-style: italic font-serif">
              I aim for precision and continuous improvement in every project I take on. My focus is on enhancing my problem-solving skills and bringing creative solutions to complex challenges. I’m committed to honing my expertise in coding, product management, and innovation to achieve excellence in my career.
            </p>
          </div>
        </div>

        {/* Skills and Hobbies Section */}
        <div className="mt-16 max-w-5xl mx-auto">
          <h3 className="font-weight: 900 font-serif py-10 px-20 text-4xl font-bold text-gray-900 dark:text-gray-100 text-center">What I Like to Do</h3>
          <div className="w-48  mx-auto border-t-4 border-gray-300 dark:border-gray-600 "></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left column: Skills */}
            <div className='pt-3.5'>
              <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3 font-mono">Core Skills</h4>
              <ul className=" space-y-2 text-xl text-gray-700 dark:text-gray-300 font-style: italic font-serif">
                <li>💻 Competitive Programming</li>
                <li>🌐 Web Development</li>
                <li>🤖 Machine Learning</li>
                <li>🎨 Video Editing</li>
              </ul>
            </div>

            {/* Right column: Hobbies */}
            <div>
              <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Hobbies</h4>
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-style: italic font-serif pb-24">
              Apart from tech, I enjoy expressing my creativity through chess, music, and cricket. I'm also passionate about video editing, blending storytelling with technical skills to create engaging content. These hobbies help me stay balanced, fuel my creativity, and offer new perspectives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
