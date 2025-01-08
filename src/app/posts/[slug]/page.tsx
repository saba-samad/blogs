import Image from 'next/image';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import CommentSection from '@/app/components/CommentsSection';

const posts = {
  'women-in-tech': {
    title: 'Women in Tech',
    image: '/women-in-tech.jpg',
    content: `
      Women have played pivotal roles in the tech industry, overcoming barriers to achieve remarkable milestones. From **Ada Lovelace**, who conceptualized the first algorithm, to **Sheryl Sandberg**, the former COO of Facebook, women have been at the forefront of the technological revolution. These women continue to inspire future generations of innovators by proving that technology is a field where anyone, regardless of gender, can thrive.
      <br /><br />
      Despite the challenges, the presence of women in tech has been steadily increasing, and they are shaping the future of technology with their groundbreaking contributions. In fact, women are making waves in areas like **cybersecurity**, **data science**, **hardware development**, and **artificial intelligence (AI)**. By stepping into leadership roles, women are promoting diversity, fostering collaboration, and creating products that reflect diverse perspectives.
      <br /><br />
      Women in tech are not just excelling in software development but are also shaping industries in ways we never imagined. As more women take on leadership roles, they are pushing the boundaries of innovation, making technology more inclusive, and creating a future that reflects diverse voices. 
      <br /><br />
      It’s important to continue supporting women who are entering the tech field through **STEM education**, mentorship programs, and leadership opportunities, which will unlock new potential and pave the way for a more inclusive world. The next generation of girls should know that the tech industry is theirs for the taking.
    `,
  },
  'diversity-in-tech': {
    title: 'Diversity in Tech',
    image: '/diversity-in-tech.jpg',
    content: `
      Diversity in tech is not just a buzzword—it’s a crucial driver of creativity, innovation, and business success. The tech industry has long been criticized for its lack of diversity, particularly in leadership roles, but change is on the horizon. A diverse workforce brings together people from various backgrounds, cultures, and perspectives, which results in more innovative solutions and stronger products.
      <br /><br />
      The benefits of diversity in tech are clear. Companies with diverse teams are better equipped to solve complex problems and create products that resonate with a broader audience. With technology becoming more integral to daily life, the need for inclusivity is greater than ever. By fostering diversity, we can ensure that products and services are designed with a wider range of users in mind.
      <br /><br />
      Moreover, inclusivity in tech helps build a workplace culture where all employees feel valued, leading to improved job satisfaction and higher productivity. Although the industry has made strides in increasing diversity, more work remains to be done. We must continue to encourage **underrepresented groups**, including women and minorities, to pursue careers in tech and ensure that diversity is represented at all levels—from entry-level positions to the executive suite.
      <br /><br />
      By promoting diversity and inclusivity, we can create a future where technology serves everyone, leaving no one behind.
    `,
  },
  'women-in-ai': {
    title: 'Women in AI',
    image: '/women-in-ai.jpg',
    content: `
      Women are increasingly taking the lead in **artificial intelligence (AI)**, contributing groundbreaking research and solutions to some of the world’s most complex challenges. From AI ethics to machine learning and robotics, women are shaping the future of AI and creating technologies that will impact society for years to come.
      <br /><br />
      Historically, women have been underrepresented in AI, but that’s rapidly changing. Leading AI researchers like **Fei-Fei Li**, who pioneered the **ImageNet** project, and **Timnit Gebru**, co-founder of **Black in AI**, have been at the forefront of advancing the field. These women have demonstrated that diversity is crucial for the development of ethical, inclusive, and innovative AI systems.
      <br /><br />
      Women in AI are addressing some of the most pressing challenges, including **algorithmic bias**, **AI accountability**, and the **ethical implications** of machine learning. Their contributions are ensuring that AI technologies are developed in ways that benefit everyone, not just a select few. By bringing a diverse set of experiences and viewpoints to the table, they’re laying the foundation for more fair and equitable AI systems.
      <br /><br />
      As the field continues to evolve, it’s essential to support and promote more female voices in AI to inspire the next generation of women to enter this critical field and lead the way toward a more inclusive and innovative future.
    `,
  },
  'tech-for-good': {
    title: 'Tech for Good',
    image: '/tech-for-good.jpg',
    content: `
      Tech for Good refers to the use of technology to address global challenges and improve lives around the world. From healthcare innovations to environmental sustainability, tech companies and social enterprises are harnessing technology to create solutions for some of the world’s most pressing problems.
      <br /><br />
      Women are leading the charge in using technology for social good. Female entrepreneurs and technologists are developing tools and platforms to combat climate change, fight poverty, improve education, and provide access to healthcare in underserved communities. Through tech for good, they are making the world a better place and empowering others to do the same.
      <br /><br />
      The impact of these technologies is immeasurable. For instance, mobile health applications are transforming access to healthcare in rural areas, while AI-powered platforms are improving disaster response and predicting environmental changes. As more women enter the tech space, the potential for social impact continues to grow.
      <br /><br />
      As we continue to innovate and use tech for good, it’s important to ensure that these technologies are accessible, ethical, and designed with inclusivity in mind. The future of tech for good is full of potential, and women are key to making it happen.
    `,
  },
  'female-founders-in-tech': {
    title: 'Female Founders in Tech',
    image: '/female-founders.jpg',
    content: `
      Women entrepreneurs are reshaping industries as tech startup founders. They are building innovative solutions, challenging the status quo, and creating opportunities for future generations of women in business and technology. From software development to e-commerce, women are founding successful startups that are making an impact globally.
      <br /><br />
      **Female founders bring unique perspectives** to the table, often addressing problems that have been overlooked by traditional tech companies. They are revolutionizing industries by creating products that prioritize diversity, sustainability, and social good. Companies like **Bumble**, created by **Whitney Wolfe Herd**, and **Eventbrite**, founded by **Julia Hartz**, have become household names, all thanks to visionary female leadership.
      <br /><br />
      The tech industry is a difficult space to navigate, but women are breaking barriers and building the companies of the future. With more women entering entrepreneurship, we’re witnessing the rise of more inclusive, ethical, and diverse tech ecosystems.
      <br /><br />
      By supporting women entrepreneurs in tech, we can help foster an environment where innovation and inclusivity thrive. **Female founders** are not only changing the tech landscape but also paving the way for more women to succeed as entrepreneurs.
    `,
  },
  'tech-trends-2024': {
    title: 'Tech Trends 2024',
    image: '/tech-trends-2024.jpg',
    content: `
      As we move into 2024, the tech industry is poised for even more groundbreaking developments. From AI advancements to quantum computing, emerging technologies are expected to revolutionize industries and change the way we live and work.
      <br /><br />
      One of the most exciting trends in 2024 is the continued growth of artificial intelligence. AI is transforming sectors from healthcare to finance, and its potential is limitless. In addition, AI-powered tools and platforms are making it easier for businesses to automate tasks and provide personalized experiences for their customers.
      <br /><br />
      Another major trend is the rise of quantum computing. While still in its early stages, quantum computing promises to solve complex problems that were previously thought to be impossible. This technology has the potential to revolutionize industries like cryptography, materials science, and drug discovery.
      <br /><br />
      Additionally, cybersecurity will continue to be a top priority in 2024. As more devices become connected through the Internet of Things (IoT), the risk of cyber-attacks grows. Companies will need to invest in robust cybersecurity measures to protect sensitive data and maintain consumer trust.
      <br /><br />
      In the world of consumer technology, we can expect to see more innovations in virtual reality (VR), augmented reality (AR), and wearable devices. These technologies will transform the way we interact with the digital world, from gaming to education and beyond.
    `,
  },
};

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug as keyof typeof posts];

  if (!post) return <div>Post not found</div>;

  return (
    <div className="bg-blue-50 min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto p-8">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6 text-center">{post.title}</h1>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-auto sm:h-96 object-cover rounded-xl shadow-lg mb-8"
        />
        <div className="prose lg:prose-xl text-gray-800 font-serif" dangerouslySetInnerHTML={{ __html: post.content }} />
        <CommentSection />
      </div>
      <Footer />
    </div>
  );
}
