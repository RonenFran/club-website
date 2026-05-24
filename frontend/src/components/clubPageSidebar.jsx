import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ClubPageSiderbar() {
  const [tags, setTags] = useState([]);
  const { clubName } = useParams();

  useEffect(() => {
    const getTags = async () => {
      const res = await axios.get(`/api/clubs/${clubName}/tags`);
      setTags(res.data);
      console.log("res: " + res);
    };

    getTags();
  }, []);

  return (
    <div className="w-full items-center flex flex-col gap-4 p-4">
      {/* Join button */}
      <div className="flex w-48 h-16 px-4 mt-4 rounded-md self-end justify-center items-center justify-self-end bg-primary-500 text-secondary border-2 border-secondary-200 hover:scale-105 hover:bg-primary-400 hover:cursor-pointer font-bold">
        <span className="flex-1 text-center text-xl">Join Now</span>
        <svg viewBox="0 0 10 10" fill="white" className="size-12">
          <rect width="7" height="1.5" x="1.5" y="4.25" rx="0.5" />
          <rect width="1.5" height="7" x="4.25" y="1.5" ry="0.5" />
        </svg>
      </div>

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
    </div>
  );
}
