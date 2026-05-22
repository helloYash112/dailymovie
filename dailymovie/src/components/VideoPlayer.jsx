import React from "react";
import { Plyr } from "plyr-react";
import "plyr-react/plyr.css";

const VideoPlayer = ({ title, movieUrl, posterUrl }) => {
  const videoOptions = {
    type: "video",
    sources: [
      {
        src: movieUrl,
        provider: "html5",
      },
    ],
    poster: posterUrl,
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-900 text-white rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="w-full rounded-lg overflow-hidden">
        <Plyr source={videoOptions} />
      </div>
    </div>
  );
};

export default VideoPlayer;

