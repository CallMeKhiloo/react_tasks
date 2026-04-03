const Education = () => {
  return (
    <section className="py-16 px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Education</h2>

        <div className="border-l-4 border-blue-500 pl-6 mb-8">
          <h3 className="text-xl font-bold text-gray-800">
            Bachelor of Computer Science
          </h3>
          <a
            href="https://psu.edu.eg/en/home-en/"
            className="text-blue-600 font-medium hover:underline"
            target="_blank"
          >
            Port-Said university
          </a>
          <span className="text-sm text-gray-500 italic"> 2020 - 2025</span>
          <p className="mt-2 text-gray-600">
            Relevant coursework: Data Structures, Algorithms, Networks, Web
            Development...
          </p>
        </div>
        <br />
        <div className="border-l-4 border-blue-500 pl-6 mb-8">
          <h3 className="text-xl font-bold text-gray-800">
            Internship at ITI
          </h3>
          <a
            href="https://iti.gov.eg"
            className="text-blue-600 font-medium hover:underline"
            target="_blank"
          >
            ITI
          </a>
          <span className="text-sm text-gray-500 italic"> 2025 - till now</span>
          <p className="mt-2 text-gray-600">
            Relevant coursework: c++, React, Nodejs, Problem Solving, Data Structures and Algorithms...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
