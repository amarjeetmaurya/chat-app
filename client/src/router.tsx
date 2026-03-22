// router.tsx
import { createBrowserRouter } from "react-router-dom";

// layouts
import AppLayout from "./layouts/AppLayout";
import AuthLayout from "./layouts/AuthLayout";

// auth pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

// main pages
import Home from "./pages/Home";
import Explore from "./pages/Explore";

// server pages
import ServerHome from "./pages/server/ServerHome";
import Channel from "./pages/channel/Channel";
import Members from "./pages/server/Members";
import ServerSettings from "./pages/server/ServerSettings";
import ErrorPage from "./pages/ErrorPage";
import TermsPage from "./pages/TermsPage";

// user pages
// import UserSettings from "./pages/user/UserSettings";
// import Profile from "./pages/user/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  // AUTH ROUTES
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },

  // MAIN APP
  {
    path: "/app",
    element: <AppLayout />,
    children: [
      // explore public servers
      {
        path: "explore",
        element: <Explore />,
      },

      // SERVER ROUTES
      {
        path: ":serverId",
        element: <ServerHome />,
        children: [
          {
            path: "channel/:channelId",
            element: <Channel />,
          },

          {
            path: "members",
            element: <Members />,
          },

          {
            path: "settings",
            element: <ServerSettings />,
          },
        ],
      },
    ],
  },

  // // USER SETTINGS
  // {
  //   path: "/settings",
  //   element: <UserSettings />
  // },

  // // USER PROFILE
  // {
  //   path: "/profile/:userId",
  //   element: <Profile />
  // }

  {
    path: "/terms",
    element: <TermsPage />,
  },

  {
    path: "*",
    element: <ErrorPage />,
  },
]);
