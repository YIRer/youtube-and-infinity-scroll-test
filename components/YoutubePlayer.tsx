import React from "react";
import Player from "react-youtube";

const YoutubePlayer = () => {
  return (
    <Player
      videoId={"8S-mfZ0xA8I"}
      opts={{
        height: "540",
        width: "100%",
      }}
    />
  );
};

export default YoutubePlayer;
