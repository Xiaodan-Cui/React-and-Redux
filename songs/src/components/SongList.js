import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";
class SongList extends React.Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div>{song.title}</div>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
        </div>
      );
    });
  }
  render() {
    return <div className="ui devided list">{this.renderList()}</div>;
  }
}
const mapStateToProps = (state) => {
  return { songs: state.songs };
};
export default connect(mapStateToProps, { selectSong })(SongList);
