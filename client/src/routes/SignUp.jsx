import Return from "../components/return";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function SignUp() {
  // Sign up data inputs
  const [formData, setFormData] = useState({});

  const navigate = useNavigate();
  // Errors on incorrect input
  const [err, setErr] = useState({
    names: "",
    email: "",
    password: "",
    passwordRe: "",
  });

  // Form submission function
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post("/api/auth/sign-up", formData).catch(function (error) {
      const errorData = error.response.data;
      switch (error.status) {
        // Validation errors with inputs
        case 400:
          const newErrors = {};
          for (let i = 0; i < errorData.errors.length; i++) {
            if (errorData.errors[i].path === "firstName" || errorData.errors[i].path === "lastName")
              newErrors["names"] = errorData.errors[i].msg;
            newErrors[errorData.errors[i].path] = errorData.errors[i].msg;
          }
          setErr(newErrors);
          break;
        // Conflicts among input data or server data
        case 409:
          setErr({ [errorData.path]: errorData.error });
      }
    });

    // Send back to home page upon account creation
    if (res.status === 200) {
      navigate("/");
    }
  };

  return (
    // Page container
    <div className="flex justify-center items-center h-screen w-screen">
      <Return />
      {/* Sign up div */}
      <div className="flex flex-col items-start w-[600px] text-center shadow-[2px_6px_20px_0_rgba(0,0,0,0.25)]">
        <h1 className="self-center font-bold text-5xl mt-6">Sign Up</h1>
        {/* Sign up form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start mx-12 my-8 w-[85%] h-full"
        >
          {/* Name input containers */}
          <div className="flex flex-wrap w-full justify-between mt-8">
            <div className="flex w-[45%] flex-col items-start">
              {/* First name */}
              <label htmlFor="firstName" className="font-bold">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                placeholder="Enter your first name"
                className="w-full border-b-2"
              />
            </div>

            {/* Last name */}
            <div className="flex flex-col items-start w-[45%] ">
              <label htmlFor="lastName" className="font-bold">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                placeholder="Enter your last name"
                className="w-full border-b-2"
              />
            </div>

            <strong className="w-full mt-2 text-red-500 font-semibold text-left text-sm">
              {err.names}
            </strong>
          </div>
          {/* Email */}
          <label htmlFor="email" className="font-bold mt-8">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="example.student@smu.ca"
            className="w-full border-b-2"
          />
          <strong className="w-full mt-2 text-red-500 font-semibold text-left text-sm">
            {err.email}
          </strong>
          {/* Password */}
          <label htmlFor="password" className="font-bold mt-8">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            placeholder="Enter your password"
            className="w-full border-b-2"
          />
          <strong className="w-full mt-2 text-red-500 font-semibold text-left text-sm">
            {err.password}
          </strong>
          {/* Resubmit password */}
          <label htmlFor="passwordRe" className="font-bold mt-8">
            Repeat Password
          </label>
          <input
            type="password"
            id="passwordRe"
            name="passwordRe"
            value={formData.passwordRe}
            onChange={(e) => setFormData({ ...formData, passwordRe: e.target.value })}
            placeholder="Confirm your password"
            className="w-full border-b-2"
          />
          <strong className="w-full mt-2 text-red-500 font-semibold text-left text-sm">
            {err.passwordRe}
          </strong>
          {/* Maybe robot captcha */}
          {/* Submit Button */}
          <button
            type="submit"
            className="mt-8 self-center font-bold text-secondary bg-primary w-48 h-10 rounded-sm"
          >
            Sign Up
          </button>
          {/* Sign in instead */}
          <p className="mt-2 self-center text-sm">
            Already have an account?{" "}
            <Link to="/signin" className="text-primary font-bold hover:underline">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
