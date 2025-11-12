import "./clubDropdown.css";
import { Link } from "react-router-dom";

const ClubDropdown = () => {
  return (
    <>
      <div className="clubDropdown">
        <Link to="TBA" className="">
          <div className="grid grid-cols-2">
            <img src="/horse_cropped.jpg" alt="Horse head" className="size-20"/>
            <a href="#" class="block font-semibold text-gray-900">
                    Equestrian Society
                    <span class="absolute inset-0"></span>
            </a>
            <p class="mt-1 text-gray-600">Get a better understanding of your traffic</p>
          </div>
        </Link>
        <Link to="TBA" className="clubItem">
        <a href=""></a>
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