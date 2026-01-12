function SignUp() {
  return (
    // Page container
    <div className="flex justify-center items-center h-screen w-screen">
      {/* Return button */}

      {/* Sign up div */}
      <div className="flex flex-col items-start w-[30vw] h-[70vh] text-center shadow-[2px_6px_20px_0_rgba(0,0,0,0.25)]">
        <h1 className="self-center font-bold text-5xl mt-6">Sign Up</h1>
        {/* Sign up form */}
        <form className="flex flex-col items-start m-12 w-[85%]">
          {/* Email */}
          <label htmlFor="email" className="font-bold">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value="example.student@smu.ca"
            className="w-full border-b-2 text-[#b1b1b1]"
          />

          {/* Username */}
          <label htmlFor="username" className="font-bold mt-8">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value="Enter your name"
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

          {/* Resubmit password */}
          <label htmlFor="passwordRe" className="font-bold mt-8">
            Repeat Password
          </label>
          <input
            type="text"
            id="passwordRe"
            name="passwordRe"
            value="Confirm your password"
            className="w-full border-b-2 text-[#b1b1b1]"
          />

          {/* Maybe robot captcha */}

          {/* Submit Button */}
        </form>
      </div>
    </div>
  );
}

export default SignUp;
