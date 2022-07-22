import React from "react";
import Masonry from "react-masonry-css";
import Pins from "../container/Pins";
import Pin from "./Pin";

const breakpointobj = {
  default: 4,
  3000: 6,
  2000: 5,
  1200: 3,
  1000: 2,
  500: 1,
};

const MasonryLayout = ({ pins }) => {
  return (
    <Masonry className="flex animate-slide-fwd" breakpointCols={breakpointobj}>
      {pins?.map((pin) => (
        <Pin key={Pin._id} pin={pin} className="w-max" />
      ))}
    </Masonry>
  );
};

export default MasonryLayout;
