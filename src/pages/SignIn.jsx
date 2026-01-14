import { Link } from "react-router-dom";

function SignIn() {
  return (
    // Page container
    <div className="flex justify-center items-center h-screen w-screen">
      {/* Return button */}

      {/* Sign up div */}
      <div className="flex flex-col items-start w-[30vw] h-[70vh] text-center shadow-[2px_6px_20px_0_rgba(0,0,0,0.25)]">
        <h1 className="self-center font-bold text-5xl mt-6">Sign In</h1>
        {/* Sign up form */}
        <form className="flex flex-col items-start mx-12 my-8 w-[85%]">
          {/* Email or Username */}
          <label htmlFor="user" className="font-bold">
            Email or Username
          </label>
          <input
            type="text"
            id="user"
            name="user"
            value="Enter your email or username"
            className="w-full border-b-2 text-[#b1b1b1]"
          />

          {/* Password */}
          <label htmlFor="password" className="font-bold mt-8">
            Password
          </label>
          <input
            type="text"
            id="password"
            name="password"
            value="Enter your password"
            className="w-full border-b-2 text-[#b1b1b1]"
          />

          {/* Submit Button */}
          <input type="submit" value="Sign In" className="mt-10 self-center font-bold text-secondary bg-primary w-48 h-10 rounded-sm"></input>

          {/* Sign in instead */}
          <p className="mt-2 self-center text-sm">
            Don't have an account yet?{" "}
            <Link to="/SignUp" className="text-primary font-bold hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignIn;