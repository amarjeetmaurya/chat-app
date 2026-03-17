// src/pages/ServerHome.tsx
import { useParams } from "react-router-dom";

const ServerHome = () => {
  const { serverId } = useParams();

  return (
    <div className="flex flex-col h-full p-6">
      {/* Server Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-md bg-gradient-to-br from-indigo-500 to-indigo-600 text-white">
            🔑
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Server {serverId}</h2>
            <p className="text-sm text-gray-500">Welcome to your server space</p>
          </div>
        </div>
        <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
          Leave Server
        </button>
      </div>

      {/* Channel Area */}
      <div className="flex-1 bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Main Channel</h3>
        <div className="h-96 overflow-y-auto border rounded-md p-4 mb-4">
          {/* Example messages */}
          <div className="mb-2">
            <span className="font-semibold text-indigo-600">Alice:</span>{" "}
            <span className="text-gray-700">Hey everyone 👋</span>
          </div>
          <div className="mb-2">
            <span className="font-semibold text-indigo-600">Bob:</span>{" "}
            <span className="text-gray-700">Welcome to Server {serverId}!</span>
          </div>
        </div>

        {/* Input box */}
        <form className="flex gap-2">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServerHome;
