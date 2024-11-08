export default function Contact() {
  return (
    <div className="p-6 bg-gradient-to-r from-secondary to-primary min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-primary">
          Contact Me
        </h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300 transform focus:scale-105"
              id="name"
              type="text"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300 transform focus:scale-105"
              id="email"
              type="email"
              placeholder="Your email"
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300 transform focus:scale-105"
              id="message"
              placeholder="Your message"
            />
          </div>
          <button
            className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 transform hover:scale-110"
            type="button"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
} 