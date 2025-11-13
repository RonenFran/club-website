import { Link } from "react-router-dom";

const ClubDropdown = () => {
  return (
    <>
      <div className="flex flex-col m-16 p-8 border-4 rounded-lg border-solid border-primary">
        <Link to="TBA" className="">
          <div className="flex flex-row gap-6 p-2 border-2 border-primary rounded-md">
            <img src="/horse_cropped.jpg" alt="Horse head" className="size-20"/>
            <div className="flex-9">
              <span class="font-semibold text-primary font">Equestrian Society</span>
              <span class="mt-1 text-gray-600">Members</span>
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