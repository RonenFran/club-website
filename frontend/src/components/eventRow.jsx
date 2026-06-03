import EventItem from "./eventItem";

export default function EventRow({ events }) {
  return (
    <div className="flex gap-2 mx-8 overflow-x-auto">
      {Array.from({ length: 10 }, (_, i) => (
        <EventItem key={i} />
      ))}
    </div>
  );
}
