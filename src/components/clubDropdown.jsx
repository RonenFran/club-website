import "./clubDropdown.css";
import { Link } from "react-router-dom";

const ClubDropdown = () => {
  return (
    <>
      <div className="clubDropdown">
        <Link to="TBA" className="clubItem">
         <img src="/horse_cropped.jpg" alt="Horse head" className="clubImage"/>
         <h4 className="clubTitle"></h4>
         <h6 clas></h6>
        </Link>
        <Link to="TBA" className="clubItem">
          <img src="/podium.jpg" alt="Podium" className="clubImage" />
          <h4 className="clubTitle"></h4>
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