import React from "react";
import VideoCard from "./VideoCard";

class VideoList extends React.Component {
  render() {
    const videos = this.props.videos.map((video) => {
      return (
        <VideoCard
          key={video.id.videoId}
          video={video}
          onVideoSelect={this.props.onVideoSelect}
        />
      );
    });
    return <div className="ui items">{videos}</div>;
  }
}

export default VideoList;
