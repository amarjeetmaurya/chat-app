import { Outlet, Link } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r shadow-sm flex flex-col">
        <div className="px-6 py-4 h-14 border-b">
          <h1 className="text-xl font-bold text-indigo-600">YourApp</h1>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          <Link
            to="/app/explore"
            className="block px-3 py-2 rounded-md text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
          >
            Explore Servers
          </Link>
          <Link
            to="/app/settings"
            className="block px-3 py-2 rounded-md text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
          >
            User Settings
          </Link>
          <Link
            to="/app/profile/me"
            className="block px-3 py-2 rounded-md text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
          >
            My Profile
          </Link>
        </nav>
        <div className="px-4 py-4 border-t">
          <button className="w-full py-2 px-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Top bar */}
        <header className="h-14 bg-white border-b flex items-center justify-between px-6">
          <div className="font-semibold text-gray-700">Dashboard</div>
          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-indigo-600">🔔</button>
            <img
              src="/"
              alt="avatar"
              className="w-8 h-8 rounded-full border"
            />
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
