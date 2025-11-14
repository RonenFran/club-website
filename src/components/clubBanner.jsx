const ClubBanner = () => {
  return (
    // Container div which maintains the size of the banner and is width of the screen
    <div className="flex relative w-full h-80">
      {/* SVG or other background that allows club name to be nicely visible upon it*/}
      <svg viewBox="0 0 200 100" className="z-20 w-2/3 h-80 absolute">
        <polygon points="220,0 200,0 150,100 170,100" fill="maroon"/>
        <polygon points="200,0 -40,0 -70,100 150,100" fill="white"/>
        <polygon points="-115,100 -95,100 -35,0 -55,0" fill="maroon"/>
      </svg>
      
      {/* Pretty image for the other half of the banner */}
      <img src="./public/club_banners/equestrian4.avif" alt="Horses prancing on a grassy field" className="z-10 w-2/3 h-full xl:ml-[50%] 2xl:ml-[45%] object-cover xl: 2xl:object-[center_25%]"/>

    </div>
  );
};

export default ClubBanner;