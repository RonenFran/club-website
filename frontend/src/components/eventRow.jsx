import EventItem from "./eventItem";

export default function EventRow({ events }) {
  return (
    <>
      <div className="flex gap-4 overflow-x-auto">
        {Array.from({ length: 10 }, (_, i) => (
          <EventItem key={i} />
        ))}
      </div>
    </>
  );
}
