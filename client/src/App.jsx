import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Browse from "./pages/Browse";
import Home from "./pages/Home";
import ClubPage from "./pages/ClubPage";
// import MyClubs from "./pages/MyClubs";
// import Events from "./pages/Events";
// import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import axios from "axios";

export default function App() {
  const hideNavbarRoutes = ["/SignIn", "/SignUp"];
  const showNavbar = !hideNavbarRoutes.includes(useLocation().pathname);
  // const [array, setArray] = useState([]);    Database Testing

  // const fetchAPI = async () => {
  //   const response = await axios.get("http://localhost:8080/api");
  //   setArray(response.data.fruits);
  //   console.log(response.data.fruits);
  // };

  // useEffect(() => {
  //   fetchAPI();
  // }, []);

  return (
    <>
      {showNavbar && <Navbar />}
      {/* {array.map((fruit, index) => (
        <div key="index">
          <p>{fruit}</p>
          <br />
        </div>
      ))} */}
      {/* Database testing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/ClubPage" element={<ClubPage />} />
        {/* <Route path="/myClubs" element={<MyClubs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/profile" element={<Profile />} /> */}
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </>
  );
}
