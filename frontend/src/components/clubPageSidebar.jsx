import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import { useAuth } from "../auth";

export default function ClubPageSiderbar({ clubId, isAuthenticated, userId, isMember }) {
  const [tags, setTags] = useState([]);
  const [popUp, setPopUp] = useState(false);
  const { user } = useAuth();

  console.log(isMember);

  useEffect(() => {
    const getTags = async () => {
      const res = await axios.get(`/api/clubs/${clubId}/tags`);
      setTags(res.data);
    };

    getTags();
  }, []);

  return (
    <div className="w-full items-center flex flex-col gap-4 p-4">
      {/* Join button */}
      {isAuthenticated ? (
        isMember ? (
          <div className="flex w-48 h-16 px-4 mt-4 rounded-md self-end justify-center items-center justify-self-end bg-secondary-400 text-secondary-800 hover:scale-105 hover:brightness-75 hover:cursor-pointer font-bold">
            <span className="flex-1 text-center text-xl">Joined</span>
            <IoMdCheckmark className="z-10 size-10 rounded-md ml-auto mr-2" />
          </div>
        ) : (
          <div className="flex w-48 h-16 px-4 mt-4 rounded-md self-end justify-center items-center justify-self-end bg-primary-500 text-secondary border-2 border-secondary-200 hover:scale-105 hover:bg-primary-400 hover:cursor-pointer font-bold">
            <span className="flex-1 text-center text-xl">Join Now</span>
            <FaPlus className="z-10 size-10 rounded-md ml-auto mr-2" />
          </div>
        )
      ) : (
        <div className="w-48 h-16 mt-4"></div>
      )}

      {/* Meeting section */}
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

      {/* Upcoming section */}
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
      {popUp && (
        <ConfirmationPopUp
          message={`Are you sure you want to leave the ${club.name}?`}
          confirm={handleLeave}
          cancel={() => setPopUp(false)}
        />
      )}
    </div>
  );
}
