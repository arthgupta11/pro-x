const Hero = () => {
    return (
      <section className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center px-6">
        <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl">Build Beautiful UIs</h1>
        <p className="mt-4 text-lg md:text-xl">Create modern and responsive designs with Next.js & Tailwind CSS.</p>
        <button className="mt-6 px-6 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition">
          Get Started
        </button>
      </section>
    );
  };
  
  export default Hero;
  