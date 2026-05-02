import { useEffect, useState } from "react";
import axios from "axios";

export default function EnrolledClubs() {
  const [clubs, setClubs] = useState([]);

  return (
    <div className="border-4 border-primary rounded-lg h-full w-72 bg-red-100">
      {/* {clubs.map(())} */}
      <div className="relative grid grid-cols-4 bg-secondary m-1 border-2 border-primary rounded-lg">
        <div className="size-20 row-span-2 bg-primary-700 rounded-br-3xl z-10">
          <img
            src="../../horse_cropped.jpg"
            alt="Picture of a horse's head"
            className="rounded-[35%] size-16 m-1.5"
          />
        </div>
        <span className="col-span-3 pt-2 text-center text-lg text-secondary font-semibold bg-primary-700 rounded-br-lg">
          Equestrian Club
        </span>
        <span className="col-span-3 mt-1 text-center text-lg font-bold">Captain</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          className="size-10 mt-2 ml-2 mb-1"
          fill="grey"
        >
          <path d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z" />
        </svg>
        <div className="col-span-2"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          className="absolute size-10 bottom-2 right-2"
          fill="crimson"
        >
          <path d="M224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L160 96C107 96 64 139 64 192L64 448C64 501 107 544 160 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480C142.3 480 128 465.7 128 448L128 192C128 174.3 142.3 160 160 160L224 160zM566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L438.6 169.3C426.1 156.8 405.8 156.8 393.3 169.3C380.8 181.8 380.8 202.1 393.3 214.6L466.7 288L256 288C238.3 288 224 302.3 224 320C224 337.7 238.3 352 256 352L466.7 352L393.3 425.4C380.8 437.9 380.8 458.2 393.3 470.7C405.8 483.2 426.1 483.2 438.6 470.7L566.6 342.7z" />
        </svg>
      </div>
    </div>
  );
}
