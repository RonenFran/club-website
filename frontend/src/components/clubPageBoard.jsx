import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ClubPageBoard() {
  const [announcements, setAnnouncements] = useState([]);
  const { clubName } = useParams();

  useEffect(() => {
    const getAnnouncements = async () => {
      const res = await axios.get(`/api/clubs/${clubName}/announcements`);
      setAnnouncements(res.data);
    };

    getAnnouncements();
  }, []);

  return (
    <div className="col-span-3 w-ful py-8 px-4">
      {/* Header */}
      <h2 className="w-full text-6xl font-bold text-secondary mb-4 border-b-4 [border-image:linear-gradient(to_right,#e8e2e2,transparent_60%)_1]">
        Announcements
      </h2>
      <div className="flex flex-col gap-y-4">
        {announcements.map((announcement) => {
          return (
            <div
              key={announcement.announcementId}
              className="w-full bg-secondary-200 rounded-2xl p-4 text-primary-600 font-semibold"
            >
              {/* User */}
              <div className="flex items-center gap-2 text-primary-700 font-bold mb-1">
                <div className="flex items-center justify-center bg-secondary-600 size-10 rounded-[50%]">
                  {announcement.firstName[0] + announcement.lastName[0]}
                </div>
                <div>{announcement.firstName + " " + announcement.lastName}</div>
                <div className="text-gray-400 font-normal text-xs">May 21</div>
              </div>
              {/* Content */}
              {announcement.content}
            </div>
          );
        })}
      </div>
    </div>
  );
}
