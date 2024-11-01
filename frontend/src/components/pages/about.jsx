import React from 'react';

function About() {
  return (
    <>
      <div className="text-center pt-24 px-4 md:px-0 font-serif">
        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold tracking-wide text-gray-900 dark:text-gray-100">
          About Me
        </h1>

        {/* Divider Line */}
        <div className="w-24 mx-auto border-t-4 border-gray-300 dark:border-gray-600"></div>
      </div>

      {/* Main Content Section */}
      <div className="px-4 md:px-6 bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-10">
          {/* Left side: Image Section */}
          <div className="flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden shadow-lg">
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
            <h2 className="text-3xl md:text-4xl font-semibold mb-2 tracking-wide text-gray-800 dark:text-gray-200">Aadi Patel</h2>
            <p className="text-xl md:text-2xl tracking-wide text-gray-700 dark:text-gray-300 mb-4">Tech Enthusiast | Problem Solver | Innovator</p>

            {/* Description Section */}
            <p className="text-lg md:text-xl tracking-wide text-gray-700 dark:text-gray-300 leading-relaxed italic">
              I'm Aadi Patel, currently pursuing my B.Tech in Computer Science and Engineering at IIIT Sri City, and I'm in my second year. My journey in technology has been one of exploration, learning, and creativity. Whether it's diving into coding challenges, working on innovative development projects, or exploring the latest trends in machine learning, my passion drives me to push boundaries.
            </p>
            <p className="text-lg md:text-xl tracking-wide text-gray-700 dark:text-gray-300 leading-relaxed mt-4 italic">
              I aim for precision and continuous improvement in every project I take on. My focus is on enhancing my problem-solving skills and bringing creative solutions to complex challenges. I’m committed to honing my expertise in coding, product management, and innovation to achieve excellence in my career.
            </p>
          </div>
        </div>

        {/* Skills and Hobbies Section */}
        <div className="mt-16 max-w-5xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold tracking-wide text-gray-900 dark:text-gray-100 text-center">What I Like to Do</h3>
          <div className="w-36 md:w-48 mx-auto border-t-4 border-gray-300 dark:border-gray-600"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left column: Skills */}
            <div className='pt-3.5'>
              <h4 className="text-xl md:text-2xl font-semibold tracking-wide text-gray-800 dark:text-gray-200 mb-3">Core Skills</h4>
              <ul className="space-y-2 text-lg md:text-xl tracking-wide text-gray-700 dark:text-gray-300 italic">
                <li>💻 Competitive Programming</li>
                <li>🌐 Web Development</li>
                <li>🤖 Machine Learning</li>
                <li>🎨 Video Editing</li>
              </ul>
            </div>

            {/* Right column: Hobbies */}
            <div>
              <h4 className="text-xl md:text-2xl font-semibold tracking-wide text-gray-800 dark:text-gray-200 mb-2">Hobbies</h4>
              <p className="text-lg md:text-xl tracking-wide text-gray-700 dark:text-gray-300 leading-relaxed italic pb-24">
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

