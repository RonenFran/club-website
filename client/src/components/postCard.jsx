export default function PostCard({ post }) {
  switch (post.type) {
    case "clubPost":
      return (
        <div className="flex mx-8 mt-4 p-2 pr-6 pb-4 bg-primary-200">
          <img
            src="/unknown_person.jpg"
            alt="Default profile picture"
            className="size-12 rounded-3xl mx-2"
          />
          <div className="flex flex-col">
            <span className="text-primary font-bold">John Smith</span>
            <div className="text-primary-800">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
        </div>
      );
      break;
    default:
  }
}
