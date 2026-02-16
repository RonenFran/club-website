import { List } from "react-window";
import PostCard from "./postCard";

function RowComponent({ index, posts, style }) {
  const post = posts[index];

  return (
    <div style={style}>
      <PostCard post={post} />
    </div>
  );
}

export default function HomeFeed({ posts }) {
  return (
    <List
      rowComponent={RowComponent}
      rowCount={posts.length}
      rowHeight={50}
      rowProps={{ posts }}
    />
  );
}
