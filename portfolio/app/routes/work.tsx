export default function Work() {
  const projects = [
    {
      title: "SELD Conference Registration Form",
      description: "This is a registration form for Seventh Day Adventist Church. It is a single page form that allows users to register for their yearly event. It is built with HTML, CSS, and JavaScript. The backend is an external excel sheet that the form saves to.",
      image: "https://placehold.co/600x400?text=SELD+Conference",
      technologies: ["HTML", "CSS", "JavaScript", "Excel"],
      link: "https://www.seldconference.org/registration-form"
    },
    // Add more projects as needed
  ];

  return (
    <div className="flex flex-col gap-8 items-center mx-auto max-w-[1200px] w-[calc(100%-40px)] p-8 lg:p-12">
      <h1 className="text-3xl font-bold text-center mb-4">My Work</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {projects.map((project, index) => (
          <div key={index} className="bg-[#a28089] rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
            <div className="aspect-video w-full bg-gray-100">
              {/* Replace with your image component */}
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6">
              <h2 className="text-xl text-[#f5f5f5] font-semibold mb-2">{project.title}</h2>
              <p className="text-[#f5f5f5] mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-[#9df9ef] rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
