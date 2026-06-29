import { FaUser } from "react-icons/fa";

export default function EventPage() {
  return (
    <>
      {/* Hero Banner */}
      <div className="bg-[url(../public/club_banners/equestrian4.avif)] bg-cover w-full h-120 p-32 border-b-12 border-primary">
        <h1 className="text-secondary text-8xl font-semibold bg-gray-900/20 inline p-4 rounded-xl">
          Horse Race
        </h1>
      </div>
      <div className="flex flex-wrap gap-8 mx-24 my-8">
        {/* Description */}
        <div className="flex flex-col flex-1 font-normal text-primary-500 text-lg">
          <h2 className="font-bold text-3xl mb-4">Description</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure{" "}
            <br />
            <br />
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />
            incididunt ut labore et dolore magna aliqua. <br /> Ut enim ad minim veniam, quis
            nostrud exercitation ullamco
            <br />
            <br />
            <strong>laboris nisi</strong>
          </p>
        </div>
        {/* Details */}
        <div className="h-full">
          <div className="self-start flex flex-col gap-2 mb-10">
            <div className="flex flex-col justify-center w-full h-auto bg-secondary-300 rounded-lg px-4 py-2 text-primary-700">
              Hosted by:
              <strong className="block text-2xl">SMU Equestrian Society</strong>
            </div>
            <div className="flex flex-col justify-center w-full h-auto bg-secondary-300 rounded-lg px-4 py-2 text-primary-700">
              Date:
              <strong className="block text-2xl">Friday, July 27th, 5:00 PM - 8:00 PM ADT</strong>
            </div>
            <div className="flex flex-col justify-center w-full h-auto bg-secondary-300 rounded-lg px-4 py-2 text-primary-700">
              Location:
              <strong className="block text-2xl">Beasely Field</strong>
            </div>
          </div>

          <div className="self-start flex flex-col">
            {/* Register Button */}
            <div className="flex items-end justify-between">
              <div className="text-4xl font-bold">32 Attendees already registered</div>
              <div className="flex items-center justify-center bg-primary-500 rounded-lg w-54 h-16 text-3xl font-bold text-secondary-300">
                Register
              </div>
            </div>
            {/* Attendees */}
            <div className="flex gap-4 w-full h-48 bg-secondary-300 p-4 mt-6 rounded-lg text-primary-700">
              <div className="flex flex-col items-center justify-center gap-4 h-full w-36 p-4 bg-secondary-200 border-3 border-primary rounded-md">
                <div className="bg-secondary-400 p-3 rounded-[50%] overflow-hidden">
                  <FaUser className="size-8 text-gray-400" />
                </div>
                <div className="text-center">
                  <strong>User Name</strong>
                  <br />
                  Host
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 h-full w-36 p-4 bg-secondary-200 border-3 border-primary rounded-md">
                <div className="bg-secondary-400 p-3 rounded-[50%] overflow-hidden">
                  <FaUser className="size-8 text-gray-400" />
                </div>
                <div className="text-center">
                  <strong>User Name</strong>
                  <br />
                  Co-Host
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 h-full w-36 p-4 bg-secondary-200 border-3 border-primary rounded-md">
                <div className="bg-secondary-400 p-3 rounded-[50%] overflow-hidden">
                  <FaUser className="size-8 text-gray-400" />
                </div>
                <div className="text-center">
                  <strong>User Name</strong>
                  <br />
                  Volunteer
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 h-full w-36 p-4 bg-secondary-200 border-3 border-primary rounded-md">
                <div className="bg-secondary-400 p-3 rounded-[50%] overflow-hidden">
                  <FaUser className="size-8 text-gray-400" />
                </div>
                <div className="text-center">
                  <strong>User Name</strong>
                  <br />
                  Attendant
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Extra Image */}
        <img
          className="h-128 w-full"
          src="/public/club_banners/equestrian3.avif"
          alt="Previous contenstant jumping over hurdle on horse"
        />
      </div>
    </>
  );
}
