import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  useLocation,
  Route,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./routes/Home";
import Browse from "./routes/Browse";
import ClubPage from "./routes/ClubPage";
import SignUp from "./routes/SignUp";
import Login from "./routes/Login";
// import MyClubs from "./pages/MyClubs";
// import Events from "./pages/Events";
// import Profile from "./pages/Profile";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.withCredentials = true;

function Root() {
  const { pathname } = useLocation();
  const hideNavbarRoutes = ["/login", "/signup"];
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
    <Route path="/" id="root" element={<Root />} loader={getUser}>
      <Route index element={<Home />} />
      <Route path="browse" element={<Browse />} />
      <Route path="clubpage" element={<ClubPage />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />;
}

async function getUser() {
  const response = await axios.get("/api/auth/me");
  return response.data;
}
