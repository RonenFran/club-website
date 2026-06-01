import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import ConfirmationPopUp from "./confirmationPopUp";
import axios from "../api";

export default function ClubBrowserItem({ club, memberCount, loggedIn, memberStatus, userId }) {
  const [popUp, setPopUp] = useState(false);
  // Component level version of status so React can rerender component when it changes
  const [status, setStatus] = useState(memberStatus);

  const joinToggle = async () => {
    if (status === "joined") {
      await axios.delete(`/api/user/${userId}/clubs/${club.clubId}`);
      setPopUp(false);
      setStatus(null);
    } else {
      await axios.post(`/api/user/${userId}/clubs/${club.clubId}`);
      setStatus("joined");
    }
  };

  return (
    // Overall link to the club
    <>
      <Link to={"/clubpage/" + club.name}>
        <div className="relative flex flex-row overflow-hidden bg-secondary h-28 gap-6 p-2 my-0.5 border-3 border-primary rounded-md items-center transition duration-150 ease-in-out hover:brightness-90 hover:-translate-y-1 hover:scale-102">
          {/* Icon */}
          <img
            src={club.iconPath}
            alt="Club icon"
            className="size-20 border-3 border-primary object-cover rounded-[50%]"
          />
          {/* Club and Members */}
          <div className="flex flex-col gap-2 p-1">
            <span className="z-20 font-semibold text-primary text-xl">{club.name}</span>
            <div className="flex items-center mt-1 text-gray-600">
              <svg viewBox="0 0 5 5" fill="currentColor" aria-hidden="true" className="size-4 mr-1">
                <circle r="1" cx="2.5" cy="1.5" />
                <circle r="1.5" cx="2.5" cy="4.5" />
              </svg>
              {memberCount + " Members"}
            </div>
          </div>
          {/* Gradient banner image */}
          <div className="z-10 absolute bg-linear-20 from-secondary from-25% to-transparent to-125% w-[80%] right-0 h-full" />
          <img src={club.bannerPath} className="z-0 absolute right-0 -top-12 w-[75%]"></img>
          {/* Add/Leave club button */}
          {loggedIn &&
            (status === "joined" ? (
              <IoMdCheckmark
                className="z-10 bg-secondary-400 text-secondary-800 size-12 p-1.5 rounded-md ml-auto mr-2 transition ease-in-out hover:brightness-75 hover:scale-125"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setPopUp(true);
                }}
              />
            ) : (
              <FaPlus
                className="z-10 bg-primary text-secondary size-12 p-1.5 rounded-md ml-auto mr-2 transition ease-in-out hover:brightness-75 hover:scale-125"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  joinToggle();
                }}
              />
            ))}
        </div>
      </Link>

      {/* Leave club popup */}
      {popUp && (
        <ConfirmationPopUp
          message={`Are you sure you want to leave the ${club.name}?`}
          confirm={joinToggle}
          cancel={() => setPopUp(false)}
        />
      )}
    </>
  );
}
