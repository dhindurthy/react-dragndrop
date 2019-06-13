import React from "react";
import "./styles.scss";
class Draganddrop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        className="main-box"
        onDrop={this.props.onDrop}
        onDragOver={this.props.onDragOver}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Draganddrop;
