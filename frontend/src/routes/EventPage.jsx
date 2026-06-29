import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaCalendarDays, FaLocationDot } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";

export default function EventPage() {
  return (
    <>
      {/* Hero Banner */}
      <div className="relative bg-[url(../public/club_banners/equestrian4.avif)] bg-cover w-full h-120 border-b-12 border-primary">
        <h1 className="absolute bottom-8 left-16 text-secondary text-9xl font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          Horse Race
        </h1>
      </div>
      {/* Flex content layout */}
      <div className="flex gap-8 mx-24 my-8">
        {/* Left Panel */}
        <div className="w-1/2">
          {/* Hosted by header*/}
          <div className="flex text-2xl text-primary-500 mb-8">
            <img
              className="size-20 rounded-[50%] mr-4 border-2 border-primary"
              src="/public/horse_cropped.jpg"
              alt="Horse head"
            />
            <div className="flex flex-wrap py-2">
              <h3 className="mr-1.5">by</h3>
              <Link className="block font-bold">SMU Equestrian Society</Link>
              <div className="w-full text-base text-primary-800/50">15 Members</div>
            </div>
          </div>
          {/* Overview */}
          <div className="flex flex-col flex-1 font-normal text-primary-500 text-lg">
            <h2 className="font-bold text-3xl mb-4">Overview</h2>
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
        </div>

        {/* Right Panel */}
        <div className="self-start top-8 sticky w-1/2">
          {/* Details */}
          <div className="self-start flex flex-col gap-2 mb-16">
            <div className="flex items-center gap-4 w-full h-auto bg-secondary-300 rounded-lg px-4 py-4 text-primary-700">
              <FaCalendarDays className="size-10" />
              <div>
                <strong className="block text-2xl">Friday, July 27th </strong>
                5:00 PM - 8:00 PM
              </div>
            </div>
            <div className="flex items-center gap-4 w-full h-auto bg-secondary-300 rounded-lg px-4 py-4 text-primary-700">
              <FaLocationDot className="size-10" />
              <div>
                <strong className="block text-2xl">Wanderer's Ground</strong>
                5819 Sackville St, Halifax, NS B3H 2Z3
              </div>
              <Link className="ml-auto">
                <GoArrowUpRight className="size-8" />
              </Link>
            </div>
          </div>

          <div className="self-start flex flex-col gap-2">
            {/* Register Button */}
            <div className="flex gap-8 items-end justify-between">
              <div className="text-2xl font-medium text-primary-700">
                32 Attendees already registered
              </div>
            </div>

            {/* Attendees */}
            <div className="flex gap-4 p-4 bg-secondary-300 rounded-xl">
              <Link className="flex flex-col items-center justify-center gap-4 h-full w-36 p-4 bg-secondary-200 border-3 border-primary rounded-md transition duration-200 hover:brightness-90 hover:-translate-y-1">
                <div className="bg-secondary-400 p-3 rounded-[50%] overflow-hidden">
                  <FaUser className="size-8 text-gray-400" />
                </div>
                <div className="text-center">
                  <strong>User Name</strong>
                  <br />
                  Host
                </div>
              </Link>
              <Link className="flex flex-col items-center justify-center gap-4 h-full w-36 p-4 bg-secondary-200 border-3 border-primary rounded-md transition duration-200 hover:brightness-90 hover:-translate-y-1">
                <div className="bg-secondary-400 p-3 rounded-[50%] overflow-hidden">
                  <FaUser className="size-8 text-gray-400" />
                </div>
                <div className="text-center">
                  <strong>User Name</strong>
                  <br />
                  Co-Host
                </div>
              </Link>
              <Link className="flex flex-col items-center justify-center gap-4 h-full w-36 p-4 bg-secondary-200 border-3 border-primary rounded-md transition duration-200 hover:brightness-90 hover:-translate-y-1">
                <div className="bg-secondary-400 p-3 rounded-[50%] overflow-hidden">
                  <FaUser className="size-8 text-gray-400" />
                </div>
                <div className="text-center">
                  <strong>User Name</strong>
                  <br />
                  Volunteer
                </div>
              </Link>
              <Link className="flex flex-col items-center justify-center gap-4 h-full w-36 p-4 bg-secondary-200 border-3 border-primary rounded-md transition duration-200 hover:brightness-90 hover:-translate-y-1">
                <div className="bg-secondary-400 p-3 rounded-[50%] overflow-hidden">
                  <FaUser className="size-8 text-gray-400" />
                </div>
                <div className="text-center">
                  <strong>User Name</strong>
                  <br />
                  Attendant
                </div>
              </Link>
            </div>

            <div className="flex items-center justify-center bg-primary-500 border-primary-500 border-2 rounded-lg w-full h-16 text-3xl font-bold text-secondary-300 hover:cursor-pointer hover:brightness-90 hover:scale-105">
              Register
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
