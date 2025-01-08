import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Import icons from react-icons

export default function Footer() {
  return (
    <footer className="bg-pink-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div>
            <h1 className="text-3xl font-bold">Saba's Tech Blog</h1>
            <p className="text-sm text-gray-400 mt-2">
              Empowering your tech journey, one post at a time.
            </p>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/saba-samad-363692301/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/sabasamad262"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="mailto:sabasamad450@gmail.com"
              className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
            >
              <FaEnvelope size={24} />
            </a>
          </div>

          <div className="text-gray-400">
            <p className="text-sm">
              © {new Date().getFullYear()} Saba's Tech Blog. <br />
              Crafted with ❤️ and passion for technology.
            </p>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm text-gray-500">
            Designed and developed by Saba Samad.
          </p>
        </div>
      </div>
    </footer>
  );
}
