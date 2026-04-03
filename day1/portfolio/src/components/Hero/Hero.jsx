const Hero = () => {
  return (
    // <div className="hero">
    //   <h1 className="hero-title">Hi, I'm Mo Khalil</h1>
    //   <p className="hero-description">
    //     I'm a front-end developer with a passion for creating beautiful and
    //     functional websites. I have experience with React, Tailwind CSS, and
    //     other modern web technologies.
    //   </p>
    //   <a href="#projects" className="hero-button">
    //     View My Projects
    //   </a>
    // </div>
    <section
      className="relative h-screen w-full flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/portfolio.jpg')",
      }}
    >
      {/* <div className="absolute inset-0 bg-black/40"></div> */}

      <div className="relative z-10 text-center px-4 text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Hi, I'm mohamed khalil
        </h1>
        <p className="text-xl md:text-2xl font-light">
          Full Stack Developer & React Learner
        </p>
      </div>
    </section>
  );
};

export default Hero;
