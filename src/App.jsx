import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import Browse from "./pages/Browse";
import ClubPage from "./pages/ClubPage";
// import MyClubs from "./pages/MyClubs";
// import Events from "./pages/Events";
// import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

const App = () => {
  const hideNavbarRoutes = ["/SignIn", "/SignUp"];
  const showNavbar = !hideNavbarRoutes.includes(useLocation().pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<ClubPage />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/SignUp" element={<SignUp />} />
        {/* <Route path="/myClubs" element={<MyClubs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/profile" element={<Profile />} /> */}
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </>
  );
};

export default App;
