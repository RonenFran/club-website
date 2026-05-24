export default function ClubPageSiderbar() {
  return (
    <div className="relative flex w-48 h-16 px-4 rounded-md justify-center items-center justify-self-end bg-primary-600 text-secondary font-bold top-8 right-8">
      <span className="flex-1 text-center text-xl">Join Now</span>
      <svg viewBox="0 0 10 10" fill="white" className="size-12">
        <rect width="7" height="1.5" x="1.5" y="4.25" rx="0.5" />
        <rect width="1.5" height="7" x="4.25" y="1.5" ry="0.5" />
      </svg>
    </div>
  );
}
