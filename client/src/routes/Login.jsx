import Return from "../components/return";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  // Sign in data inputs
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  // Error handling
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios
      .post("/api/auth/login", formData)
      .then(() => navigate("/"))
      .catch(function (error) {
        setErrorMessage(error.response.data.error);
      });
  };

  return (
    // Page container
    <div className="flex justify-center items-center h-screen w-screen">
      {/* Return button */}
      <Return />

      {/* Sign up div */}
      <div className="flex flex-col items-start w-[600px] h-[42vh] text-center shadow-[2px_6px_20px_0_rgba(0,0,0,0.25)]">
        <h1 className="self-center font-bold text-5xl mt-6">Login</h1>
        {/* Sign up form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start mx-12 my-8 w-[85%] h-full"
        >
          {/* Email */}
          <label htmlFor="email" className="font-bold">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter your email"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full border-b-2"
          />

          {/* Password */}
          <label htmlFor="password" className="font-bold mt-8">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="w-full border-b-2"
          />

          <strong className="w-full mt-2 text-red-500 font-semibold text-left text-sm">
            {errorMessage}
          </strong>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-8 self-center font-bold text-secondary bg-primary w-48 h-10 rounded-sm"
          >
            Login in
          </button>

          {/* Sign in instead */}
          <p className="mt-2 self-center text-sm">
            Don't have an account yet?{" "}
            <Link to="/signup" className="text-primary font-bold hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
