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
      <div className="grid grid-cols-2 gap-4 mx-24 my-8">
        {/* Description */}
        <div className="row-span-2 font-normal text-primary-500 text-lg">
          <h2 className="font-bold text-3xl mb-4">Description</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>
        {/* Details */}
        <div className="flex flex-col gap-2 mb-4">
          <div className="flex flex-col justify-center w-full h-16 bg-secondary-300 rounded-lg p-4 text-primary-700">
            Hosted by:
            <strong className="block text-2xl">SMU Equestrian Society</strong>
          </div>
          <div className="flex flex-col justify-center w-full h-16 bg-secondary-300 rounded-lg p-4 text-primary-700">
            Date:
            <strong className="block text-2xl">Friday, July 27th, 5:00 PM - 8:00 PM ADT</strong>
          </div>
          <div className="flex flex-col justify-center w-full h-16 bg-secondary-300 rounded-lg p-4 text-primary-700">
            Location:
            <strong className="block text-2xl">Beasely Field</strong>
          </div>
        </div>
        {/* Register Button */}
        <div className="flex items-center justify-center bg-primary-500 rounded-lg w-54 h-16 ml-auto text-3xl font-bold text-secondary-300">
          Register
        </div>

        {/* Extra Image */}
        <img
          src="/public/club_banners/equestrian3.avif"
          alt="Previous contenstant jumping over hurdle on horse"
        />

        {/* Attendees */}
        <div className="flex gap-4 w-full h-48 bg-gray-100 p-4 rounded-lg text-primary-700">
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
    </>
  );
}
