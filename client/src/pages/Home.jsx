import UpcomingEvents from "../components/upcomingEvents";
import HomeFeed from "../components/homeFeed";

function Home() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {/* Left side tab */}
      <>
        {/* Events component */}
        <UpcomingEvents />
      </>
      {/* Middle/Right tab */}
      <>
        {/* Welcome/new member component */}

        {/* Popular clubs / news */}

        {/* Your feed */}
        <HomeFeed
          posts={[
            {
              id: "1",
              type: "clubPost",
              author: "John Smith",
              text: "Lorem ipsum...",
            },
            {
              id: "2",
              type: "clubPost",
              author: "Jane Doe",
              text: "Another post...",
            },
            {
              type: "clubPost",
            },
          ]}
        />
      </>
    </div>
  );
}

export default Home;
