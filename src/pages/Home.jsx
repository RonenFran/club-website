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
        <HomeFeed posts={["Post 1", "Post 2", "Post 3", "Post 4"]} />
      </>
    </div>
  );
}

export default Home;
