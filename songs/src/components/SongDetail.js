import React from "react";
import { connect } from "react-redux";

const SongDetail = (props) => {
  if (props.selectedSong != null) {
    return (
      <div>
        <div>{props.selectedSong.title}</div>;
        <div>{props.selectedSong.during}</div>
      </div>
    );
  }
  return <div>SongDetail</div>;
};
const mapStateToProps = (state) => {
  return { selectedSong: state.selectedSong };
};
export default connect(mapStateToProps)(SongDetail);
