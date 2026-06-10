import EventItem from "./eventItem";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { useState, useRef } from "react";

export default function EventRow({ events }) {
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const scrollRef = useRef(null);

  const handleScroll = (direction, amount) => {
    if (direction === "right") {
      scrollRef.current.scrollBy({ left: scrollRef.current.clientWidth, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: -2000, behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        className="flex gap-4 px-8 overflow-x-auto scrollbar-none"
        ref={scrollRef}
        onScroll={() => {
          const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
          setAtStart(scrollLeft === 0);
          setAtEnd(scrollLeft + clientWidth >= scrollWidth);
        }}
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        {Array.from({ length: 30 }, (_, i) => (
          <EventItem key={i} />
        ))}
        {showControls && (
          <>
            {!atStart && (
              <div
                className="absolute flex items-center left-0 h-60 w-24 bg-secondary/50 rounded-r-4xl hover:bg-secondary/90 hover:text-primary hover:cursor-pointer"
                onClick={() => handleScroll("left")}
              >
                <MdKeyboardArrowLeft className="size-24 text-primary/70" />
              </div>
            )}
            {!atEnd && (
              <div
                className="absolute flex items-center right-0 h-60 w-24 bg-secondary/50 rounded-l-4xl hover:bg-secondary/90 hover:text-primary hover:cursor-pointer"
                onClick={() => handleScroll("right")}
              >
                <MdKeyboardArrowRight className="size-24 text-primary/70" />
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
