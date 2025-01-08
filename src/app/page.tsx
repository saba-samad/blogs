import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { client } from '@/sanity/lib/client';

export default async function HomePage() {

  const posts = [
    {
      slug: 'women-in-tech',
      title: 'Women in Tech',
      description: 'Inspiring stories of women in the tech world.',
      image: '/women-in-tech.jpg',
    },
    {
      slug: 'diversity-in-tech',
      title: 'Diversity in Tech',
      description: 'Exploring the impact of diversity in tech industry.',
      image: '/diversity-in-tech.jpg',
    },
    {
      slug: 'women-in-ai',
      title: 'Women in AI',
      description: 'How women are leading advancements in AI.',
      image: '/women-in-ai.jpg',
    },
    {
      slug: 'tech-for-good',
      title: 'Tech for Good',
      description: 'Using technology for humanitarian causes.',
      image: '/tech-for-good.jpg',
    },
    {
      slug: 'female-founders-in-tech',
      title: 'Female Founders',
      description: 'Women founders driving innovation.',
      image: '/female-founders.jpg',
    },
    {
      slug: 'tech-trends-2024',
      title: 'Tech Trends 2024',
      description: 'Emerging technologies shaping the future.',
      image: '/tech-trends-2024.jpg',
    },
  ];

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative bg-cover bg-current bg-center h-screen flex items-center justify-center"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <div className="bg-black bg-opacity-60 text-pink-500 py-12 px-6 text-center">
          <h1 className="text-6xl font-extrabold mb-6">
            Welcome to Saba's Tech Blog
          </h1>
          <p className="text-xl font-sans mb-6 leading-relaxed max-w-2xl mx-auto text-white">
            Explore inspiring stories of innovation, diversity, and leadership
            in the tech world. From cutting-edge trends to empowering stories,
            dive into a world of knowledge crafted just for you.
          </p>
          <button className="bg-pink-500 px-6 py-3 rounded-md text-white font-bold hover:bg-pink-700 transition">
            Discover More
          </button>
        </div>
      </div>

      {/*Blogs Section */}
      <div
        id="posts"
        className="py-16 px-6"
        style={{
          backgroundImage: "url('/pic.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-white">Women in Tech With Power</h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <Link href={`/posts/${post.slug}`} key={post.slug}>
              <div className="group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition bg-pink-200 bg-opacity-90">
                <div className="h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-pink-600 transition mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-700 font-medium">{post.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
