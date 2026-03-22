import { Outlet, Link } from "react-router-dom";
import { useState } from "react";

const   AppLayout = () => {
   
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 sm:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r shadow-sm flex flex-col transition-transform duration-300 ease-in-out sm:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="px-6 py-4 h-14 border-b flex items-center">
          <h1 className="text-xl font-bold text-indigo-600">YourApp</h1>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          <Link
            to="/app/explore"
            onClick={() => setIsSidebarOpen(false)}
            className="block px-3 py-2 rounded-md text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
          >
            Explore Servers
          </Link>
          <Link
            to="/app/settings"
            onClick={() => setIsSidebarOpen(false)}
            className="block px-3 py-2 rounded-md text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
          >
            User Settings
          </Link>
          <Link
            to="/app/profile/me"
            onClick={() => setIsSidebarOpen(false)}
            className="block px-3 py-2 rounded-md text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
          >
            My Profile
          </Link>
        </nav>
        <div className="px-4 py-4 border-t">
          <button className="w-full py-2 px-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col sm:ml-64 w-full h-screen">
        {/* Top bar */}
        <header className="h-14 shrink-0 bg-white border-b flex items-center justify-between px-6">
          <div className="font-semibold text-gray-700">Dashboard</div>
          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-indigo-600 text-xl">🔔</button>
            <img src="https://ui-avatars.com/api/?name=User" alt="avatar" className="w-8 h-8 rounded-full border bg-gray-50" />
            {/* hamburger */}
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="text-gray-600 hover:text-indigo-600 sm:hidden text-2xl"
            >
              ☰
            </button> 
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
