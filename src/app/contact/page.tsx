import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen"> 
      
      <Navbar />

      <main className="flex-grow">
        <div
          className="relative bg-cover bg-center bg-no-repeat min-h-screen"
          style={{
            backgroundImage: "url('/img.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>

          {/* Contact Content */}
          <div className="relative py-20 px-8 text-center text-white z-10">
            {/* Contact Header */}
            <h1 className="text-5xl font-bold mb-6 text-pink-600">Get In Touch</h1>
            <p className="text-xl mb-10 max-w-3xl mx-auto">
              We’d love to hear from you! Whether you have questions, feedback, or just want to chat, feel free to reach out.
            </p>

            <div className="flex justify-center space-x-8 mb-12">
              <a
                href="mailto:sabasamad450@gmail.com"
                className="text-white hover:text-pink-500 text-4xl transition-all"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://www.linkedin.com/in/saba-samad-363692301/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-500 text-4xl transition-all"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/sabasamad262"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-500 text-4xl transition-all"
              >
                <FaGithub />
              </a>
            </div>

            {/* Contact Form Section */}
            <div className="max-w-4xl mx-auto bg-white bg-opacity-90 rounded-lg p-8 shadow-xl">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Full Name"
                    className="w-full border border-gray-300 text-black p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email Address"
                    className="w-full border border-gray-300 text-black p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="What would you like to say?"
                    className="w-full border border-gray-300 text-black p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    rows={6}
                  ></textarea>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-pink-500 text-white px-8 py-3 rounded-md hover:bg-pink-700 transition-all duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
