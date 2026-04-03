const Bio = () => {
  return (
    <section className="py-20 px-10 bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed mb-8">
          I am a passionate developer currently mastering React. I am currently
          at the iti learning how to tackle problems in a span of 11 months :D
        </p>

        <a href="/cv.pdf" target="_blank" download="Mo_Khalil_CV.pdf">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
            Download CV
          </button>
        </a>
      </div>
    </section>
  );
};

export default Bio;
