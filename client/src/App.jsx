import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  useLocation,
  Route,
  RouterProvider,
} from "react-router-dom";
import { QueryClient } from "@tanstack/react-query";
import Navbar from "./components/navbar";
import Home from "./routes/Home";
import Browse from "./routes/Browse";
import ClubPage from "./routes/ClubPage";
import SignUp from "./routes/SignUp";
import SignIn from "./routes/SignIn";
// import MyClubs from "./pages/MyClubs";
// import Events from "./pages/Events";
// import Profile from "./pages/Profile";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.withCredentials = true;

function Root() {
  const { pathname } = useLocation();
  const hideNavbarRoutes = ["/signin", "/signup"];
  const showNavbar = !hideNavbarRoutes.includes(pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      <Outlet />
    </>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="browse" element={<Browse />} />
      <Route path="clubpage" element={<ClubPage />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />;
}

async function getUser() {
  const userID = await axios.get("api/auth/me");
}
