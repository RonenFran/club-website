import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  useLocation,
  Route,
  RouterProvider,
} from "react-router-dom";
import { logoutUser, AuthProvider } from "./auth";
import Navbar from "./components/navbar";
import Home from "./routes/Home";
import Browse from "./routes/Browse";
import ClubPage from "./routes/ClubPage";
import SignUp from "./routes/SignUp";
import Login from "./routes/Login";
import Logout from "./routes/Logout";
import MyClubs from "./routes/MyClubs";
// import Events from "./pages/Events";
// import Profile from "./pages/Profile";

function Root() {
  const { pathname } = useLocation();
  const hideNavbarRoutes = ["/login", "/signup", "/logout"];
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
    <Route path="/" id="root" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="browse" element={<Browse />} />
      <Route path="myclubs" element={<MyClubs />} />
      <Route path="clubpage/:clubName" element={<ClubPage />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="logout" id="logout" element={<Logout />} action={logoutUser} />
    </Route>
  )
);

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
    </AuthProvider>
  );
}
