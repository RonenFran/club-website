import { List } from "react-window";

const items = Array.from({ length: 1000 }, (_, index) => `Item ${index + 1}`);
const Row = ({ index, style }) => (
  <div style={{ ...style, padding: "10px", borderBottom: "1px solid #ccc" }}>
    {items[index]}
  </div>
);
const HomeFeed = () => {
  return (
    <List
      height={400} // Height of the viewport
      itemCount={items.length} // Total number of items
      itemSize={35} // Height of each item
      width={"100%"} // Width of the list
    >
      {Row}
    </List>
  );
};

export default HomeFeed;
