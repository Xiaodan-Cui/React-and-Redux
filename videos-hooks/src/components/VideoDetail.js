import React from "react";

const VideoDetail = ({ video }) => {
  if (video != null) {
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
      <div>
        <div className="ui embed">
          <iframe title="video player" src={videoSrc} />
        </div>
        <div className="ui segment">
          <h4 className="ui header">{video.snippet.title}</h4>
          <div className="description">{video.snippet.description}</div>
        </div>
      </div>
    );
  } else {
    return <div>loading </div>;
  }
};

export default VideoDetail;
