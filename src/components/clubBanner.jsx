const ClubBanner = () => {
  return (
    // Container div which maintains the size of the banner and is width of the screen
    <div className="flex relative w-full h-80 overflow-hidden">

      {/* SMU Husky Logo */}
      <div className="z-10 pt-3">
        <img src="./husky_logo_cropped.jpg" alt="SMU Huskies logo" className="h-40"/>
      </div>

      {/* SVG or other background that allows club name to be nicely visible upon it*/}
      <div className="absolute left-0 top-0 w-[66%] h-80">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute w-full h-full z-20">
          <polygon points="100,0 90,0 70,100 80,100" fill="maroon"/>
          <polygon points="90,0 20,0 10,100 70,100" fill="white"/>
          <polygon points="30,0 20,0 0,100 10,100" fill="maroon"/>
          <polygon points="0,60 -10,60 0,100 10,100" fill="#550000"/>
        </svg>
      </div>

      
      {/* Pretty image for the other half of the banner */}
      <div className="h-full right-0">
        <img src="./club_banners/equestrian4.avif" alt="Horses prancing on a grassy field" className="absolute h-[200%] -right-56 -top-10"/>
      </div>
    </div>
  );
};

export default ClubBanner;