import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white py-4 transition-colors duration-500">
      <div className="container mx-auto text-center">
        {/* Social Icons Section */}
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/aadi1232" // Replace with your GitHub link
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500 dark:hover:text-gray-400"
          >
            <IoLogoGithub className="text-3xl" />
          </a>
          <a
            href="https://www.instagram.com/patel__aadi_012/profilecard/?igsh=YjRtMjE5ZTJkNTJj" // Replace with your Instagram link
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500 dark:hover:text-gray-400"
          >
            <IoLogoInstagram className="text-3xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/aadi-patel-91b4a1288/" // Replace with your LinkedIn link
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500 dark:hover:text-gray-400"
          >
            <IoLogoLinkedin className="text-3xl" />
          </a>
          <a
            href="https://x.com/PatelAadi12" // Replace with your Twitter (X) link
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500 dark:hover:text-gray-400"
          >
            <IoLogoTwitter className="text-3xl" />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Designed & Built by Aadi Patel
        </p>
      </div>
    </footer>
  );
}
