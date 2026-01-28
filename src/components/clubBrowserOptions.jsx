const ClubBrowserOptions = () => {
  return (
    <ul className="flex flex-col -ml-16 gap-0.5 w-36">
      <li className="pl-2 border-2 border-s-0 border-e-4 border-primary w-44 rounded-e-lg text-start text-lg text-primary bg-secondary">
        (23) All
      </li>
      <li className="pl-2 border-2 border-primary rounded-e-lg text-start text-lg text-white bg-primary">
        (11) Societies
      </li>
      <li className="pl-2 border-2 border-primary rounded-e-lg text-start text-lg text-white bg-primary">
        (9) Sports
      </li>
      <li className="pl-2 border-2 border-primary rounded-e-lg text-start text-lg text-white bg-primary">
        (4) E-Sports
      </li>
      <li className="pl-2 border-2 border-primary rounded-e-lg text-start text-lg text-white bg-primary">
        (15) Teams
      </li>
    </ul>
  );
};

export default ClubBrowserOptions;
