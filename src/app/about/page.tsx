import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat h-full w-full"
          style={{ backgroundImage: "url('/img.jpg')" }}
        ></div>
        
        <div className="relative z-10 max-w-6xl mx-auto p-8">
          {/* About Section */}
          <section className="text-center mb-12">
            <h1 className="text-4xl font-bold text-pink-600 mb-6">About Saba's Blog</h1>
            <p className="text-xl text-white leading-relaxed mx-auto max-w-3xl">
              Welcome to Saba's Tech Blog – your destination for insightful stories, tech innovations,
              and inspiring narratives. Our mission is to educate, empower, and celebrate the vibrant world of technology.
            </p>
          </section>

          <section className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="md:w-1/2">
              <img
                src="/SA.jpg"
                alt="About Us"
                className="w-full h-96 object-cover rounded-lg shadow-xl transform shadow-slate-400 transition-all duration-300"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-pink-600 mb-4">Our Vision</h2>
              <p className="text-lg text-white mb-6">
                At Saba's Tech Blog, we strive to bridge the gap between innovation and inspiration. 
                From AI breakthroughs to diversity in technology, we bring stories that matter, spark curiosity, 
                and ignite a passion for learning.
              </p>
              <h2 className="text-3xl font-bold text-pink-600 mb-4">Why This Blog?</h2>
              <p className="text-lg text-white">
                Our platform highlights underrepresented voices and revolutionary advancements, encouraging readers 
                to explore, learn, and grow in their tech journey. Together, we embrace the power of diversity and 
                creativity in shaping the future.
              </p>
            </div>
          </section>

          <section className="py-16">
            <h2 className="text-4xl font-extrabold text-pink-600 text-center mb-6">
              Join the Journey with Saba's Blog
            </h2>
            <p className="text-lg text-white text-center mb-8 mx-auto max-w-2xl">
              We are excited to have you on this journey of discovery and innovation. Stay curious, keep exploring,
              and let's dive into the fascinating world of technology together. Your adventure starts here!
            </p>
            <div className="flex justify-center">
              <button className="bg-pink-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-pink-800 hover:text-white transition-all duration-300 transform hover:scale-105">
                Explore Blog Posts
              </button>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
