import EventItem from "./eventItem";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { useState, useRef } from "react";

export default function EventRow({ eventList }) {
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const scrollRef = useRef(null);
  const isScrolling = useRef(false);

  const handleScroll = (direction) => {
    // Ensure only one scroll can occur at one time
    if (isScrolling.current) return;

    isScrolling.current = true;
    const container = scrollRef.current;
    const itemWidth = container.querySelector(".event-item").getBoundingClientRect().width + 16;
    const itemsPerPage = Math.floor(container.clientWidth / itemWidth);
    container.scrollBy({ left: direction * itemsPerPage * itemWidth, behavior: "smooth" });

    setTimeout(() => {
      isScrolling.current = false;
    }, 700);
  };

  return (
    <>
      <ul
        className="@container flex w-full gap-4 px-12 overflow-x-auto scrollbar-none"
        ref={scrollRef}
        onScroll={() => {
          const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
          setAtStart(scrollLeft === 0);
          setAtEnd(scrollLeft + clientWidth >= scrollWidth);
        }}
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        {Array.from({ length: 100 }, (_, i) => (
          <EventItem key={i} />
        ))}
        {showControls && (
          <>
            {!atStart && (
              <div
                className="absolute flex items-center left-0 h-60 w-24 bg-secondary/50 rounded-r-4xl hover:bg-secondary/90 hover:text-primary hover:cursor-pointer"
                onClick={() => handleScroll(-1)}
              >
                <MdKeyboardArrowLeft className="size-24 text-primary/70" />
              </div>
            )}
            {!atEnd && (
              <div
                className="absolute flex items-center right-0 h-60 w-24 bg-secondary/50 rounded-l-4xl hover:bg-secondary/90 hover:text-primary hover:cursor-pointer"
                onClick={() => handleScroll(1)}
              >
                <MdKeyboardArrowRight className="size-24 text-primary/70" />
              </div>
            )}
          </>
        )}
      </ul>
    </>
  );
}
