export default function ClubPageBanner({ name, slogan, banner }) {
  return (
    // Container div which maintains the size of the banner and is width of the screen
    <div className="flex relative w-full h-80 overflow-hidden relative shadow-xl border-b-2 border-primary">
      {/* SMU Husky Logo */}
      <div className="pt-3">
        <img src="/husky_logo_cropped.png" alt="SMU Huskies logo" className="h-40" />
      </div>

      {/* Horizontal polygon section with club name*/}
      <div className="flex absolute left-0 top-0 w-2/3 h-80 z-10">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="absolute w-full h-full"
        >
          <polygon points="100,0 90,0 70,100 80,100" fill="maroon" />
          <polygon points="90,0 20,0 10,100 70,100" fill="white" />
          <polygon points="30,0 20,0 0,100 10,100" fill="maroon" />
          <polygon points="0,60 -10,60 0,100 10,100" fill="#550000" />
        </svg>

        {/* Text block over white polygon */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-7xl font-bold text-primary">{name}</h1>
          <p className="text-lg text-gray-700">{slogan}</p>
        </div>
      </div>

      {/* Pretty image for the other half of the banner */}
      <div className="h-full right-0">
        <img
          src={banner}
          alt="Horses prancing on a grassy field"
          className="absolute h-[200%] -right-16 -top-10 object-cover"
        />
      </div>
    </div>
  );
}
