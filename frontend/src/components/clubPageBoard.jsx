import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ClubPageBoard() {
  const [posts, setPosts] = useState([]);
  const { clubName } = useParams();

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get(`/api/clubs/${clubName}/posts`);
      setPosts(res.data);
    };

    getPosts();
  }, []);

  return (
    <div className="col-span-2 w-full pr-8">
      {/* Header */}
      <h2 className="text-6xl font-bold text-secondary text-center">Announcements</h2>
      {/* {posts.map((post) => {
          <div key={post.postId}> </div>;
        })} */}
      {/* Board divided into two sections */}
      <div className="grid grid-cols-4">
        {/* Posts sections 2/3 of board */}
        <div className="flex flex-col gap-y-4 col-span-3">
          <div className="w-full bg-secondary-200 rounded-2xl p-4 text-primary-600 font-semibold">
            {/* User */}
            <div className="flex items-center gap-2 text-primary-700 font-bold mb-1">
              <div className="flex items-center justify-center bg-secondary-600 size-10 rounded-[50%]">
                JS
              </div>
              <div>John Smith</div>
              <div className="text-gray-400 font-normal text-xs">May 21</div>
            </div>
            {/* Content */}
            Welcome to the Equestrian Society! Check our schedule and feel free to reach out with
            questions.
          </div>

          <div className="w-full bg-secondary-200 rounded-2xl p-4 text-primary-600 font-semibold">
            {/* User */}
            <div className="flex items-center gap-2 text-primary-700 font-bold mb-1">
              <div className="flex items-center justify-center bg-secondary-600 size-10 rounded-[50%]">
                SA
              </div>
              <div>Sarah Ahmed</div>
              <div className="text-gray-400 font-normal text-xs">Oct 3</div>
            </div>
            {/* Content */}
            Practice moved to Thursday this week due to the weather forecast.
          </div>

          <div className="w-full bg-secondary-200 rounded-2xl p-4 text-primary-600 font-semibold">
            {/* User */}
            <div className="flex items-center gap-2 text-primary-700 font-bold mb-1">
              <div className="flex items-center justify-center bg-secondary-600 size-10 rounded-[50%]">
                JS
              </div>
              <div>John Smith</div>
              <div className="text-gray-400 font-normal text-xs">May 21</div>
            </div>
            {/* Content */}
            Had a wonderful ride this week around the park. Everyone is preparing for the Atlantic
            competition!
          </div>
        </div>

        {/* Extra info section 1/3 of board*/}
        <div className="flex flex-col items-center">
          <div className="bg-secondary-200"></div>
        </div>
      </div>
    </div>
  );
}
