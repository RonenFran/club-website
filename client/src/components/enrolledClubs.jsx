import { useEffect, useState } from "react";
import axios from "axios";

export default function EnrolledClubs() {
  const [clubs, setClubs] = useState([]);

  return (
    <div className="border-4 border-primary rounded-lg h-full w-72 bg-red-100">
      {/* {clubs.map(())} */}
      <div className="grid grid-cols-3">
        <img
          src="../../horse_cropped.jpg"
          alt="Picture of a horse's head"
          className="rounded-[50%] size-16 border-2 border-primary m-2"
        />
        <span className="col-span-2 bg-green-200">Club Name</span>
      </div>
    </div>
  );
}
