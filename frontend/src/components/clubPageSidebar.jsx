import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import { useUserClubs } from "../hooks/useUserClubs";
import ConfirmationPopUp from "./confirmationPopUp";

export default function ClubPageSiderbar({ clubInfo, loggedIn, userId, memberStatus }) {
  const [tags, setTags] = useState([]);
  // Leave club pop up
  const [popUp, setPopUp] = useState(false);
  // Component level version of status so React can rerender component when it changes
  const [status, setStatus] = useState(memberStatus);

  // Toggle whether the user is a member of the club or not
  const joinToggle = async () => {
    if (status === "joined") {
      await axios.delete(`/api/user/${userId}/clubs/${clubInfo.clubId}`);
      setPopUp(false);
      setStatus(null);
    } else {
      await axios.post(`/api/user/${userId}/clubs/${clubInfo.clubId}`);
      setStatus("joined");
    }
  };

  // Get the tags related to the club from the backend
  useEffect(() => {
    if (!clubInfo.clubId) return;
    const getTags = async () => {
      const res = await axios.get(`/api/clubs/${clubInfo.clubId}/tags`);
      setTags(res.data);
    };

    getTags();
  }, [!!clubInfo.clubId]);

  return (
    <div className="w-full items-center flex flex-col gap-4 p-4">
      {/* Join button: Check whether there is a logged in user and if they are already a member */}
      {loggedIn ? (
        status === "joined" ? (
          <div
            className="flex w-48 h-16 px-4 mt-4 rounded-md self-end justify-center items-center justify-self-end bg-secondary-400 text-secondary-800 hover:scale-105 hover:brightness-75 hover:cursor-pointer font-bold"
            onClick={() => {
              setPopUp(true);
            }}
          >
            <span className="flex-1 text-center text-xl">Joined</span>
            <IoMdCheckmark className="z-10 size-10 rounded-md ml-auto mr-2" />
          </div>
        ) : (
          <div
            className="flex w-48 h-16 px-4 mt-4 rounded-md self-end justify-center items-center justify-self-end bg-primary-500 text-secondary border-2 border-secondary-200 hover:scale-105 hover:bg-primary-400 hover:cursor-pointer font-bold"
            onClick={() => {
              joinToggle();
            }}
          >
            <span className="flex-1 text-center text-xl">Join Now</span>
            <FaPlus className="z-10 size-10 rounded-md ml-auto mr-2" />
          </div>
        )
      ) : (
        <div className="w-48 h-16 mt-4"></div>
      )}

      {/* Team meeting times section */}
      <div className="w-full p-4 bg-secondary-200 rounded-lg text-primary-900">
        <h2 className="font-bold text-primary-500 text-sm">NEXT MEETING</h2>
        Thursday May 18th <br />
        Beasley Field <br />
        6:00-8:00 PM <br />
        Open to spectators
      </div>

      {/* Tags section */}
      <div className="w-full p-4 bg-secondary-200 rounded-lg text-primary-900">
        <h2 className="font-bold text-primary-500 text-sm mb-1">TAGS</h2>
        <div className="flex flex-wrap gap-1">
          {tags.map((tag) => {
            return (
              <span key={tag.tagId} className="bg-primary-50 px-3 py-1 rounded-lg font-semibold">
                {tag.name}
              </span>
            );
          })}
        </div>
      </div>

      {/* Upcoming events section */}
      <div className="w-full p-4 bg-secondary-200 rounded-lg text-primary-900">
        <h2 className="font-bold text-primary-500 text-sm mb-1">UPCOMING</h2>
        <div className="flex gap-1 pb-2 border-b-1 border-secondary-600">
          <p className="w-24 font-semibold text-primary-500">May 8th</p>
          <p className="w-full text-primary-800">Atlantic Riders Competition</p>
        </div>
        <div className="flex gap-1 pb-2 border-b-1 border-secondary-600">
          <p className="w-24 font-semibold text-primary-500">June 19th</p>
          <p className="w-full text-primary-800">Exhibition Show</p>
        </div>
        <div className="flex gap-1 pb-2">
          <p className="w-24 font-semibold text-primary-500">May 8th</p>
          <p className="w-full text-primary-800">Atlantic Riders Competition</p>
        </div>
      </div>

      {/* Leave club popup associated with toggleJoin */}
      {popUp && (
        <ConfirmationPopUp
          message={`Are you sure you want to leave the ${clubInfo.name}?`}
          confirm={joinToggle}
          cancel={() => setPopUp(false)}
        />
      )}
    </div>
  );
}
