import Return from "../components/return";
import { useLoaderData } from "react-router-dom";

export default function Logout() {
  const logoutSuccess = useLoaderData("logout");
  let message = <p></p>;
  if (logoutSuccess.ok) {
    message = <p className="h-full mt-28 text-3xl">You have been successfully logged out</p>;
  } else {
    message = <p className="h-full mt-28 text-3xl">Something went wrong with your log out</p>;
  }

  return (
    // Page container
    <div className="flex justify-center items-center h-screen w-screen">
      {/* Return button */}
      <Return />
      {/* Sign up div */}
      <div className="flex flex-col justify-center w-[600px] h-[42vh] text-center shadow-[2px_6px_20px_0_rgba(0,0,0,0.25)]">
        <h1 className="font-bold text-5xl mt-6">Logout</h1>
        {message}
      </div>
    </div>
  );
}
