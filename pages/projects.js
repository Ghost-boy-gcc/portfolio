export default function Projects() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-primary mb-8">
        My Projects
      </h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {['Project 1', 'Project 2', 'Project 3'].map((project, index) => (
          <li
            key={index}
            className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 hover:scale-105"
          >
            <h2 className="text-xl font-semibold">{project}</h2>
            <p className="mt-2 text-gray-600">Description of {project}</p>
          </li>
        ))}
      </ul>
    </div>
  );
} 