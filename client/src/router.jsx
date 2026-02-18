import { createBrowserRouter, Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import ClubPage from "./pages/ClubPage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
// import MyClubs from "./pages/MyClubs";
// import Events from "./pages/Events";
// import Profile from "./pages/Profile";

function RootLayout() {
  const { pathname } = useLocation();
  const hideNavbarRoutes = ["/signIn", "/signUp"];
  const showNavbar = !hideNavbarRoutes.includes(pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      <Outlet />
    </>
  );
}

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/browse", element: <Browse /> },
      { path: "/clubpage", element: <ClubPage /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/signin", element: <SignIn /> },
    ],
  },
]);
