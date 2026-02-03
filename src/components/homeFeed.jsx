import { useMemo, useState } from "react";
import { List, useDynamicRowHeight } from "react-window";

function RowComponent({ index, listState, style }) {
  const isCollapsed = listState.isRowCollapsed(index);
  const text = listState.getText(index);

  return (
    <div
      className={cn("p-2 cursor-pointer", {
        "bg-white/10": index % 2 === 0,
        truncate: isCollapsed,
      })}
      onClick={() => listState.toggleRow(index)}
      style={style}
    >
      {index}: {text}
    </div>
  );
}

const HomeFeed = ({ posts }) => {
  const listState = useListState(posts);

  const rowHeight = useDynamicRowHeight({
    defaultRowHeight: 50,
  });

  return (
    <List
      rowComponent={RowComponent}
      rowCount={posts.length}
      rowHeight={rowHeight}
      rowProps={{ listState }}
    />
  );
};

export default HomeFeed;
