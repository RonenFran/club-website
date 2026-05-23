import { FaFacebook, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function ClubPageDescription() {
  return (
    // Bookmark box
    <div className="z-20 py-5 px-10 bg-primary-800 w-[25vw] shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.6)] h-[125vh] rounded-lg overflow-hidden">
      {/* Club Picture */}
      <img
        src="/horse_cropped.jpg"
        alt="Horse head"
        className="w-full border-2 border-primary rounded-[50%] mb-10 border-8 border-secondary-400"
      />

      <div className="grid grid-cols-2 gap-4">
        {/* Description */}
        <div className="col-span-2 inset-shadow-sm/50 bg-secondary-400 text-primary-800 text-md rounded-lg py-2 px-4">
          <div className="text-lg font-bold text-primary-500">ABOUT</div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
        </div>

        {/* Members */}
        <div className="inset-shadow-sm/50  w-full justify-center flex flex-col rounded-lg bg-primary-500 text-center text-secondary p-4">
          <p className="text-2xl font-bold">43</p>
          <p className="text-md text-primary-200">Members</p>
        </div>

        {/* Enrollment Type */}
        <div className="inset-shadow-sm/50 w-full justify-center flex flex-col rounded-lg bg-primary-500 text-center text-secondary p-4">
          <p className="text-2xl font-bold">Open</p>
          <p className="text-md text-primary-200">enrollment</p>
        </div>

        {/* Leadership */}
        <div className="col-span-2 inset-shadow-sm/50 bg-secondary-400 text-primary-800 rounded-lg font-semibold py-2 px-4">
          <div className="font-bold text-lg text-primary-500 mb-2">LEADERSHIP</div>
          <div className="flex flex-col text-md justify-around gap-y-1 mb-2">
            <div className="flex gap-4 items-center">
              <div className="flex items-center justify-center bg-secondary-600 size-10 rounded-[50%]">
                JS
              </div>
              <div className="flex flex-col text-left">
                <p>John Smith</p>
                <p className="font-normal">Captain</p>
              </div>
            </div>
            <div className="border-b-1 border-primary"></div>
            <div className="flex gap-4 items-center">
              <div className="flex items-center justify-center bg-secondary-600 size-10 rounded-[50%]">
                AR
              </div>
              <div className="flex flex-col text-left">
                <p>Adam Robicheaux</p>
                <p className="font-normal">Vice Captain</p>
              </div>
            </div>
            <div className="border-b-1 border-primary"></div>
            <div className="flex gap-4 items-center">
              <div className="flex items-center justify-center bg-secondary-600 size-10 rounded-[50%]">
                AS
              </div>
              <div className="flex flex-col text-left">
                <p>Amy Schwart</p>
                <p className="font-normal">Secretary</p>
              </div>
            </div>
          </div>
          <a
            href="mailto:smuequestrains@smu.ca"
            className="block text-center pointer-events-auto hover:text-primary-400"
          >
            smuequestrains@smu.ca
          </a>
        </div>

        {/* Socials */}
        <div className="flex flex-wrap gap-x-12 justify-center col-span-2 text-secondary-200 rounded-lg font-semibold py-2 px-4">
          <FaFacebook size={32} />
          <FaInstagram size={32} />
          <FaXTwitter size={32} />
        </div>
      </div>
    </div>
  );
}
