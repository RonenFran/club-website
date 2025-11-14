const ClubOptionSelector = () => {
  return (
    <div className="flex flex-col -ml-16 gap-1">
      <button className="border-2 border-primary rounded-sm text-start text-white bg-primary">All</button>
      <button className="border-2 border-primary rounded-sm text-start text-white bg-primary">Societies</button>
      <button className="border-2 border-primary rounded-sm text-start text-white bg-primary">Sports</button>
      <button className="border-2 border-primary rounded-sm text-start text-white bg-primary">E-Sports</button>
      <button className="border-2 border-primary rounded-sm text-start text-white bg-primary">Teams</button>
    </div>
  );
};

export default ClubOptionSelector;