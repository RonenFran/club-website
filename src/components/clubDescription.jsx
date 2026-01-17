const ClubDescription = () => {
  return (
    <div className="z-20 flex-col justify-items-center py-5 px-10 bg-oak w-[25vw] shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.6)] h-[125vh] rounded-lg">
      <img
        src="/horse_cropped.jpg"
        alt="Horse head"
        className="size-72 border-2 border-primary rounded-[50%] mb-10"
      />

      <div className="text-primary-600 font-bold">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. <br />
        <br />
        Captain/Leader: John Smith <br />
        <br />
        43 Members <br />
        <br />
        Enrollment: Open/Tryouts/Membership <br />
        <br />
        Contacts: <br />
        Equestrian.club@smu.ca <br />
        @EquestriansSMU (instagram) <br />
        @EquestriansSMU (Facebook) <br />
        @EquestriansSMU (X) <br />
      </div>
    </div>
  );
};

export default ClubDescription;
