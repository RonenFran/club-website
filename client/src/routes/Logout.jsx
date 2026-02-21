import { useEffect, useState } from "react";
import Return from "../components/return";
import { useAuth } from "../auth";

export default function Logout() {
  const { signout } = useAuth();
  const [status, setStatus] = useState("pending");

  useEffect(() => {
    (async () => {
      try {
        await signout();
        setStatus("ok");
      } catch {
        setStatus("fail");
      }
    })();
  }, [signout]);

  let message;
  if (status === "pending") {
    message = <p className="h-full mt-28 text-3xl">Logging out...</p>;
  } else if (status === "ok") {
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
