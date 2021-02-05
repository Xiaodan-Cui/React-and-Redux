import React from "react";
import Modal from "../Modal";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import history from "../../history";

import { fetchStream, deleteStream } from "../../actions";

//this.props.fetchStream(this.props.match.params.id);

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions = () => {
    return (
      <React.Fragment>
        <button
          className="ui red button"
          onClick={() => this.props.deleteStream(this.props.match.params.id)}
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  };

  renderContent = () => {
    if (!this.props.stream) {
      return "Are your sure you want to delete this stream?";
    }
    return `Are your sure you want to delete this stream with title: ${this.props.stream.title}?`;
  };
  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}
const mapSateToProps = (state, props) => {
  return { stream: state.streams[props.match.params.id] };
};
export default connect(mapSateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
