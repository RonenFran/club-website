const UpcomingEvents = () => {
  return (
    <div className="relative top-16 left-16 w-[25vw] h-[50vh] border-2 border-primary rounded-md bg-secondary">
      {/* Header */}
      <h2 className="bg-primary pt-1 h-12 text-2xl font-bold text-secondary text-center">
        Upcoming Events
      </h2>

      {/* Some Events */}
      <div className="flex">
        <div className="flex w-full h-20 m-2 border-2 rounded-md">
          {/* Date */}
          <div className="flex-2">
            <time className="text-2xl font-semibold">Jan 25th</time>
          </div>

          {/* Description */}
          <div className="flex-5">
            <h3>SMUSA Wonderland</h3>
            <h4>SMUSA</h4>
            <span>Social</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
