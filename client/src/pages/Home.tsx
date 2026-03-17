// import { useEffect, useState } from "react";

// const BASE_URL = import.meta.env.VITE_BASE_URL;

// const Home = () => {
//   const [user, setUser] = useState();

//   const fetchData = async () => {
//     const response = await fetch(`${BASE_URL}`);
//     const data = await response.json();
//     console.log(data)
//     setUser(data.sucess);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h2>are lol!!!</h2>
//       <p>{user}</p>
//     </div>
//   );
// };

// export default Home;


// src/pages/Home.tsx
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero */}
      <header className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-br from-indigo-600 to-violet-500 text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Welcome to YourApp</h1>
        <p className="max-w-xl text-lg opacity-90 mb-8">
          Connect with communities, chat in real time, and manage servers effortlessly.
        </p>
        <div className="flex gap-4">
          <Link
            to="/login"
            className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-md shadow hover:bg-gray-100"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-6 py-3 bg-indigo-700 font-semibold rounded-md shadow hover:bg-indigo-800"
          >
            Register
          </Link>
          <Link
            to="/app/explore"
            className="px-6 py-3 bg-violet-700 font-semibold rounded-md shadow hover:bg-violet-800"
          >
            Explore
          </Link>
        </div>
      </header>

      {/* Features */}
      <section className="py-16 px-6 max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold mb-2">Join Servers</h3>
          <p className="text-gray-600">Discover communities and connect with people who share your interests.</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold mb-2">Chat in Channels</h3>
          <p className="text-gray-600">Engage in real-time conversations across multiple topics and groups.</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold mb-2">Manage Communities</h3>
          <p className="text-gray-600">Create, customize, and control your own server spaces with ease.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} YourApp. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
