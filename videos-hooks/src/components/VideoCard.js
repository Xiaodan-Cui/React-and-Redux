import React from "react";
import "./VideoCard.css";

class VideoCard extends React.Component {
  render() {
    return (
      <div
        className="video-item item"
        onClick={() => this.props.onVideoSelect(this.props.video)}
      >
        <div className="image">
          <img
            alt={this.props.video.snippet.title}
            className="image"
            src={this.props.video.snippet.thumbnails.medium.url}
          />
        </div>
        <div className="content">
          <p className="header">{this.props.video.snippet.title} </p>
        </div>
      </div>
    );
  }
}

export default VideoCard;
