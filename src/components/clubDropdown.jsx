import { Link } from "react-router-dom";

const ClubDropdown = () => {
  return (
    <>
      <div className="flex flex-col m-16 p-8 border-4 rounded-lg border-solid border-primary">
        <Link to="TBA" className="">
          <div className="flex flex-row gap-6 p-2 border-2 border-primary rounded-md">
            <img src="/horse_cropped.jpg" alt="Horse head" className="size-20"/>
            <div className="flex flex-col gap-2 p-1">
              <span class="font-semibold text-primary text-xl">Equestrian Society</span>
              <div class="flex items-center mt-1 text-gray-600">
                <svg viewBox="0 0 5 5" fill="currentColor" aria-hidden="true" className="size-4 mr-1">
                  <circle r="1" cx="2.5" cy="1.5"/>
                  <circle r="1.5" cx="2.5" cy="4.5"/>
                </svg>
                22 Members
              </div>
            </div>
          </div>
        </Link>
        <Link to="TBA" className="clubItem">
          <img src="/podium.jpg" alt="Podium" className="clubImage" />
        </Link>
        <Link to="TBA" className="clubItem">
          <img src="/league_cropped.jpg" alt="league" className="clubImage" />
          <h4 className="clubTitle"></h4>
        </Link>
        <Link to="TBA" className="clubItem">
          <img src="/chess_cropped.png" alt="Chess" className="clubImage" />
          <h4 className="clubTitle"></h4>
        </Link>
      </div>
    </>
  );
};

export default ClubDropdown;